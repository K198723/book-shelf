import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { UserRoutingModule } from './user-routing.module';
import { BookRoutingModule } from '../book/book-routing.module';

@NgModule({
  declarations: [
    UserComponent,
    LoginComponent,
    LogoutComponent,
    CreateAccountComponent,
    ConfirmAccountComponent,
    UpdateAccountComponent,
    AccountDetailComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    UserRoutingModule,
    BookRoutingModule
  ]
})
export class UserModule { }
