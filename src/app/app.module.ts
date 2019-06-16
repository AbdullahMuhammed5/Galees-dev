import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFontAwesomeModule } from 'angular-font-awesome';


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

import { PersonalInfoComponent } from './profiles/personal-info/personal-info.component';
import { NotificationsComponent } from './profiles/notifications/notifications.component';
import { SettingsComponent } from './profiles/settings/settings.component';
import { ReviewsComponent } from './profiles/reviews/reviews.component';
import { EditProfileComponent } from './profiles/edit-profile/edit-profile.component';
import { SideNavComponent } from './profiles/side-nav/side-nav.component';
import { MatOptionModule } from '@angular/material';
import { MatExpansionModule } from '@angular/material/expansion';
import { ProfileSitterComponent } from './profiles/profile-sitter/profile-sitter.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';






@NgModule({
  declarations: [
    // NgbModal,
    AppComponent,




    PersonalInfoComponent,
    ProfileSitterComponent,
    NotificationsComponent,
    SettingsComponent,
    ReviewsComponent,
    EditProfileComponent,
    SideNavComponent,

  ],
  imports: [
    // BsModalService,
    // BsModalRef,
    // NgbModalModule,
    // NgbModalConfig,
    // NgbModal,
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
    MatCheckboxModule
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
