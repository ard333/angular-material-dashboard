import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from "./dashboard.component";
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,
    MatDividerModule,
    MatButtonModule,

    FlexLayoutModule
  ],
  declarations: [
    DashboardComponent
  ]
})
export class DashboardModule { }
