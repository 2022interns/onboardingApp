import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

export interface PeriodicElement {
  Mentors: string;
  New_joiner: string;
  Topic: string;
  Meeting: string[];
  button:string;
}
let date: string[] = ["25/02/2022"];

const ELEMENT_DATA: PeriodicElement[] = [
  {Mentors: 'Salha', New_joiner: "Skander", Topic: 'Java', Meeting:date,button:''},
  {Mentors: 'Amani', New_joiner: "Arbi", Topic: 'Angular', Meeting:date,button:''}
];
@Component({
  selector: 'app-launsh-meeting',
  templateUrl: './launsh-meeting.component.html',
  styleUrls: ['./launsh-meeting.component.scss']
})
export class LaunshMeetingComponent {

  displayedColumns: string[] = ['Mentors', 'New joiner', 'Topic', 'Meeting','button'];
  dataSource: any;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.apiService.getSugg().subscribe((res)=> {
      console.log(res);
      this.dataSource=res.result.meetingSugg;
    })
  }

  CreateOneMeet(users: any){
    this.apiService.creatEvent(users).subscribe((res)=>console.log('event created! '+ res))
  }

  CreateMeets(list: any){
    this.apiService.creatEvents(list).subscribe((res)=>{alert('events created! ')})
  }




}
