import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-articles',
  templateUrl: './list-articles.component.html',
  styleUrls: ['./list-articles.component.scss'],
})
export class ListArticlesComponent implements OnInit {

  articles = [{"title": "test"}, {"title": "ttesst"}];

  constructor() { }

  ngOnInit() {}

  ouvrirArticle(article) {
    console.log(article + " sélectionné");
  }
}
