import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {OrderComponent} from "./order/order.component";
import {CollectComponent} from "./collect/collect.component";
import {RestaurantComponent} from "./restaurant/restaurant.component";
import {CheckoutComponent} from "./checkout/checkout.component";

const routes: Routes = [
  { path: '', redirectTo: '/order', pathMatch: 'full' },
  { path: 'order', component: OrderComponent },
  { path: 'order/collection', component: CollectComponent },
  { path: 'order/restaurant/:id', component: RestaurantComponent},
  { path: 'order/restaurant/:id/checkout', component: CheckoutComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
