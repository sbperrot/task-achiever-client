import { Component, Input, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: '[app-authenticate-user]',
  templateUrl: './authenticate-user.component.html',
  styleUrls: ['./authenticate-user.component.scss']
})
export class AuthenticateUserComponent {
  @Input() form : FormGroup;
  @Output() onSubmit = new EventEmitter();

  constructor() { }
  
  ngOnChanges(changes: SimpleChanges) {
    console.log(changes.form.currentValue.controls);
  }

  /**
   * _onSubmit
   * Handle create user form submission
   * @param { FormGroup } from;
   * @return { void }
   */
  public _onSubmit = (form : FormGroup) : void => this.onSubmit.emit({ values : form.value });

}
