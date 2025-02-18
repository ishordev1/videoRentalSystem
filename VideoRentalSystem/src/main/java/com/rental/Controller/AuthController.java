package com.rental.Controller;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.ClassPathResource;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.rental.Entity.User;
import com.rental.Exception.ResourceNotFoundException;
import com.rental.Repository.UserRepository;
import com.rental.Service.UserService;
import com.rental.jwt.JwtHelper;
import com.rental.security.Request;
import com.rental.security.Response;

@RestController
@RequestMapping("/auth")
public class AuthController {
	@Autowired
	private PasswordEncoder passwordEncorder;
	@Autowired
	private AuthenticationManager authManager;

	@Autowired
	private JwtHelper helper;

	@Autowired
	private UserDetailsService userDetailsService;
	@Autowired
	private UserService userService;

	@PostMapping("/signup")
	public ResponseEntity<User> signup(@RequestBody User user) {
		user.setPassword(this.passwordEncorder.encode(user.getPassword()));
		User save = this.userService.createUser(user);
		return new ResponseEntity<>(save, HttpStatus.CREATED);
	}

	@PostMapping("/signin")
	public ResponseEntity<Response> signin(@RequestBody Request request) {
//		Authentication authenticate = this.authManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));

		UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
		User user = (User) userDetails;
		String token = this.helper.generateToken(userDetails);
		Response res = Response.builder().token(token).user(user).build();
		return new ResponseEntity<>(res, HttpStatus.CREATED);
	}

	
}
