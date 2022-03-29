import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

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

  constructor() { }

  ngOnInit() {
  }

}
