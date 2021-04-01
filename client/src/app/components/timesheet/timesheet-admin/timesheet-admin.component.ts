import { Component, OnInit } from "@angular/core";
//import { FormGroup, FormControl, Validators } from "@angular/forms";
import { user } from "./user";

//import { ToastrService } from "ngx-toastr";
import { DynamicGrid } from "./grid.modal";
import { project } from "./project";
@Component({
  selector: "app-timesheet-admin",
  templateUrl: "./timesheet-admin.component.html",
  styleUrls: ["./timesheet-admin.component.scss"],
})
export class TimesheetAdminComponent implements OnInit {
  constructor() {}

  /*
  user declaration part
  */
  users: user[];

  /*
  this is the part of date
  */
  firstName: string = "Yallaling";
  sun: string = "";
  mon: string = "";
  tue: string = "";
  wed: string = "";
  thur: string = "";
  fri: string = "";
  sat: string = "";
  sunn: string = "";
  date: Date = new Date();
  first: Date = new Date(this.date);

  projects: project[];
  //constructor(private toastr: ToastrService) {}
  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
  ngOnInit(): void {
    const anExampleVariable = "Hello World";
    console.log(anExampleVariable);

    /*
  this is user part
  */
    this.users = [
      { Id: 1, Name: "Ashutosh kumar yadav" },
      { Id: 2, Name: "Amish sir" },
      { Id: 3, Name: "Wasi Sir" },
      { Id: 4, Name: "Satish sir" },
    ];

    let i: number = 0;

    while (i < 7) {
      if (this.date.getDay() == 0) {
        // console.log("Day = " + date.getDay());
        //console.log("Sunday");
        break;
      }
      this.date.setDate(this.date.getDate() - 1);
      i++;
    }

    let first: Date = new Date(this.date);
    //sun.setDate(date.getDate() + 4);
    this.sun =
      first.getDate() +
      "/" +
      (first.getMonth() + 1) +
      "/" +
      first.getFullYear() +
      " (Sun)";
    console.log(this.sun);

    let second: Date = new Date(first);
    second.setDate(first.getDate() + 1);
    this.mon =
      second.getDate() +
      "/" +
      (second.getMonth() + 1) +
      "/" +
      second.getFullYear() +
      " (Mon)";
    console.log(this.mon);

    let third: Date = new Date(second);
    third.setDate(second.getDate() + 1);
    this.tue =
      third.getDate() +
      "/" +
      (third.getMonth() + 1) +
      "/" +
      third.getFullYear() +
      " (Tue)";
    console.log(this.tue);

    let forth: Date = new Date(third);
    forth.setDate(third.getDate() + 1);
    this.wed =
      forth.getDate() +
      "/" +
      (forth.getMonth() + 1) +
      "/" +
      forth.getFullYear() +
      " (Wed)";
    console.log(this.wed);

    let fifth: Date = new Date(forth);
    fifth.setDate(forth.getDate() + 1);
    this.thur =
      fifth.getDate() +
      "/" +
      (fifth.getMonth() + 1) +
      "/" +
      fifth.getFullYear() +
      " (Thu)";
    console.log(this.thur);

    let six: Date = new Date(fifth);
    six.setDate(fifth.getDate() + 1);
    this.fri =
      six.getDate() +
      "/" +
      (six.getMonth() + 1) +
      "/" +
      six.getFullYear() +
      " (Fri)";
    console.log(this.fri);

    let seven: Date = new Date(six);
    seven.setDate(six.getDate() + 1);
    this.sat =
      seven.getDate() +
      "/" +
      (seven.getMonth() + 1) +
      "/" +
      seven.getFullYear() +
      " (Sat)";
    console.log(this.sat);

    let eight: Date = new Date(seven);
    eight.setDate(seven.getDate() + 1);
    this.sunn =
      eight.getDate() +
      "/" +
      (eight.getMonth() + 1) +
      "/" +
      eight.getFullYear() +
      " (Sun)";
    console.log(this.sunn);

    /*
  this is the part of project dropdown
  */
    this.projects = [
      { Id: 1, Name: "Intranet" },
      { Id: 2, Name: "Timesheet" },
      { Id: 3, Name: "Aaonri" },
      { Id: 4, Name: "Goongcha" },
    ];

    /*
  this is the part of dynmic table
  */
    this.newDynamic = {
      title1: "",
      title2: "",
      title3: "",
      title4: "",
      title5: "",
      title6: "",
      title7: "00",
      title8: "00",
      title9: "",
    };
    this.dynamicArray.push(this.newDynamic);
  }
  addRow(index) {
    this.newDynamic = {
      title1: "",
      title2: "",
      title3: "",
      title4: "",
      title5: "",
      title6: "",
      title7: "00",
      title8: "00",
      titie9: "",
    };
    this.dynamicArray.push(this.newDynamic);
    //  this.toastr.success("New row added successfully", "New Row");
    console.log(this.dynamicArray);
    return true;
  }

  deleteRow(index) {
    if (this.dynamicArray.length == 1) {
      //   this.toastr.error(
      //   "Can't delete the row when there is only one row",
      // "Warning"
      //);
      return false;
    } else {
      this.dynamicArray.splice(index, 1);
      // this.toastr.warning("Row deleted successfully", "Delete row");
      return true;
    }
  }

  /*
  this is the part of date
  */
  myFunctionPrevDate() {
    //let first: Date = new Date(this.date);
    this.first.setDate(this.date.getDate() - 7);
    this.sun =
      this.first.getDate() -
      1 +
      1 +
      "/" +
      (this.first.getMonth() + 1) +
      "/" +
      this.first.getFullYear() +
      " (Sun)";
    console.log(this.sun);
    this.date.setDate(this.first.getDate());

    let second: Date = new Date(this.first);
    second.setDate(this.first.getDate() + 1);
    this.mon =
      second.getDate() +
      "/" +
      (second.getMonth() + 1) +
      "/" +
      second.getFullYear() +
      " (Mon)";
    console.log(this.mon);

    let third: Date = new Date(second);
    third.setDate(second.getDate() + 1);
    this.tue =
      third.getDate() +
      "/" +
      (third.getMonth() + 1) +
      "/" +
      third.getFullYear() +
      " (Tue)";
    console.log(this.tue);

    let forth: Date = new Date(third);
    forth.setDate(third.getDate() + 1);
    this.wed =
      forth.getDate() +
      "/" +
      (forth.getMonth() + 1) +
      "/" +
      forth.getFullYear() +
      " (Wed)";
    console.log(this.wed);

    let fifth: Date = new Date(forth);
    fifth.setDate(forth.getDate() + 1);
    this.thur =
      fifth.getDate() +
      "/" +
      (fifth.getMonth() + 1) +
      "/" +
      fifth.getFullYear() +
      " (Thu)";
    console.log(this.thur);

    let six: Date = new Date(fifth);
    six.setDate(fifth.getDate() + 1);
    this.fri =
      six.getDate() +
      "/" +
      (six.getMonth() + 1) +
      "/" +
      six.getFullYear() +
      " (Fri)";
    console.log(this.fri);

    let seven: Date = new Date(six);
    seven.setDate(six.getDate() + 1);
    this.sat =
      seven.getDate() +
      "/" +
      (seven.getMonth() + 1) +
      "/" +
      seven.getFullYear() +
      " (Sat)";
    console.log(this.sat);

    let eight: Date = new Date(seven);
    eight.setDate(seven.getDate() + 1);
    this.sunn =
      eight.getDate() +
      "/" +
      (eight.getMonth() + 1) +
      "/" +
      eight.getFullYear() +
      " (Sun)";
    console.log(this.sunn);
  }
  myFunctionNextdate() {
    //let first: Date = new Date(this.date);
    this.first.setDate(this.date.getDate() + 7);
    this.sun =
      this.first.getDate() -
      1 +
      1 +
      "/" +
      (this.first.getMonth() + 1) +
      "/" +
      this.first.getFullYear() +
      " (Sun)";
    console.log(this.sun);
    this.date.setDate(this.first.getDate());

    let second: Date = new Date(this.first);
    second.setDate(this.first.getDate() + 1);
    this.mon =
      second.getDate() +
      "/" +
      (second.getMonth() + 1) +
      "/" +
      second.getFullYear() +
      " (Mon)";
    console.log(this.mon);

    let third: Date = new Date(second);
    third.setDate(second.getDate() + 1);
    this.tue =
      third.getDate() +
      "/" +
      (third.getMonth() + 1) +
      "/" +
      third.getFullYear() +
      " (Tue)";
    console.log(this.tue);

    let forth: Date = new Date(third);
    forth.setDate(third.getDate() + 1);
    this.wed =
      forth.getDate() +
      "/" +
      (forth.getMonth() + 1) +
      "/" +
      forth.getFullYear() +
      " (Wed)";
    console.log(this.wed);

    let fifth: Date = new Date(forth);
    fifth.setDate(forth.getDate() + 1);
    this.thur =
      fifth.getDate() +
      "/" +
      (fifth.getMonth() + 1) +
      "/" +
      fifth.getFullYear() +
      " (Thu)";
    console.log(this.thur);

    let six: Date = new Date(fifth);
    six.setDate(fifth.getDate() + 1);
    this.fri =
      six.getDate() +
      "/" +
      (six.getMonth() + 1) +
      "/" +
      six.getFullYear() +
      " (Fri)";
    console.log(this.fri);

    let seven: Date = new Date(six);
    seven.setDate(six.getDate() + 1);
    this.sat =
      seven.getDate() +
      "/" +
      (seven.getMonth() + 1) +
      "/" +
      seven.getFullYear() +
      " (Sat)";
    console.log(this.sat);

    let eight: Date = new Date(seven);
    eight.setDate(seven.getDate() + 1);
    this.sunn =
      eight.getDate() +
      "/" +
      (eight.getMonth() + 1) +
      "/" +
      eight.getFullYear() +
      " (Sun)";
    console.log(this.sunn);
  }
}
