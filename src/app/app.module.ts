import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
/* import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './login/login.component'; */
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    /* PagesComponent,
    LoginComponent */
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    AppRoutingModule,
    LoginModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
