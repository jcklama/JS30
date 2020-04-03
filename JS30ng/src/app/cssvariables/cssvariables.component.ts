import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-cssvariables',
  templateUrl: './cssvariables.component.html',
  styleUrls: ['./cssvariables.component.scss']
})
export class CSSVariablesComponent implements OnInit, AfterViewInit {
  @ViewChild('spacing') spacing: ElementRef;
  @ViewChild('blur') blur: ElementRef;
  @ViewChild('color') color: ElementRef;
  @ViewChild('js') js: ElementRef;
  @ViewChild('imageContainer') imageContainer: ElementRef;
  initialColor: string = "#e66465";

  constructor() { }

  ngOnInit() { }

  ngAfterViewInit() {
    this.imageContainer.nativeElement.style.padding = `${parseInt(this.spacing.nativeElement.value)}px`;
    this.imageContainer.nativeElement.style.filter = `blur(${parseInt(this.blur.nativeElement.value)}px)`;
    this.color.nativeElement.value = this.initialColor;
    this.imageContainer.nativeElement.style.background = this.initialColor;
    this.js.nativeElement.style.color = this.initialColor;
  }

  changeSpacing() {
    this.imageContainer.nativeElement.style.padding = `${parseInt(this.spacing.nativeElement.value)}px`;
  }

  changeBlur() {
    this.imageContainer.nativeElement.style.filter = `blur(${parseInt(this.blur.nativeElement.value)}px)`;
  }

  changeColor() {
    this.imageContainer.nativeElement.style.background = (this.color.nativeElement.value).toString();
    this.js.nativeElement.style.color = (this.color.nativeElement.value).toString();
  }

}
