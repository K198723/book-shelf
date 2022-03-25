import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListInCartComponent } from './list-in-cart/list-in-cart.component';
import { ConfirmRendBookComponent } from './confirm-rend-book/confirm-rend-book.component';

@NgModule({
  declarations: [
    ListInCartComponent,
    ConfirmRendBookComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CartModule { }
