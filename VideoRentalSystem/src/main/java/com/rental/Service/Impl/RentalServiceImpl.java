package com.rental.Service.Impl;

import com.rental.Entity.*;
import com.rental.Exception.ResourceNotFoundException;
import com.rental.Repository.GameRepository;
import com.rental.Repository.MediaRepository;
import com.rental.Repository.RentalRepository;
import com.rental.Repository.UserRepository;
import com.rental.Service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class RentalServiceImpl implements RentalService {

    @Autowired
    private RentalRepository rentalRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MediaRepository mediaRepository;

    @Autowired
    private GameRepository gameRepository;

    @Override
    public Rental rentMedia(Long userId, Long mediaId, int rentDurationHours, String paidPrice, boolean paymentStatus) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        Media media = mediaRepository.findById(mediaId)
                .orElseThrow(() -> new ResourceNotFoundException("Media not found with id: " + mediaId));

        Rental rental = new Rental();
        rental.setUser(user);
        rental.setMedia(media);
        LocalDateTime now = LocalDateTime.now();
        rental.setRentStartTime(now);
        rental.setExpirationTime(now.plusHours(rentDurationHours));
        rental.setRentDuration(rentDurationHours);
        rental.setPaidPrice(paidPrice);
        rental.setPaymentStatus(paymentStatus);
        rental.setReturned(false);
        rental.setExpired(false);

        return rentalRepository.save(rental);
    }

    @Override
    public Rental rentGame(Long userId, Long gameId, int rentDurationHours, String paidPrice, boolean paymentStatus) {
        User user = userRepository.findById(userId)
                .orElseThrow(() -> new ResourceNotFoundException("User not found with id: " + userId));
        Game game = gameRepository.findById(gameId)
                .orElseThrow(() -> new ResourceNotFoundException("Game not found with id: " + gameId));

        
        
        Rental rental = new Rental();
        rental.setUser(user);
        rental.setGame(game);
        LocalDateTime now = LocalDateTime.now();
        rental.setRentStartTime(now);
        rental.setExpirationTime(now.plusHours(rentDurationHours));
        rental.setRentDuration(rentDurationHours);
        rental.setPaidPrice(paidPrice);
        rental.setPaymentStatus(paymentStatus);
        rental.setReturned(false);
        rental.setExpired(false);

        return rentalRepository.save(rental);
    }

    @Override
    public Rental getRentalById(Long id) {
        return rentalRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Rental not found with id: " + id));
    }

    @Override
    public List<Rental> getAllRentals() {
        return rentalRepository.findAll();
    }

    @Override
    public List<Rental> getAllRentalsByUserId(Long userId) {
    List<Rental> rentData = this.rentalRepository.findByUserId(userId);
        return rentData;
    }
    
    
    
    @Override
    public List<Rental> getAllMediaRentalsByUserId(Long userId) {
    List<Rental> rentData = this.rentalRepository.findRentalsWithUserIdAndMediaOnly(userId);
        return rentData;
    }
    
    
    @Override
    public List<Rental> getAllRentalsGameByUserId(Long userId) {
    List<Rental> rentData = this.rentalRepository.findRentalsWithUserIdAndGameOnly(userId);
        return rentData;
    }
    
    @Override
    public Rental returnRental(Long rentalId) {
        Rental rental = rentalRepository.findById(rentalId)
                .orElseThrow(() -> new ResourceNotFoundException("Rental not found with id: " + rentalId));
        rental.setReturned(true);
        return rentalRepository.save(rental);
    }

    @Override
    public void checkAndExpireRental(Long rentalId) {
        Rental rental = rentalRepository.findById(rentalId)
                .orElseThrow(() -> new ResourceNotFoundException("Rental not found with id: " + rentalId));
        if (LocalDateTime.now().isAfter(rental.getExpirationTime()) && !rental.isReturned()) {
            rental.setExpired(true);
            rentalRepository.save(rental);
        }
    }
    
    
    @Scheduled(fixedRate = 3600000)  // Runs every 1 hour (3600000 milliseconds) 
    public void checkAndExpireAllRentals() {
        List<Rental> rentals = rentalRepository.findAll();
        LocalDateTime now = LocalDateTime.now();

        for (Rental rental : rentals) {
            if (!rental.isExpired() && !rental.isReturned() && now.isAfter(rental.getExpirationTime())) {
                rental.setExpired(true);  // Mark the rental as expired
                rentalRepository.save(rental);
            }
        }
    }
}
