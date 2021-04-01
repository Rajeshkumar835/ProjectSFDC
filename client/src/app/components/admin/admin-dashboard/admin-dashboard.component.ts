import { Component, OnInit } from '@angular/core';
import { ClientRegistrationInfo } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {
  clientRegistrationInfo: ClientRegistrationInfo={
    companyEmail: "",
    companyLocation:"",
    companyName: "",
    companyTinVatNo: "",
    clientCode:"",
    passowrd: "",
    website: ""
  }
  holidayTypeList;
  holidayList;
  constructor(private adminService: AdminService) { }

  ngOnInit() {
    this. getAllHolidayTypeByCompany();
    this.getAllHolidayListByCompanyCode();
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


  clientRegistration(){

  }
  view(data){

  }
}
