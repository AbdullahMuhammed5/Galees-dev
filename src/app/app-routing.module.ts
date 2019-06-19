import { ContactUsComponent } from './shared/contact-us/contact-us.component';
import { TermsComponent } from './shared/terms/terms.component';
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
import { SitterSignupComponent } from './authentication/sitter-signup/sitter-signup.component';
import { OrderComponent } from './order/order.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserSettingsComponent } from './shared/user-settings/user-settings.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'findBabySitter', component: FindBabySitterComponent
  },
  {
    path: 'findBabySitter/:id', component: ProfileDetailsComponent
  },
  {
    path: "login", component: LoginComponent
  },
  {
    path: "sitter-signup", component: SitterSignupComponent
  },
  {
    path: 'terms', component: TermsComponent
  },
  {
    path: 'contact-us', component: ContactUsComponent
  },
  {
    path: 'about', component: AboutComponent, canActivate: [SingedUserGuard],
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'userProfile', component: UserProfileComponent
  },
  {
    path: 'userSettings', component: UserSettingsComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
