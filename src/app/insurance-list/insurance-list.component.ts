import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-insurance-list',
  templateUrl: './insurance-list.component.html',
  styleUrls: ['./insurance-list.component.css']
})
export class InsuranceListComponent implements OnInit {
  @Input() selected_pastry:any;
  constructor() { }

  ngOnInit(): void {
  }

}
