import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class LeaveMgmtService {
  constructor(private _http: HttpClient) {}
  ApplyLeave(leavevalue) {
    console.log("value check1", leavevalue);
    return this._http.post(
      "http://localhost:8443/api/v1/employeeLeaveInfo/add",
      leavevalue
    );
  }
  getEmployeeLeaveInfoData(empCode) {
    return this._http.get(
      "http://localhost:8443/api/v1/employeeLeaveInfo/findAllLeaveInfoByEmpCode/" +
        empCode
    );
  }
  getLeaveTypeData() {
    return this._http.get("http://localhost:8443/api/v1/leaveInfo/findAll");
  }
  getAllLeaveData() {
    return this._http.get(
      "http://localhost:8443/api/v1/employeeLeaveInfo/findAll"
    );
  }
  getEmployeeDataByStatus(managCode) {
    return this._http.get(
      "http://localhost:8443/api/v1/employeeLeaveInfo/findAllLeaveInfoByStatus/" +
        managCode
    );
  }
  putEmployeeDataForApproval(leaveStatus, id) {
    return this._http.put(
      "http://localhost:8443/api/v1/employeeLeaveInfo/update/" + id,
      leaveStatus
    );
  }
  // getEmployeeDataByEmpCode(listOfEmpCode) {
  //   return this._http.get(
  //     "http://localhost:8443/api/v1/employeeLeaveInfo/findAllLeaveInfoByStatus",
  //     listOfEmpCode
  //   );
  // }
  getEmpDataByEmpcodeAndLeaveCode(empCode, leavCode) {
    return this._http.get(
      "http://localhost:8443/api/v1/employeeLeaveInfo/findLeaveInfoByEmpCodeandLeaveCode/" +
        empCode +
        "/" +
        leavCode
    );
  }
  getWeekOfDays() {
    return this._http.get(
      "http://localhost:8443/api/v1/companyWeeklyOff/findAll"
    );
  }
  getHolidays() {
    return this._http.get(
      "http://localhost:8443/api/v1/companyHolidayList/findAll"
    );
  }
  getAllEmployeeDataUnderManager(managerCode) {
    return this._http.get(
      "http://localhost:8443/api/v1/employeeInfo/getEmployeeByManagerEmpCode/" +
        managerCode
    );
  }
}
