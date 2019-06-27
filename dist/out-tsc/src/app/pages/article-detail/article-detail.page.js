import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { EmailComposer } from '@ionic-native/email-composer/ngx';
import { Platform, AlertController, LoadingController } from '@ionic/angular';
import { ArticlesService } from 'src/app/services/articles.service';
import { LoginService } from 'src/app/services/login.service';
import { Router } from '@angular/router';
import { Camera } from '@ionic-native/camera/ngx';
var ArticleDetailPage = /** @class */ (function () {
    function ArticleDetailPage(platform, articleService, loginService, alertCtrl, loadingCtrl, router, emailComposer, camera) {
        this.platform = platform;
        this.articleService = articleService;
        this.loginService = loginService;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.router = router;
        this.emailComposer = emailComposer;
        this.camera = camera;
    }
    ArticleDetailPage.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.platform.getQueryParam("idArticle");
        this.articleService.getArticle(id).subscribe(function (res) {
            _this.article = res;
            _this.article.id = id;
            var email = _this.loginService.getUserLoggedEmail();
            _this.isMyArticle = email == _this.article.mailproprietaire;
        });
    };
    ArticleDetailPage.prototype.envoyerMail = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var mailperso, email;
            return tslib_1.__generator(this, function (_a) {
                mailperso = this.loginService.getUserLoggedEmail();
                email = {
                    to: this.article.mailproprietaire,
                    cc: null,
                    bcc: [mailperso],
                    attachments: null,
                    subject: "Réponse article leboncoin - " + this.article.titre,
                    body: "Bonjour,\nJe suis intéressé par votre article \"" + this.article.titre + "\".\nVoici mon mail: " + mailperso,
                    isHtml: true
                };
                this.emailComposer.open(email);
                return [2 /*return*/];
            });
        });
    };
    ArticleDetailPage.prototype.save = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
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
                        this.articleService.updateArticle(this.article, this.article.id);
                        this.loading.dismiss().then(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                            var alert;
                            return tslib_1.__generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                                            message: 'Vos modifications ont bien étés mises à jour',
                                            buttons: [
                                                { text: 'Ok' }
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
                        }); });
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticleDetailPage.prototype.remove = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            var _this = this;
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
                        this.articleService.removeArticle(this.article.id);
                        this.loading.dismiss().then(function (async) {
                            _this.router.navigate(['tabs/tab2']);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ArticleDetailPage.prototype.updatePhoto = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var options;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                options = {
                    quality: 100,
                    destinationType: this.camera.DestinationType.FILE_URI,
                    encodingType: this.camera.EncodingType.JPEG,
                    mediaType: this.camera.MediaType.PICTURE
                };
                this.camera.getPicture(options).then(function (imageData) {
                    var base64Image = 'data:image/jpeg;base64,' + imageData;
                    _this.article.image = imageData;
                }, function (error) { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                    var alert;
                    return tslib_1.__generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, this.alertCtrl.create({
                                    message: "Erreur: la photo n'a pas pu être récupérée.\n " + error.message,
                                    buttons: [{ text: 'Ok', role: 'Annuler' }],
                                })];
                            case 1:
                                alert = _a.sent();
                                return [4 /*yield*/, alert.present()];
                            case 2:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
                return [2 /*return*/];
            });
        });
    };
    ArticleDetailPage = tslib_1.__decorate([
        Component({
            selector: 'app-article-detail',
            templateUrl: './article-detail.page.html',
            styleUrls: ['./article-detail.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Platform, ArticlesService, LoginService,
            AlertController, LoadingController, Router,
            EmailComposer, Camera])
    ], ArticleDetailPage);
    return ArticleDetailPage;
}());
export { ArticleDetailPage };
//# sourceMappingURL=article-detail.page.js.map