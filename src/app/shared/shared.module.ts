import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListArticlesComponent} from '../components/list-articles/list-articles.component';

@NgModule({
  declarations: [ListArticlesComponent],
  imports: [
    CommonModule,
  ], exports: [ListArticlesComponent]
})
export class SharedModule { }
