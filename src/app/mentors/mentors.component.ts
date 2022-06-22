import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {
  mentors: any;
 
  constructor(private serviceapi: ApiService) {
  }

  ngOnInit(): void {
    this.serviceapi.getMentors().subscribe((result)=>this.mentors=result );
    console.log("okk")
  }}