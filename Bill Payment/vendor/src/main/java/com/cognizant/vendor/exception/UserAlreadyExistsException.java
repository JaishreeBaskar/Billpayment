package com.cognizant.vendor.exception;

public class UserAlreadyExistsException extends Exception{

	private static final long serialVersionUID = 1L;

	
	public UserAlreadyExistsException( ){
		System.out.println("User already exists");
	}
}
