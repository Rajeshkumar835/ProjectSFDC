import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployeeInfoAddComponent } from "./components/employee-master-info/employee-info-add/employee-info-add.component";
import { EmployeeMasterInfoComponent } from "./components/employee-master-info/employee-master-info.component";
import { TimefilltimesheetComponent } from "./components/timesheet/timefilltimesheet/timefilltimesheet.component";
import { WelcometimesheetComponent } from "./components/timesheet/welcometimesheet/welcometimesheet.component";

import { CompletedCoursesComponent } from "./components/lms/completed-courses/completed-courses.component";
import { FavouriteCoursesComponent } from "./components/lms/favourite-courses/favourite-courses.component";
import { LmsCourseContentComponent } from "./components/lms/lms-course-content/lms-course-content.component";
import { LmsLandingScreenComponent } from "./components/lms/lms-landing-screen/lms-landing-screen.component";
import { OngoingCoursesComponent } from "./components/lms/ongoing-courses/ongoing-courses.component";
import { TaskManagementComponent } from "./components/task-management/task-management.component";
import { TaskMgmtCreationComponent } from "./components/task-management/task-mgmt-creation/task-mgmt-creation.component";
import { TasksheetCatalogueComponent } from "./components/task-management/task-mgmt-creation/tasksheet-catalogue/tasksheet-catalogue.component";

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
