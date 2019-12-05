import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Vendor } from 'src/app/site/Vendor';
import { UserService } from 'src/app/site/user.service';
import { VendorService } from 'src/app/vendor-service/vendor.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  signUpFormVen: FormGroup;
  vendor: Vendor;
  error: string;
  userCreated: boolean = null;
  editdone: boolean = false;
  
  constructor(private vendorService : VendorService ,private route: ActivatedRoute, private router: Router, private formBuilder:FormBuilder, private userService:UserService) { }

  ngOnInit() {
    const vendorname = this.route.snapshot.paramMap.get('nov');
    console.log("in edit ts"+vendorname)
    this.vendorService.getVendorname(vendorname).subscribe(data => {
      this.vendor = data;
      console.log(this.vendor);

 
    this.signUpFormVen = this.formBuilder.group({
      nov:[this.vendor.nov,[
        Validators.required,
        this.isnovTaken,
        Validators.maxLength(50),
        Validators.minLength(1)
      ]],
      comp:[this.vendor.comp,[
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(1)
      ]],
      vendortype:[this.vendor.vendortype,[
        Validators.required
      ]],
      address:[this.vendor.address,[
        Validators.required,
        Validators.maxLength(50),
        Validators.minLength(1)
      ]],
      country:[this.vendor.country,[
        Validators.required
      ]],
      state:[this.vendor.state,[
        Validators.required
      ]],
      ea:[this.vendor.ea,[
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]],
      cn:[this.vendor.cn,[
        Validators.required,
        Validators.pattern("^[0-9]*$"),
        Validators.maxLength(12),
        Validators.minLength(1)
      ]],
      ws:[this.vendor.ws,[
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]],
      cid:[this.vendor.cid,[
        Validators.required
      ]],
      cvd:[this.vendor.cvd,[
        Validators.required
      ]],
      yoe:[this.vendor.yoe,[
        Validators.required
      ]],
      password:[this.vendor.password,[
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]],
      pay:[this.vendor.pay,[
        Validators.required,
        Validators.maxLength(15),
        Validators.minLength(1)
      ]]
    })
  })
}


  get nov() {
    return this.signUpFormVen.get('nov');
  }
  get comp() {
    return this.signUpFormVen.get('comp');
  }
  get vendortype() {
    return this.signUpFormVen.get('vendortype');
  }
  get address() {
    return this.signUpFormVen.get('address');
  }
  get country() {
    return this.signUpFormVen.get('country');
  }
  get state() {
    return this.signUpFormVen.get('state');
  }
  get ws() {
    return this.signUpFormVen.get('ws');
  }
  get cn() {
    return this.signUpFormVen.get('cn');
  }
  get ea() {
    return this.signUpFormVen.get('ea');
  }
  get cid() {
    return this.signUpFormVen.get('cid');
  }
  get cvd() {
    return this.signUpFormVen.get('cvd');
  }
  get yoe() {
    return this.signUpFormVen.get('yoe');
  }
  get password() {
    return this.signUpFormVen.get('password');
  }
  get pay() {
    return this.signUpFormVen.get('pay');
  }

  isnovTaken(formControl: FormControl): { [s: string]: boolean } {
    if (formControl.value === 'admin') {
        return { 'novTaken': true };
      } else {
        return null;
      }
    }

    editVendor() {
    
      console.log("in edit")
      this.vendor =  {id: this.vendor.id, status:this.vendor.status, nov: this.signUpFormVen.value['nov'],comp: this.signUpFormVen.value['comp'],vendortype: this.signUpFormVen.value['vendortype'] ,address: this.signUpFormVen.value['address'],country: this.signUpFormVen.value['country'],state: this.signUpFormVen.value['state'],ea: this.signUpFormVen.value['ea'],cn: this.signUpFormVen.value['cn'], ws: this.signUpFormVen.value['ws'],cid: this.signUpFormVen.value['cid'],cvd: this.signUpFormVen.value['cvd'],yoe: this.signUpFormVen.value['yoe'],password: this.signUpFormVen.value['password'],pay: this.signUpFormVen.value['pay']};
      this.vendorService.editVendor( this.vendor).subscribe();
      this.editdone = true;
}

}
