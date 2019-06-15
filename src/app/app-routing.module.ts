

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileSitterComponent } from './profiles/profile-sitter/profile-sitter.component';
import { NotificationsComponent } from './profiles/notifications/notifications.component';
import { PersonalInfoComponent } from './profiles/personal-info/personal-info.component';
import { EditProfileComponent } from './profiles/edit-profile/edit-profile.component';
import { ReviewsComponent } from './profiles/reviews/reviews.component';
import { SettingsComponent } from './profiles/settings/settings.component';



const routes: Routes = [
{
  path: '', component: ProfileSitterComponent
},
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
    }
] ;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
