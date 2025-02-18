package com.rental.Controller;

import com.rental.Entity.Rental;
import com.rental.Service.RentalService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/rentals")
public class RentalController {

    @Autowired
    private RentalService rentalService;

    @PostMapping("/rentMedia/{mediaId}/user/{userId}")
    public ResponseEntity<Rental> rentMedia(@RequestBody Rental rental,
    		@PathVariable long mediaId,
    		@PathVariable long userId
    		) {
    	
        Rental rental1 = rentalService.rentMedia(userId, mediaId, rental.getRentDuration(), rental.getPaidPrice(), rental.isPaymentStatus());
    	return ResponseEntity.status(HttpStatus.CREATED).body(rental1);
    }

    @PostMapping("/rentGame/{gameId}/user/{userId}")
    public ResponseEntity<Rental> rentGame(@RequestBody Rental rental,
    		@PathVariable long gameId,
    		@PathVariable long userId
    		) {
    	
        Rental rental1 = rentalService.rentGame(userId, gameId, rental.getRentDuration(), rental.getPaidPrice(), rental.isPaymentStatus());

    	return ResponseEntity.status(HttpStatus.CREATED).body(rental1);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Rental> getRentalById(@PathVariable Long id) {
        Rental rental = rentalService.getRentalById(id);
        return ResponseEntity.ok(rental);
    }

    
    @GetMapping("/user/{userId}")
    public ResponseEntity<List<Rental>> getRentalByUserId(@PathVariable Long userId) {
        List<Rental> rental = rentalService.getAllRentalsByUserId(userId);
        return ResponseEntity.ok(rental);
    } 
    
    @GetMapping("/user/{userId}/media")
    public ResponseEntity<List<Rental>> getRentalMediaByUserId(@PathVariable Long userId) {
        List<Rental> rental = rentalService.getAllRentalsByUserId(userId);
        return ResponseEntity.ok(rental);
    }  
    
 
    
    @GetMapping("/user/{userId}/game")
    public ResponseEntity<List<Rental>> getRentalGameByUserId(@PathVariable Long userId) {
        List<Rental> rental = rentalService.getAllRentalsGameByUserId(userId);
        return ResponseEntity.ok(rental);
    } 
    
    @GetMapping
    public ResponseEntity<List<Rental>> getAllRentals() {
        List<Rental> rentals = rentalService.getAllRentals();
        return ResponseEntity.ok(rentals);
    }

    @PutMapping("/return/{rentalId}")
    public ResponseEntity<String> returnRental(@PathVariable Long rentalId) {
        rentalService.returnRental(rentalId);
        return ResponseEntity.ok("Rental returned successfully");
    }

    @PutMapping("/expire/{rentalId}")
    public ResponseEntity<String> checkAndExpireRental(@PathVariable Long rentalId) {
        rentalService.checkAndExpireRental(rentalId);
        return ResponseEntity.ok("Rental expiration checked and updated");
    }
}
