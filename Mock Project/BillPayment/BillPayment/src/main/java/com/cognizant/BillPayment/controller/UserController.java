package com.cognizant.BillPayment.controller;

import javax.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.cognizant.BillPayment.exception.CustomerAlreadyExistsException;
import com.cognizant.BillPayment.exception.UserAlreadyExistsException;
import com.cognizant.BillPayment.exception.VendorAlreadyExistsException;
import com.cognizant.BillPayment.model.Customer;
import com.cognizant.BillPayment.model.USER;
import com.cognizant.BillPayment.model.Vendor;
import com.cognizant.BillPayment.security.AppUserDetailsService;
import com.cognizant.BillPayment.service.UserDetailsService;

@RestController
@RequestMapping("/users")
public class UserController {

	/*@Autowired
	InMemoryUserDetailsManager inMemoryUserDetailsManager; */
	
	@Autowired
	AppUserDetailsService appUserDetailsService;
	
    @Autowired
    UserDetailsService userDetailsService;

	/*@PostMapping
	public ResponseEntity<?> signup(@RequestBody @Valid USER user) throws UserAlreadyExistsException{
        if(userDetailsService.signup(user)) {
            return new ResponseEntity<Boolean>(true,HttpStatus.OK);
}
else
{
            return new ResponseEntity<String>(user.getUserid()+" Already Exists", HttpStatus.BAD_REQUEST);
}
}  */
	
	
	@PostMapping("/customer")
	public ResponseEntity<?> CustomerSignUp(@RequestBody Customer customer) throws CustomerAlreadyExistsException{

			if(userDetailsService.CustomerSignUp(customer)) {
				return new ResponseEntity<Boolean>(true,HttpStatus.OK);
			}
			else
			{
				return new ResponseEntity<String>(customer.getUserid()+" Already Exists", HttpStatus.BAD_REQUEST);
			}
	}
	
	@PostMapping("/vendor")
	public ResponseEntity<?> VendorSignUp(@RequestBody @Valid Vendor vendor) throws VendorAlreadyExistsException{

			if(userDetailsService.VendorSignUp(vendor)) {
				return new ResponseEntity<Boolean>(true,HttpStatus.OK);
			}
			else
			{
				return new ResponseEntity<String>(vendor.getId()+" Already Exists", HttpStatus.BAD_REQUEST);
			}
	}
	

}
