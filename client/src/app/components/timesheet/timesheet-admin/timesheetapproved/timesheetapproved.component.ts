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

    this.StartDate = new Date();

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
  timesheetApproval: TimesheetApprovedStatus = {
    empCode: "ABC",
    startDate: "",
    endDate: "",
  };
  ApproveButton() {
    this.timesheetService
      .getAllApprovalByEmpCode(this.timesheetApproval)
      .subscribe((data: any) => {
        console.log("kkkkk", data);
      });
  }
  approvedTimesheetEnd(endDate) {
    this.timesheetApproval.endDate = endDate;
    console.log("approved End Date", endDate);
    console.log("timesheet approved End Date", this.timesheetApproval.endDate);
  }
  approvedTimesheetStart(startDate) {
    this.timesheetApproval.startDate = startDate;
    console.log("approved Start Date", startDate);
    console.log(
      "timesheet approved Start Date",
      this.timesheetApproval.startDate
    );
  }
  // ApproveButton() {}
  onSubmit() {}
}
