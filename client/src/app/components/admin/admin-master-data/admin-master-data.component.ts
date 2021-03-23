import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { CompanyOffDays, HolidayList, HolidayType, LeaveInfo } from 'src/app/models/admin.model';
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
    clientCode:"AIC",
    holidayCode: "",
    holidayName:""
  }
  holidayListName: HolidayList={
    holidayId:0,
    holidayDate:null,
    holidayName:""
  }
  companyOffDays: CompanyOffDays={
    clientCode:"AIC",
    dayCode:""
  }
  leaveInfo :LeaveInfo={
    clientCode:"AIC",
    leaveCode:"",
    leaveName:"",
    leaveLimit:0
  }
  ngOnInit() {
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

}
