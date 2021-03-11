import { Component, OnInit } from "@angular/core";

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
      tdate: "24 - 3 - 2021",
      reason: "Due to home function",
      status: "New",
      totalLeaveGrant: 11,
      LeaveApplied: 4,
    },
    {
      name: "Rajesh Chaudhari",
      fDate: "31 - 3 - 2021",
      tdate: "04 - 04 - 2021",
      reason: "fjhhf",
      status: "Approved",
      totalLeaveGrant: 11,
      LeaveApplied: 5,
    },
    {
      name: "Rajesh Chaudhari",
      fDate: "20 - 02 - 2021",
      tdate: "24 - 02 - 2021",
      reason: "Going to ohter area",
      status: "Rejected",
      totalLeaveGrant: 11,
      LeaveApplied: 4,
    },
    {
      name: "Rajesh Chaudhari",
      fDate: "16 - 01 - 2021",
      tdate: "18 - 01 - 2021",
      reason: "worshipat Home",
      status: "Approved",
      totalLeaveGrant: 11,
      LeaveApplied: 2,
    },
  ];
  constructor() {}

  ngOnInit() {}
}
