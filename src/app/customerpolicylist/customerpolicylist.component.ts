import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customerpolicylist',
  templateUrl: './customerpolicylist.component.html',
  styleUrls: ['./customerpolicylist.component.css']
})
export class CustomerpolicylistComponent implements OnInit {

  customerpolicy: any; 
  constructor(private router:Router ) { }

  ngOnInit(): void {
  }
  onNavigateTo(link:any)
  {
    this.router.navigate([link])
  }

}
