package com.rental.security;

import org.springframework.security.core.userdetails.UserDetails;

import com.rental.Entity.User;

import lombok.Builder;
import lombok.Data;
@Data
@Builder
public class Response {
private String token;
private User user;
}