import { Component } from '@angular/core';
import { TasksService } from './shared/services/tasks.service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ TasksService ]
})
export class AppComponent {
  title = 'task-achiever';
  
  constructor(private _taskService : TasksService) {
    this._taskService.fetchAll().subscribe(( data ) => { console.log(data); })
  }

}
