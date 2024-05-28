package com.if23b212.tourplanner.model.tour;

public enum TransportType {
    BIKE("cycling-regular"),
    HIKE("foot-hiking"),
    RUNNING("foot-walking"),
    VACATION("driving-car");

    private String mapping;
    private TransportType(String mapping) {
        this.mapping = mapping;
    }

    public String getMapping() {
        return this.mapping;
    }
}
