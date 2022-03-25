import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BookModule } from './book/book.module';
import { UserModule } from './user/user.module';
import { CartModule } from './cart/cart.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './common/navbar/navbar/navbar.component';
import { FooterComponent } from './common/footer/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BookModule,
    UserModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
