import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  insuranceForm: FormGroup;
  value:string;
  option = ["Credit/Debit Card","Internet Banking","PayTm","Google Pay","e-wallet"];
  constructor(private router :Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.insuranceForm = this.formBuilder.group({
      username:['',[
        Validators.required,
        Validators.pattern("^[a-zA-Z]*$"),
        Validators.minLength(1),
        Validators.maxLength(15),
      ]],
      vendorname:['',[
        Validators.required,
        Validators.pattern("^[a-zA-Z]*$"),
        Validators.minLength(1),
        Validators.maxLength(15),
      ]],
      amount:['',[
        Validators.pattern("^[0-9]*$"),
        Validators.required,
      ]],
      payment:['',[
        Validators.required,
      ]],
    })
  }
  get username(){
    return this.insuranceForm.get('username');
  }
  get vendorname(){
    return this.insuranceForm.get('vendorname');
  }
  get amount(){
    return this.insuranceForm.get('amount');
  }
  get payment(){
    return this.insuranceForm.get('payment');
  }
  report() {
    if(this.value="Credit/Debit Card") {
      this.router.navigate(['']);
    }
    else if(this.value="Internet Banking") {
      this.router.navigate(['']);
    }
    else if(this.value="PayTm") {
      this.router.navigate(['']);
    }
    else if(this.value="Google Pay") {
      this.router.navigate(['']);
    }
    else if(this.value="e-wallet") {
      this.router.navigate(['']);
    }
   
  }
submit(){
  this.router.navigate(['']);
}
}


