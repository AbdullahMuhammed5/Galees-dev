import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileSitterComponent } from './profiles/profile-sitter/profile-sitter.component';
import { NotificationsComponent } from './profiles/notifications/notifications.component';
import { PersonalInfoComponent } from './profiles/personal-info/personal-info.component';
import { EditProfileComponent } from './profiles/edit-profile/edit-profile.component';
import { ReviewsComponent } from './profiles/reviews/reviews.component';
import { SettingsComponent } from './profiles/settings/settings.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PasswordSubmitComponent } from './password-submit/password-submit.component';
import { EmailSentComponent } from './email-sent/email-sent.component';



const routes: Routes = [
  // {
  //   path: '', component: ProfileSitterComponent
  // },
  //     {
  //       path: 'personal-info', component: PersonalInfoComponent
  //     },
  //     {
  //       path: 'edit-profile', component: EditProfileComponent
  //     },
  //     {
  //       path: 'notifications', component: NotificationsComponent
  //     },
  //     {
  //       path: 'reviews', component: ReviewsComponent
  //     },
  //     {
  //       path: 'settings', component: SettingsComponent
  //     }
  {
    path: '', component: ResetPasswordComponent
  }, {
    path: 'submit', component: PasswordSubmitComponent
  }, {
    path: 'send', component: EmailSentComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
