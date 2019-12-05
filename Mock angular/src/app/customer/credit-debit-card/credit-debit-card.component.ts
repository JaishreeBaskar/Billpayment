import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-credit-debit-card',
  templateUrl: './credit-debit-card.component.html',
  styleUrls: ['./credit-debit-card.component.css']
})
export class CreditDebitCardComponent implements OnInit {

  payForm: FormGroup;

  constructor(private router :Router, private formBuilder:FormBuilder) { }
  ngOnInit() {
    
      this.payForm = this.formBuilder.group({
        cname:['',[
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
  get cname(){
    return this.payForm.get('cname');
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
