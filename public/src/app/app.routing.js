"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var story_component_1 = require("./story/story.component");
var login_component_1 = require("./login/login.component");
var AuthGuard_1 = require("./services/AuthGuard");
var AppRoutes = [
    { path: '', component: story_component_1.StoryComponent, canActivate: [AuthGuard_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '**', redirectTo: '' }
];
exports.routing = router_1.RouterModule.forRoot(AppRoutes);
//# sourceMappingURL=app.routing.js.map