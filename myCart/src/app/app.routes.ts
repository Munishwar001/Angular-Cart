import { Routes } from '@angular/router';
import { Cart } from './cart/cart';
import { Products } from './products/products';
export const routes: Routes = [
    {path :"" , component :Products},
    {path :"Cart" , component :Cart},
    {path :"**" , redirectTo:""}
];
