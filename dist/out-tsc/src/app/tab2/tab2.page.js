import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ArticlesService } from '../services/articles.service';
import { LoginService } from '../services/login.service';
var Tab2Page = /** @class */ (function () {
    function Tab2Page(articleService, loginService) {
        this.articleService = articleService;
        this.loginService = loginService;
    }
    Tab2Page.prototype.ngOnInit = function () {
        var _this = this;
        var email = this.loginService.getUserLoggedEmail();
        this.articleService.getArticlesFromMail().subscribe(function (res) {
            _this.articles = res;
        });
    };
    Tab2Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab2',
            templateUrl: 'tab2.page.html',
            styleUrls: ['tab2.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [ArticlesService, LoginService])
    ], Tab2Page);
    return Tab2Page;
}());
export { Tab2Page };
//# sourceMappingURL=tab2.page.js.map