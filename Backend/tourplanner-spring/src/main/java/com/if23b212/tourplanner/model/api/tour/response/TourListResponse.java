package com.if23b212.tourplanner.model.api.tour.response;

import com.if23b212.tourplanner.model.api.EntityResponse;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class TourListResponse extends EntityResponse {
    List<TourListEntry> tourList;
    public TourListResponse(HttpStatus status, String message) {
        super(status, message);
        this.tourList = new ArrayList<>();
    }

    public TourListResponse(HttpStatus status, String message, List<TourListEntry> tourList) {
        super(status, message);
        this.tourList = tourList;
    }


}
