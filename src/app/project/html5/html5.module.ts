import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Html5Component } from './html5.component';

@NgModule({
  declarations: [Html5Component],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: '' , component: Html5Component}
    ])
  ]
})
export class Html5Module { }
