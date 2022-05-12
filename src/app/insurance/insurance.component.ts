import { Component, OnInit, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { categories } from '../categories';
import { InsuranceService } from '../Services/insurance.service';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {

  categories= categories;
  policy: any;
  @Output() passDataToApp=new EventEmitter();
  constructor(private router:Router, private insuranceService: InsuranceService) { }

  ngOnInit(): void {
    this.getInsuranceDetail();
  }

  getInsuranceDetail(){
      this.insuranceService.getInsurance()
      .subscribe((res: any)=>{
        console.log(res)
        this.policy=res.response.policyListName;
        this.policy[0].policyImage='../../assets/NaviPolicy.png';
        this.policy[1].policyImage='../../assets/Sanjeevinipolicy.png';
        this.policy[2].policyImage='../../assets/MediPolicy.png';
        
      })
      }
  
  onNavigateTo(link:any)
  {
    this.router.navigate([link])
  }
}
