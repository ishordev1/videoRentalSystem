package com.rental.Repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rental.Entity.Game;

public interface GameRepository extends JpaRepository<Game, Long> {
}

