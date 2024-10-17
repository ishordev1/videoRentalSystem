package com.rental.Service.Impl;

import com.rental.Entity.Media;
import com.rental.Exception.ResourceNotFoundException;
import com.rental.Repository.MediaRepository;
import com.rental.Service.MediaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MediaServiceImpl implements MediaService {

    @Autowired
    private MediaRepository mediaRepository;

    @Override
    public Media createMedia(Media media) {
        return mediaRepository.save(media);
    }

    @Override
    public Media getMediaById(Long id) {
        return mediaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Media not found with id: " + id));
    }

    @Override
    public List<Media> getAllMedia() {
        return mediaRepository.findAll();
    }

    @Override
    public Media updateMedia(Long id, Media mediaDetails) {
        Media media = mediaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Media not found with id: " + id));

        media.setName(mediaDetails.getName());
        media.setDescription(mediaDetails.getDescription());
        media.setYear(mediaDetails.getYear());
        media.setPrice(mediaDetails.getPrice());
        media.setImgName(mediaDetails.getImgName());
        media.setMediaUrl(mediaDetails.getMediaUrl());

        return mediaRepository.save(media);
    }

    @Override
    public void deleteMedia(Long id) {
        Media media = mediaRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Media not found with id: " + id));

        mediaRepository.delete(media);
    }
}
