import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-task-mgmt-creation',
  templateUrl: './task-mgmt-creation.component.html',
  styleUrls: ['./task-mgmt-creation.component.scss']
})
export class TaskMgmtCreationComponent implements OnInit {
  teamCreation:boolean=false;

  toppings = new FormControl();
  projects = new FormControl();

  toppingList = ['Amish Yadav', 'Satish Verma', 'Pankaj Raut', 'Ashutosh Yadav', 'Manzar Imam'];
  selectedToppings;
  projectList=['Aaonri Project', 'Gong Cha Project', 'Mobion Project', 'Intranet Project', 'Optum Project'];
  selectedProject;

  constructor() { }

  ngOnInit() {
  }
  teamDetails(){
    this.teamCreation=true;
  }

}
