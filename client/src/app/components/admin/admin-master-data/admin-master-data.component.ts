import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CompanyOffDays, CreateEmployee, HolidayList, HolidayType, LeaveInfo } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-master-data',
  templateUrl: './admin-master-data.component.html',
  styleUrls: ['./admin-master-data.component.scss']
})
export class AdminMasterDataComponent implements OnInit {

  teamCreation:boolean=false;

  toppings = new FormControl();
  projects = new FormControl();

  holidayList = ['Holiday Type 1', 'Holiday Type 2', 'Holiday Type 3', 'Holiday Type 4', 'Holiday Type 5'];
  selectedToppings;
  companyNameList=['Anagha Infotech'];
  selectedProject;

  constructor(private adminService: AdminService) { }
  postHoliday: HolidayType={
    clientCode:"",
    holidayCode: "",
    holidayName:""
  }
  holidayListName: HolidayList={
    holidayId:0,
    holidayDate:null,
    holidayName:""
  }
  companyOffDays: CompanyOffDays={
    clientCode:"",
    dayCode:""
  }
  leaveInfo :LeaveInfo={
    clientCode:"",
    leaveCode:"",
    leaveName:"",
    leaveLimit:0
  }
  employeeCreationEnable:boolean=false;
  employeeManagerCreationEnable:boolean=false;
  createEmployee: CreateEmployee={
    empCode:"",
    clientCode:"",
    contactNo:"",
    empName:"",
    dob:""
  }
  ngOnInit() {

    let clientCode=localStorage.getItem("clientInfo");
    this.createEmployee.clientCode=clientCode;
    this.leaveInfo.clientCode=clientCode;
    this.companyOffDays.clientCode=clientCode;
    this.postHoliday.clientCode=clientCode;
    console.log("clientCode",clientCode);
  }
  postHolidayType(){
    this.adminService.addHolidayType(this.postHoliday).subscribe((data:any)=>{
      console.log("Holiday Type Posted",data);
    })

  }
  holidayTypeList;
  getHolidayType(){
    this.adminService.getAllHolidayType().subscribe((data:any)=>{
      console.log("Holiday Type list",data)
      this.holidayTypeList=data;
    })
  }
  holidayTypeSelection(id){
    console.log("holiday id dropdown",id)
    this.holidayListName.holidayId=id;
  }
  postHolidayList(){
    this.adminService.postHolidayList(this.holidayListName).subscribe((data:any)=>{
      console.log("holiday name list ",data)
    })
  }
  postWeeklyOffDays(){
    this.adminService.postWeeklyOffDays(this.companyOffDays).subscribe((data:any)=>{
      console.log("Weekly off daya list",data);
    })
  }

  postLeaveInfo(){
    this.adminService.postLeaveInfo(this.leaveInfo).subscribe((data:any)=>{
      console.log("Leave info post data",data);
    })
  }
  employeeCreation(){
    this.employeeCreationEnable=true;
  }

  employeeManagerCreation(){
    this.employeeManagerCreationEnable=true;
  }
  postEmployeeCreation(){
    this.adminService.createEmployeeInfo(this.createEmployee).subscribe((data:any)=>{
      console.log("Employee creation data",data);
    })
  }

}
