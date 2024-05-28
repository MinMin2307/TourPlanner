package com.if23b212.tourplanner.service;

import com.if23b212.tourplanner.exception.WrongRequestTypeException;
import com.if23b212.tourplanner.model.api.EntityRequest;
import com.if23b212.tourplanner.model.api.EntityResponse;
import com.if23b212.tourplanner.model.api.tour.request.CreateTourRequest;
import com.if23b212.tourplanner.model.api.tour.request.DeleteTourRequest;
import com.if23b212.tourplanner.model.api.tour.request.GetTourRequest;
import com.if23b212.tourplanner.model.api.tour.request.UpdateTourRequest;
import com.if23b212.tourplanner.model.api.tour.response.TourListEntry;
import com.if23b212.tourplanner.model.api.tour.response.TourListResponse;
import com.if23b212.tourplanner.model.api.tour.response.TourResponse;
import com.if23b212.tourplanner.model.tour.Tour;
import com.if23b212.tourplanner.repo.TourRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.ArrayList;
import java.util.List;

@Service
public class TourService implements CrudService<EntityResponse, EntityRequest> {

    private final String CREATED_SUCCESSFULLY = "Tour was created successfully";
    private final String LOADED_SUCCESSFULLY = "Tour was loaded successfully";
    private final String LIST_LOADED_SUCCESSFULLY = "Tourlist was loaded successfully";
    private final String UPDATED_SUCCESSFULLY = "Tour was updated successfully";
    private final String DELETED_SUCCESSFULLY = "Tour was deleted successfully";



    @Autowired
    TourRepo repo;

    @Autowired
    ImageService imageService;

    @Autowired
    RouteService routeService;

    @Override
    public TourResponse create(EntityRequest createRequest) throws Exception {
        if(createRequest instanceof CreateTourRequest data) {
            Tour tour = new Tour(
                    data.getName(),
                    data.getDescription(),
                    data.getFrom(),
                    data.getTo(),
                    data.getType(),
                    0.0,
                    0.0,
                    null,
                    new ArrayList<>());
            routeService.setRouteValues(tour);
            tour = repo.save(tour);
            //String imagePath = imageService.storeImage(tour.getId(), data.getRouteImage());
           // tour.setRouteImagePath(imagePath);
           // tour = repo.save(tour);
            return new TourResponse(HttpStatus.CREATED, CREATED_SUCCESSFULLY, tour, null);
        } else {
            return new TourResponse(HttpStatus.INTERNAL_SERVER_ERROR, new WrongRequestTypeException().getMessage());
        }
    }

    @Override
    public TourResponse read(EntityRequest readRequest) throws Exception {
        if(readRequest instanceof GetTourRequest data) {

           if(repo.existsById(data.getId())) {
                   Tour tour = repo.findById(data.getId()).orElse(null);
               return new TourResponse(HttpStatus.OK, LOADED_SUCCESSFULLY, tour, null);
           }
        } else {
            return new TourResponse(HttpStatus.INTERNAL_SERVER_ERROR, new WrongRequestTypeException().getMessage());
        }
        return new TourResponse(HttpStatus.INTERNAL_SERVER_ERROR, "UNKNOWN ERROR");
    }

    @Override
    public TourResponse update(EntityRequest updateRequest) throws Exception {
        if(updateRequest instanceof UpdateTourRequest data) {
            if(repo.existsById(data.getId())){
                Tour tour = repo.findById(data.getId()).orElseGet(null);
                tour.setName(data.getName());
                tour.setDescription(data.getDescription());
                tour.setFrom(data.getFrom());
                tour.setTo(data.getTo());
                tour.setType(data.getType());
                tour.setDistance(data.getDistance());
                tour.setEstimatedTime(data.getEstimatedTime());
                tour = repo.save(tour);
                return new TourResponse(HttpStatus.OK, UPDATED_SUCCESSFULLY, tour, null);
            }
        } else {
            return new TourResponse(HttpStatus.INTERNAL_SERVER_ERROR, new WrongRequestTypeException().getMessage());
        }
        return new TourResponse(HttpStatus.INTERNAL_SERVER_ERROR, "UNKNOWN ERROR");
    }

    @Override
    public TourResponse delete(EntityRequest deleteRequest) throws Exception {
        if(deleteRequest instanceof DeleteTourRequest data) {
            if(repo.existsById(data.getId())){
                repo.deleteById(data.getId());
                return new TourResponse(HttpStatus.OK, DELETED_SUCCESSFULLY);
            }
        } else {
            return new TourResponse(HttpStatus.INTERNAL_SERVER_ERROR, new WrongRequestTypeException().getMessage());
        }
        return new TourResponse(HttpStatus.INTERNAL_SERVER_ERROR, "UNKNOWN ERROR");
    }


    public TourListResponse getAllTours() {
        List<Tour> tours = repo.findAll();

        return new TourListResponse(HttpStatus.OK, LIST_LOADED_SUCCESSFULLY, tours.stream().map(t -> new TourListEntry(t.getId(), t.getName())).toList());
    }
}
