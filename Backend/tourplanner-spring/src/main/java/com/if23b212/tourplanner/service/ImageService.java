package com.if23b212.tourplanner.service;

import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.UUID;

@Service
public class ImageService {

    private final String IMAGE_PREFIX = "tour_";
    private final Path rootLocation;

    public ImageService() {
        this.rootLocation = Paths.get("");
        initializeDirectory();
    }

    private void initializeDirectory() {
        try {
            Files.createDirectories(rootLocation);
        } catch (IOException e) {
          e.printStackTrace();
        }
    }

    private String createImageName(Long tourId) {
        return IMAGE_PREFIX+tourId+".png";
    }

    public String storeImage(Long tourId, MultipartFile file) {
        String filename = createImageName(tourId);
        try {
            if(file.isEmpty()) {
                throw new RuntimeException("File is empty!");
            }
            Path path = rootLocation.resolve(filename);
            Files.copy(file.getInputStream(), path, StandardCopyOption.REPLACE_EXISTING);

            return path.toString();
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

    public Resource loadImage(String imagePath) {
        Path path = Path.of(imagePath);
        try {
            Resource resource = new UrlResource(path.toUri());
            return resource;
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
    }
}
