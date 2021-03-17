import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LeaveMgmtService {
  rootUrl="http://localhost:8443/api/v1/";
  constructor(private http: HttpClient) {}

  getAllEmployeeLeaveInfoByEmpCode(empCode) {
    return this.http.get(this.rootUrl +"employeeLeaveInfo/findAllLeaveInfoByEmpCode/" + empCode);
  }
}
