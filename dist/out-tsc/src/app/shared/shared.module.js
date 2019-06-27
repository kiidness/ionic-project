import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListArticlesComponent } from '../components/list-articles/list-articles.component';
import { IonicModule } from '@ionic/angular';
import { ArticleComponent } from '../components/article/article.component';
import { SaveAndDeleteButtonsComponent } from '../components/save-and-delete-buttons/save-and-delete-buttons.component';
var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib_1.__decorate([
        NgModule({
            declarations: [ListArticlesComponent, ArticleComponent, SaveAndDeleteButtonsComponent],
            imports: [
                CommonModule,
                IonicModule
            ], exports: [
                ListArticlesComponent,
                SaveAndDeleteButtonsComponent,
                ArticleComponent,
                IonicModule
            ]
        })
    ], SharedModule);
    return SharedModule;
}());
export { SharedModule };
//# sourceMappingURL=shared.module.js.map