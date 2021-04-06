import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {
  ClientLogin,
  ClientRegistrationInfo,
  CompanyOffDays,
  CreateEmployee,
  HolidayList,
  HolidayType,
  LeaveInfo,
} from "../models/admin.model";
import { AppConfig } from "../config/app.config";

@Injectable({
  providedIn: "root",
})
export class AdminService {
  constructor(private http: HttpClient) {}

  readonly rootUrl = AppConfig.API_URL;

  clientRegistration(clientRegistrationInfo: ClientRegistrationInfo) {
    const body = clientRegistrationInfo;
    return this.http.post(this.rootUrl + "/clientRegistrationInfo/add", body);
  }

  adminLoginAuthentication(clientLogin: ClientLogin) {
    return this.http.post(
      this.rootUrl + "/clientRegistrationInfo/adminLogin",
      clientLogin
    );
  }

  addHolidayType(holidayType: HolidayType) {
    const body = holidayType;
    return this.http.post(this.rootUrl + "/holidayType/add", body);
  }

  getAllHolidayType() {
    return this.http.get(this.rootUrl + "/holidayType/findAll");
  }
  postHolidayList(holidayList: HolidayList) {
    const data = holidayList;
    return this.http.post(this.rootUrl + "/companyHolidayList/add", data);
  }
  postWeeklyOffDays(companyOffDays: CompanyOffDays) {
    return this.http.post(
      this.rootUrl + "/companyWeeklyOff/add",
      companyOffDays
    );
  }

  postLeaveInfo(leaveInfo: LeaveInfo) {
    return this.http.post(this.rootUrl + "/leaveInfo/add", leaveInfo);
  }

  createEmployeeInfo(createEmployee: CreateEmployee) {
    const body = createEmployee;
    return this.http.post(this.rootUrl + "/employeeInfo/createEmployee", body);
  }

  employeeLogin(empCode, password) {
    return this.http.get(
      this.rootUrl + "/employeeInfo/employeeLogin/" + empCode + "/" + password
    );
  }

  getAllEmpManagerList() {
    return this.http.get(this.rootUrl + "/employeeInfo/getEmployeeManagerList");
  }

  getAllHolidayList() {
    return this.http.get(this.rootUrl + "/companyHolidayList/findAll");
  }

  getAllWeeklyOffDays() {
    return this.http.get(this.rootUrl + "/companyWeeklyOff/findAll");
  }

  getAllLeaveInfo() {
    return this.http.get(this.rootUrl + "/leaveInfo/findAll");
  }

  updateHolidayType(holidayType: HolidayType, holidayId) {
    return this.http.put(
      this.rootUrl + "/holidayType/update/" + holidayId,
      holidayType
    );
  }

  updateHolidayList(holidayList: HolidayList) {
    return this.http.put(
      this.rootUrl + "/companyHolidayList/update",
      holidayList
    );
  }

  updateWeeklyOffDays(companyOffDays: CompanyOffDays, weekId) {
    return this.http.put(
      this.rootUrl + "/companyWeeklyOff/update/" + weekId,
      companyOffDays
    );
  }

  updateLeaveInformation(leaveInfo: LeaveInfo, leaveId) {
    return this.http.put(
      this.rootUrl + "/leaveInfo/update/" + leaveId,
      leaveInfo
    );
  }

  findCompanyByCompanyCode(code) {
    return this.http.get(
      this.rootUrl + "/clientRegistrationInfo/findById/" + code
    );
  }

  updateClientPersonalInfo(
    ClientRegistrationInfo: ClientRegistrationInfo,
    clientCode
  ) {
    return this.http.put(
      this.rootUrl + "/clientRegistrationInfo/update/" + clientCode,
      ClientRegistrationInfo
    );
  }

  changeAdminPassowrd(clientLogin:ClientLogin){
   return this.http.put( this.rootUrl +"/clientRegistrationInfo/changeAdminPassword",clientLogin);
  }

  getAllEmployeeByClientCode(clientCode){
    return this.http.get(this.rootUrl +"/employeeInfo/getAllEmployeeInfoByClientCode/"+clientCode);
  }
}
