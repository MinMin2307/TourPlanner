package com.if23b212.tourplanner.service;

import com.if23b212.tourplanner.model.api.EntityRequest;
import com.if23b212.tourplanner.model.api.EntityResponse;

public interface CrudService<T extends EntityResponse, S extends EntityRequest> {

    public T create(S createRequest) throws Exception;
    public T read(S readRequest) throws Exception;
    public T update(S updateRequest) throws Exception;
    public T delete(S deleteRequest) throws Exception;
}
