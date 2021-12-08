import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchModule } from './search/search.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CnpjDetailComponent } from './cnpj-detail/cnpj-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    CnpjDetailComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SearchModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
