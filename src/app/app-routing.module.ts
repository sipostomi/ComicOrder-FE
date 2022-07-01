import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComicComponent } from './components/comic/comic.component';
import { OrderListComponent } from './components/order-list/order-list.component';
import { UpdateOrderComponent } from './components/update-order/update-order.component';

const routes: Routes = [
    { path: '', redirectTo: '/comics', pathMatch: 'full'},
    { path: 'comics', component: ComicComponent},
    { path: 'orders', component: OrderListComponent},
    { path: 'order-details/:id', component: UpdateOrderComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
