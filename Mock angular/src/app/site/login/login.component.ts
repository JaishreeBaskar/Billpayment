import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginform: FormGroup
  userCreated:boolean = null;

  constructor(private userService: UserService, private router: Router, private authService: AuthServiceService, private formBuilder:FormBuilder) { }

  ngOnInit() {
    this.loginform = this.formBuilder.group({
    username:['',[
      Validators.required,
    ]],
    password:['',[
      Validators.required,
    ]]
  })
}

toReg()
 {
   this.router.navigate(['reg'])
 }

get username() {
  return this.loginform.get('username');
}
get password() {
  return this.loginform.get('password');
}

getUsername() {
  return this.loginform.value['username'];
}

getPassword() {
  return this.loginform.value['password'];
}


  invalidLogin: boolean;
  error: string = "Login Failed"

  onSubmit() {
    this.authService.authenticate(this.getUsername(), this.getPassword()).subscribe(
      data => {
        console.log(data);
        this.authService.setToken(data.token);
        this.error = "Logged In successfully";
        this.authService.username = this.getUsername();
        this.authService.loggedIn = true;
        this.authService.validCredentials = true;
        this.authService.setUserId();
        console.log("useod " + this.authService.userId)
        if (data.role == "admin")
          this.authService.isCheckAdmin = true;
          this.router.navigate(['/admin'])
        if (data.role == "vendor") {
          this.authService.isCheckVendor = true;
          this.router.navigate(['/vendor']) }
          if (data.role == "customer") {
            this.authService.isCustomer = true;
            this.router.navigate(['/customer']) }
        console.log(data.role);
        console.log(data.token);
        console.log(data.role);
        this.userCreated=true;
      },
      error => {
        this.authService.validCredentials = false;
        this.invalidLogin = true
        if (error.status == 401)
          this.error = "Invalid Username or Password";
        console.log(error);
      }
      );
    }
  }
