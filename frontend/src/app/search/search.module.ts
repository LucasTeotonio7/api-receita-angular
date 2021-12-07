//Angular Imports
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http';

//My components
import { SearchComponent } from './search.component';



@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatCardModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    HttpClientModule,
  ],
  exports: [SearchComponent]
})
export class SearchModule { }
