import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-product-socket-dialog',
  templateUrl: './add-product-socket-dialog.component.html',
  styleUrls: ['./add-product-socket-dialog.component.scss']
})
export class AddProductSocketDialogComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nameOperator'];
  dataSource = new MatTableDataSource<productSocketElement>(SAMPLE_PRODUCTSOCKET_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}

export interface productSocketElement {
  id: number;
  nameOperator: string;
}

const SAMPLE_PRODUCTSOCKET_DATA: productSocketElement[] = [
  {id: 0, nameOperator: 'Axis'},
  {id: 1, nameOperator: 'Ceria'},
  {id: 2, nameOperator: 'contoh'},
  {id: 3, nameOperator: 'MKIOS'},
  {id: 4, nameOperator: 'H2H INDOSAT'},
  {id: 5, nameOperator: 'H2H INDOSAT DATA'},
  {id: 6, nameOperator: 'H2H INDOSAT SMS'},
  {id: 7, nameOperator: 'H2H INDOSAT VOUCHER'},
  {id: 8, nameOperator: 'H2H OVO'}
];