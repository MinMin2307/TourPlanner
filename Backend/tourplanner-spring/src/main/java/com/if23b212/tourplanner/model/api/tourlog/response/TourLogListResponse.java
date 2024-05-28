package com.if23b212.tourplanner.model.api.tourlog.response;

import com.if23b212.tourplanner.model.api.EntityResponse;
import com.if23b212.tourplanner.model.api.tour.response.TourListEntry;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
public class TourLogListResponse extends EntityResponse {
    List<TourLogListEntry> tourLogList;
    public TourLogListResponse(HttpStatus status, String message) {
        super(status, message);
        this.tourLogList = new ArrayList<>();
    }

    public TourLogListResponse(HttpStatus status, String message, List<TourLogListEntry> tourLogList) {
        super(status, message);
        this.tourLogList = tourLogList;
    }


}
