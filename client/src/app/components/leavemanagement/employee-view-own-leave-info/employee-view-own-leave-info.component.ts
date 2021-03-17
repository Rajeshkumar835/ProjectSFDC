import { Component, OnInit } from "@angular/core";
import { LeaveMgmtService } from "src/app/services/leave-mgmt.service";

@Component({
  selector: "app-employee-view-own-leave-info",
  templateUrl: "./employee-view-own-leave-info.component.html",
  styleUrls: ["./employee-view-own-leave-info.component.scss"],
})
export class EmployeeViewOwnLeaveInfoComponent implements OnInit {
  isChecked = false;
  checkuncheckall() {
    if (this.isChecked == true) {
      this.isChecked = false;
    } else {
      this.isChecked = true;
    }
  }
  leaveData = [
    {
      name: "Rajesh Chaudhari",
      fDate: "21 - 3 - 2021",
      tdate: "22 - 3 - 2021",
      reason: "Due to home function",
      status: "Applied",
      totalLeaveGrant: 4,
      leaveType: "Casual Leave",
      LeaveApplied: 1,
    },
    {
      name: "Rajesh Chaudhari",
      fDate: "31 - 3 - 2021",
      tdate: "01 - 04 - 2021",
      reason: "fjhhf",
      status: "Approved",
      leaveType: "Annual Leave",
      totalLeaveGrant: 4,
      LeaveApplied: 2,
    },
    {
      name: "Rajesh Chaudhari",
      fDate: "20 - 02 - 2021",
      tdate: "24 - 02 - 2021",
      reason: "Going to ohter area",
      status: "Rejected",
      totalLeaveGrant: 6,
      leaveType: "Annual Leave",
      LeaveApplied: 4,
    },
    {
      name: "Rajesh Chaudhari",
      fDate: "16 - 01 - 2021",
      tdate: "18 - 01 - 2021",
      reason: "worshipat Home",
      status: "Approved",

      totalLeaveGrant: 7,
      leaveType: "Sick Leave",
      LeaveApplied: 2,
    },
  ];
  constructor(private leavemanagementService: LeaveMgmtService) {}

  ngOnInit() {
    this. getAllEmployeeLeave();
  }
empCode="AA";
  getAllEmployeeLeave(){
    console.log("Employee Leave Info Data")
    this.leavemanagementService.getAllEmployeeLeaveInfoByEmpCode(this.empCode).subscribe((data:any)=>{
      console.log("Employee Leave Info data",data)
    })
  }
}
