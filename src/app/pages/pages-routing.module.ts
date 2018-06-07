import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ExampleComponent } from "./example/example.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [{
    path: 'dashboard',
    component: DashboardComponent,
  },{
    path: 'example',
    component: ExampleComponent,
  }
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
