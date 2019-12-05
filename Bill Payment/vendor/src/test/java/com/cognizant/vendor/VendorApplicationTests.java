package com.cognizant.vendor;


import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import java.sql.Date;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import com.cognizant.vendor.exception.UserAlreadyExistsException;
import com.cognizant.vendor.exception.VendorAlreadyExistsException;
import com.cognizant.vendor.model.USER;
import com.cognizant.vendor.model.Vendor;
import com.cognizant.vendor.repository.RoleRepository;
import com.cognizant.vendor.repository.UserRepository;
import com.cognizant.vendor.repository.VendorRepository;
import com.cognizant.vendor.security.AppUserDetailsService;
import com.cognizant.vendor.service.UserDetailsService;
import com.cognizant.vendor.service.VendorService;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;


@SpringBootTest
@RunWith(SpringRunner.class)
@AutoConfigureMockMvc
public class VendorApplicationTests {
       
       @Autowired
    UserDetailsService userDetailsService;
       
    @Autowired
    RoleRepository roleRepository;
    
    @Autowired
    VendorRepository vendorRepository;
    
    @Autowired
    VendorService vendorService;
    
    @Autowired
   private  MockMvc mvc;



       @Test
       public void contextLoads() {
       } 
       
      @Test
      public void testSignUp() throws  VendorAlreadyExistsException{
          Vendor vendor = new Vendor(9, "penavi", "ra111", "dth", "op", "india", "delhi", "op", 999999999, "yyy", new Date(2020-01-01), new Date(2019-12-12), new Date(2019-12-11), "ccc", "pranavi", false);
         userDetailsService.VendorSignUp(vendor);
         	vendorRepository.findByNov("enavi");
         	Assert.assertTrue(vendorRepository.findByNov("enavi")!=null);
    }
   
   
   @Test
   public void testSignUp1() throws  VendorAlreadyExistsException{
         Vendor vendor = new Vendor(1, "bob", "bob", "telephone", "bob", "India", "Tamilnadu", "bob", 465, "bob industries", new Date(2019-12-12), new Date(2019-12-11), new Date(2019-12-12), "bob", "bob", true);
         userDetailsService.VendorSignUp(vendor);
   vendorRepository.findByNov("enavi");
   Assert.assertTrue(vendorRepository.findByNov("enavi")!=null);
   }
   
   @Test
   public void testProductAll() throws Exception{
                   ResultActions actions=mvc.perform(get("/vendors"));
                   actions.andExpect(status().isOk());
   }
   
   @Test
   public void testDeleteProduct(){
	   vendorService.deleteVendors("enavi");
                   Vendor vendor =vendorService.getVendorname("enavi");
                   assertNotNull(vendor); 
   }


    }
	
	




