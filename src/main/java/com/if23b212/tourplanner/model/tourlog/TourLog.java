package com.if23b212.tourplanner.model.tourlog;

import com.if23b212.tourplanner.model.tour.Tour;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDateTime;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Entity
@Table(name = "tour_log")
public class TourLog {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //generiert automatisch eine ID falls beim persistieren
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    private Tour tour;

    @Column(nullable = false)
    private LocalDateTime createdAt;

    private String comment;

    @Column(nullable = false)
    private int difficulty;

    @Column(nullable = false)
    private double totalDistance;

    @Column(nullable = false)
    private double totalTime;

    @Column(nullable = false)
    private int rating;

    public TourLog(Tour tour, LocalDateTime createdAt, String comment, int difficulty, double totalDistance, double totalTime, int rating) {
        this.tour = tour;
        this.createdAt = createdAt;
        this.comment = comment;
        this.difficulty = difficulty;
        this.totalDistance = totalDistance;
        this.totalTime = totalTime;
        this.rating = rating;
    }
}
