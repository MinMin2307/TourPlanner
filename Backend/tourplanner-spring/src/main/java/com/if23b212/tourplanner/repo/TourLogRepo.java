package com.if23b212.tourplanner.repo;

import com.if23b212.tourplanner.model.tourlog.TourLog;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface TourLogRepo extends JpaRepository<TourLog, Long> {
    @Query(value = "SELECT * FROM tour_log WHERE tour_id = ?1", nativeQuery = true)
    List<TourLog> findByTourId(Long id);
}
