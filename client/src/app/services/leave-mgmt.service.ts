import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { AppConfig } from "../config/app.config";

@Injectable({
  providedIn: "root",
})
export class LeaveMgmtService {
  constructor(private _http: HttpClient) {}

  readonly rootUrl =AppConfig.API_URL;

  ApplyLeave(leavevalue) {
    console.log("value check1", leavevalue);
    return this._http.post(this.rootUrl +"/employeeLeaveInfo/add", leavevalue);
  }
  getEmployeeLeaveInfoData(empCode) {
    return this._http.get(
      this.rootUrl +"/employeeLeaveInfo/findAllLeaveInfoByEmpCode/" + empCode
    );
  }
  getLeaveTypeData() {
    return this._http.get(this.rootUrl +"/leaveInfo/findAll");
  }
  getAllLeaveData() {
    return this._http.get(this.rootUrl +"/employeeLeaveInfo/findAll");
  }
  getEmployeeDataByStatus(managCode) {
    return this._http.get(
      this.rootUrl +"/employeeLeaveInfo/findAllLeaveInfoByStatus/" + managCode
    );
  }
  putEmployeeDataForApproval(leaveStatus, id) {
    return this._http.put(
      this.rootUrl +"/employeeLeaveInfo/update/" + id,
      leaveStatus
    );
  }
  // getEmployeeDataByEmpCode(listOfEmpCode) {
  //   return this._http.get(
  //     this.rootUrl +"/employeeLeaveInfo/findAllLeaveInfoByStatus",
  //     listOfEmpCode
  //   );
  // }
  getEmpDataByEmpcodeAndLeaveCode(empCode, leavCode) {
    return this._http.get(
      this.rootUrl +"/employeeLeaveInfo/findLeaveInfoByEmpCodeandLeaveCode/" +
        empCode +
        "/" +
        leavCode
    );
  }
  getWeekOfDays() {
    return this._http.get(this.rootUrl +"/companyWeeklyOff/findAll");
  }
  getHolidays() {
    return this._http.get(this.rootUrl +"/companyHolidayList/findAll");
  }
  getAllEmployeeDataUnderManager(managerCode) {
    return this._http.get(
      this.rootUrl +"/employeeInfo/getEmployeeByManagerEmpCode/" + managerCode
    );
  }
}
