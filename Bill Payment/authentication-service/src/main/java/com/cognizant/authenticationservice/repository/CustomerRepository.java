package com.cognizant.authenticationservice.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cognizant.authenticationservice.model.Customer;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>{

	public Customer findByUserid(String name);
}


