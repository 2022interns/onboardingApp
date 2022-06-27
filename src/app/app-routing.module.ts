// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './calendar/calendar.component';
import { NewEventComponent } from './new-event/new-event.component';
import {FindMeetingComponent} from "./find-meeting/find-meeting.component";
import {CalendarapiComponent} from "./calendarapi/calendarapi.component";
import {SchedualMeetingComponent} from "./schedual-meeting/schedual-meeting.component";
import {ListsComponent} from "./lists/lists.component";
import {StepperComponent} from "./stepper/stepper.component";
import { LaunshMeetingComponent } from './launsh-meeting/launsh-meeting.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NewJoinersComponent } from './new-joiners/new-joiners.component';
import { MentorsComponent } from './mentors/mentors.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'newevent', component: NewEventComponent },
  { path: 'findmeeting', component: FindMeetingComponent },
  { path: 'api/findmeeting', component: CalendarapiComponent },
  { path: 'schedule-meeting', component:SchedualMeetingComponent },
  { path: 'lists', component:ListsComponent },
  { path: 'stepper', component:StepperComponent },
  { path: 'launch-meeting', component:LaunshMeetingComponent },
  { path: 'file', component:FileUploadComponent },
  { path: 'joiners', component:NewJoinersComponent },
  { path: 'mentors', component:MentorsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
