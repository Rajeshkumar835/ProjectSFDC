import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TimesheetComponent } from "./timesheet/timesheet.component";
import { NavbartimesheetComponent } from "./timesheet/navbartimesheet/navbartimesheet.component";
import { FootertimesheetComponent } from "./timesheet/footertimesheet/footertimesheet.component";

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { TimefilltimesheetComponent } from "./timesheet/timefilltimesheet/timefilltimesheet.component";
import { WelcometimesheetComponent } from "./timesheet/welcometimesheet/welcometimesheet.component";
import { GridViewComponent } from "./timesheet/grid-view/grid-view.component";

//import { ToastrModule } from "ngx-toastr";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { LmsComponent } from './components/lms/lms.component';
import { ComponentsComponent } from './components/components.component';
import { LmsLandingScreenComponent } from './components/lms/lms-landing-screen/lms-landing-screen.component';
import { LmsCourseContentComponent } from './components/lms/lms-course-content/lms-course-content.component';
import { LmsCourseDetailsComponent } from './components/lms/lms-course-details/lms-course-details.component';
import { FavouriteCoursesComponent } from './components/lms/favourite-courses/favourite-courses.component';
import { OngoingCoursesComponent } from './components/lms/ongoing-courses/ongoing-courses.component';
import { CompletedCoursesComponent } from './components/lms/completed-courses/completed-courses.component';
import { MediaplayerComponent } from './components/lms/mediaplayer/mediaplayer.component';
import { PlaylistComponent } from './components/lms/playlist/playlist.component';


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
    MediaplayerComponent,
    PlaylistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
