import { Component, OnInit } from '@angular/core';
import {EventSettingsModel, MonthService, WeekService, WorkWeekService} from "@syncfusion/ej2-angular-schedule";
import {ApiService} from "../services/api.service";
import {defaultData} from "../calendar-syn/datasource";

@Component({
  selector: 'app-calendar-sugg',
  providers: [WeekService, MonthService, WorkWeekService],
  templateUrl: './calendar-sugg.component.html',
  styleUrls: ['./calendar-sugg.component.css']
})
export class CalendarSuggComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  selectedDate: Date = new Date(2022, 7, 15);
  showWeekend: boolean = false;
  eventSettings: EventSettingsModel = { dataSource: defaultData };

  ngOnInit() {
    /*this.apiService.getSugg().subscribe((res) => {
      let data=[];
      for(let i=0; i<res.result.meetingSugg.length;i++){
        for(let j=0;j<res.result.meetingSugg[i].meetings.length;j++){
          data.push(
            {
              Subject: res.result.meetingSugg[i].Mentors+'-'+res.result.meetingSugg[i].New_joiner,
              StartTime: res.result.meetingSugg[i].meetings[j].meetingTimeSlot.start.dateTime,
              EndTime: res.result.meetingSugg[i].meetings[j].meetingTimeSlot.end.dateTime,
              IsAllDay: false
            }
          )
        }
      }
      console.log(data)
      this.eventSettings = {dataSource: data}
    });*/
  }
}
