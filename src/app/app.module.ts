
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
} from '@angular/material';

import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminComponent } from './admin/admin.component';
import { ChartsModule, WavesModule } from 'angular-bootstrap-md'
import { MatTableModule } from '@angular/material/table';

import { CustomersComponent } from './AdminDashboard/cutomers/customers.component';
import { OrderAdminComponent } from './AdminDashboard/orderAdmin/orderAdmin.component';
import { ReviewsAdminComponent } from './AdminDashboard/reviewsAdmin/reviewsAdmin.component';
import { SideNavAdminComponent } from './AdminDashboard/side-navAdmin/side-navAdmin.component';
import { DocumentationComponent } from './AdminDashboard/documentation/documentation.component';
import { DatabaseComponent } from './AdminDashboard/database/database.component';
import { DashboardComponent } from './AdminDashboard/dashboard/dashboard.component';
import { LandingAdminComponent } from './AdminDashboard/landingAdmin/landingAdmin.component';
import { SitterComponent } from './AdminDashboard/sitters/sitter.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    SitterComponent,
    CustomersComponent,
    OrderAdminComponent,
    ReviewsAdminComponent,
    SideNavAdminComponent,
    DocumentationComponent,
    DashboardComponent,
    DatabaseComponent,
    LandingAdminComponent
  ],
  imports: [
    MatTableModule,
    FormsModule,
    ChartsModule,
    WavesModule,
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
    MatCheckboxModule
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
  ],
  providers: [MatDatepickerModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
