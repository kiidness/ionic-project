import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var ArticleComponent = /** @class */ (function () {
    function ArticleComponent() {
    }
    ArticleComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], ArticleComponent.prototype, "article", void 0);
    ArticleComponent = tslib_1.__decorate([
        Component({
            selector: 'app-article',
            templateUrl: './article.component.html',
            styleUrls: ['./article.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], ArticleComponent);
    return ArticleComponent;
}());
export { ArticleComponent };
//# sourceMappingURL=article.component.js.map