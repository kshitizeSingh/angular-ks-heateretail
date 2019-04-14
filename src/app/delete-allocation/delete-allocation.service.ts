import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DeleteAllocationService {

   constructor(private http: HttpClient) { }

  fetchData(): Observable<any[]> {
    return this.http.get<any[]>("https://heaterService--kshitizesingh.repl.co/getallocations");
  }

  deleteAllocation(id): Observable<any> {
    return this.http.delete<any>("hhttps://heaterService--kshitizesingh.repl.co/deleteAllocation/"+id)
  }

}