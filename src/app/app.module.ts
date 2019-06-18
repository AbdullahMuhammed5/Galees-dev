import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { OwlModule } from 'ngx-owl-carousel';


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
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PersonalInfoComponent } from './profiles/personal-info/personal-info.component';
import { NotificationsComponent } from './profiles/notifications/notifications.component';
import { SettingsComponent } from './profiles/settings/settings.component';
import { ReviewsComponent } from './profiles/reviews/reviews.component';
import { EditProfileComponent } from './profiles/edit-profile/edit-profile.component';
import { SideNavComponent } from './profiles/side-nav/side-nav.component';
import { MatOptionModule} from '@angular/material';
import {MatExpansionModule} from '@angular/material/expansion';
import { ProfileSitterComponent } from './profiles/profile-sitter/profile-sitter.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
// import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
// import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {NgbPopoverModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './login/login.component';
import { ProfileDetailsComponent } from './profile-details/profile-details.component';
// import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './form-modal/form-modal.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { PasswordSubmitComponent } from './password-submit/password-submit.component';
import { EmailSentComponent } from './email-sent/email-sent.component';
import { DialogFormComponent } from './dialog-form/dialog-form.component';
// import {MatDialogModule} from '@angular/material/dialog';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { BsModalService, BsModalRef } from 'ngx-bootstrap';
// import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';

// import { HttpClientModule } from '@angular/common/http';
// import { TagInputModule } from 'ngx-chips';





@NgModule({
  declarations: [
    // NgbModal,
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PersonalInfoComponent,
    ProfileSitterComponent,
    NotificationsComponent,
    SettingsComponent,
    ReviewsComponent,
    EditProfileComponent,
    SideNavComponent,
    ProfileComponent,
    LoginComponent,
    ProfileDetailsComponent,
    FormModalComponent,
    ResetPasswordComponent,
    PasswordSubmitComponent,
    EmailSentComponent,
    DialogFormComponent,
    // NgbActiveModal
  ],
  imports: [
    // BsModalService,
    // BsModalRef,
    // NgbModalModule,
    // NgbModalConfig,
    // NgbModal,
    MatCheckboxModule,
    ModalModule,
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
    OwlModule,
    HttpClientModule,
    NgbModule,
    NgbPopoverModule,
    NgbDropdownModule,
    // NgbActiveModal,
    MDBBootstrapModule,
    MatDialogModule
    // MatFormFieldModule
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
    MatTooltipModule,
    NgbDropdownModule,
    MatCheckboxModule,
    // NgbActiveModal,
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent],
  entryComponents: [
    DialogFormComponent
  ]
})
export class AppModule { }
