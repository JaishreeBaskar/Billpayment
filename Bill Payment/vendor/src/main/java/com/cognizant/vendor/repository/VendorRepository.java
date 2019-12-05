package com.cognizant.vendor.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.cognizant.vendor.model.Vendor;


@Repository
public interface VendorRepository extends JpaRepository<Vendor, String>{
	
    public Vendor findByNov(String name);
    public List<Vendor> findByStatusTrue();
    
}
