import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/site/user.service';

@Component({
  selector: 'app-electricity',
  templateUrl: './electricity.component.html',
  styleUrls: ['./electricity.component.css']
})
export class ElectricityComponent implements OnInit {

  electricityForm: FormGroup;
  value:string;
  option = ["Credit/Debit Card","Internet Banking","PayTm","Google Pay","e-wallet"];

  constructor(private router :Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.electricityForm = this.formBuilder.group({
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
      billtype:['',[
        Validators.required
      ]],
      payment:['',[
        Validators.required,
      ]],
    })
  }
  
  get vendorname(){
    return this.electricityForm.get('vendorname');
  }
  get amount(){
    return this.electricityForm.get('amount');
  }
  get billtype(){
    return this.electricityForm.get('billtype');
  }
  get payment(){
    return this.electricityForm.get('payment');
  }
  rprt() {
    if(this.payMethod=="Credit/Debit Card") {
      console.log(this.payMethod);
      this.router.navigate(['Credit/Debit Card']);
}
else if(this.payMethod=="Internet Banking") {
  console.log(this.payMethod);
  this.router.navigate(['Internet Banking']);
}
else if(this.payMethod=="PayTm") {
  console.log(this.payMethod);
  this.router.navigate(['PayTm']);
}
else if(this.payMethod=="Google Pay") {
  console.log(this.payMethod);
  this.router.navigate(['Google Pay']);
}
else if(this.payMethod=="e-wallet") {
  console.log(this.payMethod);
  this.router.navigate(['e-wallet']);
}

}
payMethod:string;
paym(event:any){
console.log(event.target.value);
console.log("IN CONSOLE"+event);
this.payMethod=event.target.value;
console.log(this.payMethod);
}

}


