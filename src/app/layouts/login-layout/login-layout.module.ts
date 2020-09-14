import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LoginLayoutComponent } from './login-layout.component';
import { ModulesModule } from 'src/app/modules/modules.module';



@NgModule({
  declarations: [
    LoginLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ModulesModule
  ]
})
export class LoginLayoutModule { }
