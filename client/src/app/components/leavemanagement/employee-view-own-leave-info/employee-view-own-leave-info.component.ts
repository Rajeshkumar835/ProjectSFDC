import { Component, OnInit } from "@angular/core";
import { LeaveMgmtService } from "src/app/services/leave-mgmt.service";

@Component({
  selector: "app-employee-view-own-leave-info",
  templateUrl: "./employee-view-own-leave-info.component.html",
  styleUrls: ["./employee-view-own-leave-info.component.scss"],
})
export class EmployeeViewOwnLeaveInfoComponent implements OnInit {
  LeaveInfoData: any;

  LeavTypeData: any;
  todayvalue: any;
  LeaveMgmt = {
    status: "",
    empCode: "",
    createdDate: "",
    leaveCode: "",
    fromDate: "",
    toDate: "",
    leaveReason: "",
    totalLeaveGranted: 0,
    leaveApplied: 0,
    leaveInfo: {},
    rejectionReason: "",
  };
  // leaveData = [
  //   {
  //     name: "Rajesh Chaudhari",
  //     fDate: "21 - 3 - 2021",
  //     tdate: "22 - 3 - 2021",
  //     reason: "Due to home function",
  //     status: "Applied",
  //     totalLeaveGrant: 4,
  //     leaveType: "Casual Leave",
  //     LeaveApplied: 1,
  //   },
  //   {
  //     name: "Rajesh Chaudhari",
  //     fDate: "31 - 3 - 2021",
  //     tdate: "01 - 04 - 2021",
  //     reason: "fjhhf",
  //     status: "Approved",
  //     leaveType: "Annual Leave",
  //     totalLeaveGrant: 4,
  //     LeaveApplied: 2,
  //   },
  //   {
  //     name: "Rajesh Chaudhari",
  //     fDate: "20 - 02 - 2021",
  //     tdate: "24 - 02 - 2021",
  //     reason: "Going to ohter area",
  //     status: "Rejected",
  //     totalLeaveGrant: 6,
  //     leaveType: "Annual Leave",
  //     LeaveApplied: 4,
  //   },
  //   {
  //     name: "Rajesh Chaudhari",
  //     fDate: "16 - 01 - 2021",
  //     tdate: "18 - 01 - 2021",
  //     reason: "worshipat Home",
  //     status: "Approved",

  //     totalLeaveGrant: 7,
  //     leaveType: "Sick Leave",
  //     LeaveApplied: 2,
  //   },
  // ];
  constructor(private leaveService: LeaveMgmtService) {}

  ngOnInit() {
    // this.getEmployeeOwnData();
    this.getEmployeesLeaveInfoDataValue();
    this.getLeaveTypeDataValues(this.empcode);
    this.calculateToday();
  }
  // getEmployeeOwnData() {
  //   this.leaveService.getAllLeaveData().subscribe((response: any) => {
  //     this.leaveData = response;
  //     console.log("Leave data is shown", this.leaveData);
  //   });
  // }
  empcode = "A2";
  getEmployeesLeaveInfoDataValue() {
    console.log("employee leave info");
    this.leaveService.getAllLeaveData().subscribe((response1: any) => {
      this.LeaveInfoData = response1;
      console.log("Leave data is Amish method  shown", this.LeaveInfoData);
    });
  }
  getLeaveTypeDataValues(empcode) {
    this.leaveService
      .getEmployeeLeaveInfoData(empcode)
      .subscribe((response) => {
        this.LeavTypeData = response;
        console.log("Leave Type Date coming from backend2 ", this.LeavTypeData);
      });
  }
  leaveId: Number;
  empcodeVal: String;
  fDate: Date;
  tDate: Date;
  reason: String;
  leavename: String;
  leaveAppliedval: Number;
  totalLeaveValue: number;
  check(
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
    this.fDate = fromDate;
    console.log("value of fDate is", this.fDate);
    this.empcode = empCode;
    console.log("value of empCode is", this.empcode);
    this.tDate = toDate;
    console.log("value of toDate is", this.tDate);
    this.totalLeaveValue = totalLeave;
    console.log("value total leave", this.totalLeaveValue);
    this.reason = reason;
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
