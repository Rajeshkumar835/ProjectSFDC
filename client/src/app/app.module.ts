import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LmsComponent } from "./components/lms/lms.component";
import { ComponentsComponent } from "./components/components.component";
import { LmsLandingScreenComponent } from "./components/lms/lms-landing-screen/lms-landing-screen.component";
import { LmsCourseContentComponent } from "./components/lms/lms-course-content/lms-course-content.component";
import { LmsCourseDetailsComponent } from "./components/lms/lms-course-details/lms-course-details.component";
import { FavouriteCoursesComponent } from "./components/lms/favourite-courses/favourite-courses.component";
import { OngoingCoursesComponent } from "./components/lms/ongoing-courses/ongoing-courses.component";
import { CompletedCoursesComponent } from "./components/lms/completed-courses/completed-courses.component";
import { EmployeeMasterInfoComponent } from "./components/employee-master-info/employee-master-info.component";
import { EmployeeInfoAddComponent } from "./components/employee-master-info/employee-info-add/employee-info-add.component";

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
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DragDropModule } from "@angular/cdk/drag-drop";
import { TaskManagementComponent } from "./components/task-management/task-management.component";
import { TaskMgmtCreationComponent } from "./components/task-management/task-mgmt-creation/task-mgmt-creation.component";
import { TasksheetCatalogueComponent } from "./components/task-management/task-mgmt-creation/tasksheet-catalogue/tasksheet-catalogue.component";
import { from } from "rxjs";
import { MatVideoModule } from "mat-video";
import { TimesheetComponent } from "./components/timesheet/timesheet.component";
import { NavbartimesheetComponent } from "./components/timesheet/navbartimesheet/navbartimesheet.component";
import { FootertimesheetComponent } from "./components/timesheet/footertimesheet/footertimesheet.component";
//import { FormGroup, FormControl } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material";
import { TimesheetapprovedComponent } from "./components/timesheet/timesheet-admin/timesheetapproved/timesheetapproved.component";
import { DatePipe } from "@angular/common";

// import { TabsModule } from 'ngx-bootstrap/tabs';

import { TimefilltimesheetComponent } from "./components/timesheet/timefilltimesheet/timefilltimesheet.component";
import { WelcometimesheetComponent } from "./components/timesheet/welcometimesheet/welcometimesheet.component";
import { GridViewComponent } from "./components/timesheet/grid-view/grid-view.component";
import { TimesheetAdminComponent } from './components/timesheet/timesheet-admin/timesheet-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
@NgModule({
  declarations: [
    AppComponent,
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
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
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
    MatNativeDateModule,
    MatDatepickerModule,
    MatVideoModule,
  ],
  providers: [MatDatepickerModule, MatNativeDateModule, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}
