import * as tslib_1 from "tslib";
import { Component, Output, EventEmitter } from '@angular/core';
import { AlertController } from '@ionic/angular';
var SaveAndDeleteButtonsComponent = /** @class */ (function () {
    function SaveAndDeleteButtonsComponent(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.saveEvent = new EventEmitter();
        this.removeEvent = new EventEmitter();
    }
    SaveAndDeleteButtonsComponent.prototype.ngOnInit = function () { };
    SaveAndDeleteButtonsComponent.prototype.save = function () {
        this.saveEvent.next();
    };
    SaveAndDeleteButtonsComponent.prototype.remove = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var alert;
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertCtrl.create({
                            message: 'Êtes vous sûr de vouloir supprimer définitivement cet élément?',
                            buttons: [
                                {
                                    text: 'Supprimer',
                                    handler: function () {
                                        _this.removeEvent.next();
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
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], SaveAndDeleteButtonsComponent.prototype, "saveEvent", void 0);
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], SaveAndDeleteButtonsComponent.prototype, "removeEvent", void 0);
    SaveAndDeleteButtonsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-save-and-delete-buttons',
            templateUrl: './save-and-delete-buttons.component.html',
            styleUrls: ['./save-and-delete-buttons.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController])
    ], SaveAndDeleteButtonsComponent);
    return SaveAndDeleteButtonsComponent;
}());
export { SaveAndDeleteButtonsComponent };
//# sourceMappingURL=save-and-delete-buttons.component.js.map