import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';
import { MatDialog } from '@angular/material/dialog';
import { CnpjDetailComponent } from '../cnpj-detail/cnpj-detail.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //TODO: remove test cnpj
  CNPJ:string = '06990590000123';
  // object: string = '';

  constructor(private SearchService:SearchService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.SearchService.getCNPJ(this.CNPJ).subscribe(data=>{
      console.log(data)
    })
  }

  openDialog(): void {
    const weekRef = this.dialog.open(CnpjDetailComponent, {
      width: '500px',
      data: this.CNPJ
    });

    weekRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.object = result;
      this.ngOnInit()
    });
  }

}
