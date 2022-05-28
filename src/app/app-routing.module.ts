import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SchedualMeetingComponent } from './schedual-meeting/schedual-meeting.component';


const routes: Routes = [
{ path: 'login', component:LoginComponent },
{ path: 'schedule-meeting', component:SchedualMeetingComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
