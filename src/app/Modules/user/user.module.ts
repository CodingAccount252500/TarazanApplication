import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HistoryComponent } from './Component/history/history.component';
import { CartComponent } from './Component/cart/cart.component';
import { CheckoutOrderComponent } from './Component/checkout-order/checkout-order.component';
import { PaymentComponent } from './Component/payment/payment.component';


@NgModule({
  declarations: [
    HistoryComponent,
    CartComponent,
    CheckoutOrderComponent,
    PaymentComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule
  ]
})
export class UserModule { }
