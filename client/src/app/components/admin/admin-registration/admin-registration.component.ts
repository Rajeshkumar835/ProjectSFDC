import { Component, OnInit } from '@angular/core';
import { ClientRegistrationInfo } from 'src/app/models/admin.model';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.scss']
})
export class AdminRegistrationComponent implements OnInit {
  clientRegistrationInfo: ClientRegistrationInfo={
    companyEmail: "",
    companyLocation:"",
    companyName: "",
    companyTinVatNo: "",
    clientCode:"",
    password: "",
    website: ""
  }
  constructor(private router: Router,
    private adminService: AdminService) { }

  ngOnInit() {
  }
  clientRegistration(){
    console.log("client registration data",this.clientRegistrationInfo);
    this.adminService.clientRegistration(this.clientRegistrationInfo).subscribe((data:any)=>{
      console.log("client registration data",data);
      if(data!=null){
        this.router.navigate(["/admin-login"]);
      }
    })
  }
}
