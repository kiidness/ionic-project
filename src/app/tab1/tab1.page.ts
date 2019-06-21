import {Component, OnInit} from '@angular/core';
import {Article, ArticlesService} from '../services/articles.service';
import {forEach} from '@angular-devkit/schematics';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  constructor(private articleService: ArticlesService) {}

  articles: Article[];

  ngOnInit() {
    this.articleService.getArticles().subscribe(res => {
      this.articles = res;
    });
  }

  remove(item) {
    this.articleService.removeArticle(item.id);
  }

}
