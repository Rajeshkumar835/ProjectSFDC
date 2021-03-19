import { Component, OnInit } from "@angular/core";
import {
  TimesheetDetails,
  TimesheetObject,
} from "src/app/models/timesheet.model";
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

  /*
     total time column wise part part
  */
  totalTimeMonCol: number = 0;
  totalTimeTueCol: number = 0;
  totalTimeWedCol: number = 0;
  totalTimeThurCol: number = 0;
  totalTimeFriCol: number = 0;
  totalTimeSatCol: number = 0;
  totalTimeSunCol: number = 0;
  totalTimeCol: number = 0;

  /*
     total time row wise part part
  */

  totalTimeRow = new Array();

  /*
  this is the part of project dropdown
  */
  projects: project[];

  constructor(private timesheetService: TimesheetService) {}

  /*this is the part of dynamic array
   */
  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};

  /*
this is the part of week wise date
**/
empCode="ABC";
  ngOnInit(): void {
    this.getAllTimesheetByEmpCode();
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
      Saturday: "0",
      Sunday: "0",
      TotaltimeRowwise: "",
    };
    this.dynamicArray.push(this.newDynamic);
  }
  getAllTimesheetByEmpCode(){
    this.timesheetService.getAllTimesheetByEmpCode(this.empCode).subscribe((data:any)=>{
      console.log("Timesheet data by Emp Code",data);
      this.dynamicArray=data;
    })

  }
  //monday posttimesheet
  postTimesheet(timesheetObject) {
    console.log("Post timesheet", timesheetObject);
    this.timesheetService
      .postTimesheet(timesheetObject)
      .subscribe((data: any) => {
        console.log("timesheet data", data);
        // this.timesheetObject=null;
      });
  }
  //tuesday post timesheet
  // postTimesheet2() {
  //   console.log("Post timesheet", this.timesheetObject2);
  //   this.timesheetService
  //     .postTimesheet(this.timesheetObject2)
  //     .subscribe((data: any) => {
  //       console.log("timesheet data", data);
  //       // this.timesheetObject=null;
  //     });
  // }

  addRow(index) {
    this.newDynamic = {
      projectName: "",
      Monday: "",
      Tuesday: "",
      Wednesday: "",
      thursday: "",
      Friday: "",
      Saturday: "0",
      Sunday: "0",
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

  /*database part of monday*/
  timesheetObject1: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "ABC",
      empName: "AMISH",
      status: "NEW",
      totalTimeHour: 0,
    },
    timesheetDetails: [],
  };

  /*database part of tuesday*/
  timesheetObject2: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "ABC",
      empName: "AMISH",
      status: "NEW",
      totalTimeHour: 0,
    },
    timesheetDetails: [],
  };

  /*database part of wednesday*/
  timesheetObject3: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "ABC",
      empName: "AMISH",
      status: "NEW",
      totalTimeHour: 0,
    },
    timesheetDetails: [],
  };

  /*database part of thurusday*/
  timesheetObject4: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "ABC",
      empName: "AMISH",
      status: "NEW",
      totalTimeHour: 0,
    },
    timesheetDetails: [],
  };
  /*database part of friday*/
  timesheetObject5: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "ABC",
      empName: "AMISH",
      status: "NEW",
      totalTimeHour: 0,
    },
    timesheetDetails: [],
  };
  /*database part of saturday*/
  timesheetObject6: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "ABC",
      empName: "AMISH",
      status: "NEW",
      totalTimeHour: 0,
    },
    timesheetDetails: [],
  };
  /*database part of sunday*/
  timesheetObject7: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "ABC",
      empName: "AMISH",
      status: "NEW",
      totalTimeHour: 0,
    },
    timesheetDetails: [],
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

  //Monday database array
  timesheetArray = [];

  timesheetDetailsArray = {
    comments: "",
    hour: 0,
    project: "",
  };

  //Tuesday database array
  timesheetArray2 = [];

  timesheetDetailsArray2 = {
    comments: "",
    hour: 0,
    project: "",
  };

  //Wednesday database array
  timesheetArray3 = [];

  timesheetDetailsArray3 = {
    comments: "",
    hour: 0,
    project: "",
  };

  //Thurusday database array
  timesheetArray4 = [];

  timesheetDetailsArray4 = {
    comments: "",
    hour: 0,
    project: "",
  };

  //Friday database array
  timesheetArray5 = [];

  timesheetDetailsArray5 = {
    comments: "",
    hour: 0,
    project: "",
  };

  //Satuday database array
  timesheetArray6 = [];

  timesheetDetailsArray6 = {
    comments: "",
    hour: 0,
    project: "",
  };

  //Sunday database array
  timesheetArray7 = [];

  timesheetDetailsArray7 = {
    comments: "",
    hour: 0,
    project: "",
  };

  //common save for all the fill date
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
    this.totalTimeMonCol = 0;
    if (splitted != null) {
      for (let mm = 0; mm < splitted.length; mm++) {
        let timesheetArr = this.timesheetArray;
        // let x= [...timesheetArr];
        let newDate = new Date(this.dateFormatChange(this.mon));
        this.timesheetObject1.timesheet.attedanceDate = newDate;
        console.log("string to date", newDate);
        this.totalTimeMonCol = this.totalTimeMonCol + +splitted1[mm];
        console.log(this.mon + " " + splitted[mm] + " " + splitted1[mm]);
        this.timesheetDetailsArray.comments = "ABCD";
        this.timesheetDetailsArray.hour = +splitted1[mm];
        this.timesheetDetailsArray.project = splitted[mm];
        this.timesheetObject1.timesheetDetails.push(
          JSON.parse(JSON.stringify(this.timesheetDetailsArray))
        );
      }
      this.timesheetObject1.timesheet.totalTimeHour = this.totalTimeMonCol;
      // this.timesheetObject.timesheetDetails=this.timesheetArray;
      this.postTimesheet(this.timesheetObject1);
    }

    //Tuesday
    var data2 = this.dynamicArray.map((t) => t.Tuesday);
    var str2 = data2.toString();
    var splitted2 = str2.split(",");
    this.totalTimeTueCol = 0;
    if (splitted != null) {
      for (let mm = 0; mm < splitted.length; mm++) {
        let timesheetArr2 = this.timesheetArray2;
        let newDate2 = new Date(this.dateFormatChange(this.tue));
        this.timesheetObject2.timesheet.attedanceDate = newDate2;
        this.totalTimeTueCol = this.totalTimeTueCol + +splitted2[mm];
        console.log(this.tue + " " + splitted[mm] + " " + splitted2[mm]);
        this.timesheetDetailsArray2.comments = "ABCD";
        this.timesheetDetailsArray2.hour = +splitted2[mm];
        this.timesheetDetailsArray2.project = splitted[mm];
        this.timesheetObject2.timesheetDetails.push(
          JSON.parse(JSON.stringify(this.timesheetDetailsArray2))
        );
      }
      this.timesheetObject2.timesheet.totalTimeHour = this.totalTimeTueCol;
      // this.timesheetObject.timesheetDetails=this.timesheetArray;
      this.postTimesheet(this.timesheetObject2);
    }

    //Wednesday
    var data3 = this.dynamicArray.map((t) => t.Wednesday);
    var str3 = data3.toString();
    var splitted3 = str3.split(",");
    this.totalTimeWedCol = 0;
    if (splitted != null) {
      for (let mm = 0; mm < splitted.length; mm++) {
        let timesheetArr3 = this.timesheetArray3;
        let newDate3 = new Date(this.dateFormatChange(this.wed));
        this.timesheetObject3.timesheet.attedanceDate = newDate3;
        this.totalTimeWedCol = this.totalTimeWedCol + +splitted3[mm];
        console.log(this.wed + " " + splitted[mm] + " " + splitted3[mm]);
        this.timesheetDetailsArray3.comments = "ABCD";
        this.timesheetDetailsArray3.hour = +splitted3[mm];
        this.timesheetDetailsArray3.project = splitted[mm];
        this.timesheetObject3.timesheetDetails.push(
          JSON.parse(JSON.stringify(this.timesheetDetailsArray3))
        );
      }
      this.timesheetObject3.timesheet.totalTimeHour = this.totalTimeWedCol;
      // this.timesheetObject.timesheetDetails=this.timesheetArray;
      this.postTimesheet(this.timesheetObject3);
    }

    //thrusday
    var data4 = this.dynamicArray.map((t) => t.thursday);
    var str4 = data4.toString();
    var splitted4 = str4.split(",");
    this.totalTimeThurCol = 0;
    if (splitted != null) {
      for (let mm = 0; mm < splitted.length; mm++) {
        let timesheetArr4 = this.timesheetArray4;
        let newDate4 = new Date(this.dateFormatChange(this.thur));
        this.timesheetObject4.timesheet.attedanceDate = newDate4;
        this.totalTimeThurCol = this.totalTimeThurCol + +splitted4[mm];
        console.log(this.thur + " " + splitted[mm] + " " + splitted4[mm]);
        this.timesheetDetailsArray4.comments = "ABCD";
        this.timesheetDetailsArray4.hour = +splitted4[mm];
        this.timesheetDetailsArray4.project = splitted[mm];
        this.timesheetObject4.timesheetDetails.push(
          JSON.parse(JSON.stringify(this.timesheetDetailsArray4))
        );
      }
      this.timesheetObject4.timesheet.totalTimeHour = this.totalTimeThurCol;
      // this.timesheetObject.timesheetDetails=this.timesheetArray;
      this.postTimesheet(this.timesheetObject4);
    }

    //friday
    var data5 = this.dynamicArray.map((t) => t.Friday);
    var str5 = data5.toString();
    var splitted5 = str5.split(",");
    this.totalTimeFriCol = 0;
    if (splitted != null) {
      for (let mm = 0; mm < splitted.length; mm++) {
        let timesheetArr5 = this.timesheetArray5;
        let newDate5 = new Date(this.dateFormatChange(this.fri));
        this.timesheetObject5.timesheet.attedanceDate = newDate5;
        this.totalTimeFriCol = this.totalTimeFriCol + +splitted5[mm];
        console.log(this.fri + " " + splitted[mm] + " " + splitted5[mm]);
        this.timesheetDetailsArray5.comments = "ABCD";
        this.timesheetDetailsArray5.hour = +splitted5[mm];
        this.timesheetDetailsArray5.project = splitted[mm];
        this.timesheetObject5.timesheetDetails.push(
          JSON.parse(JSON.stringify(this.timesheetDetailsArray5))
        );
      }
      this.timesheetObject5.timesheet.totalTimeHour = this.totalTimeFriCol;
      // this.timesheetObject.timesheetDetails=this.timesheetArray;
      this.postTimesheet(this.timesheetObject5);
    }

    //saturaday
    var data6 = this.dynamicArray.map((t) => t.Saturday);
    var str6 = data6.toString();
    var splitted6 = str6.split(",");
    this.totalTimeSatCol = 0;
    if (splitted != null) {
      for (let mm = 0; mm < splitted.length; mm++) {
        let timesheetArr6 = this.timesheetArray6;
        let newDate6 = new Date(this.dateFormatChange(this.sat));
        this.timesheetObject6.timesheet.attedanceDate = newDate6;
        this.totalTimeSatCol = this.totalTimeSatCol + +splitted6[mm];
        console.log(this.sat + " " + splitted[mm] + " " + splitted6[mm]);
        this.timesheetDetailsArray6.comments = "ABCD";
        this.timesheetDetailsArray6.hour = +splitted6[mm];
        this.timesheetDetailsArray6.project = splitted[mm];
        this.timesheetObject6.timesheetDetails.push(
          JSON.parse(JSON.stringify(this.timesheetDetailsArray6))
        );
      }
      this.timesheetObject6.timesheet.totalTimeHour = this.totalTimeSatCol;
      // this.timesheetObject.timesheetDetails=this.timesheetArray;
      this.postTimesheet(this.timesheetObject6);
    }

    //sunday
    var data7 = this.dynamicArray.map((t) => t.Sunday);
    var str7 = data7.toString();
    var splitted7 = str7.split(",");
    this.totalTimeSunCol = 0;
    if (splitted != null) {
      for (let mm = 0; mm < splitted.length; mm++) {
        let timesheetArr7 = this.timesheetArray2;
        let newDate7 = new Date(this.dateFormatChange(this.sunn));
        this.timesheetObject7.timesheet.attedanceDate = newDate7;
        this.totalTimeSunCol = this.totalTimeSunCol + +splitted7[mm];
        console.log(this.sunn + " " + splitted[mm] + " " + splitted7[mm]);
        this.timesheetDetailsArray7.comments = "ABCD";
        this.timesheetDetailsArray7.hour = +splitted7[mm];
        this.timesheetDetailsArray7.project = splitted[mm];
        this.timesheetObject7.timesheetDetails.push(
          JSON.parse(JSON.stringify(this.timesheetDetailsArray7))
        );
      }
      this.timesheetObject7.timesheet.totalTimeHour = this.totalTimeSunCol;
      // this.timesheetObject.timesheetDetails=this.timesheetArray;
      this.postTimesheet(this.timesheetObject7);
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

    /*
      total time column wise
      */
    this.totalTimeCol =
      this.totalTimeMonCol +
      this.totalTimeTueCol +
      this.totalTimeWedCol +
      this.totalTimeThurCol +
      this.totalTimeSunCol +
      this.totalTimeFriCol +
      this.totalTimeSatCol;

    /*
      total time row wise
      */

    for (let mm = 0; mm < splitted.length; mm++) {
      this.totalTimeRow.push(
        +splitted1[mm] +
          +splitted2[mm] +
          +splitted3[mm] +
          +splitted4[mm] +
          +splitted5[mm] +
          +splitted6[mm] +
          +splitted7[mm]
      );

      console.log("this is total row wise time" + this.totalTimeRow);
    }
  }
}
