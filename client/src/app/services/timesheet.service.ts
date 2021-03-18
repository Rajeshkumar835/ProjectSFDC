import { Injectable } from "@angular/core";
import { Timesheet, TimesheetObject } from "../models/timesheet.model";
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

  getAllTimesheetByEmpCode(empCode) {
    return this.http.get(
      "http://localhost:8443/api/v1/timesheet/getAllTimesheetByEmpCode/" +
        empCode
    );
  }
}
