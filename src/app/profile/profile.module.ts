import { SettingsComponent } from "./profile-details/settings/settings.component";
import { PersonalSkillsComponent } from "./profile-details/personal-skills/personal-skills.component";
import { PersonalInfoComponent } from "./profile-details/personal-info/personal-info.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule
} from "@angular/material";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatRadioModule } from "@angular/material";
import { MatFormFieldModule } from "@angular/material/form-field";
import { SideNavComponent } from "./profile-details/side-nav/side-nav.component";
import { ProfileSitterComponent } from "./profile-details/profile-sitter/profile-sitter.component";
import { EditProfileComponent } from "./profile-details/edit-profile/edit-profile.component";
import { ReviewsComponent } from "./profile-details/reviews/reviews.component";
import { NotificationsComponent } from "./profile-details/notifications/notifications.component";

@NgModule({
  imports: [
    RouterModule,
    CommonModule,
    MatFormFieldModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  exports: [
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule
  ],
  declarations: [SideNavComponent, ProfileSitterComponent]
})
export class ProfileModule {}
