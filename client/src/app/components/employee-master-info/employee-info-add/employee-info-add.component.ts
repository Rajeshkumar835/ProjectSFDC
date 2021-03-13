import { Component, OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
// import { TabsetConfig } from 'ngx-bootstrap/tabs';
// import { TabsetComponent } from 'ngx-bootstrap/tabs';
@Component({
  selector: 'app-employee-info-add',
  templateUrl: './employee-info-add.component.html',
  styleUrls: ['./employee-info-add.component.scss']
})
export class EmployeeInfoAddComponent implements OnInit {
  panelOpenState = false;

  constructor() { }

  ngOnInit() {
  }

}
