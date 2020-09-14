import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';

import { MatSidenavModule } from '@angular/material/sidenav';


import { RouterModule } from '@angular/router';
import { DefaultComponent } from './default.component';
import { ModulesModule } from 'src/app/modules/modules.module';



@NgModule({
  declarations: [
    DefaultComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatSidenavModule,
    ModulesModule
  ]
})
export class DefaultModule { }
