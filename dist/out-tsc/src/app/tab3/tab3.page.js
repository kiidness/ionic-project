import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { ArticlesService } from '../services/articles.service';
import { AlertController, LoadingController } from '@ionic/angular';
var Tab3Page = /** @class */ (function () {
    function Tab3Page(loginService, articlesService, alertCtrl, loadingCtrl) {
        this.loginService = loginService;
        this.articlesService = articlesService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    Tab3Page.prototype.deconnecter = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'Êtes vous sûr de vouloir vous déconnecter?',
                            buttons: [
                                {
                                    text: 'Oui',
                                    handler: function () {
                                        _this.logoutConfirmed();
                                    }
                                },
                                {
                                    text: 'Non',
                                    role: 'non'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.supprimerCompte = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'Êtes vous sûr de vouloir supprimer définitivement votre compte? Tous vos articles seront également supprimés.',
                            buttons: [
                                {
                                    text: 'Supprimer',
                                    handler: function () {
                                        _this.removeAccountConfirmed();
                                    }
                                },
                                {
                                    text: 'Annuler',
                                    role: 'annuler'
                                }
                            ]
                        })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.logoutConfirmed = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        this.loginService.logoutUser();
                        this.loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page.prototype.removeAccountConfirmed = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 1:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        this.articlesService.removeAllMyArticles();
                        this.loginService.removeLoggedAccount();
                        this.loading.dismiss();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page = tslib_1.__decorate([
        Component({
            selector: 'app-tab3',
            templateUrl: 'tab3.page.html',
            styleUrls: ['tab3.page.scss']
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService, ArticlesService, AlertController,
            LoadingController])
    ], Tab3Page);
    return Tab3Page;
}());
export { Tab3Page };
//# sourceMappingURL=tab3.page.js.map