package com.if23b212.tourplanner.repo;

import com.if23b212.tourplanner.model.tourlog.TourLog;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TourLogRepo extends JpaRepository<TourLog, Long> {
}
