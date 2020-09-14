import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EditResellerDialogComponent } from './edit-reseller-dialog/edit-reseller-dialog.component'
import { MatMenuTrigger } from '@angular/material/menu';
import { AddDepositDialogComponent } from './add-deposit-dialog/add-deposit-dialog.component';

@Component({
  selector: 'app-reseller-list',
  templateUrl: './reseller-list.component.html',
  styleUrls: ['./reseller-list.component.scss']
})
export class ResellerListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'alamat', 'upline', 'saldo', 'pricePlan', 'selisih', 'aktivitasTerakhir', 'akt', 'etc'];
  dataSource = new MatTableDataSource<resellerElement>(SAMPLE_RESELLER_DATA);

  displayedColumns2: string[] = ['idresel', 'nameReseller', 'upline', 'alamat', 'selisih', 'h', 'waktujion'];
  dataSource2 = new MatTableDataSource<registerElement>(SAMPLE_REGISTER_DATA);

  displayedColumns3: string[] = ['tanggal', 'saldoAwal', 'depositManual', 'depositTiket', 'omset', 'refund', 'saldoAkhirBySystem', 'saldoAkhirHitungMenual', 'selisih'];
  dataSource3 = new MatTableDataSource<totalSaldoElement>(SAMPLE_TOTALSALDO_DATA);


  @ViewChild(MatMenuTrigger)
  contextMenu: MatMenuTrigger;

  contextMenuPosition = { x: '0px', y: '0px' };

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openEditResellerDialog() {
    const dialogRef = this.dialog.open(EditResellerDialogComponent, {
      minWidth: '50%',
      maxHeight: '80%'
    });
  }

  openAddDepositDialog() {
    const dialogRef = this.dialog.open(AddDepositDialogComponent, {
      minWidth: '30%',
      maxHeight: '70%'
    });
  }

  clickRight($event)
  {
    $event.preventDefault();
    this.contextMenuPosition.x = $event.clientX + 'px';
    this.contextMenuPosition.y = $event.clientY + 'px';
    this.contextMenu.menu.focusFirstItem('mouse');
    this.contextMenu.openMenu();
  }

}

export interface resellerElement {
  id: string;
  name: string;
  alamat: string;
  upline: string;
  saldo: string;
  pricePlan: string;
  selisih: number;
  aktivitasTerakhir: string;
  akt: number;
  etc: string;
}

const SAMPLE_RESELLER_DATA: resellerElement[] = [
  {id: '3730', name: 'TIRTA', alamat: 'BANDUNG', upline: 'KEPO15092782', saldo: 'Rp3.375', pricePlan: 'Harga BDG', selisih: 200, aktivitasTerakhir: '01/12/2018', akt: 1, etc: ''},
  {id: '6383', name: 'WAWAN', alamat: 'BANDUNG', upline: 'KEPO15092782', saldo: 'Rp2.275', pricePlan: 'Harga BDG', selisih: 200, aktivitasTerakhir: '01/12/2018', akt: 1, etc: ''},
  {id: 'CS0001', name: 'CS KEPOO', alamat: 'KEPOO', upline: '-', saldo: 'Rp0', pricePlan: 'Harga BDG', selisih: 0, aktivitasTerakhir: '01/12/2018', akt: 1, etc: ''},
  {id: 'DX0001', name: 'DX BANDUNG', alamat: '', upline: '-', saldo: 'Rp0', pricePlan: 'Harga BDG', selisih: 0, aktivitasTerakhir: '01/12/2018', akt: 1, etc: ''},
  {id: 'DX0002', name: 'TESTING LINA', alamat: 'JKT', upline: 'KEPO1509', saldo: 'Rp0', pricePlan: 'Harga BDG', selisih: 0, aktivitasTerakhir: '01/12/2018', akt: 1, etc: ''},
  {id: 'DX0003', name: 'GHAISAN', alamat: 'BANDUNG', upline: 'KEPO15092782', saldo: 'Rp1.200', pricePlan: 'Harga BDG', selisih: 200, aktivitasTerakhir: '01/12/2018', akt: 1, etc: ''},
  {id: 'DX0004', name: '0SAYYID', alamat: 'BANDUNG', upline: 'KEPO15092782', saldo: 'Rp1.200', pricePlan: 'Harga BDG', selisih: 200, aktivitasTerakhir: '01/12/2018', akt: 1, etc: ''},
  {id: 'DX0005', name: '0SAYYID', alamat: 'BANDUNG', upline: 'KEPO15092782', saldo: 'Rp1.200', pricePlan: 'Harga BDG', selisih: 200, aktivitasTerakhir: '01/12/2018', akt: 1, etc: ''},
  {id: 'DX0006', name: '0SAYYID', alamat: 'BANDUNG', upline: 'KEPO15092782', saldo: 'Rp1.200', pricePlan: 'Harga BDG', selisih: 0, aktivitasTerakhir: '01/12/2018', akt: 1, etc: ''},
  {id: 'DX0007', name: '0SAYYID', alamat: 'BANDUNG', upline: 'KEPO15092782', saldo: 'Rp1.200', pricePlan: 'Harga BDG', selisih: 0, aktivitasTerakhir: '01/12/2018', akt: 1, etc: ''},
  {id: 'DX0008', name: '0SAYYID', alamat: 'BANDUNG', upline: 'KEPO15092782', saldo: 'Rp1.200', pricePlan: 'Harga BDG', selisih: 0, aktivitasTerakhir: '01/12/2018', akt: 1, etc: ''},
  {id: 'DX0009', name: '0SAYYID', alamat: 'BANDUNG', upline: 'KEPO15092782', saldo: 'Rp1.200', pricePlan: 'Harga BDG', selisih: 100, aktivitasTerakhir: '01/12/2018', akt: 1, etc: ''},
  {id: 'DX0010', name: '0SAYYID', alamat: 'BANDUNG', upline: 'KEPO15092782', saldo: 'Rp1.200', pricePlan: 'Harga BDG', selisih: 80, aktivitasTerakhir: '01/12/2018', akt: 1, etc: ''},
]

export interface registerElement {
  idresel: string;
  nameReseller: string;
  upline: string;
  Alamat: string;
  selisih: string;
  h: string;
  waktujion: string;
}

const SAMPLE_REGISTER_DATA: registerElement[] = [

]

export interface totalSaldoElement {
  tanggal: string;
  saldoAwal: string;
  depositManual: string;
  DepositTiket: string;
  omset: string;
  refund: string;
  saldoAkhirBySystem: string;
  saldoAkhirHitungManual: string;
  selisih: string;
}

const SAMPLE_TOTALSALDO_DATA: totalSaldoElement[] = [

]