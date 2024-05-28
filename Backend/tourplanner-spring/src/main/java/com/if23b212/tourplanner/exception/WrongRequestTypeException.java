package com.if23b212.tourplanner.exception;

public class WrongRequestTypeException extends RequestException {
    private static final String EXCEPTION_MESSAGE = "Wrong class type";

    public WrongRequestTypeException() {
        super(EXCEPTION_MESSAGE);
    }
}
