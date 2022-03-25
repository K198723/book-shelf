import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';



@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    CreateAccountComponent,
    ConfirmAccountComponent,
    UpdateAccountComponent,
    AccountDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class UserModule { }
