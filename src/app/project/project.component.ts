import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.less']
})
export class ProjectComponent implements OnInit {

  bodyStyle = {};
  text = '';
  constructor(
    private router: Router
  ) { }

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
  }

  routeTo(text , route) {
    this.text = text;
    this.router.navigate([route]);
  }
}
