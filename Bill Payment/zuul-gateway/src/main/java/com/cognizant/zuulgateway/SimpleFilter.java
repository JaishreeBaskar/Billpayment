package com.cognizant.zuulgateway;

import com.netflix.zuul.ZuulFilter;

public class SimpleFilter extends ZuulFilter {

	@Override
	public Object run() {
		// TODO Auto-generated method stub
		System.out.println("in object run ");
		return null;
	}

	@Override
	public boolean shouldFilter() {
		// TODO Auto-generated method stub
		System.out.println("in should filter ");
		return true;
	}

	@Override
	public int filterOrder() {
		// TODO Auto-generated method stub
		System.out.println("in filter order ");
		return 1;
	}

	@Override
	public String filterType() {
		// TODO Auto-generated method stub
		System.out.println("in filter type ");
		return "pre";
	}

}
