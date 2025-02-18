package com.rental.Service;

import com.rental.Entity.Media;

import java.util.List;

public interface MediaService {
    Media createMedia(Media media);
    Media getMediaById(Long id);
    List<Media> getAllMedia();
    Media updateMedia(Long id, Media mediaDetails);
    void deleteMedia(Long id);
}
