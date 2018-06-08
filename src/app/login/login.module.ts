import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from "./login.component";

import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,

    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    FlexLayoutModule,
  ],
  declarations: [
    LoginComponent,
  ]
})
export class LoginModule { }
