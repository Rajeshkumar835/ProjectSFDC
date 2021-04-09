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
import { AddressInfo, BankInfo, CurrentExperience, EmployeeInfo, PreviousExperience, QualificationInfo } from "src/app/models/employee.model";

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
    this.getAllBankInfoByEmpCode();
    this.getAllAddressByEmpCode();
    this.getCurrentExperienceByEmpCode();
    this.getPreviousExperienceByEmpCode();
  }
  qualificationInfo: QualificationInfo={
    comments:"",
    empCode: "",
    highest: null,
    qualification: "",
    type: ""
  }
  getAllQualificationByEmpCode(){
    this.adminService.getAllQualificationByEmpCode(this.viewEmpCode).subscribe((data:any)=>{
      console.log("Qualification Info Data",data);
      console.log("Qualification Info Data comments",data[0].comments);

      this.qualificationInfo.comments=data[0].comments;
      this.qualificationInfo.empCode=data[0].empCode;
      this.qualificationInfo.highest=data[0].highest;
      this.qualificationInfo.qualification=data[0].qualification;
      this.qualificationInfo.type=data[0].type;

    })
  }
  bankInfo: BankInfo={
    bankAccNo: "",
    bankAddress: "",
    bankName: "",
    bankType: "",
    empCode: "",
    ifsCode:"",
    routingNumber: ""
  }
  getAllBankInfoByEmpCode(){
    this.adminService.getAllBankInfoByEmpCode(this.viewEmpCode).subscribe((data:any)=>{
      console.log("BankInfo Data",data);
      this.bankInfo.bankAccNo=data[0].bankAccNo;
      this.bankInfo.bankAddress=data[0].bankAddress;
      this.bankInfo.bankName=data[0].bankName;
      this.bankInfo.bankType=data[0].bankType;
      this.bankInfo.empCode=data[0].empCode;
      this.bankInfo.ifsCode=data[0].ifsCode;
      this.bankInfo.routingNumber=data[0].routingNumber;

    })
  }
  addressInfo: AddressInfo={
    addressLine1:"",
    addressLine2:"",
    addressType:"",
    city:"",
    country:"",
    empCode:"",
    state:"",
    zipCode:""
  }
  getAllAddressByEmpCode(){
    this.adminService.getAllAddressByEmpCode(this.viewEmpCode).subscribe((data:any)=>{
      console.log("Address Info data",data);
      this.addressInfo.addressLine1=data[0].addressLine1;
      this.addressInfo.addressLine2=data[0].addressLine2;
      this.addressInfo.addressType=data[0].addressType;
      this.addressInfo.city=data[0].city;
      this.addressInfo.country=data[0].country;
      this.addressInfo.empCode=data[0].empCode;
      this.addressInfo.state=data[0].state;
      this.addressInfo.zipCode=data[0].zipCode;

    })
  }
  currentExperience: CurrentExperience={
    company:"",
    designation:"",
    empCode: "",
    endDate: null,
    startDate:null
  }
  getCurrentExperienceByEmpCode(){
    this.adminService.getCurrentExperienceByEmpCode(this.viewEmpCode).subscribe((data:any)=>{
      console.log("Current experience data",data);
      this.currentExperience.company=data[0].company;
      this.currentExperience.designation=data[0].designation;
      this.currentExperience.empCode=data[0].empCode;
      this.currentExperience.endDate=data[0].endDate;
      this.currentExperience.startDate=data[0].startDate;

    })
  }
  previousExperience: PreviousExperience={
    company: "",
    designation: "",
    empCode: "",
    lastCtc: 0,
    joiningdate: null,
    leavingDate: null
  }
  getPreviousExperienceByEmpCode(){
    this.adminService.getPreviousExperienceByEmpCode(this.viewEmpCode).subscribe((data:any)=>{
      console.log("Previous Employee Data",data);
      this.previousExperience.company=data[0].company;
      this.previousExperience.designation=data[0].designation;
      this.previousExperience.empCode=data[0].empCode;
      this.previousExperience.lastCtc=data[0].lastCtc;
      this.previousExperience.joiningdate=data[0].joiningdate;
      this.previousExperience.leavingDate=data[0].leavingDate;

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
