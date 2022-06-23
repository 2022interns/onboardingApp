import { Injectable } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import * as MicrosoftGraph from "@microsoft/microsoft-graph-types";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url = 'http://localhost:3000/graph/';
  constructor(private http: HttpClient) { }

  getCalendar(model?: MicrosoftGraph.Event){
    let storage = JSON.parse(<string>localStorage.getItem('fd8224fb-1681-459b-9de7-b4b865020f65.88f58169-ed46-4a73-8f4c-7efff9f3e4fa-login.windows.net-accesstoken-92bfacc0-fa7d-4b36-91e8-f4f1a5e84c80-88f58169-ed46-4a73-8f4c-7efff9f3e4fa-calendars.readwrite mailboxsettings.read openid profile user.read email'));
    const token =  storage.secret;
    const findEvent = {
      "attendees": model?.attendees,
      "locationConstraint": {
        "isRequired": "false",
        "suggestLocation": "false"
      },
      "timeConstraint": {
        "activityDomain":"work",
        "timeSlots": [
          {
            "start": model?.start,
            "end": model?.end
          }
        ]
      },
      "meetingDuration": "PT1H",
      "returnSuggestionReasons": "true",
      "minimumAttendeePercentage": "100",
      "token": token
    };
    return this.http.post<any>(this.url+'find',findEvent);
  }

  getSugg(){
    let storage = JSON.parse(<string>localStorage.getItem('fd8224fb-1681-459b-9de7-b4b865020f65.88f58169-ed46-4a73-8f4c-7efff9f3e4fa-login.windows.net-accesstoken-92bfacc0-fa7d-4b36-91e8-f4f1a5e84c80-88f58169-ed46-4a73-8f4c-7efff9f3e4fa-calendars.readwrite mailboxsettings.read openid profile user.read email'));
    const token =  storage.secret;
    const body = {
      "mentors": [
        {
          name: "Salha",
          email: "salha.frija@6lfqx1.onmicrosoft.com"
        },
        {
          name: "Amani",
          email: "ameni.telmoudi@6lfqx1.onmicrosoft.com"
        }
      ],
      "newjoiners":[
        {
          name: "Skander",
          email: "skanderbaccouche@6lfqx1.onmicrosoft.com"
        },
        {
          name: "Arbi",
          email: "mohamed.arbi@6lfqx1.onmicrosoft.com"
        }
      ],
      "token": token
    };

    return this.http.post<any>(this.url+'/sugg',body);
  }

  getNewjoiners(){
    return this.http.get<any>(this.url+'newjoiners');
  }
  creatEvent(users: any){
    let storage = JSON.parse(<string>localStorage.getItem('fd8224fb-1681-459b-9de7-b4b865020f65.88f58169-ed46-4a73-8f4c-7efff9f3e4fa-login.windows.net-accesstoken-92bfacc0-fa7d-4b36-91e8-f4f1a5e84c80-88f58169-ed46-4a73-8f4c-7efff9f3e4fa-calendars.readwrite mailboxsettings.read openid profile user.read email'));
    const token =  storage.secret;

    const event={
      users:users,
      "token":token
    };
    return this.http.post<any>(this.url+'create',event);
  }

  creatEvents(list: any){
    let storage = JSON.parse(<string>localStorage.getItem('fd8224fb-1681-459b-9de7-b4b865020f65.88f58169-ed46-4a73-8f4c-7efff9f3e4fa-login.windows.net-accesstoken-92bfacc0-fa7d-4b36-91e8-f4f1a5e84c80-88f58169-ed46-4a73-8f4c-7efff9f3e4fa-calendars.readwrite mailboxsettings.read openid profile user.read email'));
    const token =  storage.secret;

    const events={
      list:list,
      "token":token
    };
    return this.http.post<any>(this.url+'createAll',events);
  }

}
