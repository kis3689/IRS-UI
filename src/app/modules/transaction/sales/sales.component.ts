import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss']
})
export class SalesComponent implements OnInit {

  displayedColumns: string[] = ['id', 'waktu', 'namaReseller', 'tujuan', 'kp', 'status', 'sn', 'namaTerminal', 'u', 'mark', 'stok', 'keterangan'];
  dataSource = new MatTableDataSource<salesElement>(SAMPLE_SALES_DATA);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  constructor() { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

}

export interface salesElement {
  id: string;
  waktu: string;
  namaReseller: string;
  tujuan: string;
  kp: string;
  status: string;
  sn: string;
  namaTerminal: string;
  u: string;
  mark: string;
  stok: string;
  keterangan: string;
}

const SAMPLE_SALES_DATA: salesElement[] = [
  {id: '123', waktu: '2018-12-12 21:25:52', namaReseller: 'MAHKOTA RELOAD', tujuan: '085776935503', kp: 'IM10', status: 'Belum Proses', sn: '', namaTerminal: 'OTOMAX_BUMI_1', u: '0', mark: '', stok: '0', keterangan: ''},
  {id: '123', waktu: '2018-12-12 21:25:52', namaReseller: 'MAHKOTA RELOAD', tujuan: '085776935503', kp: 'IM10', status: 'Belum Proses', sn: '', namaTerminal: 'OTOMAX_BUMI_1', u: '0', mark: '', stok: '0', keterangan: ''},
  {id: '123', waktu: '2018-12-12 21:25:52', namaReseller: 'MAHKOTA RELOAD', tujuan: '085776935503', kp: 'IM10', status: 'Belum Proses', sn: '', namaTerminal: 'OTOMAX_BUMI_1', u: '0', mark: '', stok: '0', keterangan: ''},
  {id: '123', waktu: '2018-12-12 21:25:52', namaReseller: 'MAHKOTA RELOAD', tujuan: '085776935503', kp: 'IM10', status: 'Belum Proses', sn: '', namaTerminal: 'OTOMAX_BUMI_1', u: '0', mark: '', stok: '0', keterangan: ''},
  {id: '123', waktu: '2018-12-12 21:25:52', namaReseller: 'MAHKOTA RELOAD', tujuan: '085776935503', kp: 'IM10', status: 'Belum Proses', sn: '', namaTerminal: 'OTOMAX_BUMI_1', u: '0', mark: '', stok: '0', keterangan: '+CUSD: 4'},
  {id: '123', waktu: '2018-12-12 21:25:52', namaReseller: 'MAHKOTA RELOAD', tujuan: '085776935503', kp: 'IM10', status: 'Belum Proses', sn: '', namaTerminal: 'OTOMAX_BUMI_1', u: '0', mark: '', stok: '0', keterangan: ''},
  {id: '123', waktu: '2018-12-12 21:25:52', namaReseller: 'MAHKOTA RELOAD', tujuan: '085776935503', kp: 'IM10', status: 'Belum Proses', sn: '', namaTerminal: 'OTOMAX_BUMI_1', u: '0', mark: '', stok: '0', keterangan: ''}
]