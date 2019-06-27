import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
var ListArticlesComponent = /** @class */ (function () {
    function ListArticlesComponent(router) {
        this.router = router;
    }
    ListArticlesComponent.prototype.ngOnInit = function () { };
    ListArticlesComponent.prototype.ouvrirArticle = function (article) {
        this.router.navigate(['article-detail'], { queryParams: { idArticle: article.id } });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Array)
    ], ListArticlesComponent.prototype, "articles", void 0);
    ListArticlesComponent = tslib_1.__decorate([
        Component({
            selector: 'app-list-articles',
            templateUrl: './list-articles.component.html',
            styleUrls: ['./list-articles.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], ListArticlesComponent);
    return ListArticlesComponent;
}());
export { ListArticlesComponent };
//# sourceMappingURL=list-articles.component.js.map