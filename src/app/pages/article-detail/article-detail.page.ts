import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Article, ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.page.html',
  styleUrls: ['./article-detail.page.scss'],
})
export class ArticleDetailPage implements OnInit {
  article: Article;
  constructor(private platform: Platform, private articleService: ArticlesService) { }

  ngOnInit() {
    let id = this.platform.getQueryParam("idArticle");
    this.articleService.getArticle(id).subscribe(res => {
      this.article = res;
    });
  }

  envoyerMail() {
    console.log(this.article.mailproprietaire);
  }

}
