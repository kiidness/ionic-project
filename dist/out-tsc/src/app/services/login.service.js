import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
var LoginService = /** @class */ (function () {
    function LoginService() {
    }
    LoginService.prototype.loginUser = function (email, password) {
        return firebase.auth().signInWithEmailAndPassword(email, password);
    };
    LoginService.prototype.signupUser = function (email, password) {
        return firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(function (newUserCredential) {
            firebase
                .firestore()
                .doc("/userProfile/" + newUserCredential.user.uid)
                .set({ email: email });
        })
            .catch(function (error) {
            console.error(error);
            throw new Error(error);
        });
    };
    LoginService.prototype.logoutUser = function () {
        return firebase.auth().signOut();
    };
    LoginService.prototype.getUserLoggedEmail = function () {
        if (firebase.auth().currentUser == null) {
            return null;
        }
        return firebase.auth().currentUser.email;
    };
    LoginService.prototype.removeLoggedAccount = function () {
        firebase.auth().currentUser.delete();
    };
    LoginService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], LoginService);
    return LoginService;
}());
export { LoginService };
//# sourceMappingURL=login.service.js.map