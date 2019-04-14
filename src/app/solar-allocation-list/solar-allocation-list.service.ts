import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class SolarAllocationListService {
  
  constructor(private http: HttpClient) { }

  // This method gets the solar heater ids from the REST backend
  getAllocations() : Observable<number[]>{
    return this.http.get<number[]>("https://heaterService--kshitizesingh.repl.co/getSolarHeaterIds");
  }

  // This method gets the solar heater details based on heater id, from the REST backend.
  getSolarHeaterbyId(id) : Observable<any>{
    return this.http.get<any>("https://heaterService--kshitizesingh.repl.co/getSolarHeaterIds/"+id);
  }

}