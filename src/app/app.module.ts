import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxCsvParser, NgxCSVParserError, NgxCsvParserModule } from 'ngx-csv-parser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { NewJoinersComponent } from './new-joiners/new-joiners.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { 
	IgxAvatarModule,
	IgxFilterModule,
	IgxIconModule,
	IgxListModule,
	IgxInputGroupModule,
	IgxButtonGroupModule,
	IgxRippleModule
 } from "igniteui-angular";
 import {MatIconModule} from '@angular/material/icon';
 import {MatStepperModule} from '@angular/material/stepper';
import { StepperComponent } from './stepper/stepper.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatToolbarModule} from '@angular/material/toolbar';
import { MentorsComponent } from './mentors/mentors.component';
import { ListsComponent } from './lists/lists.component';

import {MatTableModule} from '@angular/material/table';
import { MeetingsSuggestComponent } from './meetings-suggest/meetings-suggest.component';
import { FeedbackComponent } from './feedback/feedback.component';

/* import {  GridComponent } from '@syncfusion/ej2-angular-grids';  */


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FileUploadComponent,
    NewJoinersComponent,
    StepperComponent,
    MentorsComponent,
    ListsComponent,
    MeetingsSuggestComponent,
    FeedbackComponent,

   
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule, NgxCsvParserModule,
    BrowserAnimationsModule,IgxAvatarModule,
    IgxFilterModule,
    IgxIconModule,
    IgxListModule,
    IgxInputGroupModule,
    IgxButtonGroupModule,
    IgxRippleModule,MatCardModule,MatIconModule,MatStepperModule,BrowserAnimationsModule ,ReactiveFormsModule,MatFormFieldModule,MatGridListModule,
    MatToolbarModule,MatTableModule
  ],
  providers: [
],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
})
export class AppModule {
}
