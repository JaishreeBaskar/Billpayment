import { Component, OnInit } from '@angular/core';
import { Vendor } from '../site/Vendor';
import { VendorService } from '../vendor-service/vendor.service';
import { AuthServiceService } from '../site/auth-service.service';

@Component({
  selector: 'app-vendor',
  templateUrl: './vendor.component.html',
  styleUrls: ['./vendor.component.css']
})
export class VendorComponent implements OnInit {

  constructor(private vendorService :VendorService, private authService : AuthServiceService) { }
  
  vendList :Vendor[];
  
  ngOnInit() {
    this.vendorService.getAllVendors().subscribe(
      data => {
        this.vendList = data;
      }
    )
  }
  removeFromVendor(nov:string){
  //  console.log(sessionStorage.getItem('id'));
 //   console.log(name);
  //  if(sessionStorage.getItem('id') != name){
    this.vendorService.deleteVendor(nov).subscribe(
      data =>{
        this.vendorService.getAllVendors().subscribe(
          data => {
            console.log(data);
            alert("Deleted vendor successfully")
            this.vendList = data;
          }
        )
      }
    )
  }
  // else{
  //   alert("Vendor cannot delete themselves");
  // }
  }
