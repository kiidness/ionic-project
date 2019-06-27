import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ArticleDetailPage } from './article-detail.page';
import { SharedModule } from 'src/app/shared/shared.module';
var routes = [
    {
        path: '',
        component: ArticleDetailPage
    }
];
var ArticleDetailPageModule = /** @class */ (function () {
    function ArticleDetailPageModule() {
    }
    ArticleDetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                SharedModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ArticleDetailPage]
        })
    ], ArticleDetailPageModule);
    return ArticleDetailPageModule;
}());
export { ArticleDetailPageModule };
//# sourceMappingURL=article-detail.module.js.map