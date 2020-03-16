import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BoardMainComponent } from './main.component';


const routes: Routes = [
  {
    path: '',
    component: BoardMainComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BoardRoutingModule { }
