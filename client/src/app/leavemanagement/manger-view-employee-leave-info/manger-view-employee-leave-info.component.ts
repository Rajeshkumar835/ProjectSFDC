import { Component, OnInit } from "@angular/core";
import { LeaveObj } from "../leave-obj";
import { LeaveService } from "../leave.service";
@Component({
  selector: "app-manger-view-employee-leave-info",
  templateUrl: "./manger-view-employee-leave-info.component.html",
  styleUrls: ["./manger-view-employee-leave-info.component.scss"],
})
export class MangerViewEmployeeLeaveInfoComponent implements OnInit {
  isChecked = false;
  rejectReason: boolean = false;
  leaveData = [
    {
      name: "Rajesh Chaudhari",
      email: "rajesh@anagah.com",
      fDate: "21-03-2021",
      tdate: "23-03-2021",
      reason: "due to outside to some work",
      leaveType: "Cassual Leave",
      totalLeaveGrant: 11,
      LeaveApplied: 2,
    },
    {
      name: "Satish Sharma",
      email: "satish@anagaha.com",
      fDate: "16-03-2021",
      tdate: "18-03-2021",
      reason: "Due to Some worship",
      status: "Applied",
      leaveType: "Annual Leave",
      LeaveApplied: 2,
    },
    {
      name: "Pankaj Raut",
      email: "pankaj@anagaha.com",
      fDate: "04-03-2021",
      tdate: "05-03-2021",
      reason: "Due to sick",
      status: "Applied",
      leaveType: "Cassual Leave",
      LeaveApplied: 1,
    },
    {
      name: "Ashutosh Yadav",
      email: "ashutosh@anagaha.com",
      fDate: "08-03-2021",
      tdate: "09-03-2021",
      reason: "going outside some work",
      status: "Applied",
      leaveType: "Sick Leave",
      LeaveApplied: 1,
    },
  ];

  constructor(private leaveService: LeaveService) {
    console.log("value of leave data", this.leaveData);
  }

  ngOnInit() {
    //this.getAllEmployeeLeaveData();
    console.log("value of leave data", this.leaveData);
  }
  /* getAllEmployeeLeaveData() {
    this.leaveService.getAllLeaveData().subscribe((response: any) => {
      const data = JSON.stringify(response);
      this.leaveData = JSON.parse(data);
      //this.leaveData = response;
      console.log("check data", this.leaveData);
    });
  }*/
  aprroveLeave() {}
  leaveReject() {
    console.log("reject leave Information");
    this.rejectReason = true;
  }
}
