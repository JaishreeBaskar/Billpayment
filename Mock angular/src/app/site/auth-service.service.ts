import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private httpClient: HttpClient,  public router: Router) { } 

  isAdmin: boolean = false; 
  isVendor: boolean = false; 
  loggedInUser = { loggedOut: true };
  validCredentials: boolean = true;
  accessToken: string; // JWT token
  redirectUrl = '/';
  loggedIn: boolean = false;
  isCheckVendor:boolean=false;
  isCheckAdmin:boolean=false;
  isCustomer:boolean=false;
  private authenticationApiUrl = environment.baseUrl;
  private token: string;
  username: string;
  userId: number = 0;
  public setToken(token: string) {
    console.log(token);
    this.token = token;
  }
  public getToken() {
    return this.token;
  }

  public setUserId() {
    let sum: number = 0;
    for (let i = 0; i < this.username.length; i++) {
      this.userId = this.username.charCodeAt(i) + this.userId;
    }
  }
  authenticate(user: string, password: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + btoa(user + ':' + password));
    return this.httpClient.get(this.authenticationApiUrl + "authentication-service/authenticate", { headers })
  }

  logout() {
    this.loggedIn = false;
    this.setToken(null);
    this.userId = null;
  }
}

