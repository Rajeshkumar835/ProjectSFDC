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
  empData = [];
  LeaveObj = {
    Id: "",
    empCode: "",
    status: "",
  };

  leaveData = [
    {
      name: "Rajesh Chaudhari",
      email: "rajesh@anagah.com",
      fDate: "21-03-2021",
      tdate: "23-03-2021",
      reason: "due to outside to some work",
      status: "Applied",
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
    this.getAllEmployeeLeaveData();
    console.log("value of leave data", this.leaveData);
  }
  getAllEmployeeLeaveData() {
    this.leaveService.getAllLeaveData().subscribe((response: any) => {
      this.empData = response;
      //this.leaveData = response;
      console.log("check data", this.empData);
    });
  }
  // checkedItems = [];
  // onChecked(item: any, event: any) {
  //   let { checked, value } = event.target;
  //   if (checked) {
  //     this.checkedItems.push(value);
  //     console.log("checkbox value is", this.checkedItems);
  //   } else {
  //     let index = this.checkedItems.indexOf(value);
  //     if (index !== -1) this.checkedItems.slice(index, 1);
  //   }
  // }
  //  console.log("check leave value", leaveValue);
  //   this.leaveService.ApplyLeave(leaveValue).subscribe((response) => {
  //     console.log("Leave have applied successfully ");
  name1: string;
  check(values, name) {
    if (values.currentTarget.checked) {
      this.name1 = name;
      console.log("value of name is", this.name1);
    }
  }
  aprroveLeave() {
    if (this.name1 != null) {
      this.LeaveObj.status = "Approved";
      this.leaveService.approvalPutData(this.LeaveObj).subscribe((response) => {
        console.log("Leave have approved successfully ");
      });
      alert("Approved");
    } else {
      alert("Please select any value to approve");
    }
  }
  leaveReject() {
    if (this.name1 != null) {
      console.log("reject leave Information");
      this.rejectReason = true;
    } else {
      alert("Please select any value to Reject");
    }
  }
  RejectReasonLeave(rejectValue: LeaveObj) {
    rejectValue.status = "Reject";
    rejectValue.rejectionReason = " ";
  }
}
