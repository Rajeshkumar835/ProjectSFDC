import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TimefilltimesheetComponent } from "./timesheet/timefilltimesheet/timefilltimesheet.component";
import { WelcometimesheetComponent } from "./timesheet/welcometimesheet/welcometimesheet.component";

const routes: Routes = [
  { path: "Timesheet", component: TimefilltimesheetComponent },
  { path: "", component: WelcometimesheetComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
