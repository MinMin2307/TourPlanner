package com.if23b212.tourplanner.controller.tour;

import com.if23b212.tourplanner.model.api.tour.request.CreateTourRequest;
import com.if23b212.tourplanner.model.api.tour.request.DeleteTourRequest;
import com.if23b212.tourplanner.model.api.tour.request.GetTourRequest;
import com.if23b212.tourplanner.model.api.tour.request.UpdateTourRequest;
import com.if23b212.tourplanner.model.api.tour.response.TourResponse;
import com.if23b212.tourplanner.service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/tour")
public class TourController {

    private final TourService tourService;

    @Autowired
    public TourController(TourService tourService) {
        this.tourService = tourService;
    }

    @PostMapping("/create")
    public ResponseEntity<TourResponse> createTour(@RequestBody CreateTourRequest request) {
        try {
            TourResponse response = tourService.create(request);
            return new ResponseEntity<>(response, response.getStatus());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @GetMapping("/get/{id}")
    public ResponseEntity<TourResponse> getTour(@PathVariable Long id) {
        try {
            GetTourRequest request = new GetTourRequest(id);
            TourResponse response = tourService.read(request);
            return new ResponseEntity<>(response, response.getStatus());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<TourResponse> updateTour(@PathVariable Long id,
                                                   @RequestBody UpdateTourRequest request) {
        try {
            request.setId(id);
            TourResponse response = tourService.update(request);
            return new ResponseEntity<>(response, response.getStatus());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<TourResponse> deleteTour(@PathVariable Long id) {
        try {
            DeleteTourRequest request = new DeleteTourRequest(id);
            TourResponse response = tourService.delete(request);
            return new ResponseEntity<>(response, response.getStatus());
        } catch (Exception e) {
            return ResponseEntity.internalServerError().build();
        }
    }
}
