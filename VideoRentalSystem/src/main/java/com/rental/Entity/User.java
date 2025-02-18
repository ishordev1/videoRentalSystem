package com.rental.Entity;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class User implements UserDetails{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String username;
    private String email;
//    @JsonIgnore
    private String password;
    private String role;
    
    @OneToMany(mappedBy = "user")
    @JsonManagedReference
    private List<Rental> rentals;

    
    
    //spring security implementation
	@Override
	    public Collection<? extends GrantedAuthority> getAuthorities() {
	        List<GrantedAuthority> list = new ArrayList<>();
	        SimpleGrantedAuthority auth = new SimpleGrantedAuthority("ROLE_" + getRole());
	        list.add(auth);
	        return list;
	    }
	
	
    @Override
    public String getUsername() {
        return this.email;
    }

    
}
