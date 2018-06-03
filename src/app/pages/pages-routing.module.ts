import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },
  /* {
    path: 'customer',
    loadChildren: './customer/customer.module#CustomerModule',
  }, {
    path: 'supplier',
    loadChildren: './supplier/supplier.module#SupplierModule',
  },  {
    path: 'pokok',
    loadChildren: './pokok/pokok.module#PokokModule',
  }, {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  } */
  ],
}];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [

  ],
  exports: [
    RouterModule
  ],
})
export class PagesRoutingModule { }
