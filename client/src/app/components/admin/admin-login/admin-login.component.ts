import { Component, OnInit } from "@angular/core";
import { AdminService } from "src/app/services/admin.service";
import { Router } from "@angular/router";
import { ClientLogin } from "src/app/models/admin.model";
@Component({
  selector: "app-admin-login",
  templateUrl: "./admin-login.component.html",
  styleUrls: ["./admin-login.component.scss"],
})
export class AdminLoginComponent implements OnInit {
  adminLogin: ClientLogin = {
    companyEmail: "",
    password: "",
  };

  constructor(private router: Router, private adminService: AdminService) {}
  cPass: String;
  cEmail: String;
  ngOnInit() {}
  adminLoginAuthenticate() {
    this.cEmail = this.adminLogin.companyEmail;
    console.log("login Data Company Email get successfully : ", this.cEmail);
    this.cPass = this.adminLogin.password;
    console.log("login Data Company Password get successfully : ", this.cPass);
    console.log("login Data get successfully : ", this.adminLogin);
    this.adminService
      .adminLoginAuthentication(this.cEmail, this.cPass)
      .subscribe((data: any) => {
        console.log("Logged in successfully : ", data);
        if (data != null) {
          localStorage.setItem("clientInfo", data.clientCode);
          localStorage.setItem("userInput1", data.password);
          this.router.navigate(["/admin-dashboard"]);
        }
      });
  }
}
