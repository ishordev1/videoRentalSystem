package com.rental.Controller;

import org.springframework.beans.factory.annotation.Autowired;
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
import org.springframework.web.bind.annotation.RestController;

import com.rental.Entity.User;
import com.rental.Repository.UserRepository;
import com.rental.Service.UserService;
import com.rental.jwt.JwtHelper;
import com.rental.security.Request;
import com.rental.security.Response;




@RestController
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
public ResponseEntity<User> signup(@RequestBody User user){
		user.setPassword(this.passwordEncorder.encode(user.getPassword()));
		User save = this.userService.createUser(user);
	return new ResponseEntity<>(save,HttpStatus.CREATED);
}
	
	@PostMapping("/signin")
public ResponseEntity<Response> signin(@RequestBody Request request){
		Authentication authenticate = this.authManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(), request.getPassword()));
        UserDetails userDetails = userDetailsService.loadUserByUsername(request.getEmail());
        User user=(User) userDetails;
        String token = this.helper.generateToken(userDetails);
		Response res=Response.builder().token(token).user(user).build();
		return new ResponseEntity<>(res,HttpStatus.CREATED);
}
}
