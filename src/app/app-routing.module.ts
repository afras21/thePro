import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



import { AdminPageComponent } from './admin-page/admin-page.component';
import { ManageProductComponent } from './manage-product/manage-product.component';
import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';
import { StaffBillingComponent } from './staff-billing/staff-billing.component';
import { BillGenComponent } from './bill-gen/bill-gen.component';




const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'ManagePro', component: ManageProductComponent },
  { path: 'Admin', component: AdminPageComponent },
  { path: 'Staff', component: StaffBillingComponent },
  { path: 'Bill', component: BillGenComponent }


];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
