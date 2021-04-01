import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-employee-login',
  templateUrl: './employee-login.component.html',
  styleUrls: ['./employee-login.component.scss']
})
export class EmployeeLoginComponent implements OnInit {
eCode:"";
ePass:"";
  constructor(private router: Router,
    private adminService: AdminService) { }

  ngOnInit() {
  }
  empLogin(){
    this.adminService.employeeLogin(this.eCode,this.ePass).subscribe((data:any)=>{
      console.log("Login Successfull",data);
      console.log("Login Successfull",data.empCode);
      if(data!=null){
        localStorage.setItem("employeeInfo",data.empCode);
        this.router.navigate(["/"]);
      }
    })
  }

}
