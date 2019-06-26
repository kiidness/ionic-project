import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { map, share } from 'rxjs/operators';
import { LoginService } from './login.service';

export interface Article {
  id?: string;
  titre: string;
  prix: number;
  description: string;
  image: string;
  mailproprietaire: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private articlesCollection: AngularFirestoreCollection<Article>;

  private articles: Observable<Article[]>;
  private mesArticles: Observable<Article[]>;

  constructor(db: AngularFirestore, private loginService: LoginService) {
    this.articlesCollection = db.collection<Article>('articles');

    this.articles = this.articlesCollection.snapshotChanges().pipe(
        map(actions => {
          return actions.map(a => {
            const data = a.payload.doc.data();
            const id = a.payload.doc.id;
            return {id, ...data};
          })
        })
    );

    this.mesArticles = this.articlesCollection.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return {id, ...data};
        }).filter(article => article.mailproprietaire == loginService.getUserLoggedEmail())
      })
  );
  }

  getArticles() {
    return this.articles;
  }

  getArticlesFromMail() {
    return this.mesArticles;
  }

  getArticle(id) {
    return this.articlesCollection.doc<Article>(id).valueChanges();
  }

  updateArticle(article: Article, id: string) {
    return this.articlesCollection.doc(id).update(article);
  }

  addArticle(article: Article) {
    return this.articlesCollection.add(article);
  }

  removeArticle(id) {
    return this.articlesCollection.doc(id).delete();
  }
}


