package com.if23b212.tourplanner.service;

import com.google.gson.*;
import com.if23b212.tourplanner.model.route.Point;
import com.if23b212.tourplanner.model.tour.Tour;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.reactive.function.client.WebClient;

import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;

@Service
public class RouteService {

    @Value("${openrouteservice.api.key}")
    private String openRouteServiceApiKey;

    private final String OPEN_ROUTE_URL = "https://api.openrouteservice.org/v2/directions";
    public Point getGeoCodeFromAddress(String address) {
        WebClient webClient = WebClient.create();
        String encodedAddress = URLEncoder.encode(address, StandardCharsets.UTF_8);
        String uri = String.format("https://api.openrouteservice.org/geocode/search?api_key=%s&text=%s", openRouteServiceApiKey, encodedAddress);

        String response = webClient.get()
                .uri(uri)
                .retrieve()
                .bodyToMono(String.class)
                .block();

        Gson gson = new Gson();
        JsonObject jsonObject = JsonParser.parseString(response).getAsJsonObject();
        JsonArray features = jsonObject.getAsJsonArray("features");

        if (features != null) {
            for (JsonElement featureElement : features) {
                JsonObject feature = featureElement.getAsJsonObject();
                JsonObject geometry = feature.getAsJsonObject("geometry");
                JsonArray coordinates = geometry.getAsJsonArray("coordinates");

                if (coordinates != null && coordinates.size() >= 2) {
                    double longitude = coordinates.get(0).getAsDouble();
                    double latitude = coordinates.get(1).getAsDouble();
                    System.out.println("Longitude: " + longitude);
                    System.out.println("Latitude: " + latitude);
                    return new Point(latitude, longitude);
                }
            }
        }
        return null;
    }

    public void calculateRoute(Point start, Point end, Tour tour) {
       try {
           WebClient webClient = WebClient.create();
           String uri = String.format("https://api.openrouteservice.org/v2/directions/%s?api_key=%s&start=%s,%s&end=%s,%s",
                   tour.getType().getMapping(),openRouteServiceApiKey,
                   ""+start.getLon(), ""+start.getLat(), ""+end.getLon(), ""+end.getLat());

           String response = webClient.get()
                   .uri(uri)
                   .retrieve()
                   .bodyToMono(String.class)
                   .block();
           extractRoutData(response, tour);
       } catch (Exception e) {
           e.printStackTrace();
       }
    }

    public void extractRoutData(String json, Tour tour) {
        JsonElement element = JsonParser.parseString(json);
        JsonObject object = element.getAsJsonObject();

        JsonElement features = object.getAsJsonArray("features").get(0);
        JsonElement properties = features.getAsJsonObject().get("properties");
        JsonElement segments = properties.getAsJsonObject().getAsJsonArray("segments").get(0);

        double distance = segments.getAsJsonObject().get("distance").getAsDouble();
        double duration = segments.getAsJsonObject().get("duration").getAsDouble();

        tour.setDistance(distance);
        tour.setEstimatedTime(duration);
        System.out.println("Distance: " + distance + " meters");
        System.out.println("Duration: " + duration + " seconds");

    }

    public void setRouteValues(Tour tour) {
        Point start = getGeoCodeFromAddress(tour.getFrom());
        Point end = getGeoCodeFromAddress(tour.getTo());
        calculateRoute(start, end, tour);
    }
}
