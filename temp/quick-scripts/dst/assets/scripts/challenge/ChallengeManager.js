
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/challenge/ChallengeManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY2hhbGxlbmdlXFxDaGFsbGVuZ2VNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQThDLG9DQUFZO0lBQTFEO1FBQUEscUVBdUJDO1FBckJHLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRzlCLFlBQU0sR0FBWSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFZLElBQUksQ0FBQzs7SUFlekIsQ0FBQztJQWJHLGlDQUFNLEdBQU47UUFBQSxpQkFRQztRQVBHLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUVqQyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDakQsS0FBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsVUFBVSxFQUFFLENBQUM7WUFFNUMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUssSUFBSSxPQUFBLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLEVBQXBCLENBQW9CLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFwQkQ7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzsyREFDVztJQUc5QjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDO29EQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7a0RBQ0U7SUFSSixnQkFBZ0I7UUFEcEMsT0FBTztPQUNhLGdCQUFnQixDQXVCcEM7SUFBRCx1QkFBQztDQXZCRCxBQXVCQyxDQXZCNkMsRUFBRSxDQUFDLFNBQVMsR0F1QnpEO2tCQXZCb0IsZ0JBQWdCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFsbGVuZ2VNYW5hZ2VyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIGxvYWRpbmdTY3JlZW46IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIGFiYWN1czogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgdGFzazogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubG9hZGluZ1NjcmVlbi5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB0aGlzLmFiYWN1cy5nZXRDb21wb25lbnQoXCJBYmFjdXNcIikuaW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnRhc2suZ2V0Q29tcG9uZW50KFwiVGFza1wiKS5pbml0aWFsaXplKCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmdTY3JlZW4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSkuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5lcnJvcihlcnJvcikpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRNZW51KCkge1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lcy9tZW51XCIpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==