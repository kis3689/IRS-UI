import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrefixOperatorComponent } from './administrator/prefix-operator/prefix-operator.component';
import { ProductComponent } from './administrator/product/product.component';
import { ResellerListComponent } from './administrator/reseller-list/reseller-list.component';
import { TerminalComponent } from './administrator/terminal/terminal.component';
import { SalesComponent } from './transaction/sales/sales.component';
import { SenderComponent } from './transaction/sender/sender.component';
import { LoginComponent } from './login/login.component';

import { MatFormFieldModule } from '@angular/material/form-field'
import { MatInputModule } from '@angular/material/input'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule} from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatMenuModule } from '@angular/material/menu'
import { MatListModule } from '@angular/material/list'
import { MatTableModule } from '@angular/material/table'
import { MatPaginatorModule } from '@angular/material/paginator'
import { MatDialogModule } from '@angular/material/dialog'
import { MatDividerModule } from '@angular/material/divider'
import { MatSelectModule } from '@angular/material/select'
import { MatTabsModule } from '@angular/material/tabs'
import { MatDatepickerModule } from '@angular/material/datepicker'
import { MatNativeDateModule } from '@angular/material/core'

import { FlexLayoutModule } from '@angular/flex-layout'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { createTranslateLoader } from '../app.module';
import { HttpClient } from '@angular/common/http';
import { EditTerminalDialogComponent } from './administrator/terminal/edit-terminal-dialog/edit-terminal-dialog.component';
import { AddJabberDialogComponent } from './administrator/terminal/add-jabber-dialog/add-jabber-dialog.component';
import { AddProductSocketDialogComponent } from './administrator/terminal/edit-terminal-dialog/add-product-socket-dialog/add-product-socket-dialog.component';
import { EditResellerDialogComponent } from './administrator/reseller-list/edit-reseller-dialog/edit-reseller-dialog.component';
import { AddHpDialogComponent } from './administrator/reseller-list/edit-reseller-dialog/add-hp-dialog/add-hp-dialog.component';
import { AddProductDialogComponent } from './administrator/product/add-product-dialog/add-product-dialog.component';
import { AddOperatorDialogComponent } from './administrator/product/add-product-dialog/add-operator-dialog/add-operator-dialog.component';
import { AddDepositDialogComponent } from './administrator/reseller-list/add-deposit-dialog/add-deposit-dialog.component';

@NgModule({
  declarations: [
    PrefixOperatorComponent,
    ProductComponent,
    ResellerListComponent,
    TerminalComponent,
    SalesComponent,
    SenderComponent,
    LoginComponent,
    EditTerminalDialogComponent,
    AddJabberDialogComponent,
    AddProductSocketDialogComponent,
    EditResellerDialogComponent,
    AddHpDialogComponent,
    AddProductDialogComponent,
    AddOperatorDialogComponent,
    AddDepositDialogComponent,
    
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    FlexLayoutModule,
    FormsModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatDividerModule,
    MatSelectModule,
    MatTabsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
    

  ],
  exports: [
    PrefixOperatorComponent,
    ProductComponent,
    ResellerListComponent,
    TerminalComponent,
    SalesComponent,
    SenderComponent,
    LoginComponent
  ]
})
export class ModulesModule { }
