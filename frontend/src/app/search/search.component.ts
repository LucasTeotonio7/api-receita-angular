import { Component, OnInit } from '@angular/core';
import { SearchService } from './services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  //TODO: remove test cnpj
  CNPJ:string = '06990590000123';

  constructor(private SearchService:SearchService ) { }

  ngOnInit(): void {
    this.SearchService.getCNPJ(this.CNPJ).subscribe(data=>{
      console.log(data)
    })
  }

}
