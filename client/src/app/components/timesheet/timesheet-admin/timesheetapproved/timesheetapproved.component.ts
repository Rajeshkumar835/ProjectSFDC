import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormsModule } from "@angular/forms";
import { DatePipe } from "@angular/common";
import { TimesheetService } from "src/app/services/timesheet.service";
import { TimesheetApprovedStatus } from "src/app/models/timesheet.model";

@Component({
  selector: "app-timesheetapproved",
  templateUrl: "./timesheetapproved.component.html",
  styleUrls: ["./timesheetapproved.component.scss"],
})
export class TimesheetapprovedComponent implements OnInit {
  timesheetApproval: TimesheetApprovedStatus = {
    empCode: "AMZ01",
    startDate: "",
    endDate: "",
  };

  //this part for save sucess message

  ApprovalMessageTemp = false;
  constructor(
    private formBuilder: FormBuilder,
    private timesheetService: TimesheetService
  ) {}

  //start date and end date part this is the part of approval/

  //
  StartDate: Date;
  StartRegisterForm;
  EndDate: Date;
  //EndRegisterForm;

  ngOnInit() {
    //start date and end date part this is the part of approval/

    // this.StartDate = new Date();
    //this.EndDate = new Date();
    /* this.datepipe.transform(this.StartDate, "dd/MM/yyyy");  */
    this.StartRegisterForm = this.formBuilder.group({
      StartDate: "",
      EndDate: "",
    });

    console.log(this.StartDate);
    console.log(this.StartRegisterForm);

    console.log(this.EndDate);
    console.log(this.StartRegisterForm);
  }

  ApproveButton() {
    if (this.timesheetApproval.endDate < this.timesheetApproval.startDate) {
      alert("Invalid date format");
    } else {
      this.timesheetService
        .getAllApprovalByEmpCode(this.timesheetApproval)
        .subscribe((data: any) => {
          console.log("kkkkk", data);
        });
      this.ApprovalMessageTemp = true;
    }
  }
  approvedTimesheetEnd(endDate) {
    this.ApprovalMessageTemp = false;
    this.timesheetApproval.endDate = endDate;
    console.log("approved End Date", endDate);
    console.log("timesheet approved End Date", this.timesheetApproval.endDate);
    console.log("approved object", this.timesheetApproval);

    this.EndDate = endDate;
    if (this.EndDate < this.StartDate) {
      this.EndDate = this.StartDate;
      alert("Please enter valid Date");
      // this.toastr.success("Hello, I'm the toastr message.");
    }
  }
  approvedTimesheetStart(startDate) {
    this.ApprovalMessageTemp = false;
    this.StartDate = startDate;
    this.timesheetApproval.startDate = startDate;
    console.log("approved Start Date", startDate);
    console.log(
      "timesheet approved Start Date",
      this.timesheetApproval.startDate
    );
    console.log("approved object", this.timesheetApproval);

    if (this.EndDate < this.StartDate) {
      this.EndDate = this.StartDate;
      alert("Please enter valid Date");
    }
  }
  // ApproveButton() {}
  onSubmit() {}
}
