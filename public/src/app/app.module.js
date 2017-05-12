"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var forms_1 = require("@angular/forms");
var animations_1 = require("@angular/platform-browser/animations");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var story_component_1 = require("./story/story.component");
var AuthGuard_1 = require("./services/AuthGuard");
var AuthenticationService_1 = require("./services/AuthenticationService");
var StoryService_1 = require("./services/StoryService");
var login_component_1 = require("./login/login.component");
var add_story_component_1 = require("./add-story/add-story.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, app_routing_1.routing, animations_1.BrowserAnimationModule],
        providers: [AuthGuard_1.AuthGuard, AuthenticationService_1.AuthenticationService, StoryService_1.StoryService],
        declarations: [app_component_1.AppComponent, story_component_1.StoryComponent, login_component_1.LoginComponent, add_story_component_1.AddStoryComponent],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map