package com.if23b212.tourplanner.model.tour;

import com.if23b212.tourplanner.model.tourlog.TourLog;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@Builder
@Table(name = "tours")
@Entity
public class Tour {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //generiert automatisch eine ID falls beim persistieren
    private Long id;

    @Column(nullable = false)
    private String name;
    @Column(length = 500)
    private String description;
    @Column(nullable = false, name = "from_")
    private String from;
    @Column(nullable = false, name ="to_")
    private String to;
    @Column(nullable = false)
    @Enumerated(EnumType.STRING) //Enum wird als String gespeichert in der Datenbank
    private TransportType type;

    private double distance;

    private double estimatedTime;

    private String routeImagePath;

    @OneToMany(mappedBy = "tour", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<TourLog> logs;

    public Tour(String name, String description, String from, String to, TransportType type, double distance, double estimatedTime, String routeImagePath, List<TourLog> logs) {
        this.name = name;
        this.description = description;
        this.from = from;
        this.to = to;
        this.type = type;
        this.distance = distance;
        this.estimatedTime = estimatedTime;
        this.routeImagePath = routeImagePath;
        this.logs = logs;
    }
}
