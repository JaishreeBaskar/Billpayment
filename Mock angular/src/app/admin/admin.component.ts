import { Component, OnInit, Input } from '@angular/core';
import { Vendor } from '../site/Vendor';
import { VendorService } from '../vendor-service/vendor.service';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../site/auth-service.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  @Input() 
  vendorList:Vendor[];
  url: string = environment.baseUrl;
  vendor: Vendor;
  
  constructor(private router: Router, private route: ActivatedRoute, private vendorService: VendorService, private authService: AuthServiceService, private httpClient: HttpClient) { }

  ngOnInit() {

    this.vendorService.getAllVendors().subscribe(data => {
    this.vendorList = data;
    this.vendorList = this.vendorList;
    console.log("in vendor");

  })
  }

  onDeleteVendor(nov: string) {
    console.log("Inside delete Vendor")
    this.vendorService.deleteVendor(nov).subscribe(data => { this.ngOnInit();});
    this.remove = true;
    alert("Vendor Rejected Successfully")
  }
    remove:boolean=false;

    accept( vendorListA : Vendor) {
      vendorListA.status=true;
      this.vendorService.statusVendor(vendorListA).subscribe(data=>{  this.ngOnInit(); 
    });
  }

  }
