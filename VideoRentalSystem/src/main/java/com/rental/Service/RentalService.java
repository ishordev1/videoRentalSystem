package com.rental.Service;

import com.rental.Entity.Rental;

import java.util.List;

public interface RentalService {
    Rental rentMedia(Long userId, Long mediaId, int rentDurationHours, String paidPrice, boolean paymentStatus);
    Rental rentGame(Long userId, Long gameId, int rentDurationHours, String paidPrice, boolean paymentStatus);
    Rental getRentalById(Long id);
    List<Rental> getAllRentals();
    Rental returnRental(Long rentalId);
    void checkAndExpireRental(Long rentalId);
    public List<Rental> getAllRentalsByUserId(Long userId);
    
    public List<Rental> getAllMediaRentalsByUserId(Long userId); 
    public List<Rental> getAllRentalsGameByUserId(Long userId); 
}
