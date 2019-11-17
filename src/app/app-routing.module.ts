import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'pages', redirectTo: 'pages/dashboard' },
  { path: 'pages', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

const config: ExtraOptions = {
  useHash: true,
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, config)
  ],
  declarations: [

  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
