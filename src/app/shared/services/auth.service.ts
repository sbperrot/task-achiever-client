import { Injectable } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private comparePasswords = (group: FormGroup) => {
    console.log(group);
    return null;
  };

  public createForm : FormGroup = this.fb.group({
    firstName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    lastName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]],
    userName: ['', [Validators.required, Validators.minLength(4)]],
    email: ['', [Validators.required, Validators.email]],
    security: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(4)]],
      confirm: ['', Validators.required, Validators.minLength(4)]
    }, { validator: this.comparePasswords })
  });

  constructor(private fb: FormBuilder) { }


};