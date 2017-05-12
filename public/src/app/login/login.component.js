"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AuthenticationService_1 = require("../services/AuthenticationService");
var router_1 = require("@angular/router");
var User_1 = require("../model/User");
var componentTransition_1 = require("./../animations/componentTransition");
var LoginComponent = (function () {
    function LoginComponent(as, router) {
        this.as = as;
        this.router = router;
        this.user = new User_1.User();
        this.user.username = 'danielpardamean';
        this.user.password = 'login';
    }
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.as.login(this.user.username, this.user.password).subscribe(function (data) {
            _this.router.navigate(['/']);
        }, function (error) {
            console.log(error);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: './login.html',
        styleUrls: ['./login.css'],
        animations: [componentTransition_1.componentTransition()],
        host: { '[@componentTransition]': '' }
    }),
    __metadata("design:paramtypes", [AuthenticationService_1.AuthenticationService, router_1.Router])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map