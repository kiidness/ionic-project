import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';
import { LoginService } from './login.service';
var ArticlesService = /** @class */ (function () {
    function ArticlesService(db, loginService) {
        this.loginService = loginService;
        this.articlesCollection = db.collection('articles');
        this.articles = this.articlesCollection.snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib_1.__assign({ id: id }, data);
            });
        }));
        this.mesArticles = this.articlesCollection.snapshotChanges().pipe(map(function (actions) {
            return actions.map(function (a) {
                var data = a.payload.doc.data();
                var id = a.payload.doc.id;
                return tslib_1.__assign({ id: id }, data);
            }).filter(function (article) { return article.mailproprietaire == loginService.getUserLoggedEmail(); });
        }));
    }
    ArticlesService.prototype.getArticles = function () {
        return this.articles;
    };
    ArticlesService.prototype.getArticlesFromMail = function () {
        return this.mesArticles;
    };
    ArticlesService.prototype.getArticle = function (id) {
        return this.articlesCollection.doc(id).valueChanges();
    };
    ArticlesService.prototype.updateArticle = function (article, id) {
        console.log("TEST");
        console.log(id);
        console.log(article.description);
        console.log(article.prix);
        return this.articlesCollection.doc(id).update(article);
    };
    ArticlesService.prototype.addArticle = function (article) {
        return this.articlesCollection.add(article);
    };
    ArticlesService.prototype.removeArticle = function (id) {
        return this.articlesCollection.doc(id).delete();
    };
    ArticlesService.prototype.removeAllMyArticles = function () {
        var _this = this;
        return this.mesArticles.forEach(function (articles) {
            articles.forEach(function (article) {
                _this.removeArticle(article.id);
            });
        });
    };
    ArticlesService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AngularFirestore, LoginService])
    ], ArticlesService);
    return ArticlesService;
}());
export { ArticlesService };
//# sourceMappingURL=articles.service.js.map