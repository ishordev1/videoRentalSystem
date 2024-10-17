package com.rental.Repository;



import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.rental.Entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
Optional<User> findByEmail(String email);

}
