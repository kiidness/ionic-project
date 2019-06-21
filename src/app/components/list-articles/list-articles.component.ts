import { Component, OnInit, Input } from '@angular/core';
import { Article } from 'src/app/services/articles.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss'],
})
export class ListArticlesComponent implements OnInit {
  @Input() articles: Article[];

  constructor(private router: Router) { }

  ngOnInit() {}

  ouvrirArticle(article: Article) {
    this.router.navigate(['article-detail'], { queryParams: { idArticle: article.id }});
    console.log(article.titre + " sélectionné");
  }
}
