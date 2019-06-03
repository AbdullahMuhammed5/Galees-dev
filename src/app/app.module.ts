import { EditProfileComponent } from "./profile/profile-details/edit-profile/edit-profile.component";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AngularFontAwesomeModule } from "angular-font-awesome";
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
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatRadioModule } from "@angular/material/radio";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { ProfileModule } from "./profile/profile.module";
import { ProfileCardComponent } from "./profile/profile-card/profile-card.component";
import { PersonalInfoComponent } from "./profile/profile-details/personal-info/personal-info.component";
import { PersonalSkillsComponent } from "./profile/profile-details/personal-skills/personal-skills.component";
import { NotificationsComponent } from "./profile/profile-details/notifications/notifications.component";
import { ReviewsComponent } from "./profile/profile-details/reviews/reviews.component";
import { SettingsComponent } from "./profile/profile-details/settings/settings.component";
import { ProfileRoutingModule } from './profile-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    ProfileCardComponent,
    PersonalInfoComponent,
    PersonalSkillsComponent,
    NotificationsComponent,
    ReviewsComponent,
    SettingsComponent,
    EditProfileComponent
  ],
  imports: [
    ProfileModule,
    AngularFontAwesomeModule,
    BrowserModule,
    MatFormFieldModule,
    MatRadioModule,
    MatDatepickerModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatStepperModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ProfileRoutingModule
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
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
