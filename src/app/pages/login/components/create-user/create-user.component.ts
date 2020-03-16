import { Component, Input, ChangeDetectionStrategy, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.scss']
})
export class CreateUserComponent {
  @Input() form : FormGroup;

  constructor() { console.log("ici"); }

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  };

  /**
   * _onSumit
   * Handle create user form submission
   */
  public _onSumit = () => {
    console.log(this.form)
  }
};
