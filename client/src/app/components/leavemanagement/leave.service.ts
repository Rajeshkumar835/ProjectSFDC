import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LeaveService {
  constructor(private _http: HttpClient) {}
  ApplyLeave(leave: any) {
    console.log("value check1", leave);
    return this._http.post(
      "http://localhost:8443/api/v1/employeeLeaveInfo/add",
      leave
    );
  }
  getLeaveTypeData() {
    return this._http.get("http://localhost:8443/api/v1/leaveInfo/findAll");
  }
  getAllLeaveData() {
    return this._http.get("http://localhost:8443//api/v1/employeeInfo/findAll");
  }
}
