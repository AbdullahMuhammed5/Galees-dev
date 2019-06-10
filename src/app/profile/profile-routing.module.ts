import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ProfileSitterComponent } from "./profile-details/profile-sitter/profile-sitter.component";
import { PersonalInfoComponent } from "./profile-details/personal-info/personal-info.component";
import { EditProfileComponent } from "./profile-details/edit-profile/edit-profile.component";
import { PersonalSkillsComponent } from "./profile-details/personal-skills/personal-skills.component";
import { ReviewsComponent } from "./profile-details/reviews/reviews.component";
import { NotificationsComponent } from "./profile-details/notifications/notifications.component";
import { SettingsComponent } from "./profile-details/settings/settings.component";
const routes: Routes = [
  {
    path: "profile-sitter",
    component: ProfileSitterComponent,
    children: [
      {
        path: "personal-info",
        component: PersonalInfoComponent
      },
      {
        path: "edit-profile",
        component: EditProfileComponent
      },
      {
        path: "personal-skills",
        component: PersonalSkillsComponent
      },
      {
        path: "reviews",
        component: ReviewsComponent
      },
      {
        path: "notifications",
        component: NotificationsComponent
      },
      {
        path: "settings",
        component: SettingsComponent
      }
    ]
  }
];
@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
