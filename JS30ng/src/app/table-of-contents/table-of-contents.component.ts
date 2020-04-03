import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2, HostListener } from '@angular/core';
import { MOCKCONTENT } from '../shared/mock-content';

@Component({
  selector: 'app-table-of-contents',
  templateUrl: './table-of-contents.component.html',
  styleUrls: ['./table-of-contents.component.scss'],
  host: {
    '(window:click)': 'onClick($event)'
  }
})
export class TableOfContentsComponent implements AfterViewInit {
  @ViewChild('canvas') private canvas: ElementRef;
  @ViewChild('contents') private contents: ElementRef;
  @ViewChild('checkbox') private checkbox: ElementRef;
  cx: any;
  ctx: any;
  resizeListener: any;
  keydownListener: any;
  mockContent = MOCKCONTENT;

  constructor(private renderer: Renderer2, private _eref: ElementRef) { }

  ngAfterViewInit() {
    this.resizeListener = this.renderer.listen(window, "resize", () => {
      this.redrawCanvas();
    })
    this.keydownListener = this.renderer.listen(window, "keydown", (event) => {
      if (event.keyCode === 27) {
        this.contents.nativeElement.style.transform = "translateY(calc(-100% - 45px))";
        this.checkbox.nativeElement.checked = false;
      }
    })

    this.redrawCanvas();
  }

  ngOnDestroy() { this.resizeListener; this.keydownListener; }

  // much like event binding/HostListener, we pass in the event from the host property 
  onClick(event) {
    // if we are not clicking on the components
    if (!this._eref.nativeElement.contains(event.target)) {
      this.close();
    }
  }

  redrawCanvas() {

    const canvasStyles = (<HTMLCanvasElement>this.canvas.nativeElement).style;
    const checkboxStyles = this.checkbox.nativeElement.style;

    // redraws menu
    const menuWidth = this.canvas.nativeElement.clientWidth;
    const menuTranslateFactor = (((window.innerWidth / 2) - (menuWidth / 2)) / menuWidth) * 100;
    canvasStyles.transform = `translateX(${menuTranslateFactor}%)`;

    // redraws hidden checkbox (for toggling menu)
    const checkboxWidth = this.checkbox.nativeElement.clientWidth;
    const checkboxTranslateFactor = (((window.innerWidth / 2) - (checkboxWidth / 2)) / checkboxWidth) * 100;
    checkboxStyles.transform = `translateX(${checkboxTranslateFactor}%) scale(4.5)`;

    this.cx = (<HTMLCanvasElement>this.canvas.nativeElement).getContext("2d");
    // account for devicePixelRatio distortion; increases resolution
    const width = this.cx.canvas.width = this.cx.canvas.getBoundingClientRect().width;
    const height = this.cx.canvas.height = this.cx.canvas.getBoundingClientRect().height;

    // this.cx.scale(2, 1);
    this.cx.beginPath();
    this.cx.arc(width / 2, 0, height, 0, Math.PI);
    this.cx.fillStyle = "mediumturquoise";
    this.cx.fill();
    // this.cx.save();
    // this.cx.scale(1, 1);
    // this.cx.font = "16px Montserrat";
    // this.cx.fillStyle = "whitesmoke";
    // this.cx.fillText("MENU", 38, 20);
  }

  close() {
    const contentElem = this.contents.nativeElement;
    if (contentElem.getBoundingClientRect().top >= 0) {
      contentElem.style.transform = "translateY(calc(-100% - 45px))";
      this.checkbox.nativeElement.checked = false;
    }
  }

  open() {
    const checkboxElem = this.checkbox.nativeElement;
    const contentStyles = this.contents.nativeElement.style;

    contentStyles.width = (window.innerWidth).toString();
    contentStyles.height = (window.innerHeight).toString();

    if (checkboxElem.checked) {
      this.contents.nativeElement.style.transform = "translateY(0px)";
      this.contents.nativeElement.style.cursor = "pointer";
    }
  }

}
