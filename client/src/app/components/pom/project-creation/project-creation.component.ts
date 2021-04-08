import { Component, OnInit } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { FormControl } from "@angular/forms";
@Component({
  selector: "app-project-creation",
  templateUrl: "./project-creation.component.html",
  styleUrls: ["./project-creation.component.scss"],
})
export class ProjectCreationComponent implements OnInit {
  teamCreation: boolean = false;

  toppings = new FormControl();
  projects = new FormControl();
  toppingList = [
    "Amish Yadav",
    "Satish Verma",
    "Pankaj Raut",
    "Ashutosh Yadav",
    "Manzar Imam",
  ];
  selectedToppings;
  projectList = [
    "Amish Yadav",
    "Satish Verma",
    "Pankaj Raut",
    "Ashutosh Yadav",
    "Manzar Imam",
  ];
  selectedProject;

  constructor() {}

  ngOnInit() {}
  teamDetails() {
    this.teamCreation = true;
  }
  showData() {
    console.log("value is", this.selectedProject);
  }
  onselect(event, value) {
    console.log("value is", value);
  }
}
