import { Component, OnInit } from '@angular/core';
import { VendorService } from '../vendor-service/vendor.service';
import { Vendor } from '../site/Vendor';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  searchKey: string;
 vendorList:Vendor[];
 filteredvendorList: Vendor[];
  
  constructor(private vendorService: VendorService, private router: Router) { }

  ngOnInit() {
    this.vendorService.getAllVendors().subscribe(data => {
      this.vendorList = data;
      this.filteredvendorList = this.vendorList;
      console.log("in vendor");
    })

  }

  toPaybill(){
    this.router.navigate(['paybill'])
  }

  search() {
    
    this.filteredvendorList = this.vendorList.filter(item => item.nov.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()) || item.vendortype.toLocaleLowerCase().includes(this.searchKey.toLocaleLowerCase()));
    this.vendorService.getSubject().next(this.filteredvendorList);
  }
}
