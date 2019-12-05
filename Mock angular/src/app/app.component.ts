import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from './site/auth-service.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.loggedIn();
    this.router.navigate(['login']);
  }
 
  constructor(private formBuild: FormBuilder, private authService: AuthServiceService, private router: Router) { } 

  isLoggedIn:boolean = false;
  

  loggedIn():boolean {
    //if(!this.authService.loggedInUser.loggedOut){
      if (this.authService.loggedIn) {
      this.isLoggedIn = true;
      return true
    }
    else{
      this.isLoggedIn = false;
      return false;
    }
  }

  clickOnAddCart() {
   this.router.navigate(['/login'])
  }

  clickOnHelp() {
    this.router.navigate(['/help'])
    }

  exit() {
    window.location.reload();
  }

  vendor() {
    this.router.navigate(['vendor']);
  }
  
  customer() {
    this.router.navigate(['customer']);
  }

  admin() {
    this.router.navigate(['admin']);
  }

}

