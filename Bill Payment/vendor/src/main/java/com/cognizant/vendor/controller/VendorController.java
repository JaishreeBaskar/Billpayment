package com.cognizant.vendor.controller;

import java.io.Console;
import java.util.List;
import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.vendor.model.Vendor;
import com.cognizant.vendor.security.AppUserDetailsService;
import com.cognizant.vendor.service.VendorService;



@RestController
@RequestMapping("/vendors")
public class VendorController {
   
	
	@Autowired
    VendorService vendorService;
    
    
    @Autowired
    AppUserDetailsService appUserDetailsService;
    
    @GetMapping("")
    public List<Vendor> getAllVendors() {
       
                    Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
                    String user = authentication.getName();
                    if (!user.equalsIgnoreCase("anonymoususer")) {
                                    UserDetails userDetails = appUserDetailsService.loadUserByUsername(user);
                                    String role = userDetails.getAuthorities().toArray()[0].toString();

                    if (role.equalsIgnoreCase("admin"))
                                                    return vendorService.findAllVendors();
                                    else
                                                    return vendorService.getAllVendors();
                    } 
                    System.out.println(vendorService.findAllVendors());
                    return vendorService.getAllVendors();
                    }
    
    @DeleteMapping("/{nov}")
    public void removeVendors(@PathVariable("nov") String vendorname) {
           System.out.println("---------------------------------------" +vendorname);
           System.out.println(vendorname);
           vendorService.deleteVendors(vendorname);
    }
    
    @PutMapping("")
    public void checkStatus(@RequestBody @Valid Vendor vendor) {
           vendorService.checkStatus(vendor);
    
    }
    
    @PutMapping("/edit")
    public void modifyVendor(@RequestBody @Valid Vendor vendor) {
    //	System.out.println("line 11111111111111");
           vendorService.modifyVendor(vendor);
    //    System.out.println("line 222222222222222");
    }

    
    @GetMapping("/{nov}")
	public Vendor getVendorname(@PathVariable("nov") String nov){
    	System.out.println("******************");
		return vendorService.getVendorname(nov);
	}

    }
