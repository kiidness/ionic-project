import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AjouterArticlePage } from './ajouter-article.page';
var routes = [
    {
        path: '',
        component: AjouterArticlePage
    }
];
var AjouterArticlePageModule = /** @class */ (function () {
    function AjouterArticlePageModule() {
    }
    AjouterArticlePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AjouterArticlePage]
        })
    ], AjouterArticlePageModule);
    return AjouterArticlePageModule;
}());
export { AjouterArticlePageModule };
//# sourceMappingURL=ajouter-article.module.js.map