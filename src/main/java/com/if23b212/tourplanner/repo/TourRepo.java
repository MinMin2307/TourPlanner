package com.if23b212.tourplanner.repo;

import com.if23b212.tourplanner.model.tour.Tour;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TourRepo extends JpaRepository<Tour, Long> {

}
