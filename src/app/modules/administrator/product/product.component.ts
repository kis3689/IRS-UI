import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddProductDialogComponent } from './add-product-dialog/add-product-dialog.component'

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  displayedColumns: string[] = ['nameOperator', 'nameProduck', 'kodeProduck', 'jenis', 'nominal', 'poin'];
  dataSource = new MatTableDataSource<produckElement>(SAMPLE_PRODUCK_DATA);

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openEditResellerDialog() {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      minWidth: '50%',
      maxHeight: '80%',
      data : {id: '', nameOperator: '', nameProduck: '', kodeProduck: '', jenis: '', nominal: 0, poin: 0}
    });
  }

  openEditResellerDialog2(data: produckElement) {
    const dialogRef = this.dialog.open(AddProductDialogComponent, {
      minWidth: '50%',
      maxHeight: '80%',
      data: data
    });
  }

}

export interface produckElement {
  id: string;
  nameOperator: string;
  nameProduck: string;
  kodeProduck: string;
  jenis: string;
  nominal: number;
  poin: number;
}

const SAMPLE_PRODUCK_DATA: produckElement[] = [
  {id: '01', nameOperator: 'AXIS', nameProduck: 'AXIS 5,000', kodeProduck: 'AX5', jenis: 'Elektrik', nominal: 5, poin: 0},
  {id: '01', nameOperator: 'AXIS', nameProduck: 'AXIS 5,000', kodeProduck: 'AX5', jenis: 'Elektrik', nominal: 5, poin: 0},
  {id: '01', nameOperator: 'AXIS', nameProduck: 'AXIS 5,000', kodeProduck: 'AX5', jenis: 'Elektrik', nominal: 5, poin: 0},
  {id: '01', nameOperator: 'AXIS', nameProduck: 'AXIS 5,000', kodeProduck: 'AX5', jenis: 'Elektrik', nominal: 5, poin: 0},
  {id: '01', nameOperator: 'AXIS', nameProduck: 'AXIS 5,000', kodeProduck: 'AX5', jenis: 'Elektrik', nominal: 5, poin: 0},
  {id: '01', nameOperator: 'AXIS', nameProduck: 'AXIS 5,000', kodeProduck: 'AX5', jenis: 'Elektrik', nominal: 5, poin: 0},
  {id: '01', nameOperator: 'AXIS', nameProduck: 'AXIS 5,000', kodeProduck: 'AX5', jenis: 'Elektrik', nominal: 5, poin: 0},
  {id: '01', nameOperator: 'AXIS', nameProduck: 'AXIS 5,000', kodeProduck: 'AX5', jenis: 'Elektrik', nominal: 5, poin: 0},
  {id: '01', nameOperator: 'AXIS', nameProduck: 'AXIS 5,000', kodeProduck: 'AX5', jenis: 'Elektrik', nominal: 5, poin: 0}
]