
import { BrowserModule } from '@angular/platform-browser';
import {MenubarModule} from 'primeng/menubar';

import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import {TableModule} from 'primeng/table';

import { AppComponent } from './app.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { LoginComponent } from './login/login.component';
import {ButtonModule} from 'primeng/button';
import {MenuItem} from 'primeng/api';
import { MenuComponent } from './menu/menu.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import {SplitButtonModule} from 'primeng/splitbutton';
import {TabMenuModule} from 'primeng/tabmenu';
import {AppRoutingModule} from './app-routing.module';
import { StaffBillingComponent } from './staff-billing/staff-billing.component';
import { BillGenComponent } from './bill-gen/bill-gen.component';
import {MessageModule} from 'primeng/message';
import {MessagesModule} from 'primeng/primeng';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MenuComponent,
    AdminPageComponent,
    ManageProductComponent,
    StaffBillingComponent,
    BillGenComponent
  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    FormsModule,
    ButtonModule,
    MenubarModule,
    AppRoutingModule,
    TableModule,
    SplitButtonModule,
    TabMenuModule,
    MessageModule,
    MessagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
