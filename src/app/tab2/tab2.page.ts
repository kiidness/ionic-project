import { Component } from '@angular/core';
import { ArticlesService, Article } from '../services/articles.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(private articleService: ArticlesService, private loginService: LoginService) { }

  articles: Article[];

  ngOnInit() {
    var email = this.loginService.getUserLoggedEmail();
    this.articleService.getArticlesFromMail().subscribe(res => {
      this.articles = res
    });
  }
}
