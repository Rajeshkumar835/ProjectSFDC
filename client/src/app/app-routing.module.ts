import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TimefilltimesheetComponent } from "./timesheet/timefilltimesheet/timefilltimesheet.component";
import { WelcometimesheetComponent } from "./timesheet/welcometimesheet/welcometimesheet.component";

import { CompletedCoursesComponent } from './components/lms/completed-courses/completed-courses.component';
import { FavouriteCoursesComponent } from './components/lms/favourite-courses/favourite-courses.component';
import { LmsCourseContentComponent } from './components/lms/lms-course-content/lms-course-content.component';
import { LmsLandingScreenComponent } from './components/lms/lms-landing-screen/lms-landing-screen.component';
import { OngoingCoursesComponent } from './components/lms/ongoing-courses/ongoing-courses.component';

const routes: Routes = [
  {path:"lms-landingPage", component:LmsLandingScreenComponent},
  {path:"course-content", component:LmsCourseContentComponent},
  {path:"favourite-course", component:FavouriteCoursesComponent},
  {path:"ongoing-course", component:OngoingCoursesComponent},
  {path:"completed-course", component:CompletedCoursesComponent},
  {path: "timesheet-fill-sheet", component:TimefilltimesheetComponent},
  {path: "welcome-timesheet",component: WelcometimesheetComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
