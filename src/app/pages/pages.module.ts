import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { DashboardModule } from "./dashboard/dashboard.module";

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';

const PAGES_COMPONENTS = [
  PagesComponent
];

@NgModule({
  imports: [
    CommonModule,
    PagesRoutingModule,
    DashboardModule,

    MatToolbarModule,
    MatSidenavModule,
    MatGridListModule,
    MatButtonModule,
    MatExpansionModule,
    MatListModule
  ],
  declarations: [
    ...PAGES_COMPONENTS,
  ]
})
export class PagesModule { }
