package com.if23b212.tourplanner.model.api.tour.request;

import com.if23b212.tourplanner.model.api.EntityRequest;
import com.if23b212.tourplanner.model.tour.TransportType;
import jakarta.persistence.Column;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class CreateTourRequest extends EntityRequest {
    private String name;
    private String description;
    private String from;
    private String to;
    private TransportType type;
    private double distance;
    private double estimatedTime;
    private MultipartFile routeImage;
}
