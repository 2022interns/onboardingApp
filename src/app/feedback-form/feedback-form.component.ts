import { Component, OnInit } from '@angular/core';
import {FloatLabelType} from '@angular/material/form-field';
import {FormBuilder, FormControl} from '@angular/forms';
import {Feedback} from "../models/Feedback";
import {FeedbackService} from "../services/feedback.service";

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.css']
})
export class FeedbackFormComponent {

  feedback: Feedback=new Feedback();

  constructor( private feedbackService: FeedbackService) {}

  ngOnInit(){
  }

  sendFeedback(){
    console.log(this.feedback)
    this.feedbackService.addFeedback(this.feedback).subscribe((res)=>{
      alert("Your feedback sent!");
    });
  }
}
