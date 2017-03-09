//binds together the components
//when creating new components, include them here, and then add to declarations

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import forms module to use ngModel etc
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { UserComponent } from './components/user.component';
import { AboutComponent } from './components/about.component';
import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, routing ],
  declarations: [ AppComponent, UserComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
