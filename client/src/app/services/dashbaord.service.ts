import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../config/app.config";

@Injectable({
  providedIn: "root",
})
export class DashbaordService {
  constructor(private http: HttpClient) {}

  readonly rootUrl =AppConfig.API_URL;


  getEmployeeInfoByEmpCode(empCode) {
    return this.http.get(
      this.rootUrl +"/employeeInfo/findById/" + empCode
    );
  }
}
