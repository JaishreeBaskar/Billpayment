import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dth',
  templateUrl: './dth.component.html',
  styleUrls: ['./dth.component.css']
})
export class DthComponent implements OnInit {

  dthForm: FormGroup;
  value:string;
  option = ["Credit/Debit Card","Internet Banking","PayTm","Google Pay","e-wallet"];
  constructor(private router :Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.dthForm = this.formBuilder.group({
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
    return this.dthForm.get('username');
  }
  get vendorname(){
    return this.dthForm.get('vendorname');
  }
  get amount(){
    return this.dthForm.get('amount');
  }
  get payment(){
    return this.dthForm.get('payment');
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
