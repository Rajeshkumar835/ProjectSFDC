import { Component, OnInit } from "@angular/core";
import { LeaveObj } from "../leave-obj";
import { LeaveService } from "../leave.service";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-employee-apply-leave-info",
  templateUrl: "./employee-apply-leave-info.component.html",
  styleUrls: ["./employee-apply-leave-info.component.scss"],
})
export class EmployeeApplyLeaveInfoComponent implements OnInit {
  leaveTypeStore = ["Cassual Leave", "Annual Leave", "Sick Leave"];
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
  LeaveData: object;
  LeaveObj = {
    empCode: "",
    createdDate: "",
    leaveType: "",
    formDate: "",
    toDate: "",
    Reason: "",
    Status: "",
    LeaveApplied: "",
  };
  constructor(private leaveService: LeaveService, private datePipe: DatePipe) {}

  ngOnInit() {}
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
  }
  verifyLeave(value) {
    this.leaveValue = value;
    if (value != "noLeave") {
      this.IsLeaveInvalid = false;
    } else {
      this.IsLeaveInvalid = true;
    }
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
  }
  leaveApply(leaveValue: LeaveObj) {
    leaveValue.empCode = "A2";
    leaveValue.status = "Applied";
    leaveValue.leaveReason = this.leaveReason;
    leaveValue.totalLeaveGranted = 11;
    leaveValue.leaveType = this.leavtype;
    console.log("leave type  check10", leaveValue.leaveType);
    leaveValue.leaveApplied = this.totalnOfDays;
    leaveValue.fromDate = this.fDate;
    leaveValue.toDate = this.tDate;

    console.log("check leave value", leaveValue);
    this.leaveService.ApplyLeave(leaveValue).subscribe((response) => {
      console.log("Leave have applied successfully ");
    });
  }
  chooseLeave(value) {
    console.log("leave value is", value);
    this.leavtype = value;
    console.log("leave value2 is", this.leavtype);
  }
}
