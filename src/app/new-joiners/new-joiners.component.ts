import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxFilterOptions } from 'igniteui-angular';
import {ApiService} from "../services/api.service";
import {NewJoiner} from "../models/NewJoiner";
@Component({
  selector: 'app-new-joiners',
  templateUrl: './new-joiners.component.html',
  styleUrls: ['./new-joiners.component.scss']
})
export class NewJoinersComponent  {

  newjoiners?: NewJoiner[];

  constructor(private serviceapi: ApiService) {
  }

  ngOnInit(): void {
    this.serviceapi.getNewjoiners().subscribe((result)=>this.newjoiners=result);
  }

}
