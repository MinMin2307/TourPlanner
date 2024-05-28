package com.if23b212.tourplanner.exception;

public abstract class RequestException extends Exception{
    public RequestException(String message) {
        super(message);
    }
}
