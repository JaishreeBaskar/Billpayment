import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-e-wallet',
  templateUrl: './e-wallet.component.html',
  styleUrls: ['./e-wallet.component.css']
})
export class EWalletComponent implements OnInit {

  payForm: FormGroup;

  constructor(private router :Router, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.payForm = this.formBuilder.group({
      username:['',[
        Validators.required,
        Validators.pattern("^[a-zA-Z]*$"),
        Validators.minLength(1),
        Validators.maxLength(50),
      ]],
      ccnum:['',[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(16),
        Validators.minLength(16)
      ]],
      expmonth:['',[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(2),
        Validators.minLength(2)
      ]],
      
      expyear:['',[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(4),
        Validators.minLength(4)
      ]],
      cvv:['',[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(3),
        Validators.minLength(3)
      ]]
})
}
get username(){
  return this.payForm.get('username');
}
get ccnum(){
  return this.payForm.get('ccnum');
}
get expmonth(){
  return this.payForm.get('expmonth');
}
get expyear(){
  return this.payForm.get('expyear');
}
get cvv(){
  return this.payForm.get('cvv');
}
pay()
{
  alert("Bill payement Successful");
  this.router.navigate(['customer']);
}
}

