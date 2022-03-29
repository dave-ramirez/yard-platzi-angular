import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg: boolean = true;
  products: Product[] = [
     {
      id: '1',
      name: 'Product 1',
      image: './assets/images/toy.jpeg',
      price: 100
    },
    {
      id: '1',
      name: 'Product 1',
      image: './assets/images/toy.jpeg',
      price: 100
    },
    {
      id: '1',
      name: 'Product 1',
      image: './assets/images/toy.jpeg',
      price: 100
    },
    {
      id: '1',
      name: 'Product 1',
      image: './assets/images/toy.jpeg',
      price: 100
    },
    {
      id: '1',
      name: 'Product 1',
      image: './assets/images/toy.jpeg',
      price: 100
    },
    {
      id: '1',
      name: 'Product 1',
      image: './assets/images/toy.jpeg',
      price: 100
    },
    {
      id: '1',
      name: 'Product 1',
      image: './assets/images/toy.jpeg',
      price: 100
    }
  ]

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

}
