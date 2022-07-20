import { Component, OnInit } from '@angular/core';
import { WeekService, MonthService, WorkWeekService, EventSettingsModel } from '@syncfusion/ej2-angular-schedule';
import { ApiService } from '../services/api.service';
 import { defaultData } from './datasource'; 


@Component({
  selector: 'app-calendar-syn',
  providers: [WeekService, MonthService, WorkWeekService],
  templateUrl: './calendar-syn.component.html',
  styleUrls: ['./calendar-syn.component.css']
})
export class CalendarSynComponent   {
event?: Event[];
  constructor(
    private apiService: ApiService) { }
  
     selectedDate: Date = new Date(2022, 1, 15);
     showWeekend: boolean = false;
     eventSettings: EventSettingsModel = { dataSource: defaultData };

    async ngOnInit() {
      this.apiService.getEventsDB().subscribe((data)=>this.eventSettings={ dataSource: data});
  
    }
    
  }
  
/* 
  
 
  public eventSettings: EventSettingsModel = { dataSource: defaultData }; 
}*/



  /* public data: object[] = []
  constructor(
    private apiService: ApiService) { }

    async ngOnInit() {
      this.apiService.getEventsDB().subscribe((data)=>console.log(data));
    }

    public selectedDate: Date = new Date(2018, 1, 15);
  
  public showWeekend: boolean = false;
  public eventSettings: EventSettingsModel = { dataSource: this.data };}
 */
    