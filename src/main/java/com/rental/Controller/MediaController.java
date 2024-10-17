package com.rental.Controller;

import com.rental.Entity.Media;
import com.rental.Service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/media")
public class MediaController {

    @Autowired
    private MediaService mediaService;

    @PostMapping
    public ResponseEntity<Media> createMedia(@RequestBody Media media) {
        Media createdMedia = mediaService.createMedia(media);
        return ResponseEntity.status(HttpStatus.CREATED).body(createdMedia);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Media> getMediaById(@PathVariable Long id) {
        Media media = mediaService.getMediaById(id);
        return ResponseEntity.ok(media);
    }

    @GetMapping
    public ResponseEntity<List<Media>> getAllMedia() {
        List<Media> mediaList = mediaService.getAllMedia();
        return ResponseEntity.ok(mediaList);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Media> updateMedia(@PathVariable Long id, @RequestBody Media mediaDetails) {
        Media updatedMedia = mediaService.updateMedia(id, mediaDetails);
        return ResponseEntity.ok(updatedMedia);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteMedia(@PathVariable Long id) {
        mediaService.deleteMedia(id);
        return ResponseEntity.ok("Media deleted successfully");
    }
}
