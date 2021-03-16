import { Component, OnInit } from "@angular/core";
import { TimesheetDetails, TimesheetObject } from "src/app/models/timesheet.model";
import { TimesheetService } from "src/app/services/timesheet.service";
import { DynamicGrid } from "./grid.modal";
import { project } from "./project";
@Component({
  selector: "app-grid-view",
  templateUrl: "./grid-view.component.html",
  styleUrls: ["./grid-view.component.scss"],
})
export class GridViewComponent implements OnInit {
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
  constructor(private timesheetService: TimesheetService) {}
  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
  ngOnInit(): void {
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
      projectName: "",
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      thursday: "",
      Friday: "",
      Saturday: "00",
      Sunday: "00",
      TotaltimeRowwise: "",
    };
    this.dynamicArray.push(this.newDynamic);
  }

  postTimesheet() {
    console.log("Post timesheet",this.timesheetObject1)
    this.timesheetService
      .postTimesheet(this.timesheetObject1)
      .subscribe((data: any) => {
        console.log("timesheet data", data);
        // this.timesheetObject=null;
      });
  }
  addRow(index) {
    this.newDynamic = {
      projectName: "",
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      thursday: "",
      Friday: "",
      Saturday: "00",
      Sunday: "00",
      TotaltimeRowwise: "",
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
  myFunction(index) {
    console.log(this.dynamicArray);
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

  /*database*/
  timesheetObject1: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "ABC",
      empName: "AMISH",
      status: "NEW",
      totalTimeHour: 0,
    },
    timesheetDetails: [ 
    ],
  };

  dateFormatChange(dateString) {
    // let dateString = "15/03/2021 (Mon)";
    let dateStrin = dateString.split(" ", 1);

    var strrr = dateStrin.toString();
    console.log(strrr);
    var first = "";
    var sec = "";
    var third = "";
    var temp = 0;
    for (let iii = 0; iii < strrr.length; iii++) {
      if (temp == 0) {
        if (strrr.charAt(iii) == "/") {
          temp++;
          iii++;
        }

        if (temp == 0) {
          first = first + strrr.charAt(iii);
        }
      }
      if (temp == 1) {
        console.log("hii");
        if (strrr.charAt(iii) == "/") {
          temp++;
          iii++;
        }
        if (temp == 1) {
          sec = sec + strrr.charAt(iii);
        }
      }
      if (temp == 2) {
        if (strrr.charAt(iii) == "/") {
          temp++;
        }
        if (temp == 2) {
          third = third + strrr.charAt(iii);
        }
      }
    }

    var str = third + "/" + sec + "/" + first;
    console.log(str);
    let newDate = new Date(str);

    console.log(newDate);
    return newDate;
  }
  
  timesheetArray=[];

  timesheetDetailsArray={
    comments: "", 
    hour: 0, 
    project: ""
  }
  saveEx() {
    console.log(this.dynamicArray);
    console.log("this is length of dynamic array " + this.dynamicArray.length);

    var ProjectWise: String[] = this.dynamicArray.map((i) => i.projectName);
    var str = ProjectWise.toString();
    var splitted = str.split(",");
    for (let mm = 0; mm < splitted.length; mm++) {}

    //Monday
    var data1 = this.dynamicArray.map((i) => i.Monday);
    var str1 = data1.toString();
    var splitted1 = str1.split(",");
    let totalTime=0;
    if(splitted!=null){
      for (let mm = 0; mm < splitted.length; mm++) {
        let timesheetArr= this.timesheetArray;
        // let x= [...timesheetArr];
        let newDate = new Date(this.dateFormatChange(this.mon));
        this.timesheetObject1.timesheet.attedanceDate = newDate;
        console.log("string to date", newDate);
        totalTime=totalTime+(+splitted1[mm]);
        console.log(this.mon + " " + splitted[mm] + " " + splitted1[mm]);
        this.timesheetDetailsArray.comments="ABCD";
        this.timesheetDetailsArray.hour=+splitted1[mm];
        this.timesheetDetailsArray.project=splitted[mm];
        this.timesheetObject1.timesheetDetails.push(JSON.parse(JSON.stringify(this.timesheetDetailsArray)));
      }
      this.timesheetObject1.timesheet.totalTimeHour=totalTime;
      // this.timesheetObject.timesheetDetails=this.timesheetArray;
      this.postTimesheet();

    }

    //Tuesday
    var data2 = this.dynamicArray.map((t) => t.Tuesday);
    var str2 = data2.toString();
    var splitted2 = str2.split(",");
    for (let mm = 0; mm < splitted.length; mm++) {
      console.log(this.tue + " " + splitted[mm] + " " + splitted2[mm]);
    }

    //Wednesday
    var data3 = this.dynamicArray.map((t) => t.Wednesday);
    var str3 = data3.toString();
    var splitted3 = str3.split(",");
    for (let mm = 0; mm < splitted.length; mm++) {
      console.log(this.wed + " " + splitted[mm] + " " + splitted3[mm]);
    }

    //thrusday
    var data4 = this.dynamicArray.map((t) => t.thursday);
    var str4 = data4.toString();
    var splitted4 = str4.split(",");
    for (let mm = 0; mm < splitted.length; mm++) {
      console.log(this.thur + " " + splitted[mm] + " " + splitted4[mm]);
    }

    //friday
    var data5 = this.dynamicArray.map((t) => t.Friday);
    var str5 = data5.toString();
    var splitted5 = str5.split(",");
    for (let mm = 0; mm < splitted.length; mm++) {
      console.log(this.fri + " " + splitted[mm] + " " + splitted5[mm]);
    }

    //saturaday
    var data6 = this.dynamicArray.map((t) => t.Saturday);
    var str6 = data6.toString();
    var splitted6 = str6.split(",");
    for (let mm = 0; mm < splitted.length; mm++) {
      console.log(this.sat + " " + splitted[mm] + " " + splitted6[mm]);
    }

    //sunday
    var data7 = this.dynamicArray.map((t) => t.Sunday);
    var str7 = data7.toString();
    var splitted7 = str7.split(",");
    for (let mm = 0; mm < splitted.length; mm++) {
      console.log(this.sunn + " " + splitted[mm] + " " + splitted7[mm]);
    }

    var total1: number = +data1;
    var total2: number = +data2;
    var total3: number = +data3;
    var total4: number = +data4;
    var total5: number = +data5;
    var total6: number = +data6;
    var total7: number = +data7;
    var ROWtotal: number =
      total1 + total2 + total3 + total4 + total5 + total6 + total7;
  }
}
