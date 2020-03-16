import { Component, Input, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/shared';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: '[app-create-user]',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  @Input() form : FormGroup;
  @Output() onSubmit = new EventEmitter();

  constructor( private _authService: AuthService ) { }

  /**
   * _onSumit
   * Handle create user form submission
   * @param { FormGroup } from;
   * @return { void }
   */
  public _onSubmit = (form : FormGroup) : void  => {
    const _payload = form.value;
    _payload.password = _payload.security.password;
    this.onSubmit.emit({ values : _payload, type: 'creation' });
  };
};
