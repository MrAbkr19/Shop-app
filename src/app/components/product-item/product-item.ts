import { Component, Input, input } from '@angular/core';  
import { Product } from '../../models/product';
import { ProductList } from '../product-list/product-list';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-item',
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrl: './product-item.css',
})
export class ProductItem {
@Input() product: any;
}
