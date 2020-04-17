import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

export enum routers {
  documen = '文档',
  object = '对象'
}

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less'],
  providers : [
    { provide: 'routers', useValue: routers }
  ]
})
export class ProjectComponent implements OnInit {

  bodyStyle = {};
  text = '';
  constructor(
    private router: Router,
    private routeInfo: ActivatedRoute
  ) { }
  isCollapsed = false;
  ngOnInit() {
    const borwserHeight = document.body.clientHeight;
    this.bodyStyle = {
      height: borwserHeight - 186 + 'px'
    };

    // 监听窗口
    window.onresize = (() => {
      const resize = document.body.clientHeight;
      this.bodyStyle = {
        height: resize - 186 + 'px'
      };
    });

    // 当前路由
    const context = (this.router.url.split('/')).pop();
    this.text = routers[context];
  }

  routeTo(text, route) {
    this.text = text;
    this.router.navigate([route]);
  }
}
