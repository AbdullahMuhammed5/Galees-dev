import { DocumentationComponent } from './AdminDashboard/documentation/documentation.component';
import { DatabaseComponent } from './AdminDashboard/database/database.component';
import { DashboardComponent } from './AdminDashboard/dashboard/dashboard.component';
import { LandingAdminComponent } from './AdminDashboard/landingAdmin/landingAdmin.component';
import { AdminComponent } from './admin/admin.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CustomersComponent } from './AdminDashboard/cutomers/customers.component';
import { OrderAdminComponent } from './AdminDashboard/orderAdmin/orderAdmin.component';
import { ReviewsAdminComponent } from './AdminDashboard/reviewsAdmin/reviewsAdmin.component';
import { SitterComponent } from './AdminDashboard/sitters/sitter.component';



const routes: Routes = [
  {

    path: '', component: AdminComponent
  },
  {
    path: 'admin', component: LandingAdminComponent, children: [
      {
        path: 'dashboard', component: DashboardComponent
      },
      {
        path: 'sitters', component: SitterComponent
      },
      {
        path: 'cutomers', component: CustomersComponent
      },
      {
        path: 'orders', component: OrderAdminComponent
      },
      {
        path: 'reviews', component: ReviewsAdminComponent
      },
      {
        path: 'database', component: DatabaseComponent
      },
      {
        path: 'documentation', component: DocumentationComponent
      }
    ]
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
