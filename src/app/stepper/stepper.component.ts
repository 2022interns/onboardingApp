import { Component, OnInit } from '@angular/core';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
export interface PeriodicElement {
  name: string;
  invitation: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {invitation: "accepted", name: 'Hydrogen', },
  {invitation: "pending", name: 'Helium',},
 ];


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
  dataSource = ELEMENT_DATA;
}