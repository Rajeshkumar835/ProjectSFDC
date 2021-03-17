import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-admin-master-data',
  templateUrl: './admin-master-data.component.html',
  styleUrls: ['./admin-master-data.component.scss']
})
export class AdminMasterDataComponent implements OnInit {

  teamCreation:boolean=false;

  toppings = new FormControl();
  projects = new FormControl();

  holidayList = ['Holiday Type 1', 'Holiday Type 2', 'Holiday Type 3', 'Holiday Type 4', 'Holiday Type 5'];
  selectedToppings;
  companyNameList=['Anagha Infotech'];
  selectedProject;

  constructor() { }

  ngOnInit() {
  }

}
