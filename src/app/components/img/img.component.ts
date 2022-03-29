import { Component, Input, Output, OnInit, EventEmitter, OnDestroy, OnChanges, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit {

  img: string = '';

  @Input('img') 
  set changeImg(newImg: string) {
    this.img = newImg;
    console.log('change just img => ', this.img)
  }
  @Output() loaded = new EventEmitter<string>();
  imageDefault: string = './assets/images/default.png';
  counter: number = 0;
  // counterFn: number | undefined;

  constructor() {
    // before render
    console.log('constructor', 'imgValue => ', this.img);
   }

  ngOnInit() {
  // before render
  // async - fetch -- once time
  console.log('ngOnInit', 'imgValue => ', this.img);
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
  }

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoaded() {
    console.log('log hijo')
    this.loaded.emit(this.img);
  }

}
