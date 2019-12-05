import { Component, OnInit } from '@angular/core';
import { Vendor } from '../site/Vendor';
import { VendorService } from '../vendor-service/vendor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {

  vendor: Vendor;
  nov: string;

  constructor(private route: ActivatedRoute, private router: Router, private vendorService: VendorService) { }

  ngOnInit() {

      const vendorname = this.route.snapshot.paramMap.get('nov');
      this.vendorService.getVendorname(vendorname).subscribe(data => {
     // data.dateOfLaunch = new Date(data.dateOfLaunch)
      this.vendor = data;
      console.log("in viiieeeww veeeeeendoooooor",this.vendor)
     // this.router.navigate(['view']);
     // this.vendor.dateOfLaunch.setDate(this.vendor.dateOfLaunch.getDate());
      }
      );
     
      }}
  
