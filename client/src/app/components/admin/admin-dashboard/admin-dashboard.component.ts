import { Component, TemplateRef, OnInit } from "@angular/core";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { TabsetConfig } from 'ngx-bootstrap/tabs';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import {
  ClientLogin,
  ClientRegistrationInfo,
  CompanyOffDays,
  HolidayList,
  HolidayType,
  LeaveInfo,
} from "src/app/models/admin.model";
import { AdminService } from "src/app/services/admin.service";
import { FormControl } from "@angular/forms";
import { EmployeeInfo, QualificationInfo } from "src/app/models/employee.model";

@Component({
  selector: "app-admin-dashboard",
  templateUrl: "./admin-dashboard.component.html",
  styleUrls: ["./admin-dashboard.component.scss"],
})
export class AdminDashboardComponent implements OnInit {
  companyCode;
  toppings = new FormControl();
  modalRef: BsModalRef;
  selectedToppings;
  clientRegistrationInfo: ClientRegistrationInfo = {
    companyEmail: "",
    companyLocation: "",
    companyName: "",
    companyTinVatNo: "",
    clientCode: "",
    password: "",
    website: "",
  };
  holidayTypeList;
  holidayList;
  weeklyOffDaysList;
  leaveInfoList;
  employeeList;
  holidayTypeUpdate: HolidayType = {
    clientCode: "",
    holidayCode: "",
    holidayName: "",
  };

  holidayListUpdate: HolidayList = {
    holidayId: 0,
    holidayDate: null,
    holidayName: "",
  };
  weeklyOffDayUpdate: CompanyOffDays = {
    clientCode: "",
    dayCode: "",
  };
  leaveInfoUpdate: LeaveInfo = {
    clientCode: "",
    leaveCode: "",
    leaveName: "",
    leaveLimit: 0,
  };
  holidayTypeId;
  holidayListId;
  WeeklyOffId;
  leaveId;
  leaveInfo: LeaveInfo = {
    clientCode: "",
    leaveCode: "",
    leaveName: "",
    leaveLimit: 0,
  };
  companyOffDays: CompanyOffDays = {
    clientCode: "",
    dayCode: "",
  };
  postHoliday: HolidayType = {
    clientCode: "",
    holidayCode: "",
    holidayName: "",
  };
  currentPass;
  enterCurrentpass;
  changeAdminPassword: ClientLogin = {
    companyEmail: "",
    password: "",
  };
  constructor(
    private adminService: AdminService,
    private modalService: BsModalService
  ) {}

  ngOnInit() {
    let clientCode = localStorage.getItem("clientInfo");
    let cpass = localStorage.getItem("userInput1");
    this.currentPass = cpass;
    this.companyCode = clientCode;
    this.holidayTypeUpdate.clientCode = clientCode;
    this.weeklyOffDayUpdate.clientCode = clientCode;
    this.leaveInfoUpdate.clientCode = clientCode;
    this.leaveInfo.clientCode = clientCode;
    this.companyOffDays.clientCode = clientCode;
    this.postHoliday.clientCode = clientCode;
    this.getAllHolidayTypeByCompany();
    this.getAllHolidayListByCompanyCode();
    this.getAllWeeklyOffDaysByCompany();
    this.getAllLeaveInfoByCompany();
    if (clientCode) {
      this.getCompanyInfoByCompanyCode();
      this.getAllEmployeeByClientCode();
    }
  }
  getCompanyInfoByCompanyCode() {
    this.adminService
      .findCompanyByCompanyCode(this.companyCode)
      .subscribe((data: any) => {
        console.log("Company data", data);
        this.changeAdminPassword.companyEmail = data.companyEmail;
        this.clientRegistrationInfo = data;
      });
  }
getAllEmployeeByClientCode(){
  this.adminService.getAllEmployeeByClientCode(this.companyCode).subscribe((data:any)=>{
    console.log("Employee Info by ClientCode",data);
    this.employeeList=data;
  })
}

  getAllHolidayTypeByCompany() {
    this.adminService.getAllHolidayType().subscribe((data: any) => {
      console.log("Holiday type data", data);
      this.holidayTypeList = data;
    });
  }
  holidayTypeSelection(id) {
    console.log("holiday id dropdown", id);
    this.holidayListUpdate.holidayId = id;
  }
  getAllHolidayListByCompanyCode() {
    this.adminService.getAllHolidayList().subscribe((data: any) => {
      console.log("Holiday list", data);
      this.holidayList = data;
    });
  }

  getAllWeeklyOffDaysByCompany() {
    this.adminService.getAllWeeklyOffDays().subscribe((data: any) => {
      console.log("Weekly off daya List", data);
      this.weeklyOffDaysList = data;
    });
  }

  getAllLeaveInfoByCompany() {
    this.adminService.getAllLeaveInfo().subscribe((data: any) => {
      console.log("Leave info data", data);
      this.leaveInfoList = data;
    });
  }

  updateClientPersonalInfo() {
    this.adminService
      .updateClientPersonalInfo(
        this.clientRegistrationInfo,
        this.clientRegistrationInfo.clientCode
      )
      .subscribe((data: any) => {
        console.log("Updated Client data", data);
      });
  }
  passMatched: boolean = false;
  passUpdatebtn:boolean=true;
  changeClientPass() {
    this.passMatched= true;
    this.passUpdatebtn=true;
    console.log("password matching", this.passMatched);
    if (this.currentPass ==this.enterCurrentpass) {
      this.passMatched = false;
      this.passUpdatebtn=false;
      console.log("password matching", this.passMatched);
    }
  }
  updateHolidayType() {
    console.log("Updated Holiday Type data", this.holidayTypeUpdate);
    console.log("Updated Holiday Type Id", this.holidayTypeId);
    this.adminService
      .updateHolidayType(this.holidayTypeUpdate, this.holidayTypeId)
      .subscribe((data: any) => {
        console.log("Updated Holiday Type data", data);
      });
  }

  updateHolidayList() {
    console.log("Updated Holiday List data", this.holidayListUpdate);
  }

  updateWeeklyOffDays() {
    console.log("Updated weekly off days list", this.weeklyOffDayUpdate);
    console.log("Updated weekly off days list", this.WeeklyOffId);
    this.adminService
      .updateWeeklyOffDays(this.weeklyOffDayUpdate, this.WeeklyOffId)
      .subscribe((data: any) => {
        console.log("Weekly off updated data", data);
      });
  }

  updateLeaveInfo() {
    console.log("Updated leve info data", this.leaveInfoUpdate);
    console.log("Updated leve info data", this.leaveId);
    this.adminService
      .updateLeaveInformation(this.leaveInfoUpdate, this.leaveId)
      .subscribe((data: any) => {
        console.log("leave info updated data", data);
      });
  }
  viewEmpCode;
  employeeInfo: EmployeeInfo={
    currSalary: 0,
    contactNo: "",
    designation: "",
    dob: null,
    emailId: "",
    empCode: "",
    fatherName:"",
    firstName:"",
    hireDate: null,
    homePhoneNo:"",
    lastName:"",
    middleName:"",
    panCardNo:"",
    passportNo:"",
  }
  qualificationInfo: QualificationInfo={
    comments:"",
    empCode: "",
    highest: null,
    qualification: "",
    type: ""
  }
  employeeInfoListModal(template: TemplateRef<any>, data){
    console.log("employee personal info data",data)
    this.viewEmpCode=data.empCode;
    this.employeeInfo.currSalary=data.currSalary;
    this.employeeInfo.contactNo=data.contactNo;
    this.employeeInfo.designation=data.designation;
    this.employeeInfo.dob=data.dob;
    this.employeeInfo.emailId=data.emailId;
    this.employeeInfo.empCode=data.empCode;
    this.employeeInfo.fatherName=data.fatherName;
    this.employeeInfo.firstName=data.firstName;
    this.employeeInfo.hireDate=data.hireDate;
    this.employeeInfo.homePhoneNo=data.homePhoneNo;
    this.employeeInfo.lastName=data.lastName;
    this.employeeInfo.middleName=data.middleName;
    this.employeeInfo.panCardNo=data.panCardNo;
    this.employeeInfo.passportNo=data.passportNo;

    this.modalRef = this.modalService.show(template);
    this.getAllQualificationByEmpCode();

  }

  getAllQualificationByEmpCode(){
    this.adminService.getAllQualificationByEmpCode(this.viewEmpCode).subscribe((data:any)=>{
      console.log("Qualification Info Data",data);
      this.qualificationInfo=data;
    })
  }
  openHolidayTypeModal(template: TemplateRef<any>, data) {
    this.holidayTypeId = data.holidayId;
    this.holidayTypeUpdate.holidayCode = data.holidayCode;
    this.holidayTypeUpdate.holidayName = data.holidayName;

    this.modalRef = this.modalService.show(template);
  }
  openHolidayListModal(template: TemplateRef<any>, data) {
    this.holidayListUpdate.holidayId = data.holidayType.holidayId;
    this.holidayListUpdate.holidayDate = data.holidayDate;
    this.holidayListUpdate.holidayName = data.holidayName;

    this.modalRef = this.modalService.show(template);
  }
  openWeeklyOffDaysModal(template: TemplateRef<any>, data) {
    this.weeklyOffDayUpdate.dayCode = data.dayCode;
    this.WeeklyOffId = data.id;
    this.modalRef = this.modalService.show(template);
  }
  openLeaveInfoModal(template: TemplateRef<any>, data) {
    this.leaveInfoUpdate.leaveCode = data.leaveCode;
    this.leaveInfoUpdate.leaveName = data.leaveName;
    this.leaveInfoUpdate.leaveLimit = data.leaveLimit;
    this.leaveId = data.id;

    this.modalRef = this.modalService.show(template);
  }

  createLeaveInfoModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  createWeeklyOffDaysModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  createHolidayTypeModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  postLeaveInfo() {
    this.adminService.postLeaveInfo(this.leaveInfo).subscribe((data: any) => {
      console.log("Leave info post data", data);
    });
  }

  postWeeklyOffDays() {
    this.adminService
      .postWeeklyOffDays(this.companyOffDays)
      .subscribe((data: any) => {
        console.log("Weekly off daya list", data);
      });
  }

  postHolidayType() {
    this.adminService
      .addHolidayType(this.postHoliday)
      .subscribe((data: any) => {
        console.log("Holiday Type Posted", data);
      });
  }
  changePass: boolean = false;
  changePasswordDivEnable() {
    this.changePass = true;
  }
newPasswordFiledValidation:boolean=true;
  newPasswordValidation(){
this.newPasswordFiledValidation=false;
  }

  updateAdminPassword(){
    this.adminService.changeAdminPassowrd(this.changeAdminPassword).subscribe((data:any)=>{
      if(data){
        console.log("Password change successfully",data);
      }
      else{
        console.log("Error while password change");

      }
    })
  }
  updatePersonalInformation(){

  }
}
