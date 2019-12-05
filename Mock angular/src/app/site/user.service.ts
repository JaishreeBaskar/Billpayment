import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './User';
import { Vendor } from './Vendor';
import { Customer } from './Customer';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url: string = environment.baseUrl;
  userCreated:boolean=false;
 
  
  constructor(private router: Router, private httpClient: HttpClient) { }

  addUser(user: Customer): Observable<any> {
    //this.userList.push(user);
    console.log("Inside add user of service customer")
    console.log(user);
    return this.httpClient.post<any>(this.url + "vendor-service/users/customer", user)
    this.router.navigate(['login']);
  }

  addVendor(vendor: Vendor): Observable<any> {
    //this.userList.push(user);
    console.log("Inside add user of service vendor")
    console.log(vendor);
    return this.httpClient.post<any>(this.url + "vendor-service/users/vendor", vendor)
    this.router.navigate(['login']);
  }
}
