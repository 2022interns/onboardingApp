import { Component, OnInit } from '@angular/core';

import {ApiService} from "../services/api.service";
import {Mentor} from "../models/Mentor";


@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.scss']
})
export class MentorsComponent implements OnInit {


  mentors?: Mentor[];
  constructor(private serviceapi: ApiService) {
  }
  ngOnInit(): void {
    this.serviceapi.getMentors().subscribe((result)=>this.mentors=result);
  }


}
