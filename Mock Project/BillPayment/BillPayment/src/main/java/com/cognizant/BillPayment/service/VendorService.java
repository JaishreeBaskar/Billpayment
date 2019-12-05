package com.cognizant.BillPayment.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.cognizant.BillPayment.model.USER;
import com.cognizant.BillPayment.model.Vendor;
import com.cognizant.BillPayment.repository.UserRepository;
import com.cognizant.BillPayment.repository.VendorRepository;

@Service
public class VendorService {

	@Autowired
	VendorRepository vendorRepository;
	
	@Autowired
	UserRepository userRepository;
	
	public List<Vendor> findAllVendors() {
		// TODO Auto-generated method stub
		  return vendorRepository.findAll();
	}

	
	@Transactional
	public void deleteVendors(String vendorname) {
		// TODO Auto-generated method stub
		Vendor vendor = vendorRepository.findByNov(vendorname);
        vendorRepository.delete(vendor);
        USER user = userRepository.findByUsername(vendorname);
        userRepository.delete(user);
	}
	
	public void checkStatus(Vendor vendor) {
        vendorRepository.save(vendor);
        // TODO Auto-generated method stub
        
 }

	@Transactional
    public Vendor  getVendorname(String nov) {
           // TODO Auto-generated method stub
           System.out.println("Start");
           Vendor vendor = vendorRepository.findByNov(nov);
           System.out.println("----------------------------------------------------------"+vendor);
           return vendor;
       
       }

	public void modifyVendor(Vendor vendor) {
		// TODO Auto-generated method stub
        vendorRepository.save(vendor);
	}
	
	public List<Vendor> getAllVendors() {
        return vendorRepository.findByStatusTrue();
 }

}



