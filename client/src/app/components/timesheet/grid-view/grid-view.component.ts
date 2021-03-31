import { Component, OnInit } from "@angular/core";
import {
  TimesheetDetails,
  TimesheetObject,
} from "src/app/models/timesheet.model";
import { TimesheetService } from "src/app/services/timesheet.service";
import { DynamicGrid } from "./grid.modal";
import { project } from "./project";
import { user } from "./user";
@Component({
  selector: "app-grid-view",
  templateUrl: "./grid-view.component.html",
  styleUrls: ["./grid-view.component.scss"],
})
export class GridViewComponent implements OnInit {
  testNumberSave: number = 0;
  /*
  validation part
  /*/
  EnterValueValidation;
  EnterDropdownValidation;

  //this part for save sucess message

  SaveMessageTemp = false;
  // ApproveMessageTemp = false;

  //this part for Hierarchy  of save / prev /next button if loginuser is not found then data will not save
  SaveHierarchyTemp = true;
  //this part for approval Hierarchy part if else
  ApprovalHierarchyTemp = false;
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
  this is approval part variables
  */
  MonApproval: boolean = false;
  TueApproval: boolean = false;
  WedApproval: boolean = false;
  ThurApproval: boolean = false;
  FriApproval: boolean = false;
  SatApproval: boolean = false;
  SunApproval: boolean = false;
  //MonApproval: string = "";
  //weekly approval part which is used for save if else
  //
  WeekApprovalTemp = 0;

  //now day wise approval part
  //yee 7 var ka use nhi kiya gya hai use kiya jaaaiga lekin manager approval ke baad..................isme maine kya kiya ki jab value retrive karega then..........agar woo ...........status Approve hua then isme ............Approve assign ho jaaiga............or yee wooo jo saath object banai hai ussme NEW ke jagah Approve send karega .....

  //ubhi hmmne sirf value jav retrive kar rahi hai tab status approve ko in 7 variable me store karwaaa rahr h...........un saath object me baad me daal denge
  //nhi kie assign ubhi stop
  MonApprovalTemp = "NEW";
  TueApprovalTemp = "NEW";
  WedApprovalTemp = "NEW";
  ThurApprovalTemp = "NEW";
  FriApprovalTemp = "NEW";
  SatApprovalTemp = "NEW";
  SunApprovalTemp = "NEW";

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

  // TotaltimeRowwise: number = 0;

  /*
  this is the part of project dropdown
  */
  projects: project[];

  constructor(private timesheetService: TimesheetService) {}

  /*this is the part of dynamic array
   */
  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
  checkDyanamicTemp = 0;

  /*
  this part is used for testing purpose
  */
  testDynamic: any = {};

  empCode: "";
  startDate = "";
  endDate = "";
  //variables of users/employee/manager
  users: user[];
  empNameEmp: any = {};
  /*
  ngOnInit is started
  */
  ngOnInit() {
    let empCode = localStorage.getItem("employeeInfo");
    console.log("empCode : ", empCode);
    this.timesheetObject1.timesheet.empCode = empCode;
    this.timesheetObject2.timesheet.empCode = empCode;
    this.timesheetObject3.timesheet.empCode = empCode;
    this.timesheetObject4.timesheet.empCode = empCode;
    this.timesheetObject5.timesheet.empCode = empCode;
    this.timesheetObject6.timesheet.empCode = empCode;
    this.timesheetObject7.timesheet.empCode = empCode;

    this.getEmployeeInfoByEmpCode(empCode);
    //for hierarchy data
    this.getEmployeeInfoByEmpCodeHierarchy(empCode);

    //this part will store the info of Employee/manager
    this.users = [];

    //
    let i: number = 0;

    /*
this is the part of week wise date
**/
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
here we call main retrive
*/

    /*
    this part is used for testing purpose
   
    this.testDynamic = {
      projectName: "Aaonri",
      Monday: "2",
      Tuesday: "3",
      Wednesday: "3",
      thursday: "3",
      Friday: "3",
      Saturday: "3",
      Sunday: "0",
      TotaltimeRowwise: "0",
    };
    this.dynamicArray.push(this.testDynamic);
     */
    // this.dynamicArray.push(this.testDynamic);
    /*

    
  this is the part of dynmic table
  */

    this.newDynamic = {
      projectName: "",
      Monday: "0",
      Tuesday: "0",
      Wednesday: "0",
      thursday: "0",
      Friday: "0",
      Saturday: "0",
      Sunday: "0",
      TotaltimeRowwise: "0",
    };
    this.dynamicArray.push(this.newDynamic);
  }
  //this service is used to get the information of current login employee or user or manager
  empName: "";
  Id: "";
  getEmployeeInfoByEmpCode(empCode) {
    this.timesheetService
      .getEmployeeInfoByEmpCode(empCode)
      .subscribe((data: any) => {
        console.log("Employee info data ", data);
        this.empCode = data.empCode;
        console.log(" Assign empCode" + this.empCode);
        let firstNameString: String = " ";
        this.empName = data.firstName + firstNameString + data.lastName;
        //here we put the ampName into seven object
        this.timesheetObject1.timesheet.empName = this.empName;
        this.timesheetObject2.timesheet.empName = this.empName;
        this.timesheetObject3.timesheet.empName = this.empName;
        this.timesheetObject4.timesheet.empName = this.empName;
        this.timesheetObject5.timesheet.empName = this.empName;
        this.timesheetObject6.timesheet.empName = this.empName;
        this.timesheetObject7.timesheet.empName = this.empName;
        //
        console.log("empName", this.empName);
        this.empNameEmp = {
          Id: this.empCode,
          Name: this.empName,
        };
        // this.Id = this.empCode;
        console.log("aaa" + this.empNameEmp);
        console.log("aaa" + this.empNameEmp.Id);
        this.users.push(this.empNameEmp);
        if (this.mon) {
          this.getAllTimesheetByEmpCode();
        } else {
          console.log("Annn" + this.mon);
        }
      });
  }
  //get all employee in hierarchy
  getEmployeeInfoByEmpCodeHierarchy(empCode) {
    this.timesheetService
      .getEmployeeInfoByEmpCodeHierarchy(empCode)
      .subscribe((data: any) => {
        console.log("hierarchy info data ", data);

        for (let kk = 0; kk < data.length; kk++) {
          let firstNameString: String = " ";
          let empNameHierarchy =
            data[kk].firstName + firstNameString + data[kk].lastName;

          this.empNameEmp = {
            Id: data[kk].empCode,
            Name: empNameHierarchy,
          };
          this.users.push(this.empNameEmp);
        }
      });
  }

  getAllTimesheetByEmpCode() {
    console.log(
      "heeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
        this.mon
    );
    console.log(
      "sheeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" +
        this.sunn
    );

    this.timesheetService
      .getAllTimesheetByEmpCode(
        this.empCode,
        this.dateFormatChangeee(this.mon),
        this.dateFormatChangeee(this.sunn)
      )
      .subscribe((data: any) => {
        console.log("Timesheet data by Emp Code", data);

        //  this.dynamicArray = this.testDynamic;
        // console.log("this dynamic test is working " + this.dynamicArray);
        /*this is testing part*/
        let result = data;
        let test11Project;
        let test22Monday;
        let test33Tuesday;
        let test44Wednesday;
        let test55Thursday;
        let test66Friday;
        let test77Saturday;
        let test88Sunday;
        let test99RowWisetotal;
        let test10Shift: number = 0;

        // for (let t1 = 0; t1 < 7; t1++) {
        // console.log(data[0].timesheetDetails.length);
        if (data.length >= 1) {
          //this is weekly approval
          this.WeekApprovalTemp = 1;
          //this is for ay wise approval
          this.MonApprovalTemp = "NEW";
          this.TueApprovalTemp = "NEW";
          this.WedApprovalTemp = "NEW";
          this.ThurApprovalTemp = "NEW";
          this.FriApprovalTemp = "NEW";
          this.SatApprovalTemp = "NEW";
          this.SunApprovalTemp = "NEW";
          //end
          //
          let rowLength = data.length;
          let rowLength2 = rowLength - 7;

          for (
            let t2 = 0;
            t2 < data[rowLength2].timesheetDetails.length;
            t2++
          ) {
            console.log("second time for loop");
            test11Project = data[rowLength2].timesheetDetails[t2].project;
            /*
            test22Monday = data[rowLength2].timesheetDetails[t2].hour;
            test33Tuesday = data[rowLength2 + 1].timesheetDetails[t2].hour;
            test44Wednesday = data[rowLength2 + 2].timesheetDetails[t2].hour;
            test55Thursday = data[rowLength2 + 3].timesheetDetails[t2].hour;
            test66Friday = data[rowLength2 + 4].timesheetDetails[t2].hour;
            test77Saturday = data[rowLength2 + 5].timesheetDetails[t2].hour;
            test88Sunday = data[rowLength2 + 6].timesheetDetails[t2].hour;
            test99RowWisetotal =
              test22Monday +
              test33Tuesday +
              test44Wednesday +
              test55Thursday +
              test66Friday; //test77Saturday+test88Sunday
         */
            let Checkdate: Date = new Date(
              data[rowLength2].timesheet.attedanceDate
            );
            let Checkdate1: Date = new Date(
              data[rowLength2 + 1].timesheet.attedanceDate
            );
            let Checkdate2: Date = new Date(
              data[rowLength2 + 2].timesheet.attedanceDate
            );
            let Checkdate3: Date = new Date(
              data[rowLength2 + 3].timesheet.attedanceDate
            );
            let Checkdate4: Date = new Date(
              data[rowLength2 + 4].timesheet.attedanceDate
            );
            let Checkdate5: Date = new Date(
              data[rowLength2 + 5].timesheet.attedanceDate
            );
            let Checkdate6: Date = new Date(
              data[rowLength2 + 6].timesheet.attedanceDate
            );

            //Monday
            if (Checkdate.getDay() == 1) {
              test22Monday = data[rowLength2].timesheetDetails[t2].hour;
              console.log("hello monday" + data[rowLength2].timesheet.status);
              if (data[rowLength2].timesheet.status == "Approved") {
                this.MonApproval = true;
                this.MonApprovalTemp = "Approved";
              } else if (data[rowLength2].timesheet.status == "NEW") {
                this.MonApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeMonCol = data[rowLength2].timesheet.totalTimeHour;
            } else if (Checkdate1.getDay() == 1) {
              test22Monday = data[rowLength2 + 1].timesheetDetails[t2].hour;
              console.log(
                "hello monday" + data[rowLength2 + 1].timesheet.status
              );
              if (data[rowLength2 + 1].timesheet.status == "Approved") {
                this.MonApproval = true;
                this.MonApprovalTemp = "Approved";
              } else if (data[rowLength2 + 1].timesheet.status == "NEW") {
                this.MonApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeMonCol =
                data[rowLength2 + 1].timesheet.totalTimeHour;
            } else if (Checkdate2.getDay() == 1) {
              test22Monday = data[rowLength2 + 2].timesheetDetails[t2].hour;
              console.log(
                "hello monday" + data[rowLength2 + 2].timesheet.status
              );
              if (data[rowLength2 + 2].timesheet.status == "Approved") {
                this.MonApproval = true;
                this.MonApprovalTemp = "Approved";
              } else if (data[rowLength2 + 2].timesheet.status == "NEW") {
                this.MonApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeMonCol =
                data[rowLength2 + 2].timesheet.totalTimeHour;
            } else if (Checkdate3.getDay() == 1) {
              test22Monday = data[rowLength2 + 3].timesheetDetails[t2].hour;
              console.log(
                "hello monday" + data[rowLength2 + 3].timesheet.status
              );
              if (data[rowLength2 + 3].timesheet.status == "Approved") {
                this.MonApproval = true;
                this.MonApprovalTemp = "Approved";
              } else if (data[rowLength2 + 3].timesheet.status == "NEW") {
                this.MonApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeMonCol =
                data[rowLength2 + 3].timesheet.totalTimeHour;
            } else if (Checkdate4.getDay() == 1) {
              test22Monday = data[rowLength2 + 4].timesheetDetails[t2].hour;
              console.log(
                "hello monday" + data[rowLength2 + 4].timesheet.status
              );
              if (data[rowLength2 + 4].timesheet.status == "Approved") {
                this.MonApproval = true;
                this.MonApprovalTemp = "Approved";
              } else if (data[rowLength2 + 4].timesheet.status == "NEW") {
                this.MonApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeMonCol =
                data[rowLength2 + 4].timesheet.totalTimeHour;
            } else if (Checkdate5.getDay() == 1) {
              test22Monday = data[rowLength2 + 5].timesheetDetails[t2].hour;
              console.log(
                "hello monday" + data[rowLength2 + 5].timesheet.status
              );
              if (data[rowLength2 + 5].timesheet.status == "Approved") {
                this.MonApproval = true;
                this.MonApprovalTemp = "Approved";
              } else if (data[rowLength2 + 5].timesheet.status == "NEW") {
                this.MonApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeMonCol =
                data[rowLength2 + 5].timesheet.totalTimeHour;
            } else if (Checkdate6.getDay() == 1) {
              test22Monday = data[rowLength2 + 6].timesheetDetails[t2].hour;
              console.log(
                "hello monday" + data[rowLength2 + 6].timesheet.status
              );
              if (data[rowLength2 + 6].timesheet.status == "Approved") {
                this.MonApproval = true;
                this.MonApprovalTemp = "Approved";
              } else if (data[rowLength2 + 6].timesheet.status == "NEW") {
                this.MonApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeMonCol =
                data[rowLength2 + 6].timesheet.totalTimeHour;
            }

            //Tuesday
            if (Checkdate.getDay() == 2) {
              test33Tuesday = data[rowLength2].timesheetDetails[t2].hour;
              console.log("hello Tuesday");
              if (data[rowLength2].timesheet.status == "Approved") {
                this.TueApproval = true;
                this.TueApprovalTemp = "Approved";
              } else if (data[rowLength2].timesheet.status == "NEW") {
                this.TueApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeTueCol = data[rowLength2].timesheet.totalTimeHour;
            } else if (Checkdate1.getDay() == 2) {
              test33Tuesday = data[rowLength2 + 1].timesheetDetails[t2].hour;
              console.log("hello Tuesday");
              if (data[rowLength2 + 1].timesheet.status == "Approved") {
                this.TueApproval = true;
                this.TueApprovalTemp = "Approved";
              } else if (data[rowLength2 + 1].timesheet.status == "NEW") {
                this.TueApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeTueCol =
                data[rowLength2 + 1].timesheet.totalTimeHour;
            } else if (Checkdate2.getDay() == 2) {
              test33Tuesday = data[rowLength2 + 2].timesheetDetails[t2].hour;
              console.log("hello Tuesday");
              if (data[rowLength2 + 2].timesheet.status == "Approved") {
                this.TueApproval = true;
                this.TueApprovalTemp = "Approved";
              } else if (data[rowLength2 + 2].timesheet.status == "NEW") {
                this.TueApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeTueCol =
                data[rowLength2 + 2].timesheet.totalTimeHour;
            } else if (Checkdate3.getDay() == 2) {
              test33Tuesday = data[rowLength2 + 3].timesheetDetails[t2].hour;
              console.log("hello Tuesday");
              if (data[rowLength2 + 3].timesheet.status == "Approved") {
                this.TueApproval = true;
                this.TueApprovalTemp = "Approved";
              } else if (data[rowLength2 + 3].timesheet.status == "NEW") {
                this.TueApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeTueCol =
                data[rowLength2 + 3].timesheet.totalTimeHour;
            } else if (Checkdate4.getDay() == 2) {
              test33Tuesday = data[rowLength2 + 4].timesheetDetails[t2].hour;
              console.log("hello Tuesday");
              if (data[rowLength2 + 4].timesheet.status == "Approved") {
                this.TueApproval = true;
                this.TueApprovalTemp = "Approved";
              } else if (data[rowLength2 + 4].timesheet.status == "NEW") {
                this.TueApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeTueCol =
                data[rowLength2 + 4].timesheet.totalTimeHour;
            } else if (Checkdate5.getDay() == 2) {
              test33Tuesday = data[rowLength2 + 5].timesheetDetails[t2].hour;
              console.log("hello Tuesday");
              if (data[rowLength2 + 5].timesheet.status == "Approved") {
                this.TueApproval = true;
                this.TueApprovalTemp = "Approved";
              } else if (data[rowLength2 + 5].timesheet.status == "NEW") {
                this.TueApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeTueCol =
                data[rowLength2 + 5].timesheet.totalTimeHour;
            } else if (Checkdate6.getDay() == 2) {
              test33Tuesday = data[rowLength2 + 6].timesheetDetails[t2].hour;
              console.log("hello Tuesday");
              if (data[rowLength2 + 6].timesheet.status == "Approved") {
                this.TueApproval = true;
                this.TueApprovalTemp = "Approved";
              } else if (data[rowLength2 + 6].timesheet.status == "NEW") {
                this.TueApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeTueCol =
                data[rowLength2 + 6].timesheet.totalTimeHour;
            }

            //Wednesday
            if (Checkdate.getDay() == 3) {
              test44Wednesday = data[rowLength2].timesheetDetails[t2].hour;
              console.log("hello Wednesday");
              if (data[rowLength2].timesheet.status == "Approved") {
                this.WedApproval = true;
                this.WedApprovalTemp = "Approved";
              } else if (data[rowLength2].timesheet.status == "NEW") {
                this.WedApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeWedCol = data[rowLength2].timesheet.totalTimeHour;
            } else if (Checkdate1.getDay() == 3) {
              test44Wednesday = data[rowLength2 + 1].timesheetDetails[t2].hour;
              console.log("hello Wednesday");
              if (data[rowLength2 + 1].timesheet.status == "Approved") {
                this.WedApproval = true;
                this.WedApprovalTemp = "Approved";
              } else if (data[rowLength2 + 1].timesheet.status == "NEW") {
                this.WedApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeWedCol =
                data[rowLength2 + 1].timesheet.totalTimeHour;
            } else if (Checkdate2.getDay() == 3) {
              test44Wednesday = data[rowLength2 + 2].timesheetDetails[t2].hour;
              console.log("hello Wednesday");
              if (data[rowLength2 + 2].timesheet.status == "Approved") {
                this.WedApproval = true;
                this.WedApprovalTemp = "Approved";
              } else if (data[rowLength2 + 2].timesheet.status == "NEW") {
                this.WedApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeWedCol =
                data[rowLength2 + 2].timesheet.totalTimeHour;
            } else if (Checkdate3.getDay() == 3) {
              test44Wednesday = data[rowLength2 + 3].timesheetDetails[t2].hour;
              console.log("hello Wednesday");
              if (data[rowLength2 + 3].timesheet.status == "Approved") {
                this.WedApproval = true;
                this.WedApprovalTemp = "Approved";
              } else if (data[rowLength2 + 3].timesheet.status == "NEW") {
                this.WedApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeWedCol =
                data[rowLength2 + 3].timesheet.totalTimeHour;
            } else if (Checkdate4.getDay() == 3) {
              test44Wednesday = data[rowLength2 + 4].timesheetDetails[t2].hour;
              console.log("hello Wednesday");
              if (data[rowLength2 + 4].timesheet.status == "Approved") {
                this.WedApproval = true;
                this.WedApprovalTemp = "Approved";
              } else if (data[rowLength2 + 4].timesheet.status == "NEW") {
                this.WedApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeWedCol =
                data[rowLength2 + 4].timesheet.totalTimeHour;
            } else if (Checkdate5.getDay() == 3) {
              test44Wednesday = data[rowLength2 + 5].timesheetDetails[t2].hour;
              console.log("hello Wednesday");

              if (data[rowLength2 + 5].timesheet.status == "Approved") {
                this.WedApproval = true;
                this.WedApprovalTemp = "Approved";
              } else if (data[rowLength2 + 5].timesheet.status == "NEW") {
                this.WedApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeWedCol =
                data[rowLength2 + 5].timesheet.totalTimeHour;
            } else if (Checkdate6.getDay() == 3) {
              test44Wednesday = data[rowLength2 + 6].timesheetDetails[t2].hour;
              console.log("hello Wednesday");
              if (data[rowLength2 + 6].timesheet.status == "Approved") {
                this.WedApproval = true;
                this.WedApprovalTemp = "Approved";
              } else if (data[rowLength2 + 6].timesheet.status == "NEW") {
                this.WedApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeWedCol =
                data[rowLength2 + 6].timesheet.totalTimeHour;
            }

            //Thursday
            if (Checkdate.getDay() == 4) {
              test55Thursday = data[rowLength2].timesheetDetails[t2].hour;
              console.log("hello Thursday");
              if (data[rowLength2].timesheet.status == "Approved") {
                this.ThurApproval = true;
                this.ThurApprovalTemp = "Approved";
              } else if (data[rowLength2].timesheet.status == "NEW") {
                this.ThurApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeThurCol = data[rowLength2].timesheet.totalTimeHour;
            } else if (Checkdate1.getDay() == 4) {
              test55Thursday = data[rowLength2 + 1].timesheetDetails[t2].hour;
              console.log("hello Thursday");
              if (data[rowLength2 + 1].timesheet.status == "Approved") {
                this.ThurApproval = true;
                this.ThurApprovalTemp = "Approved";
              } else if (data[rowLength2 + 1].timesheet.status == "NEW") {
                this.ThurApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeThurCol =
                data[rowLength2 + 1].timesheet.totalTimeHour;
            } else if (Checkdate2.getDay() == 4) {
              test55Thursday = data[rowLength2 + 2].timesheetDetails[t2].hour;
              console.log("hello Thursday");
              if (data[rowLength2 + 2].timesheet.status == "Approved") {
                this.ThurApproval = true;
                this.ThurApprovalTemp = "Approved";
              } else if (data[rowLength2 + 2].timesheet.status == "NEW") {
                this.ThurApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeThurCol =
                data[rowLength2 + 2].timesheet.totalTimeHour;
            } else if (Checkdate3.getDay() == 4) {
              test55Thursday = data[rowLength2 + 3].timesheetDetails[t2].hour;
              console.log("hello Thursday");
              if (data[rowLength2 + 3].timesheet.status == "Approved") {
                this.ThurApproval = true;
                this.ThurApprovalTemp = "Approved";
              } else if (data[rowLength2 + 3].timesheet.status == "NEW") {
                this.ThurApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeThurCol =
                data[rowLength2 + 3].timesheet.totalTimeHour;
            } else if (Checkdate4.getDay() == 4) {
              test55Thursday = data[rowLength2 + 4].timesheetDetails[t2].hour;
              console.log("hello Thursday");
              if (data[rowLength2 + 4].timesheet.status == "Approved") {
                this.ThurApproval = true;
                this.ThurApprovalTemp = "Approved";
              } else if (data[rowLength2 + 4].timesheet.status == "NEW") {
                this.ThurApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeThurCol =
                data[rowLength2 + 4].timesheet.totalTimeHour;
            } else if (Checkdate5.getDay() == 4) {
              test55Thursday = data[rowLength2 + 5].timesheetDetails[t2].hour;
              console.log("hello Thursday");
              if (data[rowLength2 + 5].timesheet.status == "Approved") {
                this.ThurApproval = true;
                this.ThurApprovalTemp = "Approved";
              } else if (data[rowLength2 + 5].timesheet.status == "NEW") {
                this.ThurApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeThurCol =
                data[rowLength2 + 5].timesheet.totalTimeHour;
            } else if (Checkdate6.getDay() == 4) {
              test55Thursday = data[rowLength2 + 6].timesheetDetails[t2].hour;
              console.log("hello Thursday");
              if (data[rowLength2 + 6].timesheet.status == "Approved") {
                this.ThurApproval = true;
                this.ThurApprovalTemp = "Approved";
              } else if (data[rowLength2 + 6].timesheet.status == "NEW") {
                this.ThurApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeThurCol =
                data[rowLength2 + 6].timesheet.totalTimeHour;
            }

            //Friday
            if (Checkdate.getDay() == 5) {
              test66Friday = data[rowLength2].timesheetDetails[t2].hour;
              console.log("hello Friday");
              if (data[rowLength2].timesheet.status == "Approved") {
                this.FriApproval = true;
                this.FriApprovalTemp = "Approved";
              } else if (data[rowLength2].timesheet.status == "NEW") {
                this.FriApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeFriCol = data[rowLength2].timesheet.totalTimeHour;
            } else if (Checkdate1.getDay() == 5) {
              test66Friday = data[rowLength2 + 1].timesheetDetails[t2].hour;
              console.log("hello Friday");
              if (data[rowLength2 + 1].timesheet.status == "Approved") {
                this.FriApproval = true;
                this.FriApprovalTemp = "Approved";
              } else if (data[rowLength2 + 1].timesheet.status == "NEW") {
                this.FriApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeFriCol =
                data[rowLength2 + 1].timesheet.totalTimeHour;
            } else if (Checkdate2.getDay() == 5) {
              test66Friday = data[rowLength2 + 2].timesheetDetails[t2].hour;
              console.log("hello Friday");
              if (data[rowLength2 + 2].timesheet.status == "Approved") {
                this.FriApproval = true;
                this.FriApprovalTemp = "Approved";
              } else if (data[rowLength2 + 2].timesheet.status == "NEW") {
                this.FriApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeFriCol =
                data[rowLength2 + 2].timesheet.totalTimeHour;
            } else if (Checkdate3.getDay() == 5) {
              test66Friday = data[rowLength2 + 3].timesheetDetails[t2].hour;
              console.log("hello Friday");
              if (data[rowLength2 + 3].timesheet.status == "Approved") {
                this.FriApproval = true;
                this.FriApprovalTemp = "Approved";
              } else if (data[rowLength2 + 3].timesheet.status == "NEW") {
                this.FriApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeFriCol =
                data[rowLength2 + 3].timesheet.totalTimeHour;
            } else if (Checkdate4.getDay() == 5) {
              test66Friday = data[rowLength2 + 4].timesheetDetails[t2].hour;
              console.log("hello Friday");
              if (data[rowLength2 + 4].timesheet.status == "Approved") {
                this.FriApproval = true;
                this.FriApprovalTemp = "Approved";
              } else if (data[rowLength2 + 4].timesheet.status == "NEW") {
                this.FriApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeFriCol =
                data[rowLength2 + 4].timesheet.totalTimeHour;
            } else if (Checkdate5.getDay() == 5) {
              test66Friday = data[rowLength2 + 5].timesheetDetails[t2].hour;
              console.log("hello Friday");
              if (data[rowLength2 + 5].timesheet.status == "Approved") {
                this.FriApproval = true;
                this.FriApprovalTemp = "Approved";
              } else if (data[rowLength2 + 5].timesheet.status == "NEW") {
                this.FriApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeFriCol =
                data[rowLength2 + 5].timesheet.totalTimeHour;
            } else if (Checkdate6.getDay() == 5) {
              test66Friday = data[rowLength2 + 6].timesheetDetails[t2].hour;
              console.log("hello Friday");
              if (data[rowLength2 + 6].timesheet.status == "Approved") {
                this.FriApproval = true;
                this.FriApprovalTemp = "Approved";
              } else if (data[rowLength2 + 6].timesheet.status == "NEW") {
                this.FriApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeFriCol =
                data[rowLength2 + 6].timesheet.totalTimeHour;
            }

            //Saturday
            if (Checkdate.getDay() == 6) {
              test77Saturday = data[rowLength2].timesheetDetails[t2].hour;
              console.log("hello Saturday");
              if (data[rowLength2].timesheet.status == "Approved") {
                this.SatApproval = true;
                this.SatApprovalTemp = "Approved";
              } else if (data[rowLength2].timesheet.status == "NEW") {
                this.SatApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeSatCol = data[rowLength2].timesheet.totalTimeHour;
            } else if (Checkdate1.getDay() == 6) {
              test77Saturday = data[rowLength2 + 1].timesheetDetails[t2].hour;
              console.log("hello Saturday");
              if (data[rowLength2 + 1].timesheet.status == "Approved") {
                this.SatApproval = true;
                this.SatApprovalTemp = "Approved";
              } else if (data[rowLength2 + 1].timesheet.status == "NEW") {
                this.SatApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeSatCol =
                data[rowLength2 + 1].timesheet.totalTimeHour;
            } else if (Checkdate2.getDay() == 6) {
              test77Saturday = data[rowLength2 + 2].timesheetDetails[t2].hour;
              console.log("hello Saturday");
              if (data[rowLength2 + 2].timesheet.status == "Approved") {
                this.SatApproval = true;
                this.SatApprovalTemp = "Approved";
              } else if (data[rowLength2 + 2].timesheet.status == "NEW") {
                this.SatApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeSatCol =
                data[rowLength2 + 2].timesheet.totalTimeHour;
            } else if (Checkdate3.getDay() == 6) {
              test77Saturday = data[rowLength2 + 3].timesheetDetails[t2].hour;
              console.log("hello Saturday");
              if (data[rowLength2 + 3].timesheet.status == "Approved") {
                this.SatApproval = true;
                this.SatApprovalTemp = "Approved";
              } else if (data[rowLength2 + 3].timesheet.status == "NEW") {
                this.SatApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeSatCol =
                data[rowLength2 + 3].timesheet.totalTimeHour;
            } else if (Checkdate4.getDay() == 6) {
              test77Saturday = data[rowLength2 + 4].timesheetDetails[t2].hour;
              console.log("hello Saturday");
              if (data[rowLength2 + 4].timesheet.status == "Approved") {
                this.SatApproval = true;
                this.SatApprovalTemp = "Approved";
              } else if (data[rowLength2 + 4].timesheet.status == "NEW") {
                this.SatApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeSatCol =
                data[rowLength2 + 4].timesheet.totalTimeHour;
            } else if (Checkdate5.getDay() == 6) {
              test77Saturday = data[rowLength2 + 5].timesheetDetails[t2].hour;
              console.log("hello Saturday");
              if (data[rowLength2 + 5].timesheet.status == "Approved") {
                this.SatApproval = true;
                this.SatApprovalTemp = "Approved";
              } else if (data[rowLength2 + 5].timesheet.status == "NEW") {
                this.SatApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeSatCol =
                data[rowLength2 + 5].timesheet.totalTimeHour;
            } else if (Checkdate6.getDay() == 6) {
              test77Saturday = data[rowLength2 + 6].timesheetDetails[t2].hour;
              console.log("hello Saturday");
              if (data[rowLength2 + 6].timesheet.status == "Approved") {
                this.SatApproval = true;
                this.SatApprovalTemp = "Approved";
              } else if (data[rowLength2 + 6].timesheet.status == "NEW") {
                this.SatApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeSatCol =
                data[rowLength2 + 6].timesheet.totalTimeHour;
            }

            //Sunday
            if (Checkdate.getDay() == 0) {
              test88Sunday = data[rowLength2].timesheetDetails[t2].hour;
              console.log("hello Sunday");
              if (data[rowLength2].timesheet.status == "Approved") {
                this.SunApproval = true;
                this.SunApprovalTemp = "Approved";
              } else if (data[rowLength2].timesheet.status == "NEW") {
                this.SunApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeSunCol = data[rowLength2].timesheet.totalTimeHour;
            } else if (Checkdate1.getDay() == 0) {
              test88Sunday = data[rowLength2 + 1].timesheetDetails[t2].hour;
              console.log("hello Sunday");
              if (data[rowLength2 + 1].timesheet.status == "Approved") {
                this.SunApproval = true;
                this.SunApprovalTemp = "Approved";
              } else if (data[rowLength2 + 1].timesheet.status == "NEW") {
                this.SunApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeSunCol =
                data[rowLength2 + 1].timesheet.totalTimeHour;
            } else if (Checkdate2.getDay() == 0) {
              test88Sunday = data[rowLength2 + 2].timesheetDetails[t2].hour;
              console.log("hello Sunday");
              if (data[rowLength2 + 2].timesheet.status == "Approved") {
                this.SunApproval = true;
                this.SunApprovalTemp = "Approved";
              } else if (data[rowLength2 + 2].timesheet.status == "NEW") {
                this.SunApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeSunCol =
                data[rowLength2 + 2].timesheet.totalTimeHour;
            } else if (Checkdate3.getDay() == 0) {
              test88Sunday = data[rowLength2 + 3].timesheetDetails[t2].hour;
              console.log("hello Sunday");
              if (data[rowLength2 + 3].timesheet.status == "Approved") {
                this.SunApproval = true;
                this.SunApprovalTemp = "Approved";
              } else if (data[rowLength2 + 3].timesheet.status == "NEW") {
                this.SunApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeSunCol =
                data[rowLength2 + 3].timesheet.totalTimeHour;
            } else if (Checkdate4.getDay() == 0) {
              test88Sunday = data[rowLength2 + 4].timesheetDetails[t2].hour;
              console.log("hello Sunday");
              if (data[rowLength2 + 4].timesheet.status == "Approved") {
                this.SunApproval = true;
                this.SunApprovalTemp = "Approved";
              } else if (data[rowLength2 + 4].timesheet.status == "NEW") {
                this.SunApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeSunCol =
                data[rowLength2 + 4].timesheet.totalTimeHour;
            } else if (Checkdate5.getDay() == 0) {
              test88Sunday = data[rowLength2 + 5].timesheetDetails[t2].hour;
              console.log("hello Sunday");
              if (data[rowLength2 + 5].timesheet.status == "Approved") {
                this.SunApproval = true;
                this.SunApprovalTemp = "Approved";
              } else if (data[rowLength2 + 5].timesheet.status == "NEW") {
                this.SunApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeSunCol =
                data[rowLength2 + 5].timesheet.totalTimeHour;
            } else if (Checkdate6.getDay() == 0) {
              test88Sunday = data[rowLength2 + 6].timesheetDetails[t2].hour;
              console.log("hello Sunday");
              if (data[rowLength2 + 6].timesheet.status == "Approved") {
                this.SunApproval = true;
                this.SunApprovalTemp = "Approved";
              } else if (data[rowLength2 + 6].timesheet.status == "NEW") {
                this.SunApproval = false;
                this.WeekApprovalTemp = 0;
              }
              this.totalTimeSunCol =
                data[rowLength2 + 6].timesheet.totalTimeHour;
            }
            //total time row wise
            test99RowWisetotal =
              test22Monday +
              test33Tuesday +
              test44Wednesday +
              test55Thursday +
              test66Friday;

            console.log(
              "this is inside ashutosh " +
                data[rowLength2 + 1].timesheet.attedanceDate
            );

            console.log(" ashutosh " + Checkdate1.getDay());
            console.log("this is inside ashutosh " + Checkdate1);
            console.log("this is inside ashutosh " + test44Wednesday);
            console.log("this is inside ashutosh " + test55Thursday);
            console.log("this is inside ashutosh " + test66Friday);
            console.log("this is inside ashutosh " + test77Saturday);
            console.log("this is inside ashutosh " + test88Sunday);
            //this.totalTimeMonCol = data[rowLength2].timesheet.totalTimeHour;
            // this.totalTimeTueCol = data[rowLength2 + 1].timesheet.totalTimeHour;
            //  this.totalTimeWedCol = data[rowLength2 + 2].timesheet.totalTimeHour;
            //   this.totalTimeThurCol =     data[rowLength2 + 3].timesheet.totalTimeHour;
            //    this.totalTimeFriCol = data[rowLength2 + 4].timesheet.totalTimeHour;
            // this.totalTimeSatCol = data[rowLength2+5].timesheet.totalTimeHour;
            //    this.totalTimeSunCol = data[rowLength2+6].timesheet.totalTimeHour;
            //   this.totalTimeCol = data[47].timesheet.totalTimeHour;
            this.totalTimeCol =
              this.totalTimeMonCol +
              this.totalTimeTueCol +
              this.totalTimeWedCol +
              this.totalTimeThurCol +
              this.totalTimeSunCol +
              this.totalTimeFriCol +
              this.totalTimeSatCol;
            this.testDynamic = {
              projectName: test11Project,
              Monday: test22Monday,
              Tuesday: test33Tuesday,
              Wednesday: test44Wednesday,
              thursday: test55Thursday,
              Friday: test66Friday,
              Saturday: test77Saturday,
              Sunday: test88Sunday,
              TotaltimeRowwise: test99RowWisetotal,
            };

            this.dynamicArray.push(this.testDynamic);
            if (test10Shift == 0) {
              this.dynamicArray.shift();
              test10Shift = 1;
              //this is weekly approval
              //  this.WeekApprovalTemp=1;
            }
          }
        }

        //  }
      });
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
    //here first we do validation
    /*
    this.projects = this.projects.filter(
      (item) => item.Name !== this.EnterDropdownValidation
    );
    console.log(this.projects);
*/
    //add new row
    this.newDynamic = {
      projectName: "",
      Monday: "0",
      Tuesday: "0",
      Wednesday: "0",
      thursday: "0",
      Friday: "0",
      Saturday: "0",
      Sunday: "0",
      TotaltimeRowwise: "0",
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
      // this.dynamicArray.splice(index, 1);
      this.dynamicArray.pop();
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
    //this is for weekly approval
    this.WeekApprovalTemp = 0;
    //this is for ay wise approval
    this.MonApprovalTemp = "NEW";
    this.TueApprovalTemp = "NEW";
    this.WedApprovalTemp = "NEW";
    this.ThurApprovalTemp = "NEW";
    this.FriApprovalTemp = "NEW";
    this.SatApprovalTemp = "NEW";
    this.SunApprovalTemp = "NEW";
    //end
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

    /*
    api operation and push pop operation in prev date is 
      performed here
    */
    //here first we delte the all value of dynamic array
    this.dynamicArray.length = 0;
    //this part for save sucess message

    this.SaveMessageTemp = false;

    /*
     this is approval part variables
  */
    this.MonApproval = false;
    this.TueApproval = false;
    this.WedApproval = false;
    this.ThurApproval = false;
    this.FriApproval = false;
    this.SatApproval = false;
    this.SunApproval = false;
    //here we add one single value which is empty
    this.newDynamic = {
      projectName: "",
      Monday: "0",
      Tuesday: "0",
      Wednesday: "0",
      thursday: "0",
      Friday: "0",
      Saturday: "0",
      Sunday: "0",
      TotaltimeRowwise: "0",
    };
    this.dynamicArray.push(this.newDynamic);
    //here we zero the total time
    this.totalTimeMonCol = 0;
    this.totalTimeTueCol = 0;
    this.totalTimeWedCol = 0;
    this.totalTimeThurCol = 0;
    this.totalTimeFriCol = 0;
    // this.totalTimeSatCol = data[47].timesheet.totalTimeHour;
    //    this.totalTimeSunCol = data[47].timesheet.totalTimeHour;
    //   this.totalTimeCol = data[47].timesheet.totalTimeHour;
    this.totalTimeCol =
      this.totalTimeMonCol +
      this.totalTimeTueCol +
      this.totalTimeWedCol +
      this.totalTimeThurCol +
      this.totalTimeSunCol +
      this.totalTimeFriCol +
      this.totalTimeSatCol;

    //calling a retrive data function
    this.getAllTimesheetByEmpCode();
  }
  myFunctionNextdate() {
    //this is for weekly approval
    this.WeekApprovalTemp = 0;
    //this is for ay wise approval
    this.MonApprovalTemp = "NEW";
    this.TueApprovalTemp = "NEW";
    this.WedApprovalTemp = "NEW";
    this.ThurApprovalTemp = "NEW";
    this.FriApprovalTemp = "NEW";
    this.SatApprovalTemp = "NEW";
    this.SunApprovalTemp = "NEW";
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

    /*
    api operation and push pop operation in next date is 
      performed here
    */
    //here first we delte the all value of dynamic array
    this.dynamicArray.length = 0;

    //this part for save sucess message

    this.SaveMessageTemp = false;

    /*
     this is approval part variables
  */
    this.MonApproval = false;
    this.TueApproval = false;
    this.WedApproval = false;
    this.ThurApproval = false;
    this.FriApproval = false;
    this.SatApproval = false;
    this.SunApproval = false;
    //here we add one single value which is empty

    this.newDynamic = {
      projectName: "",
      Monday: "0",
      Tuesday: "0",
      Wednesday: "0",
      thursday: "0",
      Friday: "0",
      Saturday: "0",
      Sunday: "0",
      TotaltimeRowwise: "0",
    };
    this.dynamicArray.push(this.newDynamic);
    //here we zero the total time
    this.totalTimeMonCol = 0;
    this.totalTimeTueCol = 0;
    this.totalTimeWedCol = 0;
    this.totalTimeThurCol = 0;
    this.totalTimeFriCol = 0;
    // this.totalTimeSatCol = data[47].timesheet.totalTimeHour;
    //    this.totalTimeSunCol = data[47].timesheet.totalTimeHour;
    //   this.totalTimeCol = data[47].timesheet.totalTimeHour;
    this.totalTimeCol =
      this.totalTimeMonCol +
      this.totalTimeTueCol +
      this.totalTimeWedCol +
      this.totalTimeThurCol +
      this.totalTimeSunCol +
      this.totalTimeFriCol +
      this.totalTimeSatCol;

    //calling a retrive data function
    this.getAllTimesheetByEmpCode();
  }

  /*database part of monday*/
  timesheetObject1: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "",
      empName: "",
      status: "",
      totalTimeHour: 0,
    },
    timesheetDetails: [],
  };

  /*database part of tuesday*/
  timesheetObject2: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "",
      empName: "",
      status: "",
      totalTimeHour: 0,
    },
    timesheetDetails: [],
  };

  /*database part of wednesday*/
  timesheetObject3: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "",
      empName: "",
      status: "",
      totalTimeHour: 0,
    },
    timesheetDetails: [],
  };

  /*database part of thurusday*/
  timesheetObject4: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "",
      empName: "",
      status: "",
      totalTimeHour: 0,
    },
    timesheetDetails: [],
  };
  /*database part of friday*/
  timesheetObject5: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "",
      empName: "",
      status: "",
      totalTimeHour: 0,
    },
    timesheetDetails: [],
  };
  /*database part of saturday*/
  timesheetObject6: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "",
      empName: "",
      status: "",
      totalTimeHour: 0,
    },
    timesheetDetails: [],
  };
  /*database part of sunday*/
  timesheetObject7: TimesheetObject = {
    timesheet: {
      attedanceDate: null,
      empCode: "",
      empName: "",
      status: "",
      totalTimeHour: 0,
    },
    timesheetDetails: [],
  };
  dateFormatChange(dateString) {
    // let dateString = "15/03/2021 (Mon)";
    let dateStrin = dateString.split(" ", 1);

    let strrr = dateStrin.toString();
    console.log(strrr);
    let first = "";
    let sec = "";
    let third = "";
    let temp = 0;
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

    let str = third + "/" + sec + "/" + first;
    console.log(str);
    let newDate = new Date(str);

    console.log(newDate);
    return newDate;
  }
  dateFormatChangeee(dateString) {
    // let dateString = "15/03/2021 (Mon)";
    let dateStrin = dateString.split(" ", 1);

    let strrr = dateStrin.toString();
    console.log(strrr);
    let first = "";
    let sec = "";
    let third = "";
    let temp = 0;
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

    let str = third + "-" + sec + "-" + first;
    console.log(str);
    //  let newDate = new Date(str);

    //  console.log(newDate);
    return str;
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

  //this part is used for validation
  getValidationOfValue(val) {
    // console.warn(val);
    this.EnterValueValidation = val;
    if (this.EnterValueValidation > 24) {
      alert("Invalid Value(Value>24)");
    } else if (this.EnterValueValidation < 0) {
      alert("Invalid Negative Value");
    } else if (
      this.EnterValueValidation >= 0 &&
      this.EnterValueValidation <= 24
    ) {
    } else {
      alert("Invalid Value String");
    }
  }
  //validation of project
  getValidationOfProject(val) {
    console.log(val);
    this.EnterDropdownValidation = val;

    console.log(this.projects);
    // delete this.projects[val];
  }
  //when change the value of employee dropdoen then this function will be call
  getEmployeeHierarchy(getId) {
    console.log("Hierarchy" + getId);

    this.empCode = getId;

    //here we can Approval/save/next/prev button for hierarchy
    let SavaHierarchy = localStorage.getItem("employeeInfo");
    if (this.empCode == SavaHierarchy) {
      this.SaveHierarchyTemp = true;
      this.ApprovalHierarchyTemp = false;
    } else {
      this.SaveHierarchyTemp = false;
      this.ApprovalHierarchyTemp = true;
    }
    //end
    //implementation part of hierarchy
    //this is for weekly approval
    this.WeekApprovalTemp = 0;
    //this is for ay wise approval
    this.MonApprovalTemp = "NEW";
    this.TueApprovalTemp = "NEW";
    this.WedApprovalTemp = "NEW";
    this.ThurApprovalTemp = "NEW";
    this.FriApprovalTemp = "NEW";
    this.SatApprovalTemp = "NEW";
    this.SunApprovalTemp = "NEW";
    //end

    /*
    api operation and push pop operation in prev date is 
      performed here
    */
    //here first we delte the all value of dynamic array
    this.dynamicArray.length = 0;
    //this part for save sucess message

    this.SaveMessageTemp = false;

    /*
     this is approval part variables
  */
    this.MonApproval = false;
    this.TueApproval = false;
    this.WedApproval = false;
    this.ThurApproval = false;
    this.FriApproval = false;
    this.SatApproval = false;
    this.SunApproval = false;
    //here we add one single value which is empty
    this.newDynamic = {
      projectName: "",
      Monday: "0",
      Tuesday: "0",
      Wednesday: "0",
      thursday: "0",
      Friday: "0",
      Saturday: "0",
      Sunday: "0",
      TotaltimeRowwise: "0",
    };
    this.dynamicArray.push(this.newDynamic);
    //here we zero the total time
    this.totalTimeMonCol = 0;
    this.totalTimeTueCol = 0;
    this.totalTimeWedCol = 0;
    this.totalTimeThurCol = 0;
    this.totalTimeFriCol = 0;
    // this.totalTimeSatCol = data[47].timesheet.totalTimeHour;
    //    this.totalTimeSunCol = data[47].timesheet.totalTimeHour;
    //   this.totalTimeCol = data[47].timesheet.totalTimeHour;
    this.totalTimeCol =
      this.totalTimeMonCol +
      this.totalTimeTueCol +
      this.totalTimeWedCol +
      this.totalTimeThurCol +
      this.totalTimeSunCol +
      this.totalTimeFriCol +
      this.totalTimeSatCol;

    console.log("hello");
    //calling a retrive data function
    this.getAllTimesheetByEmpCode();
  }
  //common save for all the fill date
  saveEx() {
    //this if is used for week approval
    //also else is used
    if (this.WeekApprovalTemp == 0) {
      //this.timesheetObject1.timesheet = null;
      this.timesheetObject1.timesheetDetails = [];
      this.timesheetObject2.timesheetDetails = [];
      this.timesheetObject3.timesheetDetails = [];
      this.timesheetObject4.timesheetDetails = [];
      this.timesheetObject5.timesheetDetails = [];
      this.timesheetObject6.timesheetDetails = [];
      this.timesheetObject7.timesheetDetails = [];
      if (this.testNumberSave == 0) {
        console.log(this.dynamicArray);
        console.log(
          "this is length of dynamic array " + this.dynamicArray.length
        );

        let ProjectWise: String[];
        ProjectWise = this.dynamicArray.map((i) => i.projectName);
        let str = "";
        str = ProjectWise.toString();
        //here splitted means project
        let splitted = null;
        splitted = str.split(",");

        //project select validation
        let ProjectValidationTemp = 1;
        for (let mm = 0; mm < splitted.length; mm++) {
          console.log("Project Name" + splitted[mm]);
          if (splitted[mm].length <= 0) {
            ProjectValidationTemp = 0;
            alert("Poject is required");
          }
        }

        //this if is used for validation of project validaton
        if (ProjectValidationTemp == 1) {
          //Monday
          var data1: String[];
          data1 = this.dynamicArray.map((i) => i.Monday);
          let str1 = "";
          str1 = data1.toString();
          var splitted1: String[];
          splitted1 = str1.split(",");
          this.totalTimeMonCol = 0;
          //this validation is used for day wise calculation of approval part appprove or new
          console.log("amish" + this.MonApprovalTemp);
          if (this.MonApprovalTemp == "Approved") {
            this.timesheetObject1.timesheet.status = "Approved";
          } else {
            this.timesheetObject1.timesheet.status = "NEW";
          }

          //end
          if (splitted != null) {
            for (let mm = 0; mm < splitted.length; mm++) {
              let timesheetArr = this.timesheetArray;
              // let x= [...timesheetArr];
              let newDate = new Date(this.dateFormatChange(this.mon));
              this.timesheetObject1.timesheet.attedanceDate = newDate;
              console.log("string to date", newDate);
              //if any problem occurs in calculation then remove validation part and uncomment the next 2 uncommented line
              //    this.totalTimeMonCol = this.totalTimeMonCol + +splitted1[mm];
              console.log(this.mon + " " + splitted[mm] + " " + splitted1[mm]);
              this.timesheetDetailsArray.comments = "ABCD";
              //   this.timesheetDetailsArray.hour = +splitted1[mm];
              //validation part start of grid table
              let testIf = +splitted1[mm];
              if (testIf > 24) {
                this.timesheetDetailsArray.hour = 24;
                this.totalTimeMonCol = this.totalTimeMonCol + 24;
              } else if (testIf < 0) {
                this.timesheetDetailsArray.hour = 0;
                this.totalTimeMonCol = this.totalTimeMonCol + 0;
              } else if (testIf >= 0 && testIf <= 24) {
                this.timesheetDetailsArray.hour = +splitted1[mm];
                this.totalTimeMonCol = this.totalTimeMonCol + testIf;
              } else {
                this.timesheetDetailsArray.hour = 0;
                this.totalTimeMonCol = this.totalTimeMonCol + 0;
              }
              //validation part end of grid table

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
          var data2: String[];
          data2 = this.dynamicArray.map((t) => t.Tuesday);
          let str2 = "";
          str2 = data2.toString();
          var splitted2: String[];
          splitted2 = str2.split(",");
          this.totalTimeTueCol = 0;

          //this validation is used for day wise calculation of approval part appprove or new
          if (this.TueApprovalTemp == "Approved") {
            this.timesheetObject2.timesheet.status = "Approved";
          } else {
            this.timesheetObject2.timesheet.status = "NEW";
          }

          //end
          if (splitted != null) {
            for (let mm = 0; mm < splitted.length; mm++) {
              let timesheetArr2 = this.timesheetArray2;
              let newDate2 = new Date(this.dateFormatChange(this.tue));
              this.timesheetObject2.timesheet.attedanceDate = newDate2;
              //    this.totalTimeTueCol = this.totalTimeTueCol + +splitted2[mm];
              console.log(this.tue + " " + splitted[mm] + " " + splitted2[mm]);
              this.timesheetDetailsArray2.comments = "ABCD";
              //   this.timesheetDetailsArray2.hour = +splitted2[mm];
              //validation part start
              let testIf = +splitted2[mm];
              if (testIf > 24) {
                this.timesheetDetailsArray2.hour = 24;
                this.totalTimeTueCol = this.totalTimeTueCol + 24;
              } else if (testIf < 0) {
                this.timesheetDetailsArray2.hour = 0;
                this.totalTimeTueCol = this.totalTimeTueCol + 0;
              } else if (testIf >= 0 && testIf <= 24) {
                this.timesheetDetailsArray2.hour = +splitted2[mm];
                this.totalTimeTueCol = this.totalTimeTueCol + testIf;
              } else {
                this.timesheetDetailsArray2.hour = 0;
                this.totalTimeTueCol = this.totalTimeTueCol + 0;
              }
              //validation part end
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
          var data3: String[];
          data3 = this.dynamicArray.map((t) => t.Wednesday);
          let str3 = "";
          str3 = data3.toString();
          var splitted3: String[];
          splitted3 = str3.split(",");
          this.totalTimeWedCol = 0;

          //this validation is used for day wise calculation of approval part appprove or new
          if (this.WedApprovalTemp == "Approved") {
            this.timesheetObject3.timesheet.status = "Approved";
          } else {
            this.timesheetObject3.timesheet.status = "NEW";
          }

          //end
          if (splitted != null) {
            for (let mm = 0; mm < splitted.length; mm++) {
              let timesheetArr3 = this.timesheetArray3;
              let newDate3 = new Date(this.dateFormatChange(this.wed));
              this.timesheetObject3.timesheet.attedanceDate = newDate3;
              //  this.totalTimeWedCol = this.totalTimeWedCol + +splitted3[mm];
              console.log(this.wed + " " + splitted[mm] + " " + splitted3[mm]);
              this.timesheetDetailsArray3.comments = "ABCD";
              // this.timesheetDetailsArray3.hour = +splitted3[mm];
              //validation part start
              let testIf = +splitted3[mm];
              if (testIf > 24) {
                this.timesheetDetailsArray3.hour = 24;
                this.totalTimeWedCol = this.totalTimeWedCol + 24;
              } else if (testIf < 0) {
                this.timesheetDetailsArray3.hour = 0;
                this.totalTimeWedCol = this.totalTimeWedCol + 0;
              } else if (testIf >= 0 && testIf <= 24) {
                this.timesheetDetailsArray3.hour = +splitted3[mm];
                this.totalTimeWedCol = this.totalTimeWedCol + testIf;
              } else {
                this.timesheetDetailsArray3.hour = 0;
                this.totalTimeWedCol = this.totalTimeWedCol + 0;
              }
              //validation part end

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
          var data4: String[];
          data4 = this.dynamicArray.map((t) => t.thursday);
          let str4 = "";
          str4 = data4.toString();
          var splitted4: String[];
          splitted4 = str4.split(",");
          this.totalTimeThurCol = 0;

          //this validation is used for day wise calculation of approval part appprove or new
          if (this.ThurApprovalTemp == "Approved") {
            this.timesheetObject4.timesheet.status = "Approved";
          } else {
            this.timesheetObject4.timesheet.status = "NEW";
          }

          //end
          if (splitted != null) {
            for (let mm = 0; mm < splitted.length; mm++) {
              let timesheetArr4 = this.timesheetArray4;
              let newDate4 = new Date(this.dateFormatChange(this.thur));
              this.timesheetObject4.timesheet.attedanceDate = newDate4;
              //  this.totalTimeThurCol = this.totalTimeThurCol + +splitted4[mm];
              console.log(this.thur + " " + splitted[mm] + " " + splitted4[mm]);
              this.timesheetDetailsArray4.comments = "ABCD";
              //  this.timesheetDetailsArray4.hour = +splitted4[mm];
              //validation part start
              let testIf = +splitted4[mm];
              if (testIf > 24) {
                this.timesheetDetailsArray4.hour = 24;
                this.totalTimeThurCol = this.totalTimeThurCol + 24;
              } else if (testIf < 0) {
                this.timesheetDetailsArray4.hour = 0;
                this.totalTimeThurCol = this.totalTimeThurCol + 0;
              } else if (testIf >= 0 && testIf <= 24) {
                this.timesheetDetailsArray4.hour = +splitted4[mm];
                this.totalTimeThurCol = this.totalTimeThurCol + testIf;
              } else {
                this.timesheetDetailsArray4.hour = 0;
                this.totalTimeThurCol = this.totalTimeThurCol + 0;
              }
              //validation part end
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
          var data5: String[];
          data5 = this.dynamicArray.map((t) => t.Friday);
          let str5 = "";
          str5 = data5.toString();
          var splitted5: String[];
          splitted5 = str5.split(",");
          this.totalTimeFriCol = 0;

          //this validation is used for day wise calculation of approval part appprove or new
          if (this.FriApprovalTemp == "Approved") {
            this.timesheetObject5.timesheet.status = "Approved";
          } else {
            this.timesheetObject5.timesheet.status = "NEW";
          }
          //end

          if (splitted != null) {
            for (let mm = 0; mm < splitted.length; mm++) {
              let timesheetArr5 = this.timesheetArray5;
              let newDate5 = new Date(this.dateFormatChange(this.fri));
              this.timesheetObject5.timesheet.attedanceDate = newDate5;
              //   this.totalTimeFriCol = this.totalTimeFriCol + +splitted5[mm];
              console.log(this.fri + " " + splitted[mm] + " " + splitted5[mm]);
              this.timesheetDetailsArray5.comments = "ABCD";
              // this.timesheetDetailsArray5.hour = +splitted5[mm];
              //validation part start
              let testIf = +splitted5[mm];
              if (testIf > 24) {
                this.timesheetDetailsArray5.hour = 24;
                this.totalTimeFriCol = this.totalTimeFriCol + 24;
              } else if (testIf < 0) {
                this.timesheetDetailsArray5.hour = 0;
                this.totalTimeFriCol = this.totalTimeFriCol + 0;
              } else if (testIf >= 0 && testIf <= 24) {
                this.timesheetDetailsArray5.hour = +splitted5[mm];
                this.totalTimeFriCol = this.totalTimeFriCol + testIf;
              } else {
                this.timesheetDetailsArray5.hour = 0;
                this.totalTimeFriCol = this.totalTimeFriCol + 0;
              }
              //validation part end

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
          var data6: String[];
          data6 = this.dynamicArray.map((t) => t.Saturday);
          let str6 = "";
          str6 = data6.toString();
          var splitted6: String[];
          splitted6 = str6.split(",");
          this.totalTimeSatCol = 0;
          //this validation is used for day wise calculation of approval part appprove or new

          if (this.SatApprovalTemp == "Approved") {
            this.timesheetObject6.timesheet.status = "Approved";
          } else {
            this.timesheetObject6.timesheet.status = "NEW";
          }
          //end

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
          var data7: String[];
          data7 = this.dynamicArray.map((t) => t.Sunday);
          let str7 = "";
          str7 = data7.toString();
          var splitted7: String[];
          splitted7 = str7.split(",");
          this.totalTimeSunCol = 0;
          //this validation is used for day wise calculation of approval part appprove or new

          if (this.SunApprovalTemp == "Approved") {
            this.timesheetObject7.timesheet.status = "Approved";
          } else {
            this.timesheetObject7.timesheet.status = "NEW";
          }
          //end

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

          /*
      total time row wise
      */

          for (let mm = 0; mm < splitted.length; mm++) {
            let rowWiseTime =
              +splitted1[mm] +
              +splitted2[mm] +
              +splitted3[mm] +
              +splitted4[mm] +
              +splitted5[mm] +
              +splitted6[mm] +
              +splitted7[mm];
            let rowWiseTimeString: string;
            rowWiseTimeString = String(rowWiseTime);
            this.dynamicArray[mm].TotaltimeRowwise = rowWiseTimeString;

            console.log("this is total row wise time" + rowWiseTimeString);
          }
          //here we do project is zero
          splitted.length = 0;

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

          //this part for save sucess message

          this.SaveMessageTemp = true;

          //this.testNumberSave = 1;
        }
      }
    } else {
      alert("Can't be Saved");
    }
  }
}
