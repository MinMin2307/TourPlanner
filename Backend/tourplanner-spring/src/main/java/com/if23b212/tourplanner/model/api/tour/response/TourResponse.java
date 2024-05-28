package com.if23b212.tourplanner.model.api.tour.response;


import com.if23b212.tourplanner.model.api.EntityResponse;
import com.if23b212.tourplanner.model.tour.Tour;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
public class TourResponse extends EntityResponse {

    private Long id;
    private String name;
    private String description;
    private String from;
    private String to;
    private String type;
    private double distance;
    private double estimatedTime;
    private Resource routeImage;

    public TourResponse(HttpStatus status, String message, Tour tour, Resource routeImage) {
        super(status, message);
        this.id = tour.getId();
        this.name = tour.getName();
        this.description = tour.getDescription();
        this.from = tour.getFrom();
        this.to = tour.getTo();
        this.type = tour.getType().name();
        this.distance = tour.getDistance();
        this.estimatedTime = tour.getEstimatedTime();
        this.routeImage = routeImage;
    }

    public TourResponse(HttpStatus status, String message) {
        super(status, message);
    }
}
