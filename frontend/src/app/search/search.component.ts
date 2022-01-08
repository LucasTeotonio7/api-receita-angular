import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { CnpjDetailComponent } from '../cnpj-detail/cnpj-detail.component';
import { SearchService } from '../search/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']

})
export class SearchComponent implements OnInit {

  CNPJ: string = '';

  constructor(public dialog: MatDialog, private SearchService:SearchService) { }

  ngOnInit(): void {}

  openDialog(): void {
    this.SearchService.getCNPJ(this.CNPJ).subscribe(data=>{
        this.dialog.open(CnpjDetailComponent, {
          width: '60%',
          maxHeight: '95%',
          data: data
        });

    }, error=>{

      if(error.status === 400){
        this.SearchService.errorMessage("O CNPJ informado é inválido!");
      }

      else if(error.status === 429){
        this.SearchService.errorMessage("Você só pode fazer 3 requisições por minuto! Aguarde um momento... ");
      }

      else{
        this.SearchService.errorMessage("Erro Interno");
      }

    })
  }

}
