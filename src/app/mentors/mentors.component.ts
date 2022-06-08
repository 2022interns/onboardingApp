import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mentors',
  templateUrl: './mentors.component.html',
  styleUrls: ['./mentors.component.css']
})
export class MentorsComponent implements OnInit {

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

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


}
