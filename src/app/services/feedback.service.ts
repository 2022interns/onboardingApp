import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {MsalService} from "@azure/msal-angular";
import {Feedback} from "../models/Feedback";

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {
  url = 'http://localhost:3000/feedback/';

  constructor(private http: HttpClient) { }

  addFeedback(feedback: Feedback){
    return this.http.post(this.url+'add',feedback);
  }
}
