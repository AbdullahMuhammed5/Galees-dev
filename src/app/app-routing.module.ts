import { AdminComponent } from './admin/admin.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileSitterComponent } from './profiles/profile-sitter/profile-sitter.component';
import { PersonalInfoComponent } from './profiles/personal-info/personal-info.component';
import { PersonalSkillsComponent } from './profiles/personal-skills/personal-skills.component';
import { EditProfileComponent } from './profiles/edit-profile/edit-profile.component';
import { NotificationsComponent } from './profiles/notifications/notifications.component';
import { ReviewsComponent } from './profiles/reviews/reviews.component';
import { SettingsComponent } from './profiles/settings/settings.component';


const routes: Routes = [
  {

    path: '', component: AdminComponent
  },
  {
    path: 'admin', component: ProfileSitterComponent, children: [
      {
        path: 'dashboard', component: PersonalInfoComponent
      },
      {
        path: 'personal-skills', component: PersonalSkillsComponent
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
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
