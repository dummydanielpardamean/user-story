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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var StoryService = (function () {
    function StoryService(http) {
        this.http = http;
    }
    StoryService.prototype.getStory = function () {
        var token = localStorage.getItem('token');
        var headers = new http_1.Headers({ 'x-access-token': token });
        return this.http.get('/api/stories', new http_1.RequestOptions({ headers: headers }))
            .map(function (res) { return res.json(); });
    };
    StoryService.prototype.postStory = function (story) {
        var token = localStorage.getItem('token');
        return this.http.post('/api/story?token=' + token, { story: story })
            .map(function (res) { return res.json(); });
    };
    return StoryService;
}());
StoryService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], StoryService);
exports.StoryService = StoryService;
//# sourceMappingURL=StoryService.js.map