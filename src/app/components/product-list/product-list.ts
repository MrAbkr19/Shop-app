import { Component, signal } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { Product } from '../../models/product';
@Component({
  selector: 'app-product-list',
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = signal<Product[]>([
  {
    id: 1,
    name: 'Montre fashion homme',
    description: 'Montre tendance pour homme, cadran épuré avec bracelet en cuir synthétique.',
    soldPrice: 18500,
    regularPrice: 22000,
    imageUrl: 'products/1.jpg',
    createdAt: new Date('2024-01-15'),
    categories: ['Homme', 'Fashion']
  },
  {
    id: 2,
    name: 'Montre chronographe acier',
    description: 'Chronographe en acier inoxydable avec fond saphir et bracelet métal brossé.',
    soldPrice: 35000,
    regularPrice: 40000,
    imageUrl: 'products/2.jpg',
    createdAt: new Date('2024-02-10'),
    categories: ['Homme', 'Chronographe', 'Acier']
  },
  {
    id: 3,
    name: 'Montre sport tactique noire',
    description: 'Montre robuste à cadran noir, résistante aux chocs et à l\'eau, idéale pour le sport.',
    soldPrice: 28500,
    regularPrice: 32000,
    imageUrl: 'products/3.jpg',
    createdAt: new Date('2024-03-05'),
    categories: ['Sport', 'Homme', 'Tactique']
  },
  {
    id: 4,
    name: 'Montre élégante dorée femme',
    description: 'Montre habillée pour femme avec boîtier doré, cadran nacré et bracelet fin.',
    soldPrice: 45000,
    regularPrice: 52000,
    imageUrl: 'products/4.jpg',
    createdAt: new Date('2024-03-20'),
    categories: ['Femme', 'Élégance', 'Doré']
  },
  {
    id: 5,
    name: 'Montre bracelet femme dorée',
    description: 'Montre-bracelet féminine aux finitions dorées, légère et raffinée pour toutes occasions.',
    soldPrice: 42000,
    regularPrice: 48000,
    imageUrl: 'products/5.jpg',
    createdAt: new Date('2024-04-01'),
    categories: ['Femme', 'Bracelet', 'Doré']
  },
  {
    id: 6,
    name: 'Montre chronographe luxe',
    description: 'Pièce de luxe avec complications chronographe, boîtier acier poli et bracelet cuir.',
    soldPrice: 55000,
    regularPrice: 65000,
    imageUrl: 'products/6.jpg',
    createdAt: new Date('2024-04-18'),
    categories: ['Luxe', 'Chronographe', 'Homme']
  },
  {
    id: 7,
    name: 'Montre chronographe acier premium',
    description: 'Version premium du chronographe acier avec lunette tournante et étanchéité renforcée.',
    soldPrice: 35000,
    regularPrice: 41000,
    imageUrl: 'products/2.jpg',
    createdAt: new Date('2024-05-02'),
    updatedAt: new Date('2024-06-10'),
    categories: ['Homme', 'Chronographe', 'Acier', 'Premium']
  },
  {
    id: 8,
    name: 'Montre fashion homme édition limitée',
    description: 'Édition limitée de la montre fashion homme avec bracelet interchangeable deux coloris.',
    soldPrice: 18500,
    regularPrice: 24000,
    imageUrl: 'products/1.jpg',
    createdAt: new Date('2024-05-20'),
    updatedAt: new Date('2024-06-15'),
    categories: ['Homme', 'Fashion', 'Édition Limitée']
  }
]);
}
