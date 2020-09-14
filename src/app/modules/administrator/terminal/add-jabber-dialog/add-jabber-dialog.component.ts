import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-jabber-dialog',
  templateUrl: './add-jabber-dialog.component.html',
  styleUrls: ['./add-jabber-dialog.component.scss']
})
export class AddJabberDialogComponent implements OnInit {

  hide = true;
  pass = new FormControl('', [Validators.required]);

  displayedColumns: string[] = ['terminalCenter'];
  dataSource = new MatTableDataSource<terminalCenterElement>(SAMPLE_TERMINALCENTER_DATA);

  constructor() { }

  ngOnInit(): void {
  }

}

export interface terminalCenterElement {
  terminalCenter: string;
}

const SAMPLE_TERMINALCENTER_DATA: terminalCenterElement[] = []


