import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable()
export class AllocatorService {

  constructor(private http: HttpClient) { }

  // This method posts the allocation form data to the REST backend
  getData(data:any) : Observable<any> {
    return  this.http.post("https://heaterService--kshitizesingh.repl.co/allocate",data);
  }

}