import { Component } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: Product[] = [
  { id: 1, name: 'Montre fashion homme', price: 18500, image: 'products/1.jpg' },
  { id: 2, name: 'Montre chronographe acier', price: 35000, image: 'products/2.jpg' },
  { id: 3, name: 'Montre sport tactique noire', price: 28500, image: 'products/3.jpg' },
  { id: 4, name: 'Montre élégante dorée femme', price: 45000, image: 'products/4.jpg' },
  { id: 5, name: 'Montre bracelet femme dorée', price: 42000, image: 'products/5.jpg' },
  { id: 6, name: 'Montre chronographe luxe', price: 55000, image: 'products/6.jpg' },
  { id: 7, name: 'Montre chronographe acier', price: 35000, image: 'products/2.jpg' },
  { id: 8, name: 'Montre fashion homme', price: 18500, image: 'products/1.jpg' }
]
}
