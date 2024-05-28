package com.if23b212.tourplanner.model.api.tourlog.response;


import com.if23b212.tourplanner.model.api.EntityResponse;
import com.if23b212.tourplanner.model.tour.Tour;
import com.if23b212.tourplanner.model.tourlog.TourLog;
import jakarta.persistence.Column;
import lombok.Getter;
import lombok.Setter;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpStatus;

import java.time.LocalDateTime;

@Getter
@Setter
public class TourLogResponse extends EntityResponse {

    private Long id;
    private LocalDateTime createdAt;
    private String comment;
    private int difficulty;
    private double totalDistance;
    private double totalTime;
    private int rating;

    public TourLogResponse(HttpStatus status, String message, TourLog tourLog) {
        super(status, message);
        this.id = tourLog.getId();
        this.createdAt = tourLog.getCreatedAt();
        this.comment = tourLog.getComment();
        this.difficulty = tourLog.getDifficulty();
        this.totalDistance = tourLog.getTotalDistance();
        this.totalTime = tourLog.getTotalTime();
        this.rating = tourLog.getRating();
    }

    public TourLogResponse(HttpStatus status, String message) {
        super(status, message);
    }
}
