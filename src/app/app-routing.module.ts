import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { PrefixOperatorComponent } from './modules/administrator/prefix-operator/prefix-operator.component';
import { ProductComponent } from './modules/administrator/product/product.component';
import { ResellerListComponent } from './modules/administrator/reseller-list/reseller-list.component';
import { TerminalComponent } from './modules/administrator/terminal/terminal.component';
import { SalesComponent } from './modules/transaction/sales/sales.component';
import { SenderComponent } from './modules/transaction/sender/sender.component';
import { LoginComponent } from './modules/login/login.component';
import { LoginLayoutComponent } from './layouts/login-layout/login-layout.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginLayoutComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  }, {
    path: '',
    component: DefaultComponent,
    children: [
      {
        path: '',
        redirectTo: 'terminal',
        pathMatch: 'full'
      }, {
        path: 'terminal',
        component: TerminalComponent
      }, {
        path: 'prefix-operator',
        component: PrefixOperatorComponent
      }, {
        path: 'product',
        component: ProductComponent
      }, {
        path: 'reseller-list',
        component: ResellerListComponent
      }, {
        path: 'sales',
        component: SalesComponent
      }, {
        path: 'sender',
        component: SenderComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
