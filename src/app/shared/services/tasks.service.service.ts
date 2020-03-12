import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private http: HttpClient) {}

  public fetchAll = () : Observable<any> => this.http.get<any>(environment.api.tasks)


}
