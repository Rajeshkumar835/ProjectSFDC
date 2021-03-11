import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LeavemanagementComponent } from "./leavemanagement/leavemanagement.component";
import { EmployeeApplyLeaveInfoComponent } from "./Leavemanagement/employee-apply-leave-info/employee-apply-leave-info.component";
import { MangerViewEmployeeLeaveInfoComponent } from "./Leavemanagement/manger-view-employee-leave-info/manger-view-employee-leave-info.component";
import { EmployeeViewOwnLeaveInfoComponent } from "./Leavemanagement/employee-view-own-leave-info/employee-view-own-leave-info.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { LeaveService } from "./Leavemanagement/leave.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { MatTabsModule } from "@angular/material";
import { DatePipe } from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    LeavemanagementComponent,
    EmployeeApplyLeaveInfoComponent,
    MangerViewEmployeeLeaveInfoComponent,
    EmployeeViewOwnLeaveInfoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTabsModule,
  ],
  providers: [LeaveService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
