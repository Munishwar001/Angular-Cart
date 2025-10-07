
import { AsyncPipe, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import {ProductCard} from '../shared/components/product-card/product-card'; 
@Component({
  selector: 'app-products',
  imports: [AsyncPipe ,CommonModule , ProductCard],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {
  http = inject(HttpClient);
  products = this.http.get('https://fakestoreapi.com/products') as Observable<any[]>;
}
