package com.if23b212.tourplanner.service;

import com.if23b212.tourplanner.model.api.EntityRequest;
import com.if23b212.tourplanner.model.tourlog.TourLog;
import com.if23b212.tourplanner.repo.TourLogRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TourLogService implements CrudService<TourLog, EntityRequest> {
    @Autowired
    TourLogRepo repo;


    @Override
    public TourLog create(EntityRequest createRequest) throws Exception {
        return null;
    }

    @Override
    public TourLog read(EntityRequest readRequest) throws Exception {
        return null;
    }

    @Override
    public TourLog update(EntityRequest updateRequest) throws Exception {
        return null;
    }

    @Override
    public void delete(EntityRequest deleteRequest) throws Exception {

    }
}
