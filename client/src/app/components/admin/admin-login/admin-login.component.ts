import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/services/admin.service';
import { Router } from "@angular/router";
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  constructor(private router: Router,
    private adminService: AdminService) { }
cPass:"";
cEmail:"";
  ngOnInit() {
  }
  adminLoginAuthenticate(){
    this.adminService.adminLoginAuthentication(this.cEmail,this.cPass).subscribe((data:any)=>{
      console.log("Logged in successfully : ",data)
      if(data){
        this.router.navigate(["/admin-master-add"]);
      }
    })
    
  }

}
