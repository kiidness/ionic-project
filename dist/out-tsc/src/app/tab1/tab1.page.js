import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
var Tab1Page = /** @class */ (function () {
    function Tab1Page(articleService) {
        this.articleService = articleService;
    }
    Tab1Page.prototype.ngOnInit = function () {
        var _this = this;
        this.articleService.getArticles().subscribe(function (res) {
            _this.articles = res;
        });
    };
    Tab1Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab1',
            templateUrl: 'tab1.page.html',
            styleUrls: ['tab1.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ArticlesService])
    ], Tab1Page);
    return Tab1Page;
}());
export { Tab1Page };
//# sourceMappingURL=tab1.page.js.map