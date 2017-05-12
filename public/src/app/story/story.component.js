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
var StoryService_1 = require("../services/StoryService");
var AuthenticationService_1 = require("../services/AuthenticationService");
var StoryComponent = (function () {
    function StoryComponent(service, as) {
        this.service = service;
        this.as = as;
    }
    StoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getStory().subscribe(function (res) {
            _this.stories = res;
            console.log(_this.stories);
        });
    };
    StoryComponent.prototype.onStoryAdded = function (event) {
        this.stories.push(event[0]);
    };
    StoryComponent.prototype.logout = function () {
        this.as.logout();
    };
    return StoryComponent;
}());
StoryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'story',
        templateUrl: './story.html',
        providers: [StoryService_1.StoryService],
        styleUrls: ['story.css']
    }),
    __metadata("design:paramtypes", [StoryService_1.StoryService, AuthenticationService_1.AuthenticationService])
], StoryComponent);
exports.StoryComponent = StoryComponent;
//# sourceMappingURL=story.component.js.map