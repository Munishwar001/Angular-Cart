import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css'
})
export class Products {

}

// import { AsyncPipe, CommonModule } from '@angular/common';
// import { HttpClient } from '@angular/common/http';
// import { Component, inject } from '@angular/core';
// import { Observable } from 'rxjs';

// @Component({
//   selector: 'app-products',
//   imports: [AsyncPipe ,CommonModule],
//   templateUrl: './products.html',
//   styleUrl: './products.css'
// })
// export class Products {
//   http = inject(HttpClient);
//   products = this.http.get('https://fakestoreapi.com/products') as Observable<any[]>;
// }
