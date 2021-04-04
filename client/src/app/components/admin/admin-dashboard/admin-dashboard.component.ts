import { Component, TemplateRef,OnInit } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ClientRegistrationInfo, CompanyOffDays, HolidayList, HolidayType, LeaveInfo } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  modalRef: BsModalRef;
  clientRegistrationInfo: ClientRegistrationInfo={
    companyEmail: "",
    companyLocation:"",
    companyName: "",
    companyTinVatNo: "",
    clientCode:"",
    password: "",
    website: ""
  }
  holidayTypeList;
  holidayList;
  weeklyOffDaysList;
  leaveInfoList;

  holidayTypeUpdate: HolidayType={
    clientCode:"",
    holidayCode:"",
    holidayName:""
  }

  holidayListUpdate: HolidayList={
    holidayId:0,
    holidayDate:null,
    holidayName:""
  }
  weeklyOffDayUpdate:CompanyOffDays={
    clientCode:"",
    dayCode:""
  }
leaveInfoUpdate: LeaveInfo={
  clientCode:"",
  leaveCode:"",
  leaveName:"",
  leaveLimit:0
}
  constructor(
    private adminService: AdminService,
    private modalService: BsModalService) { }

  ngOnInit() {
    let clientCode=localStorage.getItem("clientInfo");
    this.holidayTypeUpdate.clientCode=clientCode;
    this.weeklyOffDayUpdate.clientCode=clientCode;
    this.leaveInfoUpdate.clientCode=clientCode;
    this. getAllHolidayTypeByCompany();
    this.getAllHolidayListByCompanyCode();
    this. getAllWeeklyOffDaysByCompany();
    this.getAllLeaveInfoByCompany();
  }
  getAllHolidayTypeByCompany(){
    this.adminService.getAllHolidayType().subscribe((data:any)=>{
      console.log("Holiday type data",data);
      this.holidayTypeList=data;
    })
  }
  getAllHolidayListByCompanyCode(){
    this.adminService.getAllHolidayList().subscribe((data:any)=>{
      console.log("Holiday list",data);
      this.holidayList=data;
    })
  }

  getAllWeeklyOffDaysByCompany(){
    this.adminService.getAllWeeklyOffDays().subscribe((data:any)=>{
      console.log("Weekly off daya List",data);
      this.weeklyOffDaysList=data;
    })
  }

  getAllLeaveInfoByCompany(){
    this.adminService.getAllLeaveInfo().subscribe((data:any)=>{
      console.log("Leave info data",data);
      this.leaveInfoList=data;
    })
  }

  clientRegistration(){

  }
  view(data){

  }

  updateHolidayType(){
    console.log("Updated Holiday Type data",this.holidayTypeUpdate);
    // this.adminService.updateHolidayType(this.holidayType).subscribe((data:any)=>{
    //   console.log("Updated Holiday Type data",data);
    // })
  }

  updateHolidayList(){
    console.log("Updated Holiday List data",this.holidayListUpdate);
  }

  updateWeeklyOffDays(){
    console.log("Updated weekly off days list",this.weeklyOffDayUpdate)
  }

  updateLeaveInfo(){
    console.log("Updated leve info data",this.leaveInfoUpdate)
  }
  openHolidayTypeModal(template: TemplateRef<any>,data) {
    this.holidayTypeUpdate.holidayCode=data.holidayCode;
    this.holidayTypeUpdate.holidayName=data.holidayName;

    this.modalRef = this.modalService.show(template);
  }
  openHolidayListModal(template: TemplateRef<any>,data) {
    this.holidayListUpdate.holidayId=data.holidayType.holidayId;
    this.holidayListUpdate.holidayDate=data.holidayDate;
    this.holidayListUpdate.holidayName=data.holidayName;

    this.modalRef = this.modalService.show(template);
  }
  openWeeklyOffDaysModal(template: TemplateRef<any>, data) {
    this.weeklyOffDayUpdate.dayCode=data.dayCode;

    this.modalRef = this.modalService.show(template);
  }
  openLeaveInfoModal(template: TemplateRef<any>,data) {
    this.leaveInfoUpdate.leaveCode=data.leaveCode;
    this.leaveInfoUpdate.leaveName=data.leaveName;
    this.leaveInfoUpdate.leaveLimit=data.leaveLimit;

    this.modalRef = this.modalService.show(template);
  }
}
