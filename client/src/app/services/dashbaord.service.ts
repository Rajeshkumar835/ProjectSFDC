import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DashbaordService {
  constructor(private http: HttpClient) {}

  getEmployeeInfoByEmpCode(empCode) {
    return this.http.get(
      "http://localhost:8443/api/v1/employeeInfo/findById/" + empCode
    );
  }
}
