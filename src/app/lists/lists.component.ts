import { Component, OnInit } from '@angular/core';
import {AuthService} from "../auth.service";
import {GraphService} from "../graph.service";
import {AlertsService} from "../alerts.service";
import {NewEvent} from "../new-event/new-event";
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types";
import {parseISO} from "date-fns";

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  model = new NewEvent();
  result?: any;

  constructor(
    private authService: AuthService,
    private graphService: GraphService,
    private alertsService: AlertsService
  ) { }

  ngOnInit(): void {
  }

  async Suggest(): Promise<void>{
    for (let i = 0; i < this.newjoiners.length; i++) {
      this.model.attendees=this.newjoiners[i].email+';'+this.mentors[i].email;
      const timeZone = this.authService.user?.timeZone ?? 'UTC';
      const attendees = this.model.getGraphEvent(timeZone);

      try {
        this.result = await this.graphService.findMeetingTimes(attendees);
        console.log(this.result);
      } catch (error) {
        this.alertsService.addError('Error finding meetings time.', error.message);
      }
    }
  }

  public newjoiners = [
    {
      isFavorite: false,
      name: 'Ameni Telmoudi',
      phone: '770-504-2217',
      photo: 'https://www.infragistics.com/angular-demos-lob/assets/images/men/27.jpg',
      email: 'ameni.telmoudi@6lfqx1.onmicrosoft.com',
      interest: 'java',
    },
    {
      isFavorite: true,
      name: 'Mohamed Arbi',
      phone: '423-676-2869',
      photo: 'https://www.infragistics.com/angular-demos-lob/assets/images/men/1.jpg',
      email: 'mohamed.arbi@6lfqx1.onmicrosoft.com',
      interest: 'java',
    }
  ];

  public mentors = [
    {
      isFavorite: false,
      name: 'Salha Frija',
      phone: '770-504-2217',
      photo: 'https://www.infragistics.com/angular-demos-lob/assets/images/men/27.jpg',
      email: 'salha.frija@6lfqx1.onmicrosoft.com',
      interest: 'java',
    },
    {
      isFavorite: true,
      name: 'Skander Baccouche',
      phone: '423-676-2869',
      photo: 'https://www.infragistics.com/angular-demos-lob/assets/images/men/1.jpg',
      email: 'skanderbaccouche@6lfqx1.onmicrosoft.com',
      interest: 'java',
    }
  ];


  formatDateTimeTimeZone(dateTime: MicrosoftGraph.DateTimeTimeZone | undefined | null): Date | undefined {
    if (dateTime == undefined || dateTime == null) {
      return undefined;
    }

    try {
      return parseISO(dateTime.dateTime!);
    }
    catch(error) {
      this.alertsService.addError('DateTimeTimeZone conversion error', JSON.stringify(error));
      return undefined;
    }
  }

}
