import { Routes } from '@angular/router';
import { CartViewComponent } from './cart-view/cart-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';

export const routes: Routes = [
    {
        path: '',
        component: DashboardComponent
    },
    {
        path: 'products',
        component: ProductListComponent
    },
    {
        path: 'cart',
        component: CartViewComponent
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];
