import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListArticlesComponent} from '../components/list-articles/list-articles.component';
import { IonicModule } from '@ionic/angular';
import { ArticleComponent } from '../components/article/article.component';
import { ArticlesService } from '../services/articles.service';
import { SaveAndDeleteButtonsComponent } from '../components/save-and-delete-buttons/save-and-delete-buttons.component';

@NgModule({
  declarations: [ListArticlesComponent, ArticleComponent, SaveAndDeleteButtonsComponent],
  imports: [
    CommonModule,
    IonicModule
  ], exports: [
    ListArticlesComponent,
    SaveAndDeleteButtonsComponent,
    ArticleComponent,
    IonicModule]
})
export class SharedModule { }
