import { ClientSignupComponent } from './authentication/client-signup/client-signup.component';
import { LoginComponent } from './authentication/login/login.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './authentication/sitter-signup/sitter-signup.component';


const routes: Routes = [
  {
    path: '', component: LoginComponent
  },
  {
    path: 'sitter-signup', component: SignupComponent
  },
  {
    path: 'client-signup', component: ClientSignupComponent
  },
  {
    path: 'login', component: LoginComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
