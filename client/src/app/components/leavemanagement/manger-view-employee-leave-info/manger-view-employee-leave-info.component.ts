import { Component, OnInit } from "@angular/core";
import { EmailValidator } from "@angular/forms";
import { LeaveMgmtService } from "src/app/services/leave-mgmt.service";
import { LeaveObj } from "../leave-obj";
import { LeaveMgmt } from "src/app/models/leave-mgmt.model";

@Component({
  selector: "app-manger-view-employee-leave-info",
  templateUrl: "./manger-view-employee-leave-info.component.html",
  styleUrls: ["./manger-view-employee-leave-info.component.scss"],
})
export class MangerViewEmployeeLeaveInfoComponent implements OnInit {
  // isChecked = false;
  // rejectReason: boolean = false;
  // empData = [];
  // LeaveMgmt = {
  //   status: "",
  //   empCode: "",
  //   createdDate: "",
  //   leaveCode: "",
  //   fromDate: "",
  //   toDate: "",
  //   leaveReason: "",
  //   totalLeaveGranted: 0,
  //   leaveApplied: 0,
  //   leaveInfo: {
  //     leaveLimit: 0,
  //   },
  //   rejectionReason: "",
  // };

  // leaveData = [
  //   {
  //     name: "Rajesh Chaudhari",
  //     email: "rajesh@anagah.com",
  //   },
  //   {
  //     name: "Satish Sharma",
  //     email: "satish@anagaha.com",
  //   },
  //   {
  //     name: "Pankaj Raut",
  //     email: "pankaj@anagaha.com",
  //   },
  //   {
  //     name: "Ashutosh Yadav",
  //     email: "ashutosh@anagaha.com",
  //   },
  // ];
  // finalLeaveObje = {
  //   firstName: String,
  //   lastName: String,
  //   email: EmailValidator,
  //   fDate: Date,
  //   tdate: Date,
  //   reason: String,
  //   status: String,
  //   leaveCode: String,
  //   totalLeaveGrant: Number,
  //   LeaveApplied: Number,
  // };

  // leaveData3 = [
  //   {
  //     data1: this.empData,
  //     data2: this.leaveData[0].email,
  //   },
  // ];

  constructor(private leaveService: LeaveMgmtService) {
    // console.log("value of leave data", this.leaveData);
  }

  ngOnInit() {
    // this.getEmployeesLeaveInfoDataValues();
    // console.log("Manager Leave data isshown ", this.empData);
    // this.getAllEmployeeLeaveData();
  }
  // getAllEmployeeLeaveData() {}
  // // checkedItems = [];
  // // onChecked(item: any, event: any) {
  // //   let { checked, value } = event.target;
  // //   if (checked) {
  // //     this.checkedItems.push(value);
  // //     console.log("checkbox value is", this.checkedItems);
  // //   } else {
  // //     let index = this.checkedItems.indexOf(value);
  // //     if (index !== -1) this.checkedItems.slice(index, 1);
  // //   }
  // // }
  // //  console.log("check leave value", leaveValue);
  // //   this.leaveService.ApplyLeave(leaveValue).subscribe((response) => {
  // //     console.log("Leave have applied successfully ");
  // resultArray: any;
  // getEmployeesLeaveInfoDataValues() {
  //   console.log("employee leave info");
  //   this.leaveService.getEmployeeDataByStatus().subscribe((response1: any) => {
  //     this.empData = response1;
  //     console.log("Manager Leave data isshown ", this.empData);
  //   });
  // }
  // empCodeData: any;
  // getEmployeeDataByEmpCode() {
  //   this.leaveService
  //     .getEmployeeDataByEmpCode(this.resultArray)
  //     .subscribe((response1: any) => {
  //       this.empCodeData = response1;
  //       console.log("Manager Leave data isshown ", this.empCodeData);
  //     });
  // }
  // leaveId: Number;
  // empcode: String;
  // fDate: Date;
  // tDate: Date;
  // reason: String;
  // leavename: String;
  // leaveAppliedval: any;
  // totalLeaveValue: number;
  // remaingLeave: any;
  // totalRemaining: any;

  // check(
  //   values,
  //   leaveId1,
  //   empCode,
  //   fromDate,
  //   toDate,
  //   reason,
  //   leavelimit,
  //   leavename,
  //   leaveApplied,
  //   totalLeave
  // ) {
  //   this.LeaveMgmt.empCode = empCode;
  //   this.LeaveMgmt.status = "Approved";
  //   this.LeaveMgmt.fromDate = fromDate;
  //   this.LeaveMgmt.toDate = toDate;
  //   this.LeaveMgmt.leaveReason = reason;
  //   this.LeaveMgmt.leaveApplied = leaveApplied;

  //   this.leaveAppliedval = leaveApplied;
  //   console.log("value of LeaveLimit", this.leaveAppliedval);
  //   this.remaingLeave = leavelimit.leaveLimit;
  //   console.log("value of LeaveLimit", this.remaingLeave);
  //   this.LeaveMgmt.leaveInfo.leaveLimit = leavelimit.leaveLimit;
  //   this.totalRemaining = this.remaingLeave - this.leaveAppliedval;
  //   console.log(" RemainingTotal value of LeaveLimit", this.totalRemaining);
  //   console.log("value of LeaveLimit", this.LeaveMgmt.leaveInfo.leaveLimit);
  //   this.LeaveMgmt.leaveInfo.leaveLimit = this.totalRemaining;
  //   console.log(
  //     " afterCalCulation value of LeaveLimit",
  //     this.LeaveMgmt.leaveInfo.leaveLimit
  //   );
  //   this.LeaveMgmt.totalLeaveGranted = this.totalRemaining;
  //   console.log(
  //     " afterCalCulation value of totalLeaveGranted ",
  //     this.LeaveMgmt.totalLeaveGranted
  //   );
  //   this.LeaveMgmt.leaveInfo = leavename;

  //   this.fDate = fromDate;
  //   console.log("value of LeaveId is", this.fDate);
  //   this.empcode = empCode;
  //   console.log("value of LeaveId is", this.empcode);
  //   this.tDate = toDate;
  //   console.log("value of LeaveId is", this.tDate);
  //   this.totalLeaveValue = totalLeave;
  //   console.log("value total leave", this.totalLeaveValue);
  //   this.reason = reason;
  //   console.log("value of LeaveId is", this.reason);

  //   this.leavename = leavename;
  //   console.log("value of LeaveId is", this.leavename);

  //   if (!values.currentTarget.checked) {
  //     this.leaveId = null;
  //     this.rejectReason = false;
  //   } else {
  //     this.leaveId = leaveId1;
  //     console.log("value of LeaveId is", this.leaveId);
  //   }
  // }
  // ChooseReason(value) {
  //   console.log("check4 leave2 Reason", value);
  //   this.LeaveMgmt.leaveReason = value;
  //   console.log("check4 leave Reason", this.LeaveMgmt.leaveReason);

  //   this.LeaveMgmt.status = "Rejected";
  //   console.log("value is", this.LeaveMgmt);
  // }
  // aprroveLeave() {
  //   console.log("leaveId is ", this.leaveId);
  //   if (this.leaveId != null) {
  //     this.leaveService
  //       .putEmployeeDataForApproval(this.LeaveMgmt, this.leaveId)
  //       .subscribe((response1: any) => {
  //         console.log("Manager Approved Leave data  ", response1);
  //       });
  //     alert("Approved");
  //   } else {
  //     alert("Please select any value to approve");
  //   }
  // }
  // leaveReject() {
  //   if (this.leaveId != null) {
  //     console.log("reject leave Information");
  //     this.rejectReason = true;
  //   } else {
  //     alert("Please select any value to Reject");
  //   }
  // }
  // RejectReasonLeave(rejectValue: LeaveMgmt) {
  //   this.leaveService
  //     .putEmployeeDataForApproval(this.LeaveMgmt, this.leaveId)
  //     .subscribe((response1: any) => {
  //       console.log("Manager Reject Leave data  ", response1);
  //     });
  // }
}
