import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paytm',
  templateUrl: './paytm.component.html',
  styleUrls: ['./paytm.component.css']
})
export class PaytmComponent implements OnInit {

  payForm: FormGroup;

  constructor(private router :Router,private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.payForm = this.formBuilder.group({
      cname:['',[
        Validators.required,
        Validators.pattern("^[a-zA-Z]*$"),
        Validators.minLength(1),
        Validators.maxLength(50),
      ]],
      
        payid:['',[
          Validators.required,
          Validators.pattern("^[a-zA-Z0-9@]*$"),
          Validators.minLength(1),
          Validators.maxLength(20),
        ]]
  })
}

get cname()
{
  return this.payForm.get('cname');
}
get payid()
{
  return this.payForm.get('payid');
}
submit()
{
  this.router.navigate(['']);
}

pay()
{
  alert("Bill payement Successful");
  this.router.navigate(['customer']);
}


}

