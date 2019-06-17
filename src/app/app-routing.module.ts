import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
import { CareersComponent } from './shared/careers/careers.component';
import { ProfileCardComponent } from './profile/profile-card/profile-card.component';
import { ClientSignupComponent } from './authentication/client-signup/client-signup.component';
import { LoginComponent } from './authentication/login/login.component';


import { OrderComponent } from './order/order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileSitterComponent } from './profiles/profile-sitter/profile-sitter.component';
import { NotificationsComponent } from './profiles/notifications/notifications.component';
import { PersonalInfoComponent } from './profiles/personal-info/personal-info.component';
import { EditProfileComponent } from './profiles/edit-profile/edit-profile.component';
import { ReviewsComponent } from './profiles/reviews/reviews.component';
import { SettingsComponent } from './profiles/settings/settings.component';
import { SignupComponent } from './authentication/sitter-signup/sitter-signup.component';
import { HomeComponent } from './shared/home/home.component';
import { AboutComponent } from './shared/about/about.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'careers', component: CareersComponent
  },
  {
    path: 'about', component: AboutComponent
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
    path: 'login', component: LoginComponent
  },
  {
    path: 'profile', component: ProfileCardComponent
  },
  {
    path: 'profile-details', component: ProfileDetailsComponent
  },
  {
    path: 'sitter', component: ProfileSitterComponent, children: [
      {
        path: 'personal-info', component: PersonalInfoComponent
      },
      {
        path: 'edit-profile', component: EditProfileComponent
      },
      {
        path: 'notifications', component: NotificationsComponent
      },
      {
        path: 'reviews', component: ReviewsComponent
      },
      {
        path: 'settings', component: SettingsComponent
      },
    ]
  },

  {
    path: 'order', component: OrderComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
