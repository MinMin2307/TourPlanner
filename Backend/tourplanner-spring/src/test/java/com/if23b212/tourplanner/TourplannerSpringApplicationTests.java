package com.if23b212.tourplanner;

import com.if23b212.tourplanner.model.tour.Tour;
import com.if23b212.tourplanner.model.tour.TransportType;
import com.if23b212.tourplanner.model.tourlog.TourLog;
import com.if23b212.tourplanner.repo.TourLogRepo;
import com.if23b212.tourplanner.repo.TourRepo;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class TourplannerSpringApplicationTests {

    @Autowired
    private TourRepo tourRepo;
    @Autowired
    private TourLogRepo tourLogRepo;

    @Test
    void contextLoads() {
    }

    @Test
    void test_tour() {
        Tour tour =Tour.builder()
                .name("Spaziergang")
                .description("Tut der Seele gut!")
                .from("Mexikoplatz 1, 1020 Wien")
                .to("Gablenzgasse 11, 1150 Wien")
                .type(TransportType.RUNNING)
                .build();
        tourRepo.save(tour);
        tourRepo.findAll().forEach(System.out::println);

    }

    @Test
    void test_tourlog() {
        TourLog tourlog =TourLog.builder()
                .comment("Spaziergang war super!")
                .difficulty(2)
                .totalDistance(883743)
                .totalTime(384738943)
                .rating(4)
                .build();
        tourLogRepo.save(tourlog);
        tourRepo.findAll().forEach(System.out::println);

    }

}
