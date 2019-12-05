package com.cognizant.vendor.exception;

public class VendorAlreadyExistsException extends Exception {

	private static final long serialVersionUID = 1L;
	
	public VendorAlreadyExistsException(){
		System.out.println("Vendor already exists");
	}

}
