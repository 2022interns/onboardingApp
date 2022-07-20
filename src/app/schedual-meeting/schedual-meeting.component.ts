import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

export interface PeriodicElement {
  Mentors: string;
  New_joiner: string;
  Topic: string;
  Meeting: string;
  Status: string;
  button:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Mentors: 'Sofiene', New_joiner: "Amani", Topic: 'Java', Meeting:"23/09/2022",Status:"Invitation",button:''},
  {Mentors: 'Houssem', New_joiner: "salha", Topic: 'Angular', Meeting:"23/09/2022", Status:"Released",button:''},
  {Mentors: 'Seifedine', New_joiner: "Skander", Topic: 'Docker', Meeting:"23/09/2022", Status:"Meeting",button:''},
  {Mentors: 'Raoua', New_joiner: "Arbi", Topic: '.Net', Meeting:"23/09/2022", Status:"Meeting",button:''},

];
@Component({
  selector: 'app-schedual-meeting',
  templateUrl: './schedual-meeting.component.html',
  styleUrls: ['./schedual-meeting.component.scss']
})
export class SchedualMeetingComponent{
  test?: boolean;

  displayedColumns: string[] = ['Mentors', 'New joiner', 'Topic', 'Meeting','Status','button'];

  dataSource: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  	this.test=false;
    this.apiService.getEventsDB().subscribe((res)=> {
      this.dataSource=res;console.log(res);
    })
    this.apiService.getEvents().subscribe((res)=> {
      
    })
	}
  change(){
    this.test=!this.test;
  }

}
