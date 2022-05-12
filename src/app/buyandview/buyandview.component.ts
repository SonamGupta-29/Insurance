import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { InsuranceService } from '../Services/insurance.service';

@Component({
  selector: 'app-buyandview',
  templateUrl: './buyandview.component.html',
  styleUrls: ['./buyandview.component.css']
})
export class BuyandviewComponent implements OnInit {
  registrationForm1: any;

  constructor(private router: Router,private insuranceService:InsuranceService) { }

  ngOnInit(): void {
    
  }
  onBuy(){
     
     this.router.navigateByUrl('/insurance');
}
     onView(){
     
      this.router.navigateByUrl('/customerpolicylist');
}
  }
