import { Component } from '@angular/core';
import { UserService } from './shared/services/user.service';
import { UserInterface } from './shared/interfaces';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ UserService ]
})
export class AppComponent {
  private unsubscriber$ = new Subject<void>();  

  ngOnDestroy() {
    this.unsubscriber$.next();
    this.unsubscriber$.complete();
  }
  
  constructor(private _userService : UserService) {
    this._userService.getUser()
      .pipe(takeUntil(this.unsubscriber$))
      .subscribe(( _value : UserInterface ) => {
        console.log(_value);
      })
  }

}
