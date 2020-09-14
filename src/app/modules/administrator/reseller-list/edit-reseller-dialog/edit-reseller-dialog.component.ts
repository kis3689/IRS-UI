import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddHpDialogComponent } from './add-hp-dialog/add-hp-dialog.component'

@Component({
  selector: 'app-edit-reseller-dialog',
  templateUrl: './edit-reseller-dialog.component.html',
  styleUrls: ['./edit-reseller-dialog.component.scss']
})
export class EditResellerDialogComponent implements OnInit {

  displayedColumns: string[] = ['id', 'tipe', 'jenis', 'status', 'logTerakhir', 'waktuDitambah'];
  dataSource = new MatTableDataSource<hpTrxIdElement>(SAMPLE_HPTRXID_DATA);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openEditResellerDialog() {
    const dialogRef = this.dialog.open(AddHpDialogComponent, {
      minWidth: '30%',
      maxHeight: '80%'
    });
  }

}

export interface hpTrxIdElement {
  id: string;
  tipe: string;
  jenis: string;
  status: string;
  logTerakhir: string;
  waktuDitambah: string;
}

const SAMPLE_HPTRXID_DATA: hpTrxIdElement[] = [
  {id: '172.16.9.11', tipe: 'IP Address', jenis: 'FULL', status: 'AKTIF', logTerakhir: '19/10/2018 22:40:12', waktuDitambah: '19/10/2018 22:40:12'}
]