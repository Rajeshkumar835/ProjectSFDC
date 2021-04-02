import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeInfoAddComponent } from "./components/admin/employee-master-info/employee-info-add/employee-info-add.component";
import { EmployeeMasterInfoComponent } from "./components/admin/employee-master-info/employee-master-info.component";
import { TimefilltimesheetComponent } from "./components/timesheet/timefilltimesheet/timefilltimesheet.component";
import { WelcometimesheetComponent } from "./components/timesheet/welcometimesheet/welcometimesheet.component";
import { EmployeeApplyLeaveInfoComponent } from "./components/leavemanagement/employee-apply-leave-info/employee-apply-leave-info.component";
import { EmployeeViewOwnLeaveInfoComponent } from "./components/leavemanagement/employee-view-own-leave-info/employee-view-own-leave-info.component";
import { MangerViewEmployeeLeaveInfoComponent } from "./components/leavemanagement/manger-view-employee-leave-info/manger-view-employee-leave-info.component";
import { CompletedCoursesComponent } from "./components/lms/completed-courses/completed-courses.component";
import { FavouriteCoursesComponent } from "./components/lms/favourite-courses/favourite-courses.component";
import { LmsCourseContentComponent } from "./components/lms/lms-course-content/lms-course-content.component";
import { LmsLandingScreenComponent } from "./components/lms/lms-landing-screen/lms-landing-screen.component";
import { OngoingCoursesComponent } from "./components/lms/ongoing-courses/ongoing-courses.component";
import { TaskManagementComponent } from "./components/task-management/task-management.component";
import { TaskMgmtCreationComponent } from "./components/task-management/task-mgmt-creation/task-mgmt-creation.component";
import { TasksheetCatalogueComponent } from "./components/task-management/task-mgmt-creation/tasksheet-catalogue/tasksheet-catalogue.component";
import { TimesheetAdminComponent } from "./components/timesheet/timesheet-admin/timesheet-admin.component";
import { AdminLoginComponent } from "./components/admin/admin-login/admin-login.component";
import { AdminRegistrationComponent } from "./components/admin/admin-registration/admin-registration.component";
import { EmployeeLoginComponent } from "./components/employee-login/employee-login.component";
import { LeavemanagementComponent } from "./components/leavemanagement/leavemanagement.component";
import { AdminMasterDataComponent } from "./components/admin/admin-master-data/admin-master-data.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { AdminDashboardComponent } from "./components/admin/admin-dashboard/admin-dashboard.component";
import { RaiseTicketComponent } from "./components/ticket-management/raise-ticket/raise-ticket.component";

const routes: Routes = [
  { path: "lms-landingPage", component: LmsLandingScreenComponent },
  { path: "course-content", component: LmsCourseContentComponent },
  { path: "favourite-course", component: FavouriteCoursesComponent },
  { path: "ongoing-course", component: OngoingCoursesComponent },
  { path: "completed-course", component: CompletedCoursesComponent },
  { path: "employee-master-info", component: EmployeeMasterInfoComponent },
  { path: "employee-info-add", component: EmployeeInfoAddComponent },
  { path: "task-management", component: TaskManagementComponent },
  { path: "task-mgmt-creation", component: TaskMgmtCreationComponent },
  { path: "tasksheet-catalogue-page", component: TasksheetCatalogueComponent },
  { path: "timesheet-fill-sheet", component: TimefilltimesheetComponent },
  { path: "welcome-timesheet", component: WelcometimesheetComponent },
  { path: "timesheet-admin", component: TimesheetAdminComponent },
  { path: "admin-login", component: AdminLoginComponent },
  { path: "admin-registration", component: AdminRegistrationComponent },
  { path: "employee-login", component: EmployeeLoginComponent },
  { path: "timesheet-admin", component: TimesheetAdminComponent },
  { path: "timesheet-fill-sheet", component: TimefilltimesheetComponent },
  { path: "welcome-timesheet", component: WelcometimesheetComponent },
  { path: "Leavevalue", component: LeavemanagementComponent },
  { path: "ApplyLeaveInfo", component: EmployeeApplyLeaveInfoComponent },
  { path: "ManagerViewLeaveInfo",component: MangerViewEmployeeLeaveInfoComponent },
  { path: "employeeOwnLeaveInfo",component: EmployeeViewOwnLeaveInfoComponent },
  { path: "admin-master-add",component: AdminMasterDataComponent},
  {path: "dashboard",component: DashboardComponent},
  {path: "admin-dashboard", component: AdminDashboardComponent},
  {path: "reiaeTicket",component: RaiseTicketComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
