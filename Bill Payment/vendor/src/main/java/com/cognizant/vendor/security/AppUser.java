package com.cognizant.vendor.security;

import java.util.Collection;
import java.util.stream.Collectors;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.cognizant.vendor.model.USER;


public class AppUser implements UserDetails{

                private USER user;
     
    public AppUser(USER user) {
                                super();
                                this.user = user;
                                  this.authorities = user.getRoles().stream().map(role -> new SimpleGrantedAuthority(role.getName())).collect(Collectors.toList());
    }

                private Collection<? extends GrantedAuthority> authorities;
                @Override
                public Collection<? extends GrantedAuthority> getAuthorities() {
                                // TODO Auto-generated method stub
                                //return null;
                                return authorities;
                }

                @Override
                public String getPassword() {
                                // TODO Auto-generated method stub
                                //return null;
                                //return user.getPassword();
                                return user.getPassword();
                }

                @Override
                public String getUsername() {
                                // TODO Auto-generated method stub
                                //return user.getName();
                                return user.getUserid();
                }

                @Override
                public boolean isAccountNonExpired() {
                                // TODO Auto-generated method stub
                                //return false;
                                return true;
                }

                @Override
                public boolean isAccountNonLocked() {
                                // TODO Auto-generated method stub
                                //return false;
                                return true;
                }

                @Override
                public boolean isCredentialsNonExpired() {
                                // TODO Auto-generated method stub
                                //return false;
                                return true;
                }

                @Override
                public boolean isEnabled() {
                                // TODO Auto-generated method stub
                                //return false;
                                return true;
                }
}

