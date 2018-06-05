import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { MatCardModule } from '@angular/material/card';
/* import { MatToolbarModule } from '@angular/material/toolbar'; */

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    /* MatToolbarModule, */
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
