package com.rental.Repository;


import com.rental.Entity.Rental;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface RentalRepository extends JpaRepository<Rental, Long> {
	List<Rental> findByUserId(Long userId);
	
	@Query("SELECT r FROM Rental r WHERE r.user.id = :userId AND r.media IS NOT NULL AND r.game IS NULL")
    List<Rental> findRentalsWithUserIdAndMediaOnly(@Param("userId") Long userId);
	
	
	   @Query("SELECT r FROM Rental r WHERE r.user.id = :userId AND r.game IS NOT NULL AND r.media IS NULL")
	    List<Rental> findRentalsWithUserIdAndGameOnly(@Param("userId") Long userId);
}

