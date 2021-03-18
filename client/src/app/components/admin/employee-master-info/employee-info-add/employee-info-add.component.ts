import { Component, OnInit } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-employee-info-add',
  templateUrl: './employee-info-add.component.html',
  styleUrls: ['./employee-info-add.component.scss']
})
export class EmployeeInfoAddComponent implements OnInit {
  panelOpenState = false;

  toppings = new FormControl();

  toppingList = ['Secondary', 'Higher Secondary', 'Bachelor Degree With Honours', 'Non-Honours Bachelor Degree', 'Masters Degree','Doctoral Degree'];
  selectedToppings;

  constructor() { }

  ngOnInit() {
  }

}
