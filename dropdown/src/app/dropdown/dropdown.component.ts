import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { response } from 'express';
import { error } from 'console';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  imports: [CommonModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent implements OnInit {

  country : any [] = []

  constructor (public api : ApiService) { }

  ngOnInit(){
    this.api.getData().subscribe({
      next : (response : any) => {
        this.country = Object.values(response.data);
        console.log('data' , this.country)
      },
      error: (error : any ) => {
        console.log("error" , error)
      },
      complete : () => {
        console.log("completed ")
      }
    })
  }

}
