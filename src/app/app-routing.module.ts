import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Components
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';
import { CareersComponent } from './career/careers/careers.component';
import { LoginComponent } from './authentication/login/login.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
import { FindBabySitterComponent } from './profile/findBabySitter/findBabySitter.component';
import { SingedUserGuard } from './shared/services/singed-user.guard';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'findBabySitter', component: FindBabySitterComponent, children: [
      {
        path: 'profile-details', component: ProfileDetailsComponent
      }
    ]
  },
  // {
  //   path: 'careers', component: CareersComponent
  // },
  {
    path: 'about', component: AboutComponent, canActivate: [SingedUserGuard],
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
