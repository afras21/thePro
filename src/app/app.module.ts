///<reference path="../../node_modules/primeng/components/inputtext/inputtext.d.ts"/>
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { LoginComponent } from './login/login.component';
import {ButtonModule} from 'primeng/button';
import {MenuItem} from 'primeng/api';
import { MenuComponent } from './menu/menu.component';
import { AdminPageComponent } from './admin-page/admin-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AdminPageComponent
  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    FormsModule,
    ButtonModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
