import { Component, Input, input } from '@angular/core';  
import { Product } from '../../models/product';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-product-item',
  imports: [],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
@Input() product: any;
}
