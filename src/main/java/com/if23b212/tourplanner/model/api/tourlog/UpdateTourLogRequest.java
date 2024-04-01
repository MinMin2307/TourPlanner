package com.if23b212.tourplanner.model.api.tourlog;

import com.if23b212.tourplanner.model.api.EntityRequest;
import com.if23b212.tourplanner.model.tour.Tour;
import com.if23b212.tourplanner.model.tour.TransportType;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UpdateTourLogRequest extends EntityRequest {
    private Long id;
    private Tour tour;
    private LocalDateTime create;
    private String comment;
    private int difficulty;
    private double totalDistance;
    private double totalTime;
    private int rating;
}
