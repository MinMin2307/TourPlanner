package com.if23b212.tourplanner.model.api.tourlog.response;

import com.if23b212.tourplanner.model.tourlog.TourLog;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
public class TourLogListEntry {
    private Long id;
    private LocalDateTime createdAt;
    private String comment;
    private int difficulty;
    private double totalDistance;
    private double totalTime;
    private int rating;

    public static TourLogListEntry fromTourLog(TourLog tourLog) {
        return new TourLogListEntry(tourLog.getId(),
                tourLog.getCreatedAt(),
                tourLog.getComment(),
                tourLog.getDifficulty(),
                tourLog.getTotalDistance(),
                tourLog.getTotalTime(),
                tourLog.getRating());
    }
}
