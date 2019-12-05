import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-newregister',
  templateUrl: './newregister.component.html',
  styleUrls: ['./newregister.component.css']
})
export class NewregisterComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  RegC() {
    this.router.navigate(['reg1'])
  }

  RegV() {
    this.router.navigate(['reg2'])
  } 

}
