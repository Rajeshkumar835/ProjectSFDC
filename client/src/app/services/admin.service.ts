import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  ClientRegistrationInfo,
  CompanyOffDays,
  CreateEmployee,
  HolidayList,
  HolidayType,
  LeaveInfo,
} from "../models/admin.model";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private http: HttpClient) {}

  clientRegistration(clientRegistrationInfo: ClientRegistrationInfo) {
    const body = clientRegistrationInfo;
    return this.http.post(
      "/api/v1/clientRegistrationInfo/add",
      body
    );
  }

  adminLoginAuthentication(companyEmail, password) {
    return this.http.get(
      "/api/v1/clientRegistrationInfo/adminLogin/" +
        companyEmail +
        "/" +
        password
    );
  }

  addHolidayType(holidayType: HolidayType) {
    const body = holidayType;
    return this.http.post("/api/v1/holidayType/add", body);
  }

  getAllHolidayType() {
    return this.http.get("/api/v1/holidayType/findAll");
  }
  postHolidayList(holidayList: HolidayList) {
    const data = holidayList;
    return this.http.post(
      "/api/v1/companyHolidayList/add",
      data
    );
  }
  postWeeklyOffDays(companyOffDays: CompanyOffDays) {
    return this.http.post(
      "/api/v1/companyWeeklyOff/add",
      companyOffDays
    );
  }

  postLeaveInfo(leaveInfo: LeaveInfo) {
    return this.http.post(
      "/api/v1/leaveInfo/add",
      leaveInfo
    );
  }

  createEmployeeInfo(createEmployee: CreateEmployee) {
    const body = createEmployee;
    return this.http.post(
      "/api/v1/employeeInfo/createEmployee",
      body
    );
  }

  employeeLogin(empCode, password) {
    return this.http.get(
      "/api/v1/employeeInfo/employeeLogin/" +
        empCode +
        "/" +
        password
    );
  }

  getAllEmpManagerList() {
    return this.http.get(
      "/api/v1/employeeInfo/getEmployeeManagerList"
    );
  }

  getAllHolidayList(){
    return this.http.get("/api/v1/companyHolidayList/findAll");
  }

  getAllWeeklyOffDays(){
    return this.http.get("/api/v1/companyWeeklyOff/findAll");
  }

  getAllLeaveInfo(){
    return this.http.get("/api/v1/leaveInfo/findAll");
  }

  updateHolidayType(holidayType:HolidayType,holidayId){
    return this.http.put("/api/v1/holidayType/update/"+holidayId,holidayType);
  }

  updateHolidayList(holidayList: HolidayList){
    return this.http.put("/api/v1/companyHolidayList/update",holidayList)
  }

  updateWeeklyOffDays(companyOffDays: CompanyOffDays, weekId){
    return this.http.put("/api/v1/companyWeeklyOff/update/"+weekId,companyOffDays)
  }

  updateLeaveInformation(leaveInfo: LeaveInfo,leaveId){
    return this.http.put("/api/v1/leaveInfo/update/"+leaveId,leaveInfo)

  }

  findCompanyByCompanyCode(code){
    return this.http.get("/api/v1/clientRegistrationInfo/findById/"+code);
  }
}
