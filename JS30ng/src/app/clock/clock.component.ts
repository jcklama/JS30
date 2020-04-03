import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('canvas') canvas: ElementRef;
  @ViewChild('innerFrameOne') innerFrameOne: ElementRef;
  @ViewChild('secondArm') secondArm: ElementRef;
  @ViewChild('minuteArm') minuteArm: ElementRef;
  @ViewChild('hourArm') hourArm: ElementRef;
  ctx: any;
  startTimer: any;

  constructor() { }

  ngOnInit() {
    const d = new Date();
    const seconds = d.getSeconds();
    const minutes = d.getMinutes();
    const hours = d.getHours();

    console.log(seconds);
    this.secondArm.nativeElement.style.transform = `rotate(${seconds / 60 * 360}deg)`;
    this.minuteArm.nativeElement.style.transform = `rotate(${minutes / 60 * 360}deg)`;
    this.hourArm.nativeElement.style.transform = `rotate(${hours / 12 * 360}deg)`;
  }

  ngAfterViewInit() {
    const clockMove = () => {
      const d = new Date();
      const seconds = d.getSeconds();
      const minutes = d.getMinutes();
      const hours = d.getHours();

      console.log(seconds);
      this.secondArm.nativeElement.style.transform = `rotate(${seconds / 60 * 360}deg)`;
      this.minuteArm.nativeElement.style.transform = `rotate(${minutes / 60 * 360}deg)`;
      this.hourArm.nativeElement.style.transform = `rotate(${hours / 12 * 360}deg)`;
    }

    this.startTimer = setInterval(clockMove, 1000);

    // const clockCanvas = <HTMLCanvasElement>this.canvas.nativeElement;
    // const canvasWidth = clockCanvas.clientWidth;
    // const canvasHeight = clockCanvas.clientHeight;
    // this.ctx = clockCanvas.getContext('2d');
    // console.log(this.canvas);

    // this.ctx.canvas.width = canvasWidth;
    // this.ctx.canvas.height = canvasHeight;
    // this.ctx.clearRect(0, 0, clockCanvas.width, clockCanvas.height)

    // if (seconds >= 0 && seconds <= 15) {
    //   this.ctx.beginPath();
    //   this.ctx.moveTo(canvasWidth / 2, canvasHeight / 2);
    //   this.ctx.lineTo((seconds / 15 + 1) * (canvasWidth / 2), ((seconds / 15) * (canvasHeight / 2)));
    //   this.ctx.lineWidth = 5;
    //   this.ctx.closePath();
    //   this.ctx.stroke();
    // } else if (seconds > 15 && seconds <= 30) {
    //   const secondsTwo = seconds - 15;
    //   this.ctx.beginPath();
    //   this.ctx.moveTo(canvasWidth / 2, canvasHeight / 2);
    //   this.ctx.lineTo(((15 - secondsTwo) / 15 + 1) * (canvasWidth / 2), ((secondsTwo / 15 + 1) * (canvasHeight / 2)));
    //   this.ctx.lineWidth = 5;
    //   this.ctx.closePath();
    //   this.ctx.stroke();
    // } else if (seconds > 30 && seconds <= 45) {
    //   const secondsThree = seconds - 30;
    //   this.ctx.beginPath();
    //   this.ctx.moveTo(canvasWidth / 2, canvasHeight / 2);
    //   this.ctx.lineTo(((15 - secondsThree) / 15) * (canvasWidth / 2), (((15 - secondsThree) / 15 + 1) * (canvasHeight / 2)));
    //   this.ctx.lineWidth = 5;
    //   this.ctx.closePath();
    //   this.ctx.stroke();
    // } else if (seconds > 45 && seconds <= 59) {
    //   const secondsFour = seconds - 45;
    //   this.ctx.beginPath();
    //   this.ctx.moveTo(canvasWidth / 2, canvasHeight / 2);
    //   this.ctx.lineTo((secondsFour / 15) * (canvasWidth / 2), (((15 - secondsFour) / 15) * (canvasHeight / 2)));
    //   this.ctx.lineWidth = 5;
    //   this.ctx.closePath();
    //   this.ctx.stroke();
    // }
  }

  ngOnDestroy() {
    if (this.startTimer) {
      clearInterval(this.startTimer);
    }
  }

}
