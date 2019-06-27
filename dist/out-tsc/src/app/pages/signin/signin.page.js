import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
var SigninPage = /** @class */ (function () {
    function SigninPage(loginService, loadingCtrl, alertCtrl, router, formBuilder) {
        this.loginService = loginService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.signinForm = this.formBuilder.group({
            email: ['',
                Validators.compose([Validators.required, Validators.email])],
            password: [
                '',
                Validators.compose([Validators.required, Validators.minLength(6)])
            ],
            password2: [
                '',
                Validators.compose([Validators.required, Validators.minLength(6)]),
            ],
        });
    }
    SigninPage.prototype.ngOnInit = function () {
    };
    SigninPage.prototype.createUser = function (loginForm) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, email_1, password_1, password2, alert_1;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!loginForm.valid) return [3 /*break*/, 1];
                        console.log('Formulaire non valide pour le moment, valeur:', loginForm.value);
                        return [3 /*break*/, 7];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 2:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 3:
                        _b.sent();
                        email_1 = loginForm.value.email;
                        password_1 = loginForm.value.password;
                        password2 = loginForm.value.password2;
                        if (!(password_1 != password2)) return [3 /*break*/, 6];
                        return [4 /*yield*/, this.alertCtrl.create({
                                message: "Erreur\nVeuillez entrer 2 fois le même mot de passe.",
                                buttons: [{ text: 'Ok', role: 'Annuler' }],
                            })];
                    case 4:
                        alert_1 = _b.sent();
                        return [4 /*yield*/, alert_1.present()];
                    case 5:
                        _b.sent();
                        _b.label = 6;
                    case 6:
                        this.loginService.signupUser(email_1, password_1).then(function () {
                            _this.loading.dismiss().then(function () {
                                _this.loginUser(email_1, password_1);
                            });
                        }, function (error) {
                            _this.loading.dismiss().then(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                                var alert;
                                return tslib_1.__generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, this.alertCtrl.create({
                                                message: error.message,
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
                        });
                        _b.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    SigninPage.prototype.loginUser = function (email, password) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.loginService.loginUser(email, password).then(function () {
                    _this.loading.dismiss().then(function () {
                        _this.router.navigateByUrl('tabs/tab1');
                    });
                }, function (error) {
                    _this.loading.dismiss().then(function () { return tslib_1.__awaiter(_this, void 0, void 0, function () {
                        var alert;
                        return tslib_1.__generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, this.alertCtrl.create({
                                        message: error.message,
                                        buttons: [{ text: 'Ok', role: 'Annuler' }],
                                    })];
                                case 1:
                                    alert = _a.sent();
                                    return [4 /*yield*/, alert.present()];
                                case 2:
                                    _a.sent();
                                    this.router.navigateByUrl('login');
                                    return [2 /*return*/];
                            }
                        });
                    }); });
                });
                return [2 /*return*/];
            });
        });
    };
    SigninPage = tslib_1.__decorate([
        Component({
            selector: 'app-signin',
            templateUrl: './signin.page.html',
            styleUrls: ['./signin.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService, LoadingController,
            AlertController,
            Router,
            FormBuilder])
    ], SigninPage);
    return SigninPage;
}());
export { SigninPage };
//# sourceMappingURL=signin.page.js.map