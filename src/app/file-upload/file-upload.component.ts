import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent  {

  uploadedFiles: Array<File> = [];
  uploadedFiles1: Array<File> = [];
  constructor(private http: HttpClient) {

  }



  fileChange($event: any): void {
      this.uploadedFiles = $event.srcElement.files;
  }
  fileChange1($event: any): void {
    this.uploadedFiles1 = $event.srcElement.files;
}

  upload() {
      let formData = new FormData();
      for (var i = 0; i < this.uploadedFiles.length; i++) {
          formData.append("file", this.uploadedFiles[i], this.uploadedFiles[i].name);

      }
      this.http.post('http://localhost:3000/users/mentors', formData)
          .subscribe((response) => {
              alert('mentors added! ');
          })
  }
  upload1() {
    let formData = new FormData();
    for (var i = 0; i < this.uploadedFiles1.length; i++) {
        formData.append("file", this.uploadedFiles1[i], this.uploadedFiles1[i].name);

    }
    this.http.post('http://localhost:3000/users/newjoiners', formData)
        .subscribe((response) => {
            alert('new joiners added!');
        })
}


}
