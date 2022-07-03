"use strict";
cc._RF.push(module, 'eea622+u4BM5YpkebmrmG0I', 'ChallengeManager');
// scripts/challenge/ChallengeManager.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ChallengeManager = /** @class */ (function (_super) {
    __extends(ChallengeManager, _super);
    function ChallengeManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingScreen = null;
        _this.abacus = null;
        _this.task = null;
        return _this;
    }
    ChallengeManager.prototype.onLoad = function () {
        var _this = this;
        this.loadingScreen.active = true;
        this.abacus.getComponent("Abacus").initialize().then(function () {
            _this.task.getComponent("Task").initialize();
            _this.loadingScreen.active = false;
        }).catch(function (error) { return console.error(error); });
    };
    ChallengeManager.prototype.loadMenu = function () {
        cc.director.loadScene("scenes/menu");
    };
    __decorate([
        property(cc.Node)
    ], ChallengeManager.prototype, "loadingScreen", void 0);
    __decorate([
        property(cc.Node)
    ], ChallengeManager.prototype, "abacus", void 0);
    __decorate([
        property(cc.Node)
    ], ChallengeManager.prototype, "task", void 0);
    ChallengeManager = __decorate([
        ccclass
    ], ChallengeManager);
    return ChallengeManager;
}(cc.Component));
exports.default = ChallengeManager;

cc._RF.pop();