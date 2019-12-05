import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { UserService } from 'src/app/site/user.service';
import { User } from 'src/app/site/User';
import { Customer } from 'src/app/site/Customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-customer',
  templateUrl: './register-customer.component.html',
  styleUrls: ['./register-customer.component.css']
})
export class RegisterCustomerComponent implements OnInit {

  signUpFormCus: FormGroup;
  user: Customer;
  error: string;
  userCreated: boolean = null;
  //clickedOnAdd:boolean= null;
  
  constructor(private formBuilder:FormBuilder, private userService:UserService, private router: Router) { } 

  ngOnInit() {
    this.signUpFormCus = this.formBuilder.group({
      firstname:['',[
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(1)
      ]],
      lastname:['',[
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(1)
      ]],
      age:['',[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(2)
      ]],
      gender:['',[
        Validators.required
      ]],
      contact:['',[
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.maxLength(20),
      Validators.minLength(1)
      ]],
      pan:['',[
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]],
      aadharnumber:['',[
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]],
      userid:['',[
        Validators.required,
        this.isUseridTaken,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]],
      password:['',[
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]]
    })
  }

  get firstname() {
    return this.signUpFormCus.get('firstname');
  }
  get lastname() {
    return this.signUpFormCus.get('lastname');
  }
  get age() {
    return this.signUpFormCus.get('age');
  }
  get gender() {
    return this.signUpFormCus.get('gender');
  }
  get pan() {
    return this.signUpFormCus.get('pan');
  }
  get aadharnumber() {
    return this.signUpFormCus.get('aadharnumber');
  }
  get userid() {
    return this.signUpFormCus.get('userid');
  }
  get password() {
    return this.signUpFormCus.get('password');
  }

  get contact(){
    return this.signUpFormCus.get('contact');
  }


  isUseridTaken(formControl: FormControl): { [s: string]: boolean } {
    if (formControl.value === 'admin') {
        return { 'useridTaken': true };
      } else {
        return null;
      }
    }

    addUser() {
      console.log("----------------------")
      console.log(this.signUpFormCus.value['firstname']);
      this.user = { firstname:this.signUpFormCus.value['firstname'], lastname:this.signUpFormCus.value['lastname'], age:this.signUpFormCus.value['age'], pan:this.signUpFormCus.value['pan'], aadharnumber:this.signUpFormCus.value['aadharnumber'], gender:this.signUpFormCus.value['gender'], contact:this.signUpFormCus.value['contact'], password: this.signUpFormCus.value['password'], userid: this.signUpFormCus.value['userid'] };
      console.log(this.user);
      console.log("in process of reg")
      this.userService.addUser(this.user).subscribe(data => {
        //this.userCreated = true;
        this.userService.userCreated=true;
        this.error = "New user created successfully. You can Login now."
        this.router.navigate(['/login'])
        //console.log(this.userCreated)
      },
        error => {
          console.log("error")
          if (error.status == 400) {
            this.error = "Customer Already Exists";
            this.userCreated = false;
          }
          console.log(this.error);
        }
      );
    }
  }

  



