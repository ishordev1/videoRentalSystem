package com.rental.Entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonBackReference;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Rental {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;    

    private LocalDateTime rentStartTime; 
    private LocalDateTime expirationTime; 
    private int rentDuration; 
    private boolean isReturned = false; 
    private boolean isExpired = false;
    private String paidPrice;
    private boolean paymentStatus;
    
    @ManyToOne
    @JsonBackReference
    private User user; 
    
    @ManyToOne
    private Media media;     

    @ManyToOne
    private Game game;  
} 
