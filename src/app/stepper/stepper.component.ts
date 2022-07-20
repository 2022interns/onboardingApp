import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import {ActivatedRoute} from "@angular/router";
import {ApiService} from "../services/api.service";
/* export interface PeriodicElement {
  name: string;
  invitation: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {invitation: "accepted", name: 'Hydrogen', },
  {invitation: "pending", name: 'Helium',},
 ]; */


@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {displayDefaultIndicatorType: false},
    },
  ],
})
export class StepperComponent  {
  displayedColumns: string[] = ['invitation', 'name'];
  event?: Event;
  data:any;
  dataSource:any;
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }

  ngOnInit(){
    this.apiService.getEventById(this.route.snapshot.params.id).subscribe((res)=>{
      console.log(res)
      this.dataSource=res
    })
  }
}
