import { Injectable } from '@angular/core';
import { Timesheet } from '../models/timesheet.model';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TimesheetService {

  constructor(private http: HttpClient) { }

  postTimesheet(timesheetObject){
    return this.http.post("http://localhost:8443/api/v1/timesheet/add",timesheetObject);
  }
}
