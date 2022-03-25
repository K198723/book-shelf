import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListInCartComponent } from './list-in-cart/list-in-cart.component';
import { ConfirmRendBookComponent } from './confirm-rend-book/confirm-rend-book.component';

const routes: Routes = [
  {path: 'list-in-cart', component: ListInCartComponent },
  {path: 'confirm-rend-book', component: ConfirmRendBookComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class CartRoutingModule { }
