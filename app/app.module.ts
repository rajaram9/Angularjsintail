import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { AppComponent }   from './app.component';
import { AppComponent1,AppComponent2 }   from './app.component';
import {AppRoutingModule} from './app.routes';

@NgModule({
  imports:      [ BrowserModule,AppRoutingModule ],
  declarations: [ AppComponent, AppComponent1,AppComponent2],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
