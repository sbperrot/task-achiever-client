import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private comparePasswords = (_group: FormGroup) => {
    return _group.get('password').value === _group.get('confirm').value ? null : { notSame: true }
  };

  public token: string;

  public createForm: FormGroup = this._fb.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    userName: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    security: this._fb.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirm: ['', [Validators.required, Validators.minLength(4)]]
    }, { validator: this.comparePasswords })
  });

  public authForm: FormGroup = this._fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  constructor(
    private _fb: FormBuilder,
    private _http: HttpClient,
    private _userService : UserService
  ) { this.token = window.localStorage.getItem('token'); }

  /**
   * authenticateAccount
   */
  public authenticateAccount = (_formData: FormData) => this._http.post<any>(`${ environment.api.auth }/login`, _formData)
    .pipe(
      map(({ user, token }) => {
        this.token = token;
        window.localStorage.setItem('token', token);
        this._userService.me = user;
        return user;
      })
    );

  /**
   * createAccount
   */
  public createAccount = (_formData: FormData) =>
    this._http.post<any>(environment.api.auth, _formData)
      .pipe(
        map(({ user, token }) => {
          this.token = token;
          window.localStorage.setItem('token', token);
          this._userService.me = user;
          return user;
        })
      );

};