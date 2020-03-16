import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { KeysPipe } from './pipes';


@NgModule({
  declarations: [
    KeysPipe
  ],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  exports: [
    NgZorroAntdModule,
    KeysPipe
  ]
})
export class SharedModule { }
