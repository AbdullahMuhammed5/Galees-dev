import { HomeComponent } from './shared/home/home.component';
import { AuthService } from './authentication/auth.service';
import { ClientSignupComponent } from './authentication/client-signup/client-signup.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

// Import Angular Material 

import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDialogModule,
  MatDividerModule,
  // MatExpansionModule,
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
  MatTooltipModule,
} from '@angular/material';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { TokenService } from './authentication/token.service';
import { SignupComponent } from './authentication/sitter-signup/sitter-signup.component';
import { Ng5SliderModule } from 'ng5-slider';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProfileCardComponent } from './profile/profile-card/profile-card.component';
import { OwlModule } from 'ngx-owl-carousel';
import { LoginComponent } from './authentication/login/login.component';

import { PersonalInfoComponent } from './profiles/personal-info/personal-info.component';
import { NotificationsComponent } from './profiles/notifications/notifications.component';
import { SettingsComponent } from './profiles/settings/settings.component';
import { ReviewsComponent } from './profiles/reviews/reviews.component';
import { EditProfileComponent } from './profiles/edit-profile/edit-profile.component';
import { SideNavComponent } from './profiles/side-nav/side-nav.component';
import { MatOptionModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProfileSitterComponent } from './profiles/profile-sitter/profile-sitter.component';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchPipe } from './search.pipe';




@NgModule({
  declarations: [
    AppComponent,
    ProfileCardComponent,
    NavbarComponent,
    FooterComponent,
    SignupComponent,
    LoginComponent,
    ClientSignupComponent,
    PersonalInfoComponent,
    ProfileSitterComponent,
    NotificationsComponent,
    SettingsComponent,
    ReviewsComponent,
    EditProfileComponent,
    SideNavComponent,
    HomeComponent,
    SearchPipe
  ],
  imports: [
    OwlModule,
    NgbModule,
    Ng5SliderModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatOptionModule,
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

    MatCheckboxModule,

    HttpClientModule,
    NgbModule,
  ],
  exports: [
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
    MatTooltipModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    NgbDropdownModule,
    MatCheckboxModule
  ],
  providers: [MatDatepickerModule, AuthService, TokenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
