import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { EditTerminalDialogComponent } from './edit-terminal-dialog/edit-terminal-dialog.component';
import { AddJabberDialogComponent } from './add-jabber-dialog/add-jabber-dialog.component';

@Component({
  selector: 'app-terminal',
  templateUrl: './terminal.component.html',
  styleUrls: ['./terminal.component.scss']
})
export class TerminalComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'terminal', 'dual', 'supplier', 'com', 'baudrate', 'modem', 'status'];
  dataSource = new MatTableDataSource<terminalElement>(SAMPLE_TERMINAL_DATA);
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;


  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  openEditTerminal() {
    const dialogRef = this.dialog.open(EditTerminalDialogComponent, {
      minWidth: '30%',
      maxHeight: '80%',
      data: { id: 1, name: 'Center Tsel', terminal: 'Center Sender SM', dual: 'Tidak', supplier: '', com: 'Com1', baudrate: 115200, modem: 'Internet', status: 'AKTIF' }
    });
  }

  openAddJabber(te: terminalElement) {
    const dialogRef = this.dialog.open(AddJabberDialogComponent, {
      minWidth: '30%',
      maxHeight: '80%',
      data: te
    });
  }

  // openEditTerminal(te: terminalElement) {
  //   const dialogRef = this.dialog.open(EditTerminalDialogComponent, {
  //     minWidth: '30%',
  //     data: te
  //   });
  // }

}

export interface terminalElement {
  id: number;
  name: string;
  terminal: string;
  dual: string;
  supplier: string;
  com: string;
  baudrate: number;
  modem: string;
  status: string;
}

const SAMPLE_TERMINAL_DATA: terminalElement[] = [
  { id: 1, name: 'Center Tsel', terminal: 'Center Sender SM', dual: 'Tidak', supplier: '', com: 'Com1', baudrate: 115200, modem: 'Internet', status: 'AKTIF' },
  { id: 2, name: 'Sender SMS', terminal: 'Center Sender SM', dual: 'Ya', supplier: '', com: 'Com57', baudrate: 115200, modem: 'WAVECOM', status: 'AKTIF' },
  { id: 3, name: 'GAS - BUDI1', terminal: 'I-SEV', dual: 'Tidak', supplier: 'MOBOINDOSAT', com: 'Com1', baudrate: 115200, modem: '-', status: 'NON-AKTF' },
  { id: 4, name: 'GAS - BUDI2', terminal: 'I-SEV', dual: 'Tidak', supplier: 'MOBOINDOSAT', com: 'Com1', baudrate: 115200, modem: '-', status: 'NON-AKTF' },
  { id: 5, name: 'GAS - BUDI3', terminal: 'I-SEV', dual: 'Tidak', supplier: 'MOBOINDOSAT', com: 'Com1', baudrate: 115200, modem: '-', status: 'NON-AKTF' },
  { id: 6, name: 'GAS - BUDI4', terminal: 'I-SEV', dual: 'Tidak', supplier: 'MOBOINDOSAT', com: 'Com1', baudrate: 115200, modem: '-', status: 'NON-AKTF' },
  { id: 7, name: 'GAS - BUDI5', terminal: 'I-SEV', dual: 'Tidak', supplier: 'MOBOINDOSAT', com: 'Com1', baudrate: 115200, modem: '-', status: 'NON-AKTF' },
  { id: 8, name: 'GAS - BUDI6', terminal: 'I-SEV', dual: 'Tidak', supplier: 'MOBOINDOSAT', com: 'Com1', baudrate: 115200, modem: '-', status: 'NON-AKTF' },
  { id: 9, name: 'GAS - BUDI7', terminal: 'I-SEV', dual: 'Tidak', supplier: 'MOBOINDOSAT', com: 'Com1', baudrate: 115200, modem: '-', status: 'NON-AKTF' },
  { id: 10, name: 'H2H ISAT BDL AAA 1-P', terminal: 'I-SEV', dual: 'Tidak', supplier: 'MOBOINDOSAT', com: 'Com1', baudrate: 115200, modem: '-', status: 'NON-AKTF' },
  { id: 11, name: 'H2H ISAT BDL AAA 2-P', terminal: 'I-SEV', dual: 'Tidak', supplier: 'MOBOINDOSAT', com: 'Com1', baudrate: 115200, modem: '-', status: 'NON-AKTF' },
  { id: 12, name: 'H2H ISAT BDL AAA 3-P', terminal: 'I-SEV', dual: 'Tidak', supplier: 'MOBOINDOSAT', com: 'Com1', baudrate: 115200, modem: '-', status: 'NON-AKTF' },
  { id: 13, name: 'H2H ISAT BDL AAA 4-P', terminal: 'I-SEV', dual: 'Tidak', supplier: 'MOBOINDOSAT', com: 'Com1', baudrate: 115200, modem: '-', status: 'NON-AKTF' },
  { id: 14, name: 'H2H ISAT BDL AAA 5-P', terminal: 'I-SEV', dual: 'Tidak', supplier: 'MOBOINDOSAT', com: 'Com1', baudrate: 115200, modem: '-', status: 'NON-AKTF' },
]