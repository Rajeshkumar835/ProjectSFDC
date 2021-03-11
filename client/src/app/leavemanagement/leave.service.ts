import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LeaveService {
  constructor(private _http: HttpClient) {}
  ApplyLeave(leave) {
    console.log("value check1", leave);
    return this._http.post(
      "http://localhost:8443/api/v1/employeeLeaveInfo/add",
      leave
    );
  }
  getAllLeaveData() {
    return this._http.get(
      "https://applyleavedb-default-rtdb.firebaseio.com/leavs.json"
    );
  }
}
