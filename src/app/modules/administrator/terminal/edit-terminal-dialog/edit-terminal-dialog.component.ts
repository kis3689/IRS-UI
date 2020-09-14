import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { terminalElement } from '../terminal.component';
import { AddProductSocketDialogComponent } from './add-product-socket-dialog/add-product-socket-dialog.component';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-terminal-dialog',
  templateUrl: './edit-terminal-dialog.component.html',
  styleUrls: ['./edit-terminal-dialog.component.scss']
})
export class EditTerminalDialogComponent implements OnInit {
  displayedColumns: string[] = ['kp', 'productName', 'careKirim', 'formatKirim', 'profile', 'aktif'];
  dataSource = new MatTableDataSource<productTerminalElement>(SAMPLE_PRODUCTTERMINAL_DATA);

  displayedColumns2: string[] = ['profile', 'harga', 'stock', 'stockActual', 'stockMinimal', 'parseStock', 'parseStockBalacan', 'parseInputBeli', 'lastUpdate']
  dataSource2 = new MatTableDataSource<profileStockElement>(SAMPLE_PROFILESTOCK_DATA);

  displayedColumns3: string[] = ['kataKunci', 'sn', 'balasanKhusus']
  dataSource3 = new MatTableDataSource<replySettingElement>(SAMPLE_REPLYSETTING_DATA);

  hide = true;
  userpass: string = '';
  loginPass = new FormControl('', [Validators.required]);

  constructor(@Inject(MAT_DIALOG_DATA) public data: terminalElement, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddProductSocket() {
    const dialogRef = this.dialog.open(AddProductSocketDialogComponent, {
      minWidth: '30%',
      maxHeight: '80%'
    });
  }

}

export interface productTerminalElement {
  kp: string;
  productName: string;
  careKirim: string;
  formatKirim: string;
  profile: string;
  aktif: string;
}

const SAMPLE_PRODUCTTERMINAL_DATA: productTerminalElement[] = [
  {kp: 'TDC5', productName: 'TELKOMSEL 5K', careKirim: 'USSD', formatKirim: '', profile:'', aktif: ''}
];

export interface profileStockElement {
  profile: string;
  harga: string;
  stock: string;
  stockActual: string;
  stockMinimal: string;
  parseStock: string;
  parseStockBalacan: string;
  parseInputBeli: string;
  lastUpdate: string;
}

const SAMPLE_PROFILESTOCK_DATA: profileStockElement[] = [
  {profile: 'Saldo H2H', harga: '', stock: '', stockActual: '', stockMinimal: '', parseStock: '', parseStockBalacan: '', parseInputBeli: '', lastUpdate: ''},
  {profile: '', harga: '', stock: '', stockActual: '', stockMinimal: '', parseStock: '', parseStockBalacan: '', parseInputBeli: '', lastUpdate: ''},
  {profile: '', harga: '', stock: '', stockActual: '', stockMinimal: '', parseStock: '', parseStockBalacan: '', parseInputBeli: '', lastUpdate: ''},
  {profile: '', harga: '', stock: '', stockActual: '', stockMinimal: '', parseStock: '', parseStockBalacan: '', parseInputBeli: '', lastUpdate: ''},
]

export interface replySettingElement {
  id: string;
  kataKunci: string;
  sn: string;
  balasanKhusus: string;
}

const SAMPLE_REPLYSETTING_DATA: replySettingElement[] = [
  {id:'gagal', kataKunci: 'MSISDN tidak bisa diverifi', sn: '', balasanKhusus: 'Ya'},
  {id:'gagal', kataKunci: 'GAGAL, IN:', sn: '', balasanKhusus: 'Ya'},
  {id:'gagal', kataKunci: 'GAGAL', sn: '', balasanKhusus: ''},
  {id:'PENDING', kataKunci: 'akan diproses', sn: '', balasanKhusus: 'Tidak'},
  {id:'SUKSES', kataKunci: 'SUKSES', sn: '', balasanKhusus: 'Tidak'}
]