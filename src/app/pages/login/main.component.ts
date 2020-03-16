import { Component } from '@angular/core';
import { AuthService } from 'src/app/shared/services';
import { FormGroup } from '@angular/forms';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs/internal/Subject';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  providers: [AuthService]
})
export class LoginMainComponent {
  public form: FormGroup;
  public _creationMode: boolean;

  private unsubscribe$ = new Subject;

  constructor(private _authService: AuthService) {
    this.form = this._authService.authForm;
  };

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  };

  /**
   * switchMode
   * Method that turn the current form into the second one
   * @param {boolean} _creationModeEnabled : param specifying the mode to use;
   * @return void
   */
  public switchMode = (_creationModeEnabled: boolean) => {
    this.form = _creationModeEnabled ? this._authService.createForm : this._authService.authForm;
    this._creationMode = _creationModeEnabled;
  };

  /**
   * onSubmit
   */
  public onSubmit = (_payload: { values: FormData, type: string }) => {
    switch (_payload.type) {
      case 'creation':
        this._authService.createAccount(_payload.values)
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe()
        break;
      default:
        this._authService.authenticateAccount(_payload.values)
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe();
    }
  };

}
