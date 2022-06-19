import { Component, OnInit } from '@angular/core';
import {ApiService} from "../services/api.service";

@Component({
  selector: 'app-sugg',
  templateUrl: './sugg.component.html',
  styleUrls: ['./sugg.component.css']
})
export class SuggComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }
  sugg(){
    this.apiService.getSugg().subscribe((res)=> console.log(res))
  }

}
