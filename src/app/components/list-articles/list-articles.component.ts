import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/services/articles.service';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss'],
})
export class ListArticlesComponent implements OnInit {
  @Input() articles: Article[];

  constructor() { }

  ngOnInit() {}

  ouvrirArticle(article: Article) {
    console.log(article.titre + " sélectionné");
  }
}
