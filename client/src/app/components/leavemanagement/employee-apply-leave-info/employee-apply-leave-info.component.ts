import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { DatePipe } from "@angular/common";
import { LeaveMgmtService } from "src/app/services/leave-mgmt.service";
import { LeaveMgmt } from "src/app/models/leave-mgmt.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";
import { DashbaordService } from "src/app/services/dashbaord.service";

@Component({
  selector: "app-employee-apply-leave-info",
  templateUrl: "./employee-apply-leave-info.component.html",
  styleUrls: ["./employee-apply-leave-info.component.scss"],
})
export class EmployeeApplyLeaveInfoComponent implements OnInit {
  leaveItem;
  leavtype: string;
  leaveReason: string;
  fDate: Date;
  tDate: Date;
  todate: Date;
  fromDate: Date;
  leaveValue: string;
  totalnOfDays: number;
  IsLeaveInvalid: boolean = true;
  show: boolean = false;
  leaveLimit: any;
  roleValue: boolean = false;
  intialalLeaveValue: any;
  LeaveData: any;
  LeaveMgmt = {
    status: "",
    empCode: "",
    empName: "",
    emailId: "",
    createdDate: "",
    leaveCode: "",
    fromDate: "",
    toDate: "",
    leaveReason: "",
    totalLeaveGranted: 0,
    totalLeaveAvaiable: 0,
    leaveApplied: 0,
    leaveInfo: {
      leaveLimit: 0,
    },
    managerCode: "",
    designation: "",
    rejectionReason: "",
  };
  LeaveObj = {
    empCode: "",
    firstName: "",
    lastName: "",
    emailId: "",
    createdDate: "",
    leaveType: "",
    formDate: "",
    toDate: "",
    Reason: "",
    Status: "",
    LeaveApplied: "",
    totalLeaveAvaiable: 0,
    totalLeaveGranted: 0,
  };
  ecode1: any;
  managCode: any;
  constructor(
    private leaveService: LeaveMgmtService,
    private adminService: AdminService,
    private dashbordService: DashbaordService,
    private datePipe: DatePipe,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog,
    public router: Router
  ) {
    let userDataCode = localStorage.getItem("employeeInfo");
    this.ecode1 = userDataCode;

    this.getDataByLocalStorageByEmpCode(this.ecode1);
    console.log("empcode is", this.ecode1);
    this.getEmployeesLeaveInfoDataValues(this.ecode1);
  }

  ngOnInit() {
    this.getLeaveTypeDataValues();
    this.getLeaveType();
    this.getWeeklyOfDays();
    this.getAllHolidays();
    this.getAllEmployeeLeaveData();
    this.calculateToday();

    this.showTabBasedOnRole();
    //this.getEmpDatabyLeaveCodeAndLeaveCode();
  }

  toDate(value) {
    console.log("To date", value);
    this.datePipe.transform(this.tDate, "dd/mm/yyyy");
    this.tDate = value;
    this.todate = value;
    this.calculateDay();
    //  this.totalGrant += this.totalnOfDays;
    //  console.log("check leave totalLeaveAvaiable4 value", this.totalGrant);
    //  leaveValue.totalLeaveGranted = this.totalGrant;
    //  console.log(
    //    "check leave totalLeaveAvaiable2 value",
    //    leaveValue.totalLeaveGranted
    //  );
    this.totalgrantleave();
  }

  //totalgrantleave function calculate ToatalAvaiableLeave totalGrantLeave Days .
  totalgrantleave() {
    let arrayRes2 = this.availableLeave.map((a) => a.totalLeaveGranted);
    console.log("this.avaiableExaDt value2  ", arrayRes2[0]);
    this.avaiableExaGrantData = arrayRes2[0];
    this.avaiableExaGrantData += this.totalnOfDays;
    console.log(
      "check leave totalLeaveAvaiable4 value",
      this.avaiableExaGrantData
    );
  }

  //from Date calculation
  fromCoDate(value) {
    console.log("fom date", value);
    this.datePipe.transform(this.fDate, "dd/mm/yyyy");
    this.fDate = value;
    console.log("from date", this.fDate);
    this.calculateDay();
    this.totalgrantleave();
  }

  weekDays: any;
  weekendDay1: any;
  weekendDay2: any;
  getWeeklyOfDays() {
    this.leaveService.getWeekOfDays().subscribe((response: any) => {
      this.weekDays = response;
      let weekRes = this.weekDays.map((e) => e.dayCode);
      console.log("weekRes coming from backend ", weekRes);
      this.weekendDay1 = weekRes[0];
      console.log(" this.weekendDay1 coming from backend ", this.weekendDay1);
      this.weekendDay2 = weekRes[1];
      console.log(" this.weekendDay2 coming from backend ", this.weekendDay2);
      console.log("this.weekDays coming from backend ", this.weekDays);
    });
  }
  getLeaveType() {
    this.leaveService.getLeaveTypeData().subscribe((response: any) => {
      this.LeaveData = response;
      console.log("Leave Type Date coming from backend ", this.LeaveData);
    });
  }

  holidays: any;
  holidayDateValList: any;
  getAllHolidays() {
    this.leaveService.getHolidays().subscribe((response: any) => {
      this.holidays = response;
      let holiRes = this.holidays.map((f) => f.holidayDate);
      this.holidayDateValList = holiRes;
      console.log(
        "   this.holidayDateValList coming from backend ",
        this.holidayDateValList
      );
      // this.holidays.push(this.holidayDate);
      console.log(" this.holidays coming from backend ", holiRes);
    });
  }
  // getLeaveLimit() {
  //   var result = this.LeaveData.filter((obj) => {
  //     return obj.leaveCode === 6;
  //   });
  // }

  //get the employeecode Data through localstorage logged in empCode

  localDataEmpcode: any;
  empFirstName: any;
  empName: any;
  empCodeVal: any;
  empEmailId: any;
  degisnation: any;
  getDataByLocalStorageByEmpCode(userDataCode) {
    this.dashbordService
      .getEmployeeInfoByEmpCode(userDataCode)
      .subscribe((response: any) => {
        this.localDataEmpcode = response;
        console.log("LocalSotarage empCode Data ", this.localDataEmpcode);
        this.empCodeVal = response.empCode;
        console.log("LocalSotarage empCode Data ", this.empCodeVal);
        this.empName = response.firstName + " " + response.lastName;
        console.log("LocalSotarage this.empName ", this.empName);
        this.degisnation = response.designation;
        console.log("LocalSotarage this.degisnation ", this.degisnation);

        this.empEmailId = response.emailId;
        console.log("LocalSotarage this.empEmailId ", this.empEmailId);
        this.managCode = response.reportingManager.empCode;
        console.log("LocalSotarage this.managCode ", this.managCode);
      });
  }
  roledesignationData: any;
  showTabBasedOnRole() {
    this.leaveService
      .getAllEmployeeDataUnderManager(this.ecode1)
      .subscribe((response: any) => {
        console.log("empolyeedataUndermanager ", response);
        this.roledesignationData = response;
        console.log("datalength", this.roledesignationData.length);
        if (this.roledesignationData.length != 0) {
          this.roleValue = true;
        }
      });
  }
  /*.....This calculateDay() function calculate  number of days between two dates to substract weekly off Daya and Holidays........*/

  calculateDay() {
    var weekDaysNames = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    console.log(" weekDaysNames.length", weekDaysNames.length);
    var dayCodeValue1;
    var dayCodeValue2;
    console.log("dayCodeValue1 is", dayCodeValue1);
    console.log("dayCodeValue2 is", dayCodeValue2);
    console.log(" this.weekendDay1 coming from backend ", this.weekendDay1);
    console.log(" this.weekendDay2 coming from backend ", this.weekendDay2);
    console.log(" weekDaysNames[0] coming from backend ", weekDaysNames[0]);

    if (weekDaysNames[0] === this.weekendDay1) {
      dayCodeValue1 = 0;
      console.log("dayCodeValue1 is", dayCodeValue1);
    } else if (weekDaysNames[1] === this.weekendDay1) {
      dayCodeValue1 = 1;
      console.log("dayCodeValue1 is", dayCodeValue1);
    } else if (weekDaysNames[2] === this.weekendDay1) {
      dayCodeValue1 = 2;
      console.log("dayCodeValue1 is", dayCodeValue1);
    } else if (weekDaysNames[3] === this.weekendDay1) {
      dayCodeValue1 = 3;
      console.log("dayCodeValue1 is", dayCodeValue1);
    } else if (weekDaysNames[4] === this.weekendDay1) {
      dayCodeValue1 = 4;
      console.log("dayCodeValue1 is", dayCodeValue1);
    } else if (weekDaysNames[5] === this.weekendDay1) {
      dayCodeValue1 = 5;
      console.log("dayCodeValue1 is", dayCodeValue1);
    } else if (weekDaysNames[6] === this.weekendDay1) {
      dayCodeValue1 = 6;
      console.log("dayCodeValue1 is", dayCodeValue1);
    }

    if (weekDaysNames[0] === this.weekendDay2) {
      dayCodeValue2 = 0;
      console.log("dayCodeValue2 is", dayCodeValue2);
    } else if (weekDaysNames[1] === this.weekendDay2) {
      dayCodeValue2 = 1;
      console.log("dayCodeValue2 is", dayCodeValue2);
    } else if (weekDaysNames[2] === this.weekendDay2) {
      dayCodeValue2 = 2;
      console.log("dayCodeValue2 is", dayCodeValue2);
    } else if (weekDaysNames[3] === this.weekendDay2) {
      dayCodeValue2 = 3;
      console.log("dayCodeValue2 is", dayCodeValue2);
    } else if (weekDaysNames[4] === this.weekendDay2) {
      dayCodeValue2 = 4;
      console.log("dayCodeValue2 is", dayCodeValue2);
    } else if (weekDaysNames[5] === this.weekendDay2) {
      dayCodeValue2 = 5;
      console.log("dayCodeValue2 is", dayCodeValue2);
    } else if (weekDaysNames[6] === this.weekendDay2) {
      dayCodeValue2 = 6;
      console.log("dayCodeValue2 is", dayCodeValue2);
    }

    var holidaysVal = [];
    holidaysVal = this.holidayDateValList;
    console.log("holidays values is", holidaysVal);
    var days = 0;
    var startDate = new Date(this.fDate);
    var endDate = new Date(this.tDate);
    console.log("check2 end", endDate);
    console.log("check3 start", startDate);
    console.log("check1", this.todate);

    // Validate input
    if (endDate < startDate) {
      days = 0;
    }
    var d1 = startDate.setHours(0, 0, 0, 1);
    var d2 = endDate.setHours(23, 59, 59, 999);
    var diff = d2 - d1;
    console.log("diff is value1", diff);
    var mill = 86400 * 1000;

    days = Math.ceil(diff / mill);
    console.log("Days value is", days);
    //Subtract two weekend days for every week in between
    var weeks = Math.floor(days / 7);
    days -= weeks * 2;

    // Handle special cases
    var startDay = startDate.getDay();
    var endDay = endDate.getDay();

    // Remove weekend not previously removed.
    if (startDay - endDay > 1) {
      days -= 2;
    }
    // Remove start day if span starts on Sunday but ends before Saturday
    if (startDay == dayCodeValue2 && endDay != dayCodeValue1) {
      days--;
    }
    // Remove end day if span ends on Saturday but starts after Sunday
    if (endDay == dayCodeValue1 && startDay != dayCodeValue2) {
      days--;
    }
    // var count = 0;
    // var curDate = startDate;
    // while (curDate <= endDate) {
    //   var dayOfWeek = curDate.getDay();
    //   if (!(dayOfWeek == 6 || dayOfWeek == 0)) count++;
    //   curDate.setDate(curDate.getDate() + 1);
    // }
    holidaysVal.forEach((d) => {
      let day = new Date(d);
      console.log("day values is", day);
      if (day >= startDate && day <= endDate) {
        /* If it is not saturday (6) or sunday (0), substract it */
        if (day.getDay() % dayCodeValue1 != 0) {
          days--;
        }
      }
    });

    this.totalnOfDays = days;
    console.log("check3", this.totalnOfDays);

    this.show = true;
  }
  // stringToDate(_date, _format, _delimiter) {
  //   var formatLowerCase = _format.toLowerCase();
  //   var formatItems = formatLowerCase.split(_delimiter);
  //   var dateItems = _date.split(_delimiter);
  //   var monthIndex = formatItems.indexOf("mm");
  //   var dayIndex = formatItems.indexOf("dd");
  //   var yearIndex = formatItems.indexOf("yyyy");
  //   var year = parseInt(dateItems[yearIndex]);
  //   // adjust for 2 digit year
  //   if (year < 100) {
  //     year += 2000;
  //   }
  //   var month = parseInt(dateItems[monthIndex]);
  //   month -= 1;
  //   var formatedDate = new Date(year, month, dateItems[dayIndex]);
  //   return formatedDate;
  // }
  // getEmpDatabyLeaveCodeAndLeaveCode() {
  //   this.leaveService
  //     .getEmpDataByEmpcodeAndLeaveCode(this.empcode1, this.leavtype)
  //     .subscribe((response1: any) => {
  //       console.log("Empcode Data and LeaveCode Data  ", response1);
  //     });
  // }
  availableLeave: any;
  avaiableExaGrantData: any;
  avaiableExaTotalData: any;
  ChooseReason1(value) {
    console.log("check4 leave2 Reason", value);
    this.leaveReason = value;
    console.log("check4 leave Reason", this.leaveReason);
    let arrayRes = this.availableLeave.map((a) => a.totalLeaveAvaiable);
    console.log("this.avaiableExaDt value  ", arrayRes[0]);
    this.avaiableExaTotalData = arrayRes[0];
  }
  remainingAvaiable: any;
  totalGrant = 0;
  leaveApply(leaveValue: LeaveMgmt) {
    const len = this.availableLeave.length;
    if (len == 0) {
      leaveValue.leaveApplied = this.totalnOfDays;
      leaveValue.totalLeaveAvaiable = this.intialalLeaveValue;
      console.log(
        "check leave totalLeaveAvaiable1 value",
        this.intialalLeaveValue
      );
      this.totalGrant = this.totalnOfDays;
      console.log("check leave totalLeaveAvaiable4 value", this.totalGrant);
      leaveValue.totalLeaveGranted = this.totalGrant;
      console.log(
        "check leave totalLeaveAvaiable2 value",
        leaveValue.totalLeaveGranted
      );
      this.remainingAvaiable =
        leaveValue.totalLeaveAvaiable - leaveValue.totalLeaveGranted;
      console.log(
        "check leave totalLeaveAvaiable3 value",
        this.remainingAvaiable
      );

      leaveValue.empName = this.empName;
      leaveValue.emailId = this.empEmailId;
      leaveValue.empCode = this.empCodeVal;
      leaveValue.status = "Applied";
      leaveValue.leaveReason = this.leaveReason;
      leaveValue.managerCode = this.managCode;
      console.log("leaveValue.managerCode value  is", leaveValue.managerCode);
      leaveValue.leaveCode = this.leavtype;
      console.log("leave type  check10", leaveValue.leaveCode);

      leaveValue.totalLeaveAvaiable = this.remainingAvaiable;
      console.log(
        "check leave totalLeaveAvaiable6 value",
        leaveValue.totalLeaveAvaiable
      );

      leaveValue.fromDate = this.fDate;
      leaveValue.toDate = this.tDate;

      console.log("check leave value", leaveValue);
      this.leaveService.ApplyLeave(leaveValue).subscribe((response) => {
        console.log("Leave have applied successfully ", response);
        console.log("Leave have applied successfully ");
        this._snackBar.open("Leave have Applied Successfully", "OK", {
          duration: 5000,
          verticalPosition: "top",
          panelClass: "success",
        });
      });
    } else {
      if (this.avaiableExaGrantData <= this.intialalLeaveValue) {
        leaveValue.leaveApplied = this.totalnOfDays;
        leaveValue.totalLeaveAvaiable = this.intialalLeaveValue;
        console.log(
          "check leave totalLeaveAvaiable1 value",
          this.intialalLeaveValue
        );
        // this.totalGrant += this.totalnOfDays;
        // console.log("check leave totalLeaveAvaiable4 value", this.totalGrant);
        leaveValue.totalLeaveGranted = this.avaiableExaGrantData;
        console.log(
          "check leave totalLeaveAvaiable2 value",
          leaveValue.totalLeaveGranted
        );
        this.remainingAvaiable =
          leaveValue.totalLeaveAvaiable - leaveValue.totalLeaveGranted;
        console.log(
          "check leave totalLeaveAvaiable3 value",
          this.remainingAvaiable
        );
        leaveValue.managerCode = this.managCode;
        console.log("leaveValue.managerCode value  is", leaveValue.managerCode);
        leaveValue.empName = this.empName;
        leaveValue.emailId = this.empEmailId;
        leaveValue.empCode = this.empCodeVal;
        leaveValue.status = "Applied";
        leaveValue.leaveReason = this.leaveReason;

        leaveValue.leaveCode = this.leavtype;
        console.log("leave type  check10", leaveValue.leaveCode);

        leaveValue.totalLeaveAvaiable = this.remainingAvaiable;
        console.log(
          "check leave totalLeaveAvaiable6 value",
          leaveValue.totalLeaveAvaiable
        );

        leaveValue.fromDate = this.fDate;
        leaveValue.toDate = this.tDate;

        console.log("check leave value", leaveValue);
        this.leaveService.ApplyLeave(leaveValue).subscribe((response) => {
          console.log("Leave have applied successfully ", response);
          console.log("Leave have applied successfully ");
          this._snackBar.open("Leave have Applied Successfully", "OK", {
            duration: 5000,
            verticalPosition: "top",
            panelClass: "success",
          });
        });
      } else {
        this._snackBar.open("You have no leave balance", "OK", {
          duration: 5000,
          verticalPosition: "top",
          panelClass: "success",
        });
      }
    }
  }
  reasonval: string;

  //here choose leave Type and send leaveCode  such as "AL"for Annual Leave

  chooseLeave(value) {
    this.leavtype = value;
    console.log("leave value2 is", this.leavtype);
    var result = this.LeaveData.filter((obj) => {
      return obj.leaveCode === this.leavtype;
    });

    console.log("leave result2 value2", Object.values(result));
    var sortedArr = result.map((e) => e.leaveLimit);
    this.intialalLeaveValue = sortedArr[0];
    console.log("leaveLimit value4 is", this.intialalLeaveValue);
    // let arrayRes = this.availableLeave.map((a) => a.totalLeaveAvaiable);
    // console.log("this.avaiableExaDt value  ", arrayRes);
    var eCode = this.empCodeVal;
    console.log("eCode value is ", eCode);
    this.leaveService
      .getEmpDataByEmpcodeAndLeaveCode(eCode, this.leavtype)
      .subscribe((response1: any) => {
        this.availableLeave = response1;
        console.log("Empcode Data and LeaveCode Data  ", this.availableLeave);
        console.log(
          "Empcode Data and LeaveCode Data length ",
          this.availableLeave.length
        );
      });

    //   var vals = [];
    //   for (var item of this.availableLeave) {
    //     vals.push(item.totalLeaveAvaiable);
    //   }
    //   console.log("Empcode Data and LeaveCode Data  ", vals);
    // }
    // var vals = [];
    // for (var i = 0; i < this.availableLeave.length; i++) {
    //   vals.push(this.availableLeave[i].totalLeaveAvaiable);
    // }
    // console.log("Empcode Data and LeaveCode Data  ", vals);

    // var result1 = this.availableLeave.filter((obj) => {
    //   return obj.leaveCode === this.leavtype;
    // });
    // console.log("this.availableLeave value filter ", result1);
  }

  /*..........................Manager Section code..........................................*/

  rejectReason: boolean = false;
  empData = [];

  getAllEmployeeLeaveData() {}
  getEmployeesLeaveInfoDataValues(mcode) {
    console.log(" this.managCode", mcode);
    this.leaveService
      .getEmployeeDataByStatus(mcode)
      .subscribe((response1: any) => {
        this.empData = response1;
        console.log("Manager Leave data isshown ", this.empData);
      });
  }
  empCodeData: any;
  resultArray: any;
  // getEmployeeDataByEmpCode() {
  //   this.leaveService
  //     .getEmployeeDataByEmpCode(this.resultArray)
  //     .subscribe((response1: any) => {
  //       this.empCodeData = response1;
  //       console.log("Manager Leave data isshown ", this.empCodeData);
  //     });
  // }
  leaveId: Number;
  globalLeaveData: Number;
  empcode: String;
  fDate1: Date;
  tDate1: Date;
  reason: String;
  leavename: String;
  leaveAppliedval: any;
  totalLeaveValue: number;
  remaingLeave: any;
  totalRemaining: any;

  checkManager(
    values,
    leaveId1,
    empCode,
    emailId,
    empName,

    fromDate,
    toDate,
    reason,

    leavename,
    managerCode,
    leaveApplied,
    totalLeavegrant,
    totalLeaveAvaiable
  ) {
    this.LeaveMgmt.empCode = empCode;
    this.LeaveMgmt.emailId = emailId;
    this.LeaveMgmt.empName = empName;

    this.LeaveMgmt.status = "Approved";
    this.LeaveMgmt.fromDate = fromDate;
    this.LeaveMgmt.toDate = toDate;
    this.LeaveMgmt.leaveReason = reason;
    this.LeaveMgmt.leaveInfo = leavename;
    this.LeaveMgmt.managerCode = managerCode;
    this.LeaveMgmt.leaveApplied = leaveApplied;

    this.LeaveMgmt.totalLeaveGranted = totalLeavegrant;
    this.LeaveMgmt.totalLeaveAvaiable = totalLeaveAvaiable;
    console.log("value of LeaveLimit1234", this.LeaveMgmt.totalLeaveGranted);
    console.log("value of LeaveLimit123472", this.LeaveMgmt.totalLeaveAvaiable);
    this.leaveAppliedvalue = leaveApplied;
    console.log("value of LeaveLimit123456", this.leaveAppliedvalue);
    // this.remaingLeave = leavelimit.leaveLimit;
    // console.log("value of LeaveLimit", this.remaingLeave);
    // this.LeaveMgmt.leaveInfo.leaveLimit = leavelimit.leaveLimit;
    // this.totalRemaining = this.remaingLeave - this.LeaveMgmt.totalLeaveGranted;
    // console.log(" RemainingTotal value of LeaveLimit", this.totalRemaining);
    // console.log("value of LeaveLimit", this.LeaveMgmt.leaveInfo.leaveLimit);

    this.fDate1 = fromDate;
    console.log("value of fDate is", this.fDate1);
    this.empcode = empCode;
    console.log("value of empcode is", this.empcode);
    this.tDate1 = toDate;
    console.log("value oftDate1 is", this.tDate1);
    this.totalLeaveValue = leaveApplied;
    console.log("value total leave", this.totalLeaveValue);
    this.reason = reason;
    console.log("value of reason is", this.reason);

    this.leavename = leavename;
    console.log("value of leavename is", this.leavename);

    if (!values.currentTarget.checked) {
      this.leaveId = null;
      this.rejectReason = false;
    } else {
      this.leaveId = leaveId1;
      console.log("value of LeaveId is", this.leaveId);
    }
  }
  ChooseReason2(value) {
    console.log("check4 leave2 Reason", value);
    this.LeaveMgmt.leaveReason = value;
    console.log("check4 leave Reason", this.LeaveMgmt.leaveReason);

    this.LeaveMgmt.status = "Rejected";
    this.LeaveMgmt.totalLeaveAvaiable += this.leaveAppliedvalue;
    this.LeaveMgmt.totalLeaveGranted -= this.leaveAppliedvalue;

    console.log(
      "value is  this.LeaveMgmt.totalLeaveGranted rejected section",
      this.LeaveMgmt.totalLeaveGranted
    );
    console.log(
      "value is   this.LeaveMgmt.totalLeaveAvaiable rejected section",
      this.LeaveMgmt.totalLeaveAvaiable
    );
  }
  aprroveLeave() {
    console.log("leaveId1 is ", this.leaveId);
    if (this.leaveId != null) {
      // this.LeaveMgmt.totalLeaveAvaiable = this.totalRemaining;
      // this.globalLeaveData = this.LeaveMgmt.totalLeaveAvaiable;
      // console.log(
      //   " afterCalCulation value of totalLeaveGranted ",
      //   this.LeaveMgmt.totalLeaveAvaiable
      // );
      this.leaveService
        .putEmployeeDataForApproval(this.LeaveMgmt, this.leaveId)
        .subscribe((response1: any) => {
          console.log("Manager Approved Leave data  ", response1);
        });
      this._snackBar.open("Approved", "OK", {
        duration: 5000,
        verticalPosition: "top",
        panelClass: "success",
      });
    } else {
      this._snackBar.open("Please select any value to Approve", "OK", {
        duration: 5000,
        verticalPosition: "top",
        panelClass: "success",
      });
    }
  }
  leaveReject() {
    if (this.leaveId != null) {
      console.log("reject leave Information");
      this.rejectReason = true;
    } else {
      this._snackBar.open("Please select any value to Reject", "OK", {
        duration: 5000,
        verticalPosition: "top",
        panelClass: "success",
      });
    }
  }
  RejectReasonLeave(rejectValue: LeaveMgmt) {
    this.leaveService
      .putEmployeeDataForApproval(this.LeaveMgmt, this.leaveId)
      .subscribe((response1: any) => {
        console.log("Manager Reject Leave data  ", response1);
      });
    this._snackBar.open("Rejected", "OK", {
      duration: 5000,
      verticalPosition: "top",
      panelClass: "success",
    });
  }

  /*.................................Employees Leave Details Section................................*/
  LeaveInfoData: any;

  LeavTypeData: any;
  todayvalue: any;
  empcode1: any;
  // getEmployeesLeaveInfoDataValue() {

  //   this.leaveService.getAllLeaveData().subscribe((response1: any) => {
  //     this.LeaveInfoData = response1;
  //     console.log("Leave data is LeaveIfo method  shown", this.LeaveInfoData);
  //   });
  // }
  getLeaveTypeDataValues() {
    this.empcode1 = this.ecode1;
    this.leaveService
      .getEmployeeLeaveInfoData(this.empcode1)
      .subscribe((response) => {
        this.LeavTypeData = response;
        console.log("Leave Type Data coming from backend2 ", this.LeavTypeData);
      });
  }
  leaveId2: Number;
  empcodeVal: String;
  fDate2: Date;
  tDate2: Date;
  reason2: String;
  leavename2: String;
  leaveAppliedvalue: any;
  totalLeaveValue2: number;
  checkEmployees(
    values,
    leaveId1,
    empCode,
    emailId,
    empName,
    fromDate,
    toDate,
    reason,
    sataus,
    leavename,
    managerCodeVal,
    leaveApplied,
    totalLeave,
    totalLeaveAvaiable
  ) {
    this.LeaveMgmt.empCode = empCode;
    this.LeaveMgmt.emailId = emailId;
    this.LeaveMgmt.empName = empName;
    this.LeaveMgmt.status = sataus;
    console.log("leave Value", this.LeaveMgmt.status);
    this.LeaveMgmt.fromDate = fromDate;
    this.LeaveMgmt.toDate = toDate;
    this.LeaveMgmt.leaveReason = reason;
    this.LeaveMgmt.managerCode = managerCodeVal;
    this.LeaveMgmt.leaveApplied = leaveApplied;
    console.log("value of LeaveApplied is", leaveApplied);
    console.log("value of LeaveApplied is", this.LeaveMgmt.leaveApplied);
    this.leaveAppliedvalue = this.LeaveMgmt.leaveApplied;
    console.log("value of LeaveApplied is", this.leaveAppliedvalue);

    this.LeaveMgmt.totalLeaveGranted = totalLeave;
    this.LeaveMgmt.totalLeaveAvaiable = totalLeaveAvaiable;
    this.LeaveMgmt.leaveInfo = leavename;
    this.LeaveMgmt.status = "Retracted";

    console.log("leave Value", this.LeaveMgmt.status);
    this.fDate2 = fromDate;
    console.log("value of fDate is", this.fDate2);
    this.empcode1 = empCode;
    console.log("value of empCode is", this.empcode1);
    this.tDate2 = toDate;
    console.log("value of toDate is", this.tDate2);
    this.totalLeaveValue2 = totalLeave;
    console.log("value total leave", this.totalLeaveValue2);
    this.reason2 = reason;
    console.log("value of Reason is", this.reason2);

    if (!values.currentTarget.checked) {
      this.leaveId2 = null;
    } else {
      this.leaveId2 = leaveId1;
      this.calculateToday();
      console.log("value of LeaveId is", this.leaveId2);
    }
  }
  endDate: any;
  calculateToday() {
    var today = new Date();
    this.todayvalue = today;
    this.endDate = new Date(this.tDate);
    console.log("today1 date is", today);
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    let todaydate = mm + "/" + dd + "/" + yyyy;
    console.log("today date is", todaydate);
  }
  withdrawLeave() {
    if (this.leaveId2 != null) {
      this.LeaveMgmt.totalLeaveAvaiable += this.leaveAppliedvalue;
      console.log(
        "Withdraw leave Information totalav",
        this.LeaveMgmt.totalLeaveAvaiable
      );
      this.LeaveMgmt.totalLeaveGranted -= this.leaveAppliedvalue;
      console.log(
        "Withdraw leave Information totalgrant",
        this.LeaveMgmt.totalLeaveGranted
      );
      this.leaveService
        .putEmployeeDataForApproval(this.LeaveMgmt, this.leaveId2)
        .subscribe((response1: any) => {
          console.log("employee Retracted  Leave data  ", response1);
        });
      this._snackBar.open("Leave have Retracted successfully", "OK", {
        duration: 5000,
        verticalPosition: "top",
        panelClass: "success",
      });

      console.log("Withdraw leave Information");
    } else {
      this._snackBar.open("Please select any value to Retract", "OK", {
        duration: 5000,
        verticalPosition: "top",
        panelClass: "success",
      });
    }
  }
}
