import { Injectable } from '@angular/core';
import { Vendor } from '../site/Vendor';
import { AuthServiceService } from '../site/auth-service.service';
import { environment } from 'src/environments/environment';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class VendorService {

  vendorList: Vendor[]

  private subject = new Subject<Vendor[]>();
  url = environment.baseUrl;

  constructor(private httpClient: HttpClient, private authService: AuthServiceService) { }


  /*for search*/
  getSubject(): Subject<Vendor[]> {
    return this.subject;
  }


  public getAllVendors(): Observable<any>  {
    let headers = new HttpHeaders();
   // console.log(this._authService.getToken() + " token");
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.httpClient.get<Vendor[]>(this.url + "vendor-service/vendors/", { headers });
  
  }

   public deleteVendor(nov: string): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    return this.httpClient.delete(this.url + "vendor-service/vendors/" + nov, { headers })
  }

  public statusVendor(vendor: Vendor): Observable<any> {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    console.log(vendor);
    return this.httpClient.put(this.url + "vendor-service/vendors/" ,vendor, { headers })
  }

  getVendorname(nov: string): Observable<any> {
    let headers = new HttpHeaders();
    console.log(this.authService.getToken() + " token");
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    console.log("vendor name requested"+nov);
    return this.httpClient.get<Vendor>(this.url + "vendor-service/vendors/" +nov, { headers });
  }

  public editVendor(vendor: Vendor): Observable<any> {
    console.log(vendor);
    let headers = new HttpHeaders();
    console.log(this.authService.getToken() + " authservice");
    headers = headers.set('Authorization', 'Bearer ' + this.authService.getToken());
    console.log("edit vendor");
    return this.httpClient.put<Vendor>(this.url + "vendor-service/vendors/edit", vendor, { headers })
  }

}

