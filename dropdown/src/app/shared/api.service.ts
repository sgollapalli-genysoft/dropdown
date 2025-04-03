import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor( public http : HttpClient ) { }

  getData() : Observable <any> {
    return this.http.get("https://api.first.org/data/v1/countries")
  }
}
