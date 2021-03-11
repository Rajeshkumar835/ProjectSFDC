import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeApplyLeaveInfoComponent } from "./Leavemanagement/employee-apply-leave-info/employee-apply-leave-info.component";
import { EmployeeViewOwnLeaveInfoComponent } from "./Leavemanagement/employee-view-own-leave-info/employee-view-own-leave-info.component";
import { MangerViewEmployeeLeaveInfoComponent } from "./Leavemanagement/manger-view-employee-leave-info/manger-view-employee-leave-info.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/ApplyLeaveInfo",
    pathMatch: "full",
  },
  {
    path: "ApplyLeaveInfo",
    component: EmployeeApplyLeaveInfoComponent,
  },
  {
    path: "ManagerViewLeaveInfo",
    component: MangerViewEmployeeLeaveInfoComponent,
  },
  {
    path: "employeeOwnLeaveInfo",
    component: EmployeeViewOwnLeaveInfoComponent,
  },
  {
    path: "**",
    redirectTo: "/ApplyLeaveInfo",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
