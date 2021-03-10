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

@NgModule({
  declarations: [
    AppComponent,
    TimesheetComponent,
    NavbartimesheetComponent,
    FootertimesheetComponent,
    TimefilltimesheetComponent,
    WelcometimesheetComponent,
    GridViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
