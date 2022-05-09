import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { categories } from '../categories';


@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css']
})
export class InsuranceComponent implements OnInit {
  passDataToApp: any;
  categories=categories;
  constructor(private router:Router) { }

  
  ngOnInit(): void {
  }
  onNavigateTo(link:any)
  {
    this.router.navigate([link])
  }
}
