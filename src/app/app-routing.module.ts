import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileCardComponent } from "./profile/profile-card/profile-card.component";
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/sitter-signup/sitter-signup.component';
import { ClientSignupComponent } from './authentication/client-signup/client-signup.component';

const routes: Routes = [
  {
    path: "",
    component: ProfileCardComponent
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "sitter-signup",
    component: SignupComponent
  },
  {
    path: "client-signup",
    component: ClientSignupComponent
  },
  {
    path: "profile",
    component: ProfileCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
