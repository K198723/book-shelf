import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: AppComponent},
  { path: 'book', loadChildren: ()=> import('./book/book.module').then(m => m.BookModule)},
  { path: 'user', loadChildren: ()=> import('./user/user.module').then(m => m.UserModule)},
  { path: 'cart', loadChildren: ()=> import('./cart/cart.module').then(m => m.CartModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
