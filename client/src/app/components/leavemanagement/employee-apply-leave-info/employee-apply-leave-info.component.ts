import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";

import { DatePipe } from "@angular/common";
import { LeaveMgmtService } from "src/app/services/leave-mgmt.service";
import { LeaveMgmt } from "src/app/models/leave-mgmt.model";

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

  LeaveData: any;
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
  };
  constructor(
    private leaveService: LeaveMgmtService,
    private datePipe: DatePipe
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
  }

  toDate(value) {
    console.log("To date", value);
    this.datePipe.transform(this.tDate, "dd/mm/yyyy");
    this.tDate = value;
    this.todate = value;
    this.calculateDay();
  }
  fromCoDate(value) {
    console.log("fom date", value);
    this.datePipe.transform(this.fDate, "dd/mm/yyyy");
    this.fDate = value;
    console.log("from date", this.fDate);
    this.calculateDay();
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

  calculateDay() {
    var startDate = new Date(this.fDate);
    var endDate = new Date(this.tDate);
    console.log("check2 end", endDate);
    console.log("check3 start", startDate);
    console.log("check1", this.todate);

    var count = 0;
    var curDate = startDate;
    while (curDate <= endDate) {
      var dayOfWeek = curDate.getDay();
      if (!(dayOfWeek == 6 || dayOfWeek == 0)) count++;
      curDate.setDate(curDate.getDate() + 1);
    }

    this.totalnOfDays = count;
    console.log("check3", this.totalnOfDays);
    this.show = true;
  }
  ChooseReason1(value) {
    console.log("check4 leave2 Reason", value);
    this.leaveReason = value;
    console.log("check4 leave Reason", this.leaveReason);
  }
  leaveApply(leaveValue: LeaveMgmt) {
    leaveValue.empName = "Rajesh Chaudhari";
    leaveValue.emailId = "amish@1234.com";
    leaveValue.empCode = "A2";
    leaveValue.status = "Applied";
    leaveValue.leaveReason = this.leaveReason;

    leaveValue.leaveCode = this.leavtype;
    console.log("leave type  check10", leaveValue.leaveCode);
    leaveValue.leaveApplied = this.totalnOfDays;
    leaveValue.fromDate = this.fDate;
    leaveValue.toDate = this.tDate;

    console.log("check leave value", leaveValue);
    this.leaveService.ApplyLeave(leaveValue).subscribe((response) => {
      console.log("Leave have applied successfully ");
    });
  }
  chooseLeave(value) {
    this.leavtype = value;
    console.log("leave value2 is", this.leavtype);
  }
  /*..........................Manager Section code..........................................*/

  rejectReason: boolean = false;
  empData = [];
  LeaveMgmt = {
    status: "",
    empCode: "",
    empName: "",
    createdDate: "",
    leaveCode: "",
    fromDate: "",
    toDate: "",
    leaveReason: "",
    totalLeaveGranted: 0,
    leaveApplied: 0,
    leaveInfo: {
      leaveLimit: 0,
    },
    rejectionReason: "",
  };
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
  getEmployeeDataByEmpCode() {
    this.leaveService
      .getEmployeeDataByEmpCode(this.resultArray)
      .subscribe((response1: any) => {
        this.empCodeData = response1;
        console.log("Manager Leave data isshown ", this.empCodeData);
      });
  }
  leaveId: Number;
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
    fromDate,
    toDate,
    reason,
    leavelimit,
    leavename,
    leaveApplied,
    totalLeave
  ) {
    this.LeaveMgmt.empCode = empCode;
    this.LeaveMgmt.status = "Approved";
    this.LeaveMgmt.fromDate = fromDate;
    this.LeaveMgmt.toDate = toDate;
    this.LeaveMgmt.leaveReason = reason;
    this.LeaveMgmt.leaveApplied = leaveApplied;

    this.leaveAppliedval = leaveApplied;
    console.log("value of LeaveLimit", this.leaveAppliedval);
    this.remaingLeave = leavelimit.leaveLimit;
    console.log("value of LeaveLimit", this.remaingLeave);
    this.LeaveMgmt.leaveInfo.leaveLimit = leavelimit.leaveLimit;
    this.totalRemaining = this.remaingLeave - this.leaveAppliedval;
    console.log(" RemainingTotal value of LeaveLimit", this.totalRemaining);
    console.log("value of LeaveLimit", this.LeaveMgmt.leaveInfo.leaveLimit);
    this.LeaveMgmt.leaveInfo.leaveLimit = this.totalRemaining;
    console.log(
      " afterCalCulation value of LeaveLimit",
      this.LeaveMgmt.leaveInfo.leaveLimit
    );

    this.LeaveMgmt.leaveInfo = leavename;

    this.fDate1 = fromDate;
    console.log("value of fDate is", this.fDate1);
    this.empcode = empCode;
    console.log("value of empcode is", this.empcode);
    this.tDate1 = toDate;
    console.log("value oftDate1 is", this.tDate1);
    this.totalLeaveValue = totalLeave;
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
    console.log("value is", this.LeaveMgmt);
  }
  aprroveLeave() {
    console.log("leaveId1 is ", this.leaveId);
    if (this.leaveId != null) {
      this.LeaveMgmt.totalLeaveGranted = this.totalRemaining;
      console.log(
        " afterCalCulation value of totalLeaveGranted ",
        this.LeaveMgmt.totalLeaveGranted
      );
      this.leaveService
        .putEmployeeDataForApproval(this.LeaveMgmt, this.leaveId)
        .subscribe((response1: any) => {
          console.log("Manager Approved Leave data  ", response1);
        });
      alert("Approved");
    } else {
      alert("Please select any value to approve");
    }
  }
  leaveReject() {
    if (this.leaveId != null) {
      console.log("reject leave Information");
      this.rejectReason = true;
    } else {
      alert("Please select any value to Reject");
    }
  }
  RejectReasonLeave(rejectValue: LeaveMgmt) {
    this.leaveService
      .putEmployeeDataForApproval(this.LeaveMgmt, this.leaveId)
      .subscribe((response1: any) => {
        console.log("Manager Reject Leave data  ", response1);
      });
  }

  /*.................................Employees Leave Details Section................................*/
  LeaveInfoData: any;

  LeavTypeData: any;
  todayvalue: any;
  empcode1 = "A2";
  getEmployeesLeaveInfoDataValue() {
    console.log("employee leave info");
    this.leaveService.getAllLeaveData().subscribe((response1: any) => {
      this.LeaveInfoData = response1;
      console.log("Leave data is Amish method  shown", this.LeaveInfoData);
    });
  }
  getLeaveTypeDataValues(empcode1) {
    this.leaveService
      .getEmployeeLeaveInfoData(empcode1)
      .subscribe((response) => {
        this.LeavTypeData = response;
        console.log("Leave Type Date coming from backend2 ", this.LeavTypeData);
      });
  }
  leaveId1: Number;
  empcodeVal: String;
  fDate2: Date;
  tDate2: Date;
  reason2: String;
  leavename2: String;
  leaveAppliedva2l: Number;
  totalLeaveValue2: number;
  checkEmployees(
    values,
    leaveId1,
    empCode,
    fromDate,
    toDate,
    reason,
    sataus,
    leavename,
    leaveApplied,
    totalLeave
  ) {
    this.LeaveMgmt.empCode = empCode;
    this.LeaveMgmt.status = sataus;
    console.log("leave Value", this.LeaveMgmt.status);
    this.LeaveMgmt.fromDate = fromDate;
    this.LeaveMgmt.toDate = toDate;
    this.LeaveMgmt.leaveReason = reason;
    this.LeaveMgmt.leaveApplied = leaveApplied;
    this.LeaveMgmt.totalLeaveGranted = totalLeave;
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
    console.log("value of Reason is", this.reason);

    this.leaveAppliedval = leaveApplied;
    console.log("value of LeaveApplied is", this.leaveAppliedval);

    if (!values.currentTarget.checked) {
      this.leaveId = null;
    } else {
      this.leaveId = leaveId1;
      console.log("value of LeaveId is", this.leaveId);
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
    if (
      (this.leaveId != null &&
        this.endDate <= this.todayvalue &&
        this.LeaveMgmt.status != "Approved") ||
      this.LeaveMgmt.status != "Rejected"
    ) {
      this.leaveService
        .putEmployeeDataForApproval(this.LeaveMgmt, this.leaveId)
        .subscribe((response1: any) => {
          console.log("employee Retracted  Leave data  ", response1);
        });
      alert(" leave have Successfully Retracted");
      this.getEmployeesLeaveInfoDataValue();
      console.log("Withdraw leave Information");
    } else {
      alert("Please select  value to Withdraw");
    }
  }
}
