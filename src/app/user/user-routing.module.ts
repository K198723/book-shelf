import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { CreateAccountComponent } from './create-account/create-account.component';
import { ConfirmAccountComponent } from './confirm-account/confirm-account.component';
import { UpdateAccountComponent } from './update-account/update-account.component';
import { AccountDetailComponent } from './account-detail/account-detail.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'confirm-account', component: ConfirmAccountComponent },
  { path: 'update-account', component: UpdateAccountComponent },
  { path: 'account-detail', component: AccountDetailComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class UserRoutingModule { }
