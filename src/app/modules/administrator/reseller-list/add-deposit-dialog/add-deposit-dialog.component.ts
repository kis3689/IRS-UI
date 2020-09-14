import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-deposit-dialog',
  templateUrl: './add-deposit-dialog.component.html',
  styleUrls: ['./add-deposit-dialog.component.scss']
})
export class AddDepositDialogComponent implements OnInit {

  displayedColumns: string[] = ['v', 'id', 'jenis'];
  dataSource = new MatTableDataSource<massageTargetElement>(SAMPLE_MASSAGETARGET_DATA);

  displayedColumns2: string[] = ['v', 'waktu', 'sebesar', 'keterangan', 'namauser'];
  dataSource2 = new MatTableDataSource<depositElement>(SAMPLE_DEPOSIT_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}

export interface massageTargetElement {
  v: string;
  id: string;
  jenis: string;
}

const SAMPLE_MASSAGETARGET_DATA: massageTargetElement[] = [
  {v: '1', id: 'abcd@efgh.com', jenis:'JABBER'},
  {v: '1', id: 'abcd@efgh.com', jenis:'JABBER'},
  {v: '1', id: 'abcd@efgh.com', jenis:'JABBER'}
]

export interface depositElement {
  v: string;
  waktu: string;
  sebesar: string;
  keterangan: string;
  namauser: string;
}

const SAMPLE_DEPOSIT_DATA: depositElement[] = [
  {v: '1', waktu: '21/09/2019 13:29:00', sebesar: '1', keterangan: 'TUNAI', namauser: 'admin'},
  {v: '1', waktu: '21/09/2019 13:29:00', sebesar: '1', keterangan: 'TUNAI', namauser: 'admin'},
  {v: '1', waktu: '21/09/2019 13:29:00', sebesar: '1', keterangan: 'TUNAI', namauser: 'admin'},
  {v: '1', waktu: '21/09/2019 13:29:00', sebesar: '1', keterangan: 'TUNAI', namauser: 'admin'}
]