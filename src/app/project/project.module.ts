import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectComponent } from './project.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ProjectComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProjectComponent,
        children: [
          { path: 'document', loadChildren: './document/document.module#DocumentModule' }
        ]
      },
    ])
  ]
})
export class ProjectModule { }
