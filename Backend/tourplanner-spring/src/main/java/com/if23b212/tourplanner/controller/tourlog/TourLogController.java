package com.if23b212.tourplanner.controller.tourlog;

import com.if23b212.tourplanner.model.api.tour.request.GetTourLogsByTourRequest;
import com.if23b212.tourplanner.model.api.tourlog.request.CreateTourLogRequest;
import com.if23b212.tourplanner.model.api.tourlog.request.DeleteTourLogRequest;
import com.if23b212.tourplanner.model.api.tourlog.request.GetTourLogRequest;
import com.if23b212.tourplanner.model.api.tourlog.request.UpdateTourLogRequest;
import com.if23b212.tourplanner.model.api.tourlog.response.TourLogListResponse;
import com.if23b212.tourplanner.model.api.tourlog.response.TourLogResponse;
import com.if23b212.tourplanner.service.TourLogService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/tourlog")
public class TourLogController {

    private final TourLogService tourLogService;

    @Autowired
    public TourLogController(TourLogService tourLogService) {
        this.tourLogService = tourLogService;
    }

    @PostMapping("/create")
    public ResponseEntity<TourLogResponse> createTourLog(@ModelAttribute CreateTourLogRequest request) {
        try {
            TourLogResponse response = tourLogService.create(request);
            return new ResponseEntity<>(response, response.getStatus());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<TourLogResponse> getTourLog(@PathVariable Long id) {
        try {
            GetTourLogRequest request = new GetTourLogRequest(id);
            TourLogResponse response = tourLogService.read(request);
            return new ResponseEntity<>(response, response.getStatus());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/get/tour/{id}")
    public ResponseEntity<TourLogListResponse> getAllTourLogsByTour(@PathVariable Long id) {
        try {
            GetTourLogsByTourRequest request = new GetTourLogsByTourRequest(id);
            TourLogListResponse response = tourLogService.getAllTourLogsByTour(request);
            return new ResponseEntity<>(response, response.getStatus());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<TourLogResponse> updateTourLog(@PathVariable Long id, @ModelAttribute UpdateTourLogRequest request) {
        try {
            request.setId(id); // Ensure the ID from the path variable is correctly set in the request
            TourLogResponse response = tourLogService.update(request);
            return new ResponseEntity<>(response, response.getStatus());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<TourLogResponse> deleteTourLog(@PathVariable Long id) {
        try {
            DeleteTourLogRequest request = new DeleteTourLogRequest(id);
            TourLogResponse response = tourLogService.delete(request);
            return new ResponseEntity<>(response, response.getStatus());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}


