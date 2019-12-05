package com.cognizant.BillPayment.security;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import com.cognizant.BillPayment.model.USER;
import com.cognizant.BillPayment.model.Vendor;
import com.cognizant.BillPayment.repository.UserRepository;
import com.cognizant.BillPayment.repository.VendorRepository;

@Service
public class AppUserDetailsService implements UserDetailsService {

                @Autowired
                UserRepository userRepository;
                
                @Autowired
                VendorRepository vendorRepository;

                @Override
                public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
                                // TODO Auto-generated method stub
                                USER user = userRepository.findByUsername(username);
                                Vendor vendor = vendorRepository.findByNov(username);
                                
                                if(user==null){
                                                throw new UsernameNotFoundException("Exception user name not found");
                                }
                               
                                else if(vendor!=null && user.getUserid().equalsIgnoreCase(vendor.getNov()) && vendor.isStatus() == false ) {
                                    System.out.println("in if else");
                                    throw new UsernameNotFoundException("Registration not approved");
                             }
                                else
                                {
                                                AppUser appUser=new AppUser(user);
                                                return appUser;
                                }

                                
                }

}

