import { Component, OnInit, ViewChild } from '@angular/core';
import { IgxFilterOptions } from 'igniteui-angular';
@Component({
  selector: 'app-new-joiners',
  templateUrl: './new-joiners.component.html',
  styleUrls: ['./new-joiners.component.scss']
})
export class NewJoinersComponent  {

  csvRecords: any;
  header: boolean = true;

  constructor() {
  }

  @ViewChild('fileImportInput') fileImportInput: any;

/*   fileChangeListener($event: any): void {

    const files = $event.srcElement.files;
    this.header = (this.header as unknown as string) === 'true' || this.header === true;

    this.ngxCsvParser.parse(files[0], { header: this.header, delimiter: ',' })
      .pipe().subscribe({
        next: (result): void => {
          console.log('Result', result);
          this.csvRecords = result;
        },
        error: (error: NgxCSVParserError): void => {
          console.log('Error', error);
        }
      });
  } */


  public newjoiners = [
    {
      isFavorite: false,
      name: 'Terrance Orta',
      phone: '770-504-2217',
      photo: 'https://www.infragistics.com/angular-demos-lob/assets/images/men/27.jpg',
      email: 'ameni@gmail.com',
      interest: 'java',
    },
    {
      isFavorite: true,
      name: 'Richard Mahoney',
      phone: '423-676-2869',
      photo: 'https://www.infragistics.com/angular-demos-lob/assets/images/men/1.jpg',
      email: 'ameni@gmail.com',
      interest: 'java',
    },
    {
      isFavorite: false,
      name: 'Donna Price',
      phone: '859-496-2817',
      photo: 'https://www.infragistics.com/angular-demos-lob/assets/images/women/50.jpg',
      email: 'ameni@gmail.com',
      interest: 'java',
    },
    {
      isFavorite: false,
      name: 'Lisa Landers',
      phone: '901-747-3428',
      photo: 'https://www.infragistics.com/angular-demos-lob/assets/images/women/3.jpg',
      email: 'ameni@gmail.com',
      interest: 'java',
    },
    {
      isFavorite: false,
      name: 'Terrance Orta',
      phone: '770-504-2217',
      photo: 'https://www.infragistics.com/angular-demos-lob/assets/images/men/27.jpg',
      email: 'ameni@gmail.com',
      interest: 'java',
    },
    {
      isFavorite: false,
      name: 'Terrance Orta',
      phone: '770-504-2217',
      photo: 'https://www.infragistics.com/angular-demos-lob/assets/images/men/27.jpg',
      email: 'ameni@gmail.com',
      interest: 'java',
    },
    {
      isFavorite: true,
      name: 'Dorothy H. Spencer',
      phone: '573-394-9254',
      photo: 'https://www.infragistics.com/angular-demos-lob/assets/images/women/67.jpg',
      email: 'ameni@gmail.com',
      interest: 'java',
    }
  ];


}
