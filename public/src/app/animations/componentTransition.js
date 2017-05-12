"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
function componentTransition() {
    return slideToLeft();
}
exports.componentTransition = componentTransition;
function slideToLeft() {
    return core_1.trigger('routerTransition', [
        core_1.state('void', core_1.style({ position: 'fixed', width: '100%' })),
        core_1.state('*', core_1.style({ position: 'fixed', width: '100%' })),
        core_1.transition(':enter', [
            core_1.style({ transform: 'translateX(100%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(0%)' }))
        ]),
        core_1.transition(':leave', [
            core_1.style({ transform: 'translateX(0%)' }),
            core_1.animate('0.5s ease-in-out', core_1.style({ transform: 'translateX(-100%)' }))
        ])
    ]);
}
//# sourceMappingURL=componentTransition.js.map