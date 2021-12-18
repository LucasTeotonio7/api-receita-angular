import { Component, Inject, OnInit } from '@angular/core';
import { SearchService } from '../search/services/search.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-cnpj-detail',
  templateUrl: './cnpj-detail.component.html',
  styleUrls: ['./cnpj-detail.component.scss']
})
export class CnpjDetailComponent implements OnInit {

  cnpj: any = {};

  constructor(private SearchService:SearchService,
    public weekRef: MatDialogRef<CnpjDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {}

  ngOnInit(): void {
    this.SearchService.getCNPJ(this.data).subscribe(data=>{
      this.cnpj = data;
    })
  }

}
