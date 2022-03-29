import { Component, Input, Output, OnInit, EventEmitter, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

  @Input() img: string = '';
  @Output() loaded = new EventEmitter<string>();
  imageDefault: string = './assets/images/default.png';
  counter: number = 0;
  counterFn: number | undefined;

  constructor() {
    // before render
    console.log('constructor', 'imgValue => ', this.img);
   }

  ngOnInit() {
  // before render
  // async - fetch -- once time
  console.log('ngOnInit', 'imgValue => ', this.img);
  this.counterFn = window.setInterval(() => {
    this.counter += 1;
    console.log(this.counter);
  }, 1000);
  }

  ngOnChanges() {
  // before - during render
  // changes inputs -- times
  console.log('ngOnChanges', 'imgValue => ', this.img);
  }

  ngAfterViewInit() {
    // after render
    // handler children
    console.log('ngAfterViewInit')
  }

  ngOnDestroy() {
    // delete
    console.log('ngOnDestroy');
    window.clearInterval(this.counterFn)
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo')
    this.loaded.emit(this.img);
  }

}
