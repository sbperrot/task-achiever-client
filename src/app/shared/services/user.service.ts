import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private _me : UserInterface;

  constructor(private _http : HttpClient ) { }

  get me() : UserInterface { return this._me };
  set me( _me : UserInterface ) { this._me = _me; }

  /**
   * getUser
   * @return { Observable<UserInterface> } user instance comming from Db
   */
  public getUser = () : Observable<UserInterface> => this._http.get<UserInterface>(environment.api.user)
    .pipe(map((_value : UserInterface) => {
      this.me = _value;
      return _value;
    }))

};
