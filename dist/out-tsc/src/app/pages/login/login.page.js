import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { Validators, FormBuilder } from '@angular/forms';
import { LoadingController, AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
var LoginPage = /** @class */ (function () {
    function LoginPage(loginService, loadingCtrl, alertCtrl, router, formBuilder) {
        this.loginService = loginService;
        this.loadingCtrl = loadingCtrl;
        this.alertCtrl = alertCtrl;
        this.router = router;
        this.formBuilder = formBuilder;
        this.loginForm = this.formBuilder.group({
            email: ['',
                Validators.compose([Validators.required, Validators.email])],
            password: [
                '',
                Validators.compose([Validators.required, Validators.minLength(6)]),
            ],
        });
    }
    LoginPage.prototype.ngOnInit = function () {
    };
    LoginPage.prototype.loginUser = function (loginForm) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a, email, password;
            var _this = this;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!!loginForm.valid) return [3 /*break*/, 1];
                        console.log('Formulaire non valide pour le moment, valeur:', loginForm.value);
                        return [3 /*break*/, 4];
                    case 1:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create()];
                    case 2:
                        _a.loading = _b.sent();
                        return [4 /*yield*/, this.loading.present()];
                    case 3:
                        _b.sent();
                        email = loginForm.value.email;
                        password = loginForm.value.password;
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
                                            return [2 /*return*/];
                                    }
                                });
                            }); });
                        });
                        _b.label = 4;
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [LoginService, LoadingController,
            AlertController,
            Router,
            FormBuilder])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map