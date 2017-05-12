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
var StoryService_1 = require("./../services/StoryService");
var AddStoryComponent = (function () {
    function AddStoryComponent(ss) {
        this.ss = ss;
        this.onStoryAdded = new core_1.EventEmitter();
    }
    AddStoryComponent.prototype.postStory = function () {
        var _this = this;
        this.ss.postStory(this.story).subscribe(function (res) {
            console.log(res);
            _this.onStoryAdded.emit(res);
            _this.story = null;
        });
    };
    return AddStoryComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], AddStoryComponent.prototype, "onStoryAdded", void 0);
AddStoryComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'add-story',
        templateUrl: './add-story.html',
        styleUrls: ['./add-story.css']
    }),
    __metadata("design:paramtypes", [StoryService_1.StoryService])
], AddStoryComponent);
exports.AddStoryComponent = AddStoryComponent;
//# sourceMappingURL=add-story.component.js.map