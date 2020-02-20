import { Routes } from '@angular/router';
import { HomeComponent } from '../MasterPage/home/home.component';
import { ProductsComponent } from '../ProductsPage/products/products.component';

export const MainRoutes: Routes = [
    {path: 'Home', component: HomeComponent},
    {path: 'Products', component: ProductsComponent},
    {path: '**', redirectTo: 'Home', pathMatch: 'full'}
];
