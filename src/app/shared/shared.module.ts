import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListArticlesComponent} from '../components/list-articles/list-articles.component';
import { IonicModule } from '@ionic/angular';
import { ArticleComponent } from '../components/article/article.component';
import { ArticlesService } from '../services/articles.service';

@NgModule({
  declarations: [ListArticlesComponent, ArticleComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [
    ListArticlesComponent,
    ArticleComponent,
    IonicModule]
})
export class SharedModule { }
