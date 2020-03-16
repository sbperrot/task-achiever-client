import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoardRoutingModule } from './board-routing.module';
import { BoardMainComponent } from './main.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    BoardMainComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
