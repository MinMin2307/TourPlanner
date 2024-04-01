package com.if23b212.tourplanner.model.api.tourlog;

import com.if23b212.tourplanner.model.api.EntityRequest;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class DeleteTourLogRequest extends EntityRequest {

    private Long id;
}
