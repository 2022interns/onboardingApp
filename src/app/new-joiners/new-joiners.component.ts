import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-joiners',
  templateUrl: './new-joiners.component.html',
  styleUrls: ['./new-joiners.component.css']
})
export class NewJoinersComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
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


}
