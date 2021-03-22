import { Injectable } from "@angular/core";
import {
  Timesheet,
  TimesheetApprovedStatus,
  TimesheetObject,
} from "../models/timesheet.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TimesheetService {
  constructor(private http: HttpClient) {}

  postTimesheet(timesheetObject: TimesheetObject) {
    return this.http.post(
      "http://localhost:8443/api/v1/timesheet/add",
      timesheetObject
    );
  }

  getAllTimesheetByEmpCode(empCode, startDate, endDate) {
    return this.http.get(
      "http://localhost:8443/api/v1/timesheet/getAllTimesheetByEmpCode/" +
        empCode +
        "/" +
        startDate +
        "/" +
        endDate
    );
  }
  //getAllApprovalByEmpCode

  getAllApprovalByEmpCode(approvedStatus: TimesheetApprovedStatus) {
    const data = approvedStatus;
    return this.http.post(
      "http://localhost:8443/api/v1/timesheet/getAllApprovalByEmpCode/",
      data
    );
  }
}
