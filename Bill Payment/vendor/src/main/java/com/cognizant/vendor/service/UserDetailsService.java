package com.cognizant.vendor.service;

import java.util.ArrayList;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import com.cognizant.vendor.exception.CustomerAlreadyExistsException;
import com.cognizant.vendor.exception.VendorAlreadyExistsException;
import com.cognizant.vendor.model.Customer;
import com.cognizant.vendor.model.Role;
import com.cognizant.vendor.model.USER;
import com.cognizant.vendor.model.Vendor;
import com.cognizant.vendor.repository.CustomerRepository;
import com.cognizant.vendor.repository.RoleRepository;
import com.cognizant.vendor.repository.UserRepository;
import com.cognizant.vendor.repository.VendorRepository;


@Service
public class UserDetailsService {
                
                @Autowired
                UserRepository userRepository;
                @Autowired
                RoleRepository roleRepository;
                @Autowired
                CustomerRepository customerRepository;
                @Autowired
                VendorRepository vendorRepository;
                
               /* public Boolean signup(USER user) throws UserAlreadyExistsException {
                                
                                USER user1 = userRepository.findByUsername(user.getUserid()); 
                                if(user1 != null)
                                {
                                                throw new UserAlreadyExistsException();
                                }
                                
                                else {
                                                user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
                                                List<Role> rolelist = new ArrayList<Role>();
                                                
                                                Role role = roleRepository.findById(1).get();
                                                rolelist.add(role);
                                                user.setRoles(rolelist);
                                                userRepository.save(user);
                                                return true;
                                }
                }*/

				public boolean CustomerSignUp(@Valid Customer customer) throws CustomerAlreadyExistsException{
					// TODO Auto-generated method stub
					Customer customer1 = customerRepository.findByUserid(customer.getUserid());
					System.out.println("--------------------------------------" +customer1);
					if(customer1 != null) {
						throw new CustomerAlreadyExistsException();
				} 
					else {
						System.out.println("--------------------C------------------" +customer.getPassword());
						customer.setPassword(new BCryptPasswordEncoder().encode(customer.getPassword()));
						List<Role> rolelist = new ArrayList<Role>();	
						Role role = roleRepository.findById(1).get();
						System.out.println("============================" +role);
						rolelist.add(role);
						customerRepository.save(customer);
						System.out.println("**************************" +customer);
						
						USER user = new USER();
						user.setUserid(customer.getUserid());
						System.out.println(customer.getPassword());
						System.out.println("This is customer");
						user.setPassword(customer.getPassword());
						user.setRoles(rolelist);
						userRepository.save(user);
						System.out.println("**************************" +userRepository.findByUsername(user.getUserid()));
						return true;		
				}
				
				}

				public boolean VendorSignUp(@Valid Vendor vendor) throws VendorAlreadyExistsException{
					// TODO Auto-generated method stub
					System.out.println("************************");
					System.out.println(vendor);
					System.out.println("************************");
					Vendor vendor1 = vendorRepository.findByNov(vendor.getNov());
						//	findById(vendor.getId());
					if(vendor1 != null){
						throw new VendorAlreadyExistsException();
					}
					else {
						vendor.setPassword(new BCryptPasswordEncoder().encode(vendor.getPassword()));
						List<Role> rolelist = new ArrayList<Role>();	
						Role role = roleRepository.findById(3).get();
						rolelist.add(role);
						vendorRepository.save(vendor);
						
						USER user = new USER();
						user.setUserid(String.valueOf(vendor.getNov()));
						System.out.println(vendor.getPassword());
						user.setPassword(vendor.getPassword());
						user.setRoles(rolelist);
						userRepository.save(user);
						return true;		
					}
				}
}

				
					
					
				
