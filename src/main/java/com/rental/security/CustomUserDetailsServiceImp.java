package com.rental.security;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import com.rental.Entity.User;
import com.rental.Exception.ResourceNotFoundException;
import com.rental.Repository.UserRepository;

@Service
public class CustomUserDetailsServiceImp implements UserDetailsService{
@Autowired
private UserRepository userRepo;
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
User user = this.userRepo.findByEmail(username).orElseThrow(()->new ResourceNotFoundException("user not found"));
		
		return user;
	}

}
