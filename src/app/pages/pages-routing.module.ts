import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PagesComponent } from './pages.component';

const routes: Routes = [{
  path: '', component: PagesComponent,
  children: [
    { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
    { path: 'example', loadChildren: () => import('./example/example.module').then(m => m.ExampleModule) },
    { path: 'example-2', loadChildren: () => import('./example/example.module').then(m => m.ExampleModule) }
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
