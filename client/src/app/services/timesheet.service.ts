import { Injectable } from "@angular/core";
import {
  Timesheet,
  TimesheetApprovedStatus,
  TimesheetObject,
} from "../models/timesheet.model";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../config/app.config";

@Injectable({
  providedIn: "root",
})
export class TimesheetService {
  constructor(private http: HttpClient) {}

  readonly rootUrl =AppConfig.API_URL;


  postTimesheet(timesheetObject: TimesheetObject) {
    return this.http.post(this.rootUrl +"/timesheet/add", timesheetObject);
  }

  getAllTimesheetByEmpCode(empCode, startDate, endDate) {
    return this.http.get(
      this.rootUrl +"/timesheet/getAllTimesheetByEmpCode/" +
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
    return this.http.post(this.rootUrl +"/timesheet/timesheetApprovalByEmpCode", data);
  }

  getEmployeeInfoByEmpCode(empCode) {
    return this.http.get(this.rootUrl +"/employeeInfo/findById/" + empCode);
  }

  //get all employee in hierarchy(manager h)
  getEmployeeInfoByEmpCodeHierarchy(empCode) {
    return this.http.get(
      this.rootUrl +"/employeeInfo/getEmployeeByManagerEmpCode/" + empCode
    );
  }
}
