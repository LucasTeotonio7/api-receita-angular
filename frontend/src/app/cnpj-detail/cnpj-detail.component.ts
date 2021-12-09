import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search/services/search.service';

@Component({
  selector: 'app-cnpj-detail',
  templateUrl: './cnpj-detail.component.html',
  styleUrls: ['./cnpj-detail.component.scss']
})
export class CnpjDetailComponent implements OnInit {

  cnpj: any = {}

  constructor(private SearchService:SearchService) {}

  ngOnInit(): void {
    // this.SearchService.getCNPJ('06990590000123').subscribe(data=>{
    //   this.cnpj = data;
    //   console.log(data, this.cnpj)
    // })
  }

}
