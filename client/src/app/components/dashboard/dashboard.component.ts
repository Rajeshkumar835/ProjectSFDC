import { Component, OnInit } from '@angular/core';
import { DashbaordService } from 'src/app/services/dashbaord.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dashboardService : DashbaordService) { }

  ngOnInit() {
    let empCode=localStorage.getItem("employeeInfo");
    this.empCode=empCode;
    console.log("empCode",empCode);
    if(empCode)
    {
      this.getEmployeeInfoByEmpCode(this.empCode);

    }
  }
  empCode="";
  employeeAllData;
  getEmployeeInfoByEmpCode(empCode){
    this.dashboardService.getEmployeeInfoByEmpCode(empCode).subscribe((data:any)=>{
      console.log("Employe dashboard data",data);
      this.employeeAllData=data;
    })
  }

}
