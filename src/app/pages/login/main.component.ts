import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [ AuthService ]
})
export class LoginMainComponent {
  public form : FormGroup;

  constructor(private _authService : AuthService) {
    this.form = this._authService.createForm;
  };

}
