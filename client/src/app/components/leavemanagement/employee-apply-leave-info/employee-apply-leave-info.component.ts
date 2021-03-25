import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { DatePipe } from "@angular/common";
import { LeaveMgmtService } from "src/app/services/leave-mgmt.service";
import { LeaveMgmt } from "src/app/models/leave-mgmt.model";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from "@angular/material";

@Component({
  selector: "app-employee-apply-leave-info",
  templateUrl: "./employee-apply-leave-info.component.html",
  styleUrls: ["./employee-apply-leave-info.component.scss"],
})
export class EmployeeApplyLeaveInfoComponent implements OnInit {
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
  constructor(
    private leaveService: LeaveMgmtService,
    private datePipe: DatePipe,
    private _snackBar: MatSnackBar,
    public dialog: MatDialog
  ) {
    console.log("value of LeaveLimit is", this.leaveLimit);
  }

  ngOnInit() {
    this.getLeaveType();
    this.getEmployeesLeaveInfoDataValues();
    console.log("Manager Leave data isshown ", this.empData);
    this.getAllEmployeeLeaveData();
    this.getEmployeesLeaveInfoDataValue();
    this.getLeaveTypeDataValues(this.empcode1);
    this.calculateToday();
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
  fromCoDate(value) {
    console.log("fom date", value);
    this.datePipe.transform(this.fDate, "dd/mm/yyyy");
    this.fDate = value;
    console.log("from date", this.fDate);
    this.calculateDay();
    this.totalgrantleave();
  }
  verifyLeave(value) {
    this.leaveValue = value;
    if (value != "noLeave") {
      this.IsLeaveInvalid = false;
    } else {
      this.IsLeaveInvalid = true;
    }
  }
  getLeaveType() {
    this.leaveService.getLeaveTypeData().subscribe((response: any) => {
      this.LeaveData = response;
      console.log("Leave Type Date coming from backend ", this.LeaveData);
    });
  }
  getLeaveLimit() {
    var result = this.LeaveData.filter((obj) => {
      return obj.leaveCode === 6;
    });
  }

  calculateDay() {
    var holidays = ["03-25-2021", "03-27-2021", "03-28-2021"];
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
    if (startDay == 0 && endDay != 6) {
      days--;
    }
    // Remove end day if span ends on Saturday but starts after Sunday
    if (endDay == 6 && startDay != 0) {
      days--;
    }
    // var count = 0;
    // var curDate = startDate;
    // while (curDate <= endDate) {
    //   var dayOfWeek = curDate.getDay();
    //   if (!(dayOfWeek == 6 || dayOfWeek == 0)) count++;
    //   curDate.setDate(curDate.getDate() + 1);
    // }
    holidays.forEach((d) => {
      var day = this.stringToDate(d, "mm-dd-yyyy", "-");
      console.log("day value foreach is", day);
      if (day >= startDate && day <= endDate) {
        /* If it is not saturday (6) or sunday (0), substract it */
        if (day.getDay() % 6 != 0) {
          days--;
        }
      }
    });

    this.totalnOfDays = days;
    console.log("check3", this.totalnOfDays);

    this.show = true;
  }
  stringToDate(_date, _format, _delimiter) {
    var formatLowerCase = _format.toLowerCase();
    var formatItems = formatLowerCase.split(_delimiter);
    var dateItems = _date.split(_delimiter);
    var monthIndex = formatItems.indexOf("mm");
    var dayIndex = formatItems.indexOf("dd");
    var yearIndex = formatItems.indexOf("yyyy");
    var year = parseInt(dateItems[yearIndex]);
    // adjust for 2 digit year
    if (year < 100) {
      year += 2000;
    }
    var month = parseInt(dateItems[monthIndex]);
    month -= 1;
    var formatedDate = new Date(year, month, dateItems[dayIndex]);
    return formatedDate;
  }
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

      leaveValue.empName = "Shayam Chaudhary";
      leaveValue.emailId = "shayam@1234.com";
      leaveValue.empCode = "A5";
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

        leaveValue.empName = "Shayam Chaudhary";
        leaveValue.emailId = "shayam@1234.com";
        leaveValue.empCode = "A5";
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
        this.getEmployeesLeaveInfoDataValues();
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
  onMouseEnter(): void {}
  //here choose leave Type send leaveCode  such as "AL"for Annual Leave

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
    var eCode = "A5";
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
  getEmployeesLeaveInfoDataValues() {
    console.log("employee leave info");
    this.leaveService.getEmployeeDataByStatus().subscribe((response1: any) => {
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
    empName,

    fromDate,
    toDate,
    reason,

    leavename,
    leaveApplied,
    totalLeavegrant,
    totalLeaveAvaiable
  ) {
    this.LeaveMgmt.empCode = empCode;
    this.LeaveMgmt.empName = empName;

    this.LeaveMgmt.status = "Approved";
    this.LeaveMgmt.fromDate = fromDate;
    this.LeaveMgmt.toDate = toDate;
    this.LeaveMgmt.leaveReason = reason;
    this.LeaveMgmt.leaveInfo = leavename;
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
      this.getEmployeesLeaveInfoDataValue();
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
    this.getEmployeesLeaveInfoDataValue();
  }

  /*.................................Employees Leave Details Section................................*/
  LeaveInfoData: any;

  LeavTypeData: any;
  todayvalue: any;
  empcode1 = "A4";
  getEmployeesLeaveInfoDataValue() {
    console.log("employee leave info");
    this.leaveService.getAllLeaveData().subscribe((response1: any) => {
      this.LeaveInfoData = response1;
      console.log("Leave data is LeaveIfo method  shown", this.LeaveInfoData);
    });
  }
  getLeaveTypeDataValues(empcode1) {
    this.leaveService
      .getEmployeeLeaveInfoData(empcode1)
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
    empName,
    fromDate,
    toDate,
    reason,
    sataus,
    leavename,
    leaveApplied,
    totalLeave,
    totalLeaveAvaiable
  ) {
    this.LeaveMgmt.empCode = empCode;
    this.LeaveMgmt.empName = empName;
    this.LeaveMgmt.status = sataus;
    console.log("leave Value", this.LeaveMgmt.status);
    this.LeaveMgmt.fromDate = fromDate;
    this.LeaveMgmt.toDate = toDate;
    this.LeaveMgmt.leaveReason = reason;
    this.LeaveMgmt.leaveApplied = leaveApplied;
    this.leaveAppliedvalue = leaveApplied;
    console.log("value of LeaveApplied is", this.leaveAppliedval);

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
      this.getEmployeesLeaveInfoDataValue();
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
