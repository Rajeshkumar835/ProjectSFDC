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
  ) {}

  ngOnInit() {
    this.getLeaveType();
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
  ChooseReason(value) {
    console.log("check4 leave2 Reason", value);
    this.leaveReason = value;
    console.log("check4 leave Reason", this.leaveReason);
    console.log("value limit", this.leaveLimit);
  }
  leaveApply(leaveValue: LeaveMgmt) {
    leaveValue.firstName = "Amish";
    leaveValue.lastName = "Yadav";
    leaveValue.emailId = "amish@1234.com";
    leaveValue.empCode = "A3";
    leaveValue.status = "Applied";
    leaveValue.leaveReason = this.leaveReason;
    leaveValue.totalLeaveGranted = 11;
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
  chooseLeave(values, value, value2) {
    const secLeaveN = values;
    console.log("leave value is", secLeaveN);
    const lfcode = value2;
    console.log("leave value is", value2);
    this.leavtype = value;
    console.log("leave value2 is", this.leavtype);
  }
}
