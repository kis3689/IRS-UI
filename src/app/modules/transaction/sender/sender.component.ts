import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {

  displayedColumns: string[] = ['id', 'idTransaksi', 'waktu', 'idReseller', 'namaReseller', 'tujuan', 'namaTerminal', 'status', 'isi'];
  dataSource = new MatTableDataSource<senderElement>(SAMPLE_SENDER_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}

export interface senderElement {
  id: string;
  idTransaksi: string;
  waktu: string;
  idReseller: string;
  namaReseller: string;
  tujuan: string;
  namaTerminal: string;
  status: string;
  isi: string;
}

const SAMPLE_SENDER_DATA: senderElement[] = [
  {id: '14225501', idTransaksi: '14225501', waktu: '12-12-2019 22:39:18', idReseller: 'H20083', namaReseller: 'IND PULSA', tujuan: 'http://188.166.247.2:8093/report', namaTerminal: 'SenderH2H', status: 'Blm diproses', isi: 'IND PULSA 22.153.452.1'},
  {id: '14225501', idTransaksi: '14225501', waktu: '12-12-2019 22:39:18', idReseller: 'H20083', namaReseller: 'IND PULSA', tujuan: 'http://188.166.247.2:8093/report', namaTerminal: 'SenderH2H', status: 'Blm diproses', isi: 'IND PULSA 22.153.452.1'},
  {id: '14225501', idTransaksi: '14225501', waktu: '12-12-2019 22:39:18', idReseller: 'H20083', namaReseller: 'IND PULSA', tujuan: 'http://188.166.247.2:8093/report', namaTerminal: 'SenderH2H', status: 'Blm diproses', isi: 'IND PULSA 22.153.452.1'},
  {id: '14225501', idTransaksi: '14225501', waktu: '12-12-2019 22:39:18', idReseller: 'H20083', namaReseller: 'IND PULSA', tujuan: 'http://188.166.247.2:8093/report', namaTerminal: 'SenderH2H', status: 'Blm diproses', isi: 'IND PULSA 22.153.452.1'},
  {id: '14225501', idTransaksi: '14225501', waktu: '12-12-2019 22:39:18', idReseller: 'H20083', namaReseller: 'IND PULSA', tujuan: 'http://188.166.247.2:8093/report', namaTerminal: 'SenderH2H', status: 'Blm diproses', isi: 'IND PULSA 22.153.452.1'},
  {id: '14225501', idTransaksi: '14225501', waktu: '12-12-2019 22:39:18', idReseller: 'H20083', namaReseller: 'IND PULSA', tujuan: 'http://188.166.247.2:8093/report', namaTerminal: 'SenderH2H', status: 'Blm diproses', isi: 'IND PULSA 22.153.452.1'},
  {id: '14225501', idTransaksi: '14225501', waktu: '12-12-2019 22:39:18', idReseller: 'H20083', namaReseller: 'IND PULSA', tujuan: 'http://188.166.247.2:8093/report', namaTerminal: 'SenderH2H', status: 'Blm diproses', isi: 'IND PULSA 22.153.452.1'},
  {id: '14225501', idTransaksi: '14225501', waktu: '12-12-2019 22:39:18', idReseller: 'H20083', namaReseller: 'IND PULSA', tujuan: 'http://188.166.247.2:8093/report', namaTerminal: 'SenderH2H', status: 'Blm diproses', isi: 'IND PULSA 22.153.452.1'},
  {id: '14225501', idTransaksi: '14225501', waktu: '12-12-2019 22:39:18', idReseller: 'H20083', namaReseller: 'IND PULSA', tujuan: 'http://188.166.247.2:8093/report', namaTerminal: 'SenderH2H', status: 'Blm diproses', isi: 'IND PULSA 22.153.452.1'},
  {id: '14225501', idTransaksi: '14225501', waktu: '12-12-2019 22:39:18', idReseller: 'H20083', namaReseller: 'IND PULSA', tujuan: 'http://188.166.247.2:8093/report', namaTerminal: 'SenderH2H', status: 'Blm diproses', isi: 'IND PULSA 22.153.452.1'}
]