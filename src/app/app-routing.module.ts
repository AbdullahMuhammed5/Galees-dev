import { ProfileRoutingModule } from "./profile/profile-routing.module";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProfileCardComponent } from "./profile/profile-card/profile-card.component";

const routes: Routes = [
  {
    path: "profile",
    component: ProfileCardComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ProfileRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
