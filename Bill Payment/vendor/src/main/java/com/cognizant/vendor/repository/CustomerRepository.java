package com.cognizant.vendor.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.cognizant.vendor.model.Customer;


@Repository
public interface CustomerRepository extends JpaRepository<Customer, Integer>{

	public Customer findByUserid(String name);
}


