import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent,AppComponent1,AppComponent2} from './app.component';

const routes: Routes = [
   { path: '',  component: AppComponent1 },
  { path: 'myapp1', component: AppComponent1 },
  { path: 'myapp2', component: AppComponent2 }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}