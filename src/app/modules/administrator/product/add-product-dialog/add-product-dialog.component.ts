import { Component, OnInit, Inject } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddOperatorDialogComponent } from './add-operator-dialog/add-operator-dialog.component';
import { produckElement } from '../product.component';

@Component({
  selector: 'app-add-product-dialog',
  templateUrl: './add-product-dialog.component.html',
  styleUrls: ['./add-product-dialog.component.scss']
})
export class AddProductDialogComponent implements OnInit {

  displayedColumns: string[] = ['pricePlan', 'hargaJual', 'komisiFee', 'status'];
  dataSource = new MatTableDataSource<productElement>(SAMPLE_PRODUCT_DATA);

  displayedColumns2: string[] = ['idReseller', 'nameReseller', 'harga'];
  dataSource2 = new MatTableDataSource<specialPriceElement>(SAMPLE_SPECIALPRICE_DATA);

  constructor(@Inject(MAT_DIALOG_DATA) public data: produckElement, public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openAddOperatorDialog() {
    const dialogRef = this.dialog.open(AddOperatorDialogComponent, {
      minWidth: '30%',
      maxHeight: '80%'
    });
  }

}

export interface productElement {
  id: string;
  pricePlan: string;
  hargaJual: String;
  komisiFee: string;
  status: string;
}

const SAMPLE_PRODUCT_DATA: productElement[] = [
  {id: '01', pricePlan: 'Harga Master', hargaJual: '21,525', komisiFee: '0', status: '0'},
  {id: '01', pricePlan: 'Harga Master', hargaJual: '21,525', komisiFee: '0', status: '0'},
  {id: '01', pricePlan: 'Harga Master', hargaJual: '21,525', komisiFee: '0', status: '0'},
  {id: '01', pricePlan: 'Harga Master', hargaJual: '21,525', komisiFee: '0', status: '0'},
  {id: '01', pricePlan: 'Harga Master', hargaJual: '21,525', komisiFee: '0', status: '0'},
  {id: '01', pricePlan: 'Harga Master', hargaJual: '21,525', komisiFee: '0', status: '0'},
]

export interface specialPriceElement {
  idReseller: string;
  nameReseller: string;
  harga: string;
}

const SAMPLE_SPECIALPRICE_DATA: specialPriceElement[] = [
  
]