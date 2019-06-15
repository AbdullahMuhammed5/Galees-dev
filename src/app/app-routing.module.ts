import { ProfileCardComponent } from './profile/profile-card/profile-card.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// Import Shared Components




const routes: Routes = [
  {
    path: '', component: ProfileCardComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
