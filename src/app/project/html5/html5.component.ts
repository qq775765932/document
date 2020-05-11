import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-html5',
  templateUrl: './html5.component.html',
  styleUrls: ['./html5.component.less']
})
export class Html5Component implements OnInit {

  constructor() { }
  @ViewChild('canvasOne', { static: false }) canvasOne: ElementRef;
  @ViewChild('canvasTwo', { static: false }) canvasTwo: ElementRef;

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    let ctx = this.canvasOne.nativeElement.getContext("2d");
    ctx.moveTo(0, 0);
    ctx.lineTo(200, 100);
    ctx.stroke();

    let ctxSc = this.canvasTwo.nativeElement.getContext('2d');
    let grd = ctxSc.createLinearGradient(0, 0, 200, 0); // createRadialGradient
    grd.addColorStop(0, 'red');
    grd.addColorStop(1, 'white');
    ctxSc.fillStyle = grd;
    ctxSc.fillRect(10,10,150,80);
  }

}
