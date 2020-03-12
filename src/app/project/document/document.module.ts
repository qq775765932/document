import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NzCardModule } from 'ng-zorro-antd/card';
import { DocumentComponent } from './document.component';

@NgModule({
  declarations: [DocumentComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzCardModule,
    RouterModule.forChild([
      { path: '', component: DocumentComponent }
    ])
  ]
})
export class DocumentModule { }
