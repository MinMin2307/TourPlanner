package com.if23b212.tourplanner.model.api;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;
import org.springframework.http.HttpStatus;

@AllArgsConstructor
@Getter
@Setter
public abstract class EntityResponse {
    private HttpStatus status;
    private String message;
}
