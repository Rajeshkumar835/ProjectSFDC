import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatGridListModule} from '@angular/material/grid-list';
@NgModule({
  declarations: [
    AppComponent,
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
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
