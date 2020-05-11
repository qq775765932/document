import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Css3Component } from './css3.component';

@NgModule({
  declarations: [Css3Component],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: '', component: Css3Component }
    ])
  ]
})
export class Css3Module { }
