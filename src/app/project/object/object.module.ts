import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ObjectComponent } from './object.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  declarations: [ObjectComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgZorroAntdModule,
    RouterModule.forChild([
      { path: '', component: ObjectComponent }
    ])
  ]
})
export class ObjectModule { }
