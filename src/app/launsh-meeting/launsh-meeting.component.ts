import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  Mentors: string;
  New_joiner: string;
  Topic: string;
  Meeting: string[];
  button:string;
}
let date: string[] = ["25/02/2022"];

const ELEMENT_DATA: PeriodicElement[] = [
  {Mentors: 'Sofiene', New_joiner: "Amani", Topic: 'Java', Meeting:date,button:''},
  {Mentors: 'Houssem', New_joiner: "salha", Topic: 'Angular', Meeting:date,button:''},
  {Mentors: 'Seifedine', New_joiner: "Skander", Topic: 'Docker', Meeting:date,button:''},
  {Mentors: 'Raoua', New_joiner: "Arbi", Topic: '.Net', Meeting:date,button:''},

];
@Component({
  selector: 'app-launsh-meeting',
  templateUrl: './launsh-meeting.component.html',
  styleUrls: ['./launsh-meeting.component.scss']
})
export class LaunshMeetingComponent {

  displayedColumns: string[] = ['Mentors', 'New joiner', 'Topic', 'Meeting','button'];
  dataSource = ELEMENT_DATA;

}
