import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SchedualMeetingComponent } from './schedual-meeting/schedual-meeting.component';
import { HomeComponent } from './home';
import { AuthGuard } from './_helpers';

const routes: Routes = [
{ path: '', component: HomeComponent, canActivate: [AuthGuard] },
{ path: 'login', component:LoginComponent },
{ path: 'schedule-meeting', component:SchedualMeetingComponent },
{ path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
