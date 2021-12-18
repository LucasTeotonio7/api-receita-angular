import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CnpjDetailComponent } from '../cnpj-detail/cnpj-detail.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  CNPJ:string = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {}

  openDialog(): void {
    this.dialog.open(CnpjDetailComponent, {
      width: '60%',
      maxHeight: '80%',
      data: this.CNPJ
    });
  }

}
