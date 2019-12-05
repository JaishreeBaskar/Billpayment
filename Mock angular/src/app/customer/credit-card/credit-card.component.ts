import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  creditcardForm: FormGroup;
  value:string;
  option = ["Credit/Debit Card","Internet Banking","PayTm","Google Pay","e-wallet"];
  constructor(private router :Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.creditcardForm = this.formBuilder.group({
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
    return this.creditcardForm.get('username');
  }
  get vendorname(){
    return this.creditcardForm.get('vendorname');
  }
  get amount(){
    return this.creditcardForm.get('amount');
  }
  get payment(){
    return this.creditcardForm.get('payment');
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
  paym()
  {
    alert("Bill Paid Successfully");
    this.router.navigate(['customer']);
  }
}

