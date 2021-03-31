import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TimesheetComponent } from "./components/timesheet/timesheet.component";
import { NavbartimesheetComponent } from "./components/timesheet/navbartimesheet/navbartimesheet.component";
import { FootertimesheetComponent } from "./components/timesheet/footertimesheet/footertimesheet.component";
import { ReactiveFormsModule } from "@angular/forms";
import { TimefilltimesheetComponent } from "./components/timesheet/timefilltimesheet/timefilltimesheet.component";
import { WelcometimesheetComponent } from "./components/timesheet/welcometimesheet/welcometimesheet.component";
import { GridViewComponent } from "./components/timesheet/grid-view/grid-view.component";
import { LeavemanagementComponent } from "./components/leavemanagement/leavemanagement.component";
import { EmployeeApplyLeaveInfoComponent } from "./components/leavemanagement/employee-apply-leave-info/employee-apply-leave-info.component";
import { MangerViewEmployeeLeaveInfoComponent } from "./components/leavemanagement/manger-view-employee-leave-info/manger-view-employee-leave-info.component";
import { EmployeeViewOwnLeaveInfoComponent } from "./components/leavemanagement/employee-view-own-leave-info/employee-view-own-leave-info.component";
import { HttpClientModule } from "@angular/common/http";
import { MatTabsModule } from "@angular/material";
import { LmsComponent } from "./components/lms/lms.component";
import { ComponentsComponent } from "./components/components.component";
import { LmsLandingScreenComponent } from "./components/lms/lms-landing-screen/lms-landing-screen.component";
import { LmsCourseContentComponent } from "./components/lms/lms-course-content/lms-course-content.component";
import { LmsCourseDetailsComponent } from "./components/lms/lms-course-details/lms-course-details.component";
import { FavouriteCoursesComponent } from "./components/lms/favourite-courses/favourite-courses.component";
import { OngoingCoursesComponent } from "./components/lms/ongoing-courses/ongoing-courses.component";
import { CompletedCoursesComponent } from "./components/lms/completed-courses/completed-courses.component";
import { EmployeeMasterInfoComponent } from "./components/admin/employee-master-info/employee-master-info.component";
import { EmployeeInfoAddComponent } from "./components/admin/employee-master-info/employee-info-add/employee-info-add.component";
import { MediaplayerComponent } from "./components/lms/mediaplayer/mediaplayer.component";
import { PlaylistComponent } from "./components/lms/playlist/playlist.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatSliderModule } from "@angular/material/slider";
import { MatExpansionModule } from "@angular/material/expansion";
import { ScrollingModule } from "@angular/cdk/scrolling";
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatSelectModule } from "@angular/material/select";
import { FormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { TaskManagementComponent } from "./components/task-management/task-management.component";
import { TaskMgmtCreationComponent } from "./components/task-management/task-mgmt-creation/task-mgmt-creation.component";
import { TasksheetCatalogueComponent } from "./components/task-management/task-mgmt-creation/tasksheet-catalogue/tasksheet-catalogue.component";
import { NavbarLeaveComponent } from "./components/leavemanagement/navbar-leave/navbar-leave.component";
import { MatVideoModule } from "mat-video";
import { MatNativeDateModule } from "@angular/material";
import { TimesheetapprovedComponent } from "./components/timesheet/timesheet-admin/timesheetapproved/timesheetapproved.component";
import { DatePipe } from "@angular/common";
import { EmployeeLoginComponent } from "./components/employee-login/employee-login.component";
import { AdminRegistrationComponent } from "./components/admin/admin-registration/admin-registration.component";
import { AdminLoginComponent } from "./components/admin/admin-login/admin-login.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { TimesheetAdminComponent } from "./components/timesheet/timesheet-admin/timesheet-admin.component";
import { LeaveMgmtService } from "./services/leave-mgmt.service";
import { TimesheetService } from "./services/timesheet.service";
import { LmsService } from "./services/lms.service";
import { TaskMgmtService } from "./services/task-mgmt.service";
import { AdminComponent } from "./components/admin/admin.component";
import { AdminMasterDataComponent } from "./components/admin/admin-master-data/admin-master-data.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { MatSnackBarModule } from "@angular/material/snack-bar";
import { AdminDashboardComponent } from './components/admin/admin-dashboard/admin-dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [
    AppComponent,
    LeavemanagementComponent,
    EmployeeApplyLeaveInfoComponent,
    MangerViewEmployeeLeaveInfoComponent,
    EmployeeViewOwnLeaveInfoComponent,
    TimesheetComponent,
    NavbartimesheetComponent,
    FootertimesheetComponent,
    TimefilltimesheetComponent,
    WelcometimesheetComponent,
    GridViewComponent,
    LmsComponent,
    ComponentsComponent,
    LmsLandingScreenComponent,
    LmsCourseContentComponent,
    LmsCourseDetailsComponent,
    FavouriteCoursesComponent,
    OngoingCoursesComponent,
    CompletedCoursesComponent,
    EmployeeMasterInfoComponent,
    EmployeeInfoAddComponent,
    MediaplayerComponent,
    PlaylistComponent,
    TaskManagementComponent,
    TaskMgmtCreationComponent,
    TasksheetCatalogueComponent,
    TimesheetAdminComponent,
    NavbarLeaveComponent,
    TimesheetapprovedComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeLoginComponent,
    AdminRegistrationComponent,
    AdminLoginComponent,
    AdminComponent,
    AdminMasterDataComponent,
    DashboardComponent,
    AdminDashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    ScrollingModule,
    MatSliderModule,
    MatIconModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule,
    MatSliderModule,
    MatTabsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatVideoModule,
    MatSnackBarModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
  ],

  providers: [
    MatDatepickerModule,
    LeaveMgmtService,
    TimesheetService,
    LmsService,
    TaskMgmtService,
    MatNativeDateModule,
    DatePipe,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
