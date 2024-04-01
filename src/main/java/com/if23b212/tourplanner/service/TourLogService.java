package com.if23b212.tourplanner.service;

import com.if23b212.tourplanner.exception.WrongRequestTypeException;
import com.if23b212.tourplanner.model.api.EntityRequest;
import com.if23b212.tourplanner.model.api.tour.request.CreateTourRequest;
import com.if23b212.tourplanner.model.api.tour.request.DeleteTourRequest;
import com.if23b212.tourplanner.model.api.tour.request.UpdateTourRequest;
import com.if23b212.tourplanner.model.api.tour.response.TourResponse;
import com.if23b212.tourplanner.model.api.tourlog.request.CreateTourLogRequest;
import com.if23b212.tourplanner.model.api.tourlog.request.DeleteTourLogRequest;
import com.if23b212.tourplanner.model.api.tourlog.request.GetTourLogRequest;
import com.if23b212.tourplanner.model.api.tourlog.request.UpdateTourLogRequest;
import com.if23b212.tourplanner.model.api.tourlog.response.TourLogResponse;
import com.if23b212.tourplanner.model.tour.Tour;
import com.if23b212.tourplanner.model.tourlog.TourLog;
import com.if23b212.tourplanner.repo.TourLogRepo;
import com.if23b212.tourplanner.repo.TourRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.ArrayList;

@Service
public class TourLogService implements CrudService<TourLogResponse, EntityRequest> {

    private final String CREATED_SUCCESSFULLY = "Tourlog was created successfully";
    private final String LOADED_SUCCESSFULLY = "Tourlog was loaded successfully";
    private final String UPDATED_SUCCESSFULLY = "Tourlog was updated successfully";
    private final String DELETED_SUCCESSFULLY = "Tourlog was deleted successfully";

    @Autowired
    TourLogRepo repo;

    @Autowired
    TourRepo tourRepo;

    @Override
    public TourLogResponse create(EntityRequest createRequest) throws Exception {
        if(createRequest instanceof CreateTourLogRequest data) {
            if(tourRepo.existsById(data.getTourId())) {
                Tour tour = tourRepo.findById(data.getTourId()).orElse(null);
                TourLog tourlog = new TourLog(
                        tour,
                        data.getCreatedAt(),
                        data.getComment(),
                        data.getDifficulty(),
                        data.getTotalDistance(),
                        data.getTotalTime(),
                        data.getRating()
                );
                tourlog = repo.save(tourlog);
                return new TourLogResponse(HttpStatus.CREATED, CREATED_SUCCESSFULLY, tourlog);

            }
        } else {
            return new TourLogResponse(HttpStatus.INTERNAL_SERVER_ERROR, new WrongRequestTypeException().getMessage());
        }
        return new TourLogResponse(HttpStatus.INTERNAL_SERVER_ERROR, "UNKNOWN ERROR");
    }

    @Override
    public TourLogResponse read(EntityRequest readRequest) throws Exception {
        if(readRequest instanceof GetTourLogRequest data) {
            if(repo.existsById(data.getId())) {
                TourLog tourlog = repo.findById(data.getId()).orElse(null);
                return new TourLogResponse(HttpStatus.OK, LOADED_SUCCESSFULLY, tourlog);
            }
        } else {
            return new TourLogResponse(HttpStatus.INTERNAL_SERVER_ERROR, new WrongRequestTypeException().getMessage());
        }
        return new TourLogResponse(HttpStatus.INTERNAL_SERVER_ERROR, "UNKNOWN ERROR");
    }

    @Override
    public TourLogResponse update(EntityRequest updateRequest) throws Exception {
        if(updateRequest instanceof UpdateTourLogRequest data) {
            if(repo.existsById(data.getId())){
                TourLog tourlog = repo.findById(data.getId()).orElseGet(null);
                tourlog.setComment(data.getComment());
                tourlog.setDifficulty(data.getDifficulty());
                tourlog.setTotalDistance(data.getTotalDistance());
                tourlog.setTotalTime(data.getTotalTime());
                tourlog.setRating(data.getRating());
                tourlog = repo.save(tourlog);
                return new TourLogResponse(HttpStatus.OK, UPDATED_SUCCESSFULLY, tourlog);
            }
        } else {
            return new TourLogResponse(HttpStatus.INTERNAL_SERVER_ERROR, new WrongRequestTypeException().getMessage());
        }
        return new TourLogResponse(HttpStatus.INTERNAL_SERVER_ERROR, "UNKNOWN ERROR");
    }

    @Override
    public TourLogResponse delete(EntityRequest deleteRequest) throws Exception {
        if(deleteRequest instanceof DeleteTourLogRequest data) {
            if(repo.existsById(data.getId())){
                repo.deleteById(data.getId());
                return new TourLogResponse(HttpStatus.OK, DELETED_SUCCESSFULLY);
            }
        } else {
            return new TourLogResponse(HttpStatus.INTERNAL_SERVER_ERROR, new WrongRequestTypeException().getMessage());
        }
        return new TourLogResponse(HttpStatus.INTERNAL_SERVER_ERROR, "UNKNOWN ERROR");
    }
}
