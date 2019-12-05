package com.cognizant.vendor.exception;

public class CustomerAlreadyExistsException extends Exception{

	private static final long serialVersionUID = 1L;
	
	public CustomerAlreadyExistsException(){
		System.out.println("Customer already exists");
	}
	
}
