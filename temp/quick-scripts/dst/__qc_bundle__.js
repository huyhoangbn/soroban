
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Abacus');
require('./assets/scripts/Bead');
require('./assets/scripts/FullSize');
require('./assets/scripts/Global');
require('./assets/scripts/ResourcePack');
require('./assets/scripts/Row');
require('./assets/scripts/Task');
require('./assets/scripts/ThemeList');
require('./assets/scripts/challenge/ChallengeManager');
require('./assets/scripts/listLesson/Common');
require('./assets/scripts/listLesson/ListLesson');
require('./assets/scripts/listLesson/lesson0/Lesson0');
require('./assets/scripts/listLesson/lesson1/Lesson1');
require('./assets/scripts/listLesson/lesson2/Lesson2');
require('./assets/scripts/listLesson/lesson2/Node1_2');
require('./assets/scripts/listLesson/lesson2/Node3_2');
require('./assets/scripts/listLesson/lesson2/Node4_2');
require('./assets/scripts/listLesson/lesson3/Node1_3');
require('./assets/scripts/listLesson/lesson3/Node2_3');
require('./assets/scripts/listLesson/lesson3/Node4_3');
require('./assets/scripts/listLesson/lesson3/Node5_3');
require('./assets/scripts/listLesson/lesson3/Node6_3');
require('./assets/scripts/listLesson/lesson3/Node7_3');
require('./assets/scripts/listLesson/lesson3/Node8_3');
require('./assets/scripts/listLesson/lesson4/Node1_4');
require('./assets/scripts/listLesson/lesson4/Node2_4');
require('./assets/scripts/listLesson/lesson4/Node3_4');
require('./assets/scripts/listLesson/lesson4/Node4_4');
require('./assets/scripts/listLesson/lesson4/Node5_4');
require('./assets/scripts/listLesson/lesson4/Node6_4');
require('./assets/scripts/manager/SoundManager');
require('./assets/scripts/menu/MenuLoader');
require('./assets/scripts/menu/ThemeOption');
require('./assets/scripts/menu/ThemeSelector');
require('./assets/scripts/miniGame/ChooseNumber');
require('./assets/scripts/miniGame/NumberSeed');
require('./assets/scripts/miniGame/raphael/R.path');
require('./assets/scripts/miniGame/raphael/component/R.style');
require('./assets/scripts/miniGame/raphael/component/R.transform');
require('./assets/scripts/miniGame/raphael/component/optional/R.simplify');
require('./assets/scripts/miniGame/raphael/simplify');
require('./assets/scripts/miniGame/raphael/utils/R.curve');
require('./assets/scripts/miniGame/raphael/utils/R.utils');
require('./assets/scripts/miniGame/writeNumber/NodeWrite');
require('./assets/scripts/miniGame/writeNumber/WriteNumber');
require('./assets/scripts/playground/PlaygroundLoader');
require('./assets/scripts/tutorial/TutorialManager');
require('./assets/scripts/tutorial/TutorialNode');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson1/Lesson1.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fb34fuJhhZKzbU4JVokLFw5', 'Lesson1');
// scripts/listLesson/lesson1/Lesson1.ts

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
var Blink = /** @class */ (function (_super) {
    __extends(Blink, _super);
    function Blink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nodeKhung = null;
        _this.listVbar = null;
        _this.middleBar = null;
        _this.listBear = null;
        _this.labelText = null;
        return _this;
    }
    // onLoad () {}
    Blink.prototype.start = function () {
        this.setAction();
    };
    Blink.prototype.setAction = function () {
        var _this = this;
        var blinkAction = cc.repeat(cc.sequence(cc.blink(0.1, 1), cc.delayTime(0.1)), 10);
        var action1 = cc.callFunc(function () {
            _this.nodeKhung.runAction(blinkAction);
            _this.labelText.string = "Khung ngoài";
        });
        var action2 = cc.callFunc(function () {
            _this.listVbar.runAction(blinkAction);
            _this.labelText.string = "Cột dọc";
        });
        var action3 = cc.callFunc(function () {
            _this.middleBar.runAction(blinkAction);
            _this.labelText.string = "Thanh giá trị ngang";
        });
        var action4 = cc.callFunc(function () {
            _this.listBear.runAction(blinkAction);
            _this.labelText.string = "Hạt giá trị";
        });
        this.node.runAction(cc.sequence(action1, cc.delayTime(3), action2, cc.delayTime(3), action3, cc.delayTime(3), action4));
    };
    __decorate([
        property(cc.Node)
    ], Blink.prototype, "nodeKhung", void 0);
    __decorate([
        property(cc.Node)
    ], Blink.prototype, "listVbar", void 0);
    __decorate([
        property(cc.Node)
    ], Blink.prototype, "middleBar", void 0);
    __decorate([
        property(cc.Node)
    ], Blink.prototype, "listBear", void 0);
    __decorate([
        property(cc.Label)
    ], Blink.prototype, "labelText", void 0);
    Blink = __decorate([
        ccclass
    ], Blink);
    return Blink;
}(cc.Component));
exports.default = Blink;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uMVxcTGVzc29uMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFtQyx5QkFBWTtJQUEvQztRQUFBLHFFQXlDQztRQXZDRyxlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBYSxJQUFJLENBQUM7O0lBMkIvQixDQUFDO0lBMUJHLGVBQWU7SUFFZixxQkFBSyxHQUFMO1FBQ0csSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3BCLENBQUM7SUFFRCx5QkFBUyxHQUFUO1FBQUEsaUJBbUJDO1FBbEJHLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixLQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQztZQUN0QyxLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxhQUFhLENBQUM7UUFDMUMsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLFNBQVMsQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdEIsS0FBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsV0FBVyxDQUFDLENBQUM7WUFDdEMsS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcscUJBQXFCLENBQUM7UUFDbEQsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsT0FBTyxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztJQUN0SCxDQUFDO0lBdENEO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7NENBQ087SUFHMUI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDTTtJQUd6QjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNPO0lBRzFCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDTztJQWRWLEtBQUs7UUFEekIsT0FBTztPQUNhLEtBQUssQ0F5Q3pCO0lBQUQsWUFBQztDQXpDRCxBQXlDQyxDQXpDa0MsRUFBRSxDQUFDLFNBQVMsR0F5QzlDO2tCQXpDb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmxpbmsgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgbm9kZUtodW5nOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBsaXN0VmJhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgbWlkZGxlQmFyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBsaXN0QmVhcjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5MYWJlbClcclxuICAgIGxhYmVsVGV4dDogY2MuTGFiZWwgPSBudWxsO1xyXG4gICAgLy8gb25Mb2FkICgpIHt9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgdGhpcy5zZXRBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICBsZXQgYmxpbmtBY3Rpb24gPSBjYy5yZXBlYXQoY2Muc2VxdWVuY2UoY2MuYmxpbmsoMC4xLCAxKSxjYy5kZWxheVRpbWUoMC4xKSksMTApO1xyXG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlS2h1bmcucnVuQWN0aW9uKGJsaW5rQWN0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbFRleHQuc3RyaW5nID0gXCJLaHVuZyBuZ2/DoGlcIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb24yID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5saXN0VmJhci5ydW5BY3Rpb24oYmxpbmtBY3Rpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsVGV4dC5zdHJpbmcgPSBcIkPhu5l0IGThu41jXCI7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubWlkZGxlQmFyLnJ1bkFjdGlvbihibGlua0FjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxUZXh0LnN0cmluZyA9IFwiVGhhbmggZ2nDoSB0cuG7iyBuZ2FuZ1wiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGFjdGlvbjQgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RCZWFyLnJ1bkFjdGlvbihibGlua0FjdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxUZXh0LnN0cmluZyA9IFwiSOG6oXQgZ2nDoSB0cuG7i1wiO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShhY3Rpb24xLGNjLmRlbGF5VGltZSgzKSxhY3Rpb24yLGNjLmRlbGF5VGltZSgzKSxhY3Rpb24zLGNjLmRlbGF5VGltZSgzKSxhY3Rpb240KSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Global.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a95e9R3MpNDgYN74dOHwD4c', 'Global');
// scripts/Global.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Global = void 0;
var Global = {
    resourcePack: "Green",
    currentChallenge: "multiplication",
    currentTutorial: "Basics",
    currentLesson: 0,
    firstTime: true
};
exports.Global = Global;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2xvYmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUksTUFBTSxHQUFHO0lBQ1QsWUFBWSxFQUFFLE9BQU87SUFDckIsZ0JBQWdCLEVBQUUsZ0JBQWdCO0lBQ2xDLGVBQWUsRUFBRSxRQUFRO0lBQ3pCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLFNBQVMsRUFBRSxJQUFJO0NBQ2xCLENBQUE7QUFFUSx3QkFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImxldCBHbG9iYWwgPSB7XHJcbiAgICByZXNvdXJjZVBhY2s6IFwiR3JlZW5cIixcclxuICAgIGN1cnJlbnRDaGFsbGVuZ2U6IFwibXVsdGlwbGljYXRpb25cIixcclxuICAgIGN1cnJlbnRUdXRvcmlhbDogXCJCYXNpY3NcIixcclxuICAgIGN1cnJlbnRMZXNzb246IDAsXHJcbiAgICBmaXJzdFRpbWU6IHRydWVcclxufVxyXG5cclxuZXhwb3J0IHsgR2xvYmFsIH07XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/raphael/component/optional/R.simplify.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '618f7EABMxA0aL8yRPUN3ks', 'R.simplify');
// scripts/miniGame/raphael/component/optional/R.simplify.js

"use strict";

var EPSILON = 1e-12;
var TOLERANCE = 1e-6;
var Fitter = {
  fit: function fit(path, error) {
    this.commands = [];
    this.error = error || 10;
    var points = this.points = [];

    path._commands.forEach(function (cmd) {
      var c = cmd[0];

      if (c === 'M') {
        points.push(cc.v2(cmd[1], cmd[2]));
      } else if (c === 'C') {
        points.push(cc.v2(cmd[5], cmd[6]));
      }
    });

    var length = points.length;

    if (length > 1) {
      this.fitCubic(0, length - 1, // Left Tangent
      points[1].sub(points[0]).normalize(), // Right Tangent
      points[length - 2].sub(points[length - 1]).normalize());
    }

    return this.commands;
  },
  // Fit a Bezier curve to a (sub)set of digitized points
  fitCubic: function fitCubic(first, last, tan1, tan2) {
    //  Use heuristic if region only has two points in it
    if (last - first === 1) {
      var pt1 = this.points[first],
          pt2 = this.points[last],
          dist = pt1.sub(pt2).mag() / 3;
      this.addCurve([pt1, pt1.add(tan1.normalize().mulSelf(dist)), pt2.add(tan2.normalize().mulSelf(dist)), pt2]);
      return;
    } // Parameterize points, and attempt to fit curve


    var uPrime = this.chordLengthParameterize(first, last),
        maxError = Math.max(this.error, this.error * this.error),
        split,
        parametersInOrder = true; // Try 4 iterations

    for (var i = 0; i <= 4; i++) {
      var curve = this.generateBezier(first, last, uPrime, tan1, tan2); //  Find max deviation of points to fitted curve

      var max = this.findMaxError(first, last, curve, uPrime);

      if (max.error < this.error && parametersInOrder) {
        this.addCurve(curve);
        return;
      }

      split = max.index; // If error not too large, try reparameterization and iteration

      if (max.error >= maxError) break;
      parametersInOrder = this.reparameterize(first, last, uPrime, curve);
      maxError = max.error;
    } // Fitting failed -- split at max error point and fit recursively


    var V1 = this.points[split - 1].sub(this.points[split]),
        V2 = this.points[split].sub(this.points[split + 1]),
        tanCenter = V1.add(V2).div(2).normalize();
    this.fitCubic(first, split, tan1, tanCenter);
    this.fitCubic(split, last, tanCenter.mul(-1), tan2);
  },
  addCurve: function addCurve(curve) {
    if (this.commands.length === 0) {
      this.commands.push(['M', curve[0].x, curve[0].y]);
    } else {
      var cmd = this.commands[this.commands.length - 1];
      cmd[5] = curve[0].x;
      cmd[6] = curve[0].y;
    }

    this.commands.push(['C', curve[1].x, curve[1].y, curve[2].x, curve[2].y, curve[3].x, curve[3].y]);
  },
  // Use least-squares method to find Bezier control points for region.
  generateBezier: function generateBezier(first, last, uPrime, tan1, tan2) {
    var epsilon =
    /*#=*/
    EPSILON,
        pt1 = this.points[first],
        pt2 = this.points[last],
        // Create the C and X matrices
    C = [[0, 0], [0, 0]],
        X = [0, 0];

    for (var i = 0, l = last - first + 1; i < l; i++) {
      var u = uPrime[i],
          t = 1 - u,
          b = 3 * u * t,
          b0 = t * t * t,
          b1 = b * t,
          b2 = b * u,
          b3 = u * u * u,
          a1 = tan1.normalize().mulSelf(b1),
          a2 = tan2.normalize().mulSelf(b2),
          tmp = this.points[first + i].sub(pt1.mul(b0 + b1)).sub(pt2.mul(b2 + b3));
      C[0][0] += a1.dot(a1);
      C[0][1] += a1.dot(a2); // C[1][0] += a1.dot(a2);

      C[1][0] = C[0][1];
      C[1][1] += a2.dot(a2);
      X[0] += a1.dot(tmp);
      X[1] += a2.dot(tmp);
    } // Compute the determinants of C and X


    var detC0C1 = C[0][0] * C[1][1] - C[1][0] * C[0][1],
        alpha1,
        alpha2;

    if (Math.abs(detC0C1) > epsilon) {
      // Kramer's rule
      var detC0X = C[0][0] * X[1] - C[1][0] * X[0],
          detXC1 = X[0] * C[1][1] - X[1] * C[0][1]; // Derive alpha values

      alpha1 = detXC1 / detC0C1;
      alpha2 = detC0X / detC0C1;
    } else {
      // Matrix is under-determined, try assuming alpha1 == alpha2
      var c0 = C[0][0] + C[0][1],
          c1 = C[1][0] + C[1][1];

      if (Math.abs(c0) > epsilon) {
        alpha1 = alpha2 = X[0] / c0;
      } else if (Math.abs(c1) > epsilon) {
        alpha1 = alpha2 = X[1] / c1;
      } else {
        // Handle below
        alpha1 = alpha2 = 0;
      }
    } // If alpha negative, use the Wu/Barsky heuristic (see text)
    // (if alpha is 0, you get coincident control points that lead to
    // divide by zero in any subsequent NewtonRaphsonRootFind() call.


    var segLength = pt2.sub(pt1).mag(),
        eps = epsilon * segLength,
        handle1,
        handle2;

    if (alpha1 < eps || alpha2 < eps) {
      // fall back on standard (probably inaccurate) formula,
      // and subdivide further if needed.
      alpha1 = alpha2 = segLength / 3;
    } else {
      // Check if the found control points are in the right order when
      // projected onto the line through pt1 and pt2.
      var line = pt2.sub(pt1); // Control points 1 and 2 are positioned an alpha distance out
      // on the tangent vectors, left and right, respectively

      handle1 = tan1.normalize().mulSelf(alpha1);
      handle2 = tan2.normalize().mulSelf(alpha2);

      if (handle1.dot(line) - handle2.dot(line) > segLength * segLength) {
        // Fall back to the Wu/Barsky heuristic above.
        alpha1 = alpha2 = segLength / 3;
        handle1 = handle2 = null; // Force recalculation
      }
    } // First and last control points of the Bezier curve are
    // positioned exactly at the first and last data points


    return [pt1, pt1.add(handle1 || tan1.normalize().mulSelf(alpha1)), pt2.add(handle2 || tan2.normalize().mulSelf(alpha2)), pt2];
  },
  // Given set of points and their parameterization, try to find
  // a better parameterization.
  reparameterize: function reparameterize(first, last, u, curve) {
    for (var i = first; i <= last; i++) {
      u[i - first] = this.findRoot(curve, this.points[i], u[i - first]);
    } // Detect if the new parameterization has reordered the points.
    // In that case, we would fit the points of the path in the wrong order.


    for (var i = 1, l = u.length; i < l; i++) {
      if (u[i] <= u[i - 1]) return false;
    }

    return true;
  },
  // Use Newton-Raphson iteration to find better root.
  findRoot: function findRoot(curve, point, u) {
    var curve1 = [],
        curve2 = []; // Generate control vertices for Q'

    for (var i = 0; i <= 2; i++) {
      curve1[i] = curve[i + 1].sub(curve[i]).mul(3);
    } // Generate control vertices for Q''


    for (var i = 0; i <= 1; i++) {
      curve2[i] = curve1[i + 1].sub(curve1[i]).mul(2);
    } // Compute Q(u), Q'(u) and Q''(u)


    var pt = this.evaluate(3, curve, u),
        pt1 = this.evaluate(2, curve1, u),
        pt2 = this.evaluate(1, curve2, u),
        diff = pt.sub(point),
        df = pt1.dot(pt1) + diff.dot(pt2); // Compute f(u) / f'(u)

    if (Math.abs(df) <
    /*#=*/
    TOLERANCE) return u; // u = u - f(u) / f'(u)

    return u - diff.dot(pt1) / df;
  },
  // Evaluate a bezier curve at a particular parameter value
  evaluate: function evaluate(degree, curve, t) {
    // Copy array
    var tmp = curve.slice(); // Triangle computation

    for (var i = 1; i <= degree; i++) {
      for (var j = 0; j <= degree - i; j++) {
        tmp[j] = tmp[j].mul(1 - t).add(tmp[j + 1].mul(t));
      }
    }

    return tmp[0];
  },
  // Assign parameter values to digitized points
  // using relative distances between points.
  chordLengthParameterize: function chordLengthParameterize(first, last) {
    var u = [0];

    for (var i = first + 1; i <= last; i++) {
      u[i - first] = u[i - first - 1] + this.points[i].sub(this.points[i - 1]).mag();
    }

    for (var i = 1, m = last - first; i <= m; i++) {
      u[i] /= u[m];
    }

    return u;
  },
  // Find the maximum squared distance of digitized points to fitted curve.
  findMaxError: function findMaxError(first, last, curve, u) {
    var index = Math.floor((last - first + 1) / 2),
        maxDist = 0;

    for (var i = first + 1; i < last; i++) {
      var P = this.evaluate(3, curve, u[i - first]);
      var v = P.sub(this.points[i]);
      var dist = v.x * v.x + v.y * v.y; // squared

      if (dist >= maxDist) {
        maxDist = dist;
        index = i;
      }
    }

    return {
      error: maxDist,
      index: index
    };
  }
};
module.exports = {
  simplify: function simplify() {
    this._commands = Fitter.fit(this);
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXHJhcGhhZWxcXGNvbXBvbmVudFxcb3B0aW9uYWxcXFIuc2ltcGxpZnkuanMiXSwibmFtZXMiOlsiRVBTSUxPTiIsIlRPTEVSQU5DRSIsIkZpdHRlciIsImZpdCIsInBhdGgiLCJlcnJvciIsImNvbW1hbmRzIiwicG9pbnRzIiwiX2NvbW1hbmRzIiwiZm9yRWFjaCIsImNtZCIsImMiLCJwdXNoIiwiY2MiLCJ2MiIsImxlbmd0aCIsImZpdEN1YmljIiwic3ViIiwibm9ybWFsaXplIiwiZmlyc3QiLCJsYXN0IiwidGFuMSIsInRhbjIiLCJwdDEiLCJwdDIiLCJkaXN0IiwibWFnIiwiYWRkQ3VydmUiLCJhZGQiLCJtdWxTZWxmIiwidVByaW1lIiwiY2hvcmRMZW5ndGhQYXJhbWV0ZXJpemUiLCJtYXhFcnJvciIsIk1hdGgiLCJtYXgiLCJzcGxpdCIsInBhcmFtZXRlcnNJbk9yZGVyIiwiaSIsImN1cnZlIiwiZ2VuZXJhdGVCZXppZXIiLCJmaW5kTWF4RXJyb3IiLCJpbmRleCIsInJlcGFyYW1ldGVyaXplIiwiVjEiLCJWMiIsInRhbkNlbnRlciIsImRpdiIsIm11bCIsIngiLCJ5IiwiZXBzaWxvbiIsIkMiLCJYIiwibCIsInUiLCJ0IiwiYiIsImIwIiwiYjEiLCJiMiIsImIzIiwiYTEiLCJhMiIsInRtcCIsImRvdCIsImRldEMwQzEiLCJhbHBoYTEiLCJhbHBoYTIiLCJhYnMiLCJkZXRDMFgiLCJkZXRYQzEiLCJjMCIsImMxIiwic2VnTGVuZ3RoIiwiZXBzIiwiaGFuZGxlMSIsImhhbmRsZTIiLCJsaW5lIiwiZmluZFJvb3QiLCJwb2ludCIsImN1cnZlMSIsImN1cnZlMiIsInB0IiwiZXZhbHVhdGUiLCJkaWZmIiwiZGYiLCJkZWdyZWUiLCJzbGljZSIsImoiLCJtIiwiZmxvb3IiLCJtYXhEaXN0IiwiUCIsInYiLCJtb2R1bGUiLCJleHBvcnRzIiwic2ltcGxpZnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSUEsT0FBTyxHQUFHLEtBQWQ7QUFDQSxJQUFJQyxTQUFTLEdBQUcsSUFBaEI7QUFFQSxJQUFJQyxNQUFNLEdBQUc7QUFDVEMsRUFBQUEsR0FBRyxFQUFFLGFBQVVDLElBQVYsRUFBZ0JDLEtBQWhCLEVBQXVCO0FBQ3hCLFNBQUtDLFFBQUwsR0FBZ0IsRUFBaEI7QUFDQSxTQUFLRCxLQUFMLEdBQWFBLEtBQUssSUFBSSxFQUF0QjtBQUVBLFFBQUlFLE1BQU0sR0FBRyxLQUFLQSxNQUFMLEdBQWMsRUFBM0I7O0FBQ0FILElBQUFBLElBQUksQ0FBQ0ksU0FBTCxDQUFlQyxPQUFmLENBQXdCLFVBQVVDLEdBQVYsRUFBZTtBQUNuQyxVQUFJQyxDQUFDLEdBQUdELEdBQUcsQ0FBQyxDQUFELENBQVg7O0FBRUEsVUFBSUMsQ0FBQyxLQUFLLEdBQVYsRUFBZTtBQUNYSixRQUFBQSxNQUFNLENBQUNLLElBQVAsQ0FBYUMsRUFBRSxDQUFDQyxFQUFILENBQU1KLEdBQUcsQ0FBQyxDQUFELENBQVQsRUFBY0EsR0FBRyxDQUFDLENBQUQsQ0FBakIsQ0FBYjtBQUNILE9BRkQsTUFHSyxJQUFHQyxDQUFDLEtBQUssR0FBVCxFQUFjO0FBQ2ZKLFFBQUFBLE1BQU0sQ0FBQ0ssSUFBUCxDQUFhQyxFQUFFLENBQUNDLEVBQUgsQ0FBTUosR0FBRyxDQUFDLENBQUQsQ0FBVCxFQUFjQSxHQUFHLENBQUMsQ0FBRCxDQUFqQixDQUFiO0FBQ0g7QUFDSixLQVREOztBQVlBLFFBQUlLLE1BQU0sR0FBR1IsTUFBTSxDQUFDUSxNQUFwQjs7QUFFQSxRQUFJQSxNQUFNLEdBQUcsQ0FBYixFQUFnQjtBQUNaLFdBQUtDLFFBQUwsQ0FBYyxDQUFkLEVBQWlCRCxNQUFNLEdBQUcsQ0FBMUIsRUFDSTtBQUNBUixNQUFBQSxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVVLEdBQVYsQ0FBY1YsTUFBTSxDQUFDLENBQUQsQ0FBcEIsRUFBeUJXLFNBQXpCLEVBRkosRUFHSTtBQUNBWCxNQUFBQSxNQUFNLENBQUNRLE1BQU0sR0FBRyxDQUFWLENBQU4sQ0FBbUJFLEdBQW5CLENBQXVCVixNQUFNLENBQUNRLE1BQU0sR0FBRyxDQUFWLENBQTdCLEVBQTJDRyxTQUEzQyxFQUpKO0FBS0g7O0FBRUQsV0FBTyxLQUFLWixRQUFaO0FBQ0gsR0E3QlE7QUErQlQ7QUFDQVUsRUFBQUEsUUFBUSxFQUFFLGtCQUFVRyxLQUFWLEVBQWlCQyxJQUFqQixFQUF1QkMsSUFBdkIsRUFBNkJDLElBQTdCLEVBQW1DO0FBQ3pDO0FBQ0EsUUFBSUYsSUFBSSxHQUFHRCxLQUFQLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCLFVBQUlJLEdBQUcsR0FBRyxLQUFLaEIsTUFBTCxDQUFZWSxLQUFaLENBQVY7QUFBQSxVQUNJSyxHQUFHLEdBQUcsS0FBS2pCLE1BQUwsQ0FBWWEsSUFBWixDQURWO0FBQUEsVUFFSUssSUFBSSxHQUFHRixHQUFHLENBQUNOLEdBQUosQ0FBUU8sR0FBUixFQUFhRSxHQUFiLEtBQXFCLENBRmhDO0FBR0EsV0FBS0MsUUFBTCxDQUFjLENBQUNKLEdBQUQsRUFBTUEsR0FBRyxDQUFDSyxHQUFKLENBQVFQLElBQUksQ0FBQ0gsU0FBTCxHQUFpQlcsT0FBakIsQ0FBeUJKLElBQXpCLENBQVIsQ0FBTixFQUNORCxHQUFHLENBQUNJLEdBQUosQ0FBUU4sSUFBSSxDQUFDSixTQUFMLEdBQWlCVyxPQUFqQixDQUF5QkosSUFBekIsQ0FBUixDQURNLEVBQ21DRCxHQURuQyxDQUFkO0FBRUE7QUFDSCxLQVR3QyxDQVV6Qzs7O0FBQ0EsUUFBSU0sTUFBTSxHQUFHLEtBQUtDLHVCQUFMLENBQTZCWixLQUE3QixFQUFvQ0MsSUFBcEMsQ0FBYjtBQUFBLFFBQ0lZLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBSzdCLEtBQWQsRUFBcUIsS0FBS0EsS0FBTCxHQUFhLEtBQUtBLEtBQXZDLENBRGY7QUFBQSxRQUVJOEIsS0FGSjtBQUFBLFFBR0lDLGlCQUFpQixHQUFHLElBSHhCLENBWHlDLENBZXpDOztBQUNBLFNBQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsSUFBSSxDQUFyQixFQUF3QkEsQ0FBQyxFQUF6QixFQUE2QjtBQUN6QixVQUFJQyxLQUFLLEdBQUcsS0FBS0MsY0FBTCxDQUFvQnBCLEtBQXBCLEVBQTJCQyxJQUEzQixFQUFpQ1UsTUFBakMsRUFBeUNULElBQXpDLEVBQStDQyxJQUEvQyxDQUFaLENBRHlCLENBRXpCOztBQUNBLFVBQUlZLEdBQUcsR0FBRyxLQUFLTSxZQUFMLENBQWtCckIsS0FBbEIsRUFBeUJDLElBQXpCLEVBQStCa0IsS0FBL0IsRUFBc0NSLE1BQXRDLENBQVY7O0FBQ0EsVUFBSUksR0FBRyxDQUFDN0IsS0FBSixHQUFZLEtBQUtBLEtBQWpCLElBQTBCK0IsaUJBQTlCLEVBQWlEO0FBQzdDLGFBQUtULFFBQUwsQ0FBY1csS0FBZDtBQUNBO0FBQ0g7O0FBQ0RILE1BQUFBLEtBQUssR0FBR0QsR0FBRyxDQUFDTyxLQUFaLENBUnlCLENBU3pCOztBQUNBLFVBQUlQLEdBQUcsQ0FBQzdCLEtBQUosSUFBYTJCLFFBQWpCLEVBQ0k7QUFDSkksTUFBQUEsaUJBQWlCLEdBQUcsS0FBS00sY0FBTCxDQUFvQnZCLEtBQXBCLEVBQTJCQyxJQUEzQixFQUFpQ1UsTUFBakMsRUFBeUNRLEtBQXpDLENBQXBCO0FBQ0FOLE1BQUFBLFFBQVEsR0FBR0UsR0FBRyxDQUFDN0IsS0FBZjtBQUNILEtBOUJ3QyxDQStCekM7OztBQUNBLFFBQUlzQyxFQUFFLEdBQUcsS0FBS3BDLE1BQUwsQ0FBWTRCLEtBQUssR0FBRyxDQUFwQixFQUF1QmxCLEdBQXZCLENBQTJCLEtBQUtWLE1BQUwsQ0FBWTRCLEtBQVosQ0FBM0IsQ0FBVDtBQUFBLFFBQ0lTLEVBQUUsR0FBRyxLQUFLckMsTUFBTCxDQUFZNEIsS0FBWixFQUFtQmxCLEdBQW5CLENBQXVCLEtBQUtWLE1BQUwsQ0FBWTRCLEtBQUssR0FBRyxDQUFwQixDQUF2QixDQURUO0FBQUEsUUFFSVUsU0FBUyxHQUFHRixFQUFFLENBQUNmLEdBQUgsQ0FBT2dCLEVBQVAsRUFBV0UsR0FBWCxDQUFlLENBQWYsRUFBa0I1QixTQUFsQixFQUZoQjtBQUdBLFNBQUtGLFFBQUwsQ0FBY0csS0FBZCxFQUFxQmdCLEtBQXJCLEVBQTRCZCxJQUE1QixFQUFrQ3dCLFNBQWxDO0FBQ0EsU0FBSzdCLFFBQUwsQ0FBY21CLEtBQWQsRUFBcUJmLElBQXJCLEVBQTJCeUIsU0FBUyxDQUFDRSxHQUFWLENBQWMsQ0FBQyxDQUFmLENBQTNCLEVBQThDekIsSUFBOUM7QUFDSCxHQXJFUTtBQXVFVEssRUFBQUEsUUFBUSxFQUFFLGtCQUFTVyxLQUFULEVBQWdCO0FBQ3RCLFFBQUksS0FBS2hDLFFBQUwsQ0FBY1MsTUFBZCxLQUF5QixDQUE3QixFQUFnQztBQUM1QixXQUFLVCxRQUFMLENBQWNNLElBQWQsQ0FBbUIsQ0FBQyxHQUFELEVBQU0wQixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNVLENBQWYsRUFBa0JWLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU1csQ0FBM0IsQ0FBbkI7QUFDSCxLQUZELE1BR0s7QUFDRCxVQUFJdkMsR0FBRyxHQUFHLEtBQUtKLFFBQUwsQ0FBYyxLQUFLQSxRQUFMLENBQWNTLE1BQWQsR0FBdUIsQ0FBckMsQ0FBVjtBQUNBTCxNQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVM0QixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNVLENBQWxCO0FBQ0F0QyxNQUFBQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVM0QixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNXLENBQWxCO0FBQ0g7O0FBRUQsU0FBSzNDLFFBQUwsQ0FBY00sSUFBZCxDQUFtQixDQUFDLEdBQUQsRUFBTTBCLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU1UsQ0FBZixFQUFrQlYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTVyxDQUEzQixFQUE4QlgsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTVSxDQUF2QyxFQUEwQ1YsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTVyxDQUFuRCxFQUFzRFgsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTVSxDQUEvRCxFQUFrRVYsS0FBSyxDQUFDLENBQUQsQ0FBTCxDQUFTVyxDQUEzRSxDQUFuQjtBQUNILEdBbEZRO0FBb0ZUO0FBQ0FWLEVBQUFBLGNBQWMsRUFBRSx3QkFBU3BCLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCVSxNQUF0QixFQUE4QlQsSUFBOUIsRUFBb0NDLElBQXBDLEVBQTBDO0FBQ3RELFFBQUk0QixPQUFPO0FBQUc7QUFBTWxELElBQUFBLE9BQXBCO0FBQUEsUUFDSXVCLEdBQUcsR0FBRyxLQUFLaEIsTUFBTCxDQUFZWSxLQUFaLENBRFY7QUFBQSxRQUVJSyxHQUFHLEdBQUcsS0FBS2pCLE1BQUwsQ0FBWWEsSUFBWixDQUZWO0FBQUEsUUFHSTtBQUNBK0IsSUFBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFELEVBQVMsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUFULENBSlI7QUFBQSxRQUtJQyxDQUFDLEdBQUcsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUxSOztBQU9BLFNBQUssSUFBSWYsQ0FBQyxHQUFHLENBQVIsRUFBV2dCLENBQUMsR0FBR2pDLElBQUksR0FBR0QsS0FBUCxHQUFlLENBQW5DLEVBQXNDa0IsQ0FBQyxHQUFHZ0IsQ0FBMUMsRUFBNkNoQixDQUFDLEVBQTlDLEVBQWtEO0FBQzlDLFVBQUlpQixDQUFDLEdBQUd4QixNQUFNLENBQUNPLENBQUQsQ0FBZDtBQUFBLFVBQ0lrQixDQUFDLEdBQUcsSUFBSUQsQ0FEWjtBQUFBLFVBRUlFLENBQUMsR0FBRyxJQUFJRixDQUFKLEdBQVFDLENBRmhCO0FBQUEsVUFHSUUsRUFBRSxHQUFHRixDQUFDLEdBQUdBLENBQUosR0FBUUEsQ0FIakI7QUFBQSxVQUlJRyxFQUFFLEdBQUdGLENBQUMsR0FBR0QsQ0FKYjtBQUFBLFVBS0lJLEVBQUUsR0FBR0gsQ0FBQyxHQUFHRixDQUxiO0FBQUEsVUFNSU0sRUFBRSxHQUFHTixDQUFDLEdBQUdBLENBQUosR0FBUUEsQ0FOakI7QUFBQSxVQU9JTyxFQUFFLEdBQUd4QyxJQUFJLENBQUNILFNBQUwsR0FBaUJXLE9BQWpCLENBQXlCNkIsRUFBekIsQ0FQVDtBQUFBLFVBUUlJLEVBQUUsR0FBR3hDLElBQUksQ0FBQ0osU0FBTCxHQUFpQlcsT0FBakIsQ0FBeUI4QixFQUF6QixDQVJUO0FBQUEsVUFTSUksR0FBRyxHQUFHLEtBQUt4RCxNQUFMLENBQVlZLEtBQUssR0FBR2tCLENBQXBCLEVBQ0RwQixHQURDLENBQ0dNLEdBQUcsQ0FBQ3dCLEdBQUosQ0FBUVUsRUFBRSxHQUFHQyxFQUFiLENBREgsRUFFRHpDLEdBRkMsQ0FFR08sR0FBRyxDQUFDdUIsR0FBSixDQUFRWSxFQUFFLEdBQUdDLEVBQWIsQ0FGSCxDQVRWO0FBWUFULE1BQUFBLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxDQUFMLEtBQVdVLEVBQUUsQ0FBQ0csR0FBSCxDQUFPSCxFQUFQLENBQVg7QUFDQVYsTUFBQUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLENBQUwsS0FBV1UsRUFBRSxDQUFDRyxHQUFILENBQU9GLEVBQVAsQ0FBWCxDQWQ4QyxDQWU5Qzs7QUFDQVgsTUFBQUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLENBQUwsSUFBVUEsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLENBQUwsQ0FBVjtBQUNBQSxNQUFBQSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssQ0FBTCxLQUFXVyxFQUFFLENBQUNFLEdBQUgsQ0FBT0YsRUFBUCxDQUFYO0FBQ0FWLE1BQUFBLENBQUMsQ0FBQyxDQUFELENBQUQsSUFBUVMsRUFBRSxDQUFDRyxHQUFILENBQU9ELEdBQVAsQ0FBUjtBQUNBWCxNQUFBQSxDQUFDLENBQUMsQ0FBRCxDQUFELElBQVFVLEVBQUUsQ0FBQ0UsR0FBSCxDQUFPRCxHQUFQLENBQVI7QUFDSCxLQTVCcUQsQ0E4QnREOzs7QUFDQSxRQUFJRSxPQUFPLEdBQUdkLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxDQUFMLElBQVVBLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxDQUFMLENBQVYsR0FBb0JBLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxDQUFMLElBQVVBLENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxDQUFMLENBQTVDO0FBQUEsUUFDSWUsTUFESjtBQUFBLFFBQ1lDLE1BRFo7O0FBRUEsUUFBSWxDLElBQUksQ0FBQ21DLEdBQUwsQ0FBU0gsT0FBVCxJQUFvQmYsT0FBeEIsRUFBaUM7QUFDN0I7QUFDQSxVQUFJbUIsTUFBTSxHQUFJbEIsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLENBQUwsSUFBVUMsQ0FBQyxDQUFDLENBQUQsQ0FBWCxHQUFvQkQsQ0FBQyxDQUFDLENBQUQsQ0FBRCxDQUFLLENBQUwsSUFBVUMsQ0FBQyxDQUFDLENBQUQsQ0FBN0M7QUFBQSxVQUNJa0IsTUFBTSxHQUFJbEIsQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFVRCxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssQ0FBTCxDQUFWLEdBQW9CQyxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQVVELENBQUMsQ0FBQyxDQUFELENBQUQsQ0FBSyxDQUFMLENBRDVDLENBRjZCLENBSTdCOztBQUNBZSxNQUFBQSxNQUFNLEdBQUdJLE1BQU0sR0FBR0wsT0FBbEI7QUFDQUUsTUFBQUEsTUFBTSxHQUFHRSxNQUFNLEdBQUdKLE9BQWxCO0FBQ0gsS0FQRCxNQU9PO0FBQ0g7QUFDQSxVQUFJTSxFQUFFLEdBQUdwQixDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssQ0FBTCxJQUFVQSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssQ0FBTCxDQUFuQjtBQUFBLFVBQ0lxQixFQUFFLEdBQUdyQixDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssQ0FBTCxJQUFVQSxDQUFDLENBQUMsQ0FBRCxDQUFELENBQUssQ0FBTCxDQURuQjs7QUFFQSxVQUFJbEIsSUFBSSxDQUFDbUMsR0FBTCxDQUFTRyxFQUFULElBQWVyQixPQUFuQixFQUE0QjtBQUN4QmdCLFFBQUFBLE1BQU0sR0FBR0MsTUFBTSxHQUFHZixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9tQixFQUF6QjtBQUNILE9BRkQsTUFFTyxJQUFJdEMsSUFBSSxDQUFDbUMsR0FBTCxDQUFTSSxFQUFULElBQWV0QixPQUFuQixFQUE0QjtBQUMvQmdCLFFBQUFBLE1BQU0sR0FBR0MsTUFBTSxHQUFHZixDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9vQixFQUF6QjtBQUNILE9BRk0sTUFFQTtBQUNIO0FBQ0FOLFFBQUFBLE1BQU0sR0FBR0MsTUFBTSxHQUFHLENBQWxCO0FBQ0g7QUFDSixLQXBEcUQsQ0FzRHREO0FBQ0E7QUFDQTs7O0FBQ0EsUUFBSU0sU0FBUyxHQUFHakQsR0FBRyxDQUFDUCxHQUFKLENBQVFNLEdBQVIsRUFBYUcsR0FBYixFQUFoQjtBQUFBLFFBQ0lnRCxHQUFHLEdBQUd4QixPQUFPLEdBQUd1QixTQURwQjtBQUFBLFFBRUlFLE9BRko7QUFBQSxRQUdJQyxPQUhKOztBQUlBLFFBQUlWLE1BQU0sR0FBR1EsR0FBVCxJQUFnQlAsTUFBTSxHQUFHTyxHQUE3QixFQUFrQztBQUM5QjtBQUNBO0FBQ0FSLE1BQUFBLE1BQU0sR0FBR0MsTUFBTSxHQUFHTSxTQUFTLEdBQUcsQ0FBOUI7QUFDSCxLQUpELE1BSU87QUFDSDtBQUNBO0FBQ0EsVUFBSUksSUFBSSxHQUFHckQsR0FBRyxDQUFDUCxHQUFKLENBQVFNLEdBQVIsQ0FBWCxDQUhHLENBSUg7QUFDQTs7QUFDQW9ELE1BQUFBLE9BQU8sR0FBR3RELElBQUksQ0FBQ0gsU0FBTCxHQUFpQlcsT0FBakIsQ0FBeUJxQyxNQUF6QixDQUFWO0FBQ0FVLE1BQUFBLE9BQU8sR0FBR3RELElBQUksQ0FBQ0osU0FBTCxHQUFpQlcsT0FBakIsQ0FBeUJzQyxNQUF6QixDQUFWOztBQUNBLFVBQUlRLE9BQU8sQ0FBQ1gsR0FBUixDQUFZYSxJQUFaLElBQW9CRCxPQUFPLENBQUNaLEdBQVIsQ0FBWWEsSUFBWixDQUFwQixHQUF3Q0osU0FBUyxHQUFHQSxTQUF4RCxFQUFtRTtBQUMvRDtBQUNBUCxRQUFBQSxNQUFNLEdBQUdDLE1BQU0sR0FBR00sU0FBUyxHQUFHLENBQTlCO0FBQ0FFLFFBQUFBLE9BQU8sR0FBR0MsT0FBTyxHQUFHLElBQXBCLENBSCtELENBR3JDO0FBQzdCO0FBQ0osS0E5RXFELENBZ0Z0RDtBQUNBOzs7QUFDQSxXQUFPLENBQUNyRCxHQUFELEVBQU1BLEdBQUcsQ0FBQ0ssR0FBSixDQUFRK0MsT0FBTyxJQUFJdEQsSUFBSSxDQUFDSCxTQUFMLEdBQWlCVyxPQUFqQixDQUF5QnFDLE1BQXpCLENBQW5CLENBQU4sRUFDQzFDLEdBQUcsQ0FBQ0ksR0FBSixDQUFRZ0QsT0FBTyxJQUFJdEQsSUFBSSxDQUFDSixTQUFMLEdBQWlCVyxPQUFqQixDQUF5QnNDLE1BQXpCLENBQW5CLENBREQsRUFDdUQzQyxHQUR2RCxDQUFQO0FBRUgsR0F6S1E7QUEyS1Q7QUFDQTtBQUNBa0IsRUFBQUEsY0FBYyxFQUFFLHdCQUFTdkIsS0FBVCxFQUFnQkMsSUFBaEIsRUFBc0JrQyxDQUF0QixFQUF5QmhCLEtBQXpCLEVBQWdDO0FBQzVDLFNBQUssSUFBSUQsQ0FBQyxHQUFHbEIsS0FBYixFQUFvQmtCLENBQUMsSUFBSWpCLElBQXpCLEVBQStCaUIsQ0FBQyxFQUFoQyxFQUFvQztBQUNoQ2lCLE1BQUFBLENBQUMsQ0FBQ2pCLENBQUMsR0FBR2xCLEtBQUwsQ0FBRCxHQUFlLEtBQUsyRCxRQUFMLENBQWN4QyxLQUFkLEVBQXFCLEtBQUsvQixNQUFMLENBQVk4QixDQUFaLENBQXJCLEVBQXFDaUIsQ0FBQyxDQUFDakIsQ0FBQyxHQUFHbEIsS0FBTCxDQUF0QyxDQUFmO0FBQ0gsS0FIMkMsQ0FJNUM7QUFDQTs7O0FBQ0EsU0FBSyxJQUFJa0IsQ0FBQyxHQUFHLENBQVIsRUFBV2dCLENBQUMsR0FBR0MsQ0FBQyxDQUFDdkMsTUFBdEIsRUFBOEJzQixDQUFDLEdBQUdnQixDQUFsQyxFQUFxQ2hCLENBQUMsRUFBdEMsRUFBMEM7QUFDdEMsVUFBSWlCLENBQUMsQ0FBQ2pCLENBQUQsQ0FBRCxJQUFRaUIsQ0FBQyxDQUFDakIsQ0FBQyxHQUFHLENBQUwsQ0FBYixFQUNJLE9BQU8sS0FBUDtBQUNQOztBQUNELFdBQU8sSUFBUDtBQUNILEdBeExRO0FBMExUO0FBQ0F5QyxFQUFBQSxRQUFRLEVBQUUsa0JBQVN4QyxLQUFULEVBQWdCeUMsS0FBaEIsRUFBdUJ6QixDQUF2QixFQUEwQjtBQUNoQyxRQUFJMEIsTUFBTSxHQUFHLEVBQWI7QUFBQSxRQUNJQyxNQUFNLEdBQUcsRUFEYixDQURnQyxDQUdoQzs7QUFDQSxTQUFLLElBQUk1QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJLENBQXJCLEVBQXdCQSxDQUFDLEVBQXpCLEVBQTZCO0FBQ3pCMkMsTUFBQUEsTUFBTSxDQUFDM0MsQ0FBRCxDQUFOLEdBQVlDLEtBQUssQ0FBQ0QsQ0FBQyxHQUFHLENBQUwsQ0FBTCxDQUFhcEIsR0FBYixDQUFpQnFCLEtBQUssQ0FBQ0QsQ0FBRCxDQUF0QixFQUEyQlUsR0FBM0IsQ0FBK0IsQ0FBL0IsQ0FBWjtBQUNILEtBTitCLENBT2hDOzs7QUFDQSxTQUFLLElBQUlWLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksQ0FBckIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDekI0QyxNQUFBQSxNQUFNLENBQUM1QyxDQUFELENBQU4sR0FBWTJDLE1BQU0sQ0FBQzNDLENBQUMsR0FBRyxDQUFMLENBQU4sQ0FBY3BCLEdBQWQsQ0FBa0IrRCxNQUFNLENBQUMzQyxDQUFELENBQXhCLEVBQTZCVSxHQUE3QixDQUFpQyxDQUFqQyxDQUFaO0FBQ0gsS0FWK0IsQ0FXaEM7OztBQUNBLFFBQUltQyxFQUFFLEdBQUcsS0FBS0MsUUFBTCxDQUFjLENBQWQsRUFBaUI3QyxLQUFqQixFQUF3QmdCLENBQXhCLENBQVQ7QUFBQSxRQUNJL0IsR0FBRyxHQUFHLEtBQUs0RCxRQUFMLENBQWMsQ0FBZCxFQUFpQkgsTUFBakIsRUFBeUIxQixDQUF6QixDQURWO0FBQUEsUUFFSTlCLEdBQUcsR0FBRyxLQUFLMkQsUUFBTCxDQUFjLENBQWQsRUFBaUJGLE1BQWpCLEVBQXlCM0IsQ0FBekIsQ0FGVjtBQUFBLFFBR0k4QixJQUFJLEdBQUdGLEVBQUUsQ0FBQ2pFLEdBQUgsQ0FBTzhELEtBQVAsQ0FIWDtBQUFBLFFBSUlNLEVBQUUsR0FBRzlELEdBQUcsQ0FBQ3lDLEdBQUosQ0FBUXpDLEdBQVIsSUFBZTZELElBQUksQ0FBQ3BCLEdBQUwsQ0FBU3hDLEdBQVQsQ0FKeEIsQ0FaZ0MsQ0FpQmhDOztBQUNBLFFBQUlTLElBQUksQ0FBQ21DLEdBQUwsQ0FBU2lCLEVBQVQ7QUFBZTtBQUFNcEYsSUFBQUEsU0FBekIsRUFDSSxPQUFPcUQsQ0FBUCxDQW5CNEIsQ0FvQmhDOztBQUNBLFdBQU9BLENBQUMsR0FBRzhCLElBQUksQ0FBQ3BCLEdBQUwsQ0FBU3pDLEdBQVQsSUFBZ0I4RCxFQUEzQjtBQUNILEdBak5RO0FBbU5UO0FBQ0FGLEVBQUFBLFFBQVEsRUFBRSxrQkFBU0csTUFBVCxFQUFpQmhELEtBQWpCLEVBQXdCaUIsQ0FBeEIsRUFBMkI7QUFDakM7QUFDQSxRQUFJUSxHQUFHLEdBQUd6QixLQUFLLENBQUNpRCxLQUFOLEVBQVYsQ0FGaUMsQ0FHakM7O0FBQ0EsU0FBSyxJQUFJbEQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsSUFBSWlELE1BQXJCLEVBQTZCakQsQ0FBQyxFQUE5QixFQUFrQztBQUM5QixXQUFLLElBQUltRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxJQUFJRixNQUFNLEdBQUdqRCxDQUE5QixFQUFpQ21ELENBQUMsRUFBbEMsRUFBc0M7QUFDbEN6QixRQUFBQSxHQUFHLENBQUN5QixDQUFELENBQUgsR0FBU3pCLEdBQUcsQ0FBQ3lCLENBQUQsQ0FBSCxDQUFPekMsR0FBUCxDQUFXLElBQUlRLENBQWYsRUFBa0IzQixHQUFsQixDQUFzQm1DLEdBQUcsQ0FBQ3lCLENBQUMsR0FBRyxDQUFMLENBQUgsQ0FBV3pDLEdBQVgsQ0FBZVEsQ0FBZixDQUF0QixDQUFUO0FBQ0g7QUFDSjs7QUFDRCxXQUFPUSxHQUFHLENBQUMsQ0FBRCxDQUFWO0FBQ0gsR0E5TlE7QUFnT1Q7QUFDQTtBQUNBaEMsRUFBQUEsdUJBQXVCLEVBQUUsaUNBQVNaLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCO0FBQzNDLFFBQUlrQyxDQUFDLEdBQUcsQ0FBQyxDQUFELENBQVI7O0FBQ0EsU0FBSyxJQUFJakIsQ0FBQyxHQUFHbEIsS0FBSyxHQUFHLENBQXJCLEVBQXdCa0IsQ0FBQyxJQUFJakIsSUFBN0IsRUFBbUNpQixDQUFDLEVBQXBDLEVBQXdDO0FBQ3BDaUIsTUFBQUEsQ0FBQyxDQUFDakIsQ0FBQyxHQUFHbEIsS0FBTCxDQUFELEdBQWVtQyxDQUFDLENBQUNqQixDQUFDLEdBQUdsQixLQUFKLEdBQVksQ0FBYixDQUFELEdBQ0wsS0FBS1osTUFBTCxDQUFZOEIsQ0FBWixFQUFlcEIsR0FBZixDQUFtQixLQUFLVixNQUFMLENBQVk4QixDQUFDLEdBQUcsQ0FBaEIsQ0FBbkIsRUFBdUNYLEdBQXZDLEVBRFY7QUFFSDs7QUFDRCxTQUFLLElBQUlXLENBQUMsR0FBRyxDQUFSLEVBQVdvRCxDQUFDLEdBQUdyRSxJQUFJLEdBQUdELEtBQTNCLEVBQWtDa0IsQ0FBQyxJQUFJb0QsQ0FBdkMsRUFBMENwRCxDQUFDLEVBQTNDLEVBQStDO0FBQzNDaUIsTUFBQUEsQ0FBQyxDQUFDakIsQ0FBRCxDQUFELElBQVFpQixDQUFDLENBQUNtQyxDQUFELENBQVQ7QUFDSDs7QUFDRCxXQUFPbkMsQ0FBUDtBQUNILEdBNU9RO0FBOE9UO0FBQ0FkLEVBQUFBLFlBQVksRUFBRSxzQkFBU3JCLEtBQVQsRUFBZ0JDLElBQWhCLEVBQXNCa0IsS0FBdEIsRUFBNkJnQixDQUE3QixFQUFnQztBQUMxQyxRQUFJYixLQUFLLEdBQUdSLElBQUksQ0FBQ3lELEtBQUwsQ0FBVyxDQUFDdEUsSUFBSSxHQUFHRCxLQUFQLEdBQWUsQ0FBaEIsSUFBcUIsQ0FBaEMsQ0FBWjtBQUFBLFFBQ0l3RSxPQUFPLEdBQUcsQ0FEZDs7QUFFQSxTQUFLLElBQUl0RCxDQUFDLEdBQUdsQixLQUFLLEdBQUcsQ0FBckIsRUFBd0JrQixDQUFDLEdBQUdqQixJQUE1QixFQUFrQ2lCLENBQUMsRUFBbkMsRUFBdUM7QUFDbkMsVUFBSXVELENBQUMsR0FBRyxLQUFLVCxRQUFMLENBQWMsQ0FBZCxFQUFpQjdDLEtBQWpCLEVBQXdCZ0IsQ0FBQyxDQUFDakIsQ0FBQyxHQUFHbEIsS0FBTCxDQUF6QixDQUFSO0FBQ0EsVUFBSTBFLENBQUMsR0FBR0QsQ0FBQyxDQUFDM0UsR0FBRixDQUFNLEtBQUtWLE1BQUwsQ0FBWThCLENBQVosQ0FBTixDQUFSO0FBQ0EsVUFBSVosSUFBSSxHQUFHb0UsQ0FBQyxDQUFDN0MsQ0FBRixHQUFNNkMsQ0FBQyxDQUFDN0MsQ0FBUixHQUFZNkMsQ0FBQyxDQUFDNUMsQ0FBRixHQUFNNEMsQ0FBQyxDQUFDNUMsQ0FBL0IsQ0FIbUMsQ0FHRDs7QUFDbEMsVUFBSXhCLElBQUksSUFBSWtFLE9BQVosRUFBcUI7QUFDakJBLFFBQUFBLE9BQU8sR0FBR2xFLElBQVY7QUFDQWdCLFFBQUFBLEtBQUssR0FBR0osQ0FBUjtBQUNIO0FBQ0o7O0FBQ0QsV0FBTztBQUNIaEMsTUFBQUEsS0FBSyxFQUFFc0YsT0FESjtBQUVIbEQsTUFBQUEsS0FBSyxFQUFFQTtBQUZKLEtBQVA7QUFJSDtBQS9QUSxDQUFiO0FBa1FBcUQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JDLEVBQUFBLFFBQVEsRUFBRSxvQkFBWTtBQUNsQixTQUFLeEYsU0FBTCxHQUFpQk4sTUFBTSxDQUFDQyxHQUFQLENBQVcsSUFBWCxDQUFqQjtBQUNIO0FBSFksQ0FBakIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBFUFNJTE9OID0gMWUtMTI7XG52YXIgVE9MRVJBTkNFID0gMWUtNjtcblxudmFyIEZpdHRlciA9IHtcbiAgICBmaXQ6IGZ1bmN0aW9uIChwYXRoLCBlcnJvcikge1xuICAgICAgICB0aGlzLmNvbW1hbmRzID0gW107XG4gICAgICAgIHRoaXMuZXJyb3IgPSBlcnJvciB8fCAxMDtcblxuICAgICAgICB2YXIgcG9pbnRzID0gdGhpcy5wb2ludHMgPSBbXTtcbiAgICAgICAgcGF0aC5fY29tbWFuZHMuZm9yRWFjaCggZnVuY3Rpb24gKGNtZCkge1xuICAgICAgICAgICAgdmFyIGMgPSBjbWRbMF07XG5cbiAgICAgICAgICAgIGlmIChjID09PSAnTScpIHtcbiAgICAgICAgICAgICAgICBwb2ludHMucHVzaCggY2MudjIoY21kWzFdLCBjbWRbMl0pICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmKGMgPT09ICdDJykge1xuICAgICAgICAgICAgICAgIHBvaW50cy5wdXNoKCBjYy52MihjbWRbNV0sIGNtZFs2XSkgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cblxuICAgICAgICB2YXIgbGVuZ3RoID0gcG9pbnRzLmxlbmd0aDtcblxuICAgICAgICBpZiAobGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgdGhpcy5maXRDdWJpYygwLCBsZW5ndGggLSAxLFxuICAgICAgICAgICAgICAgIC8vIExlZnQgVGFuZ2VudFxuICAgICAgICAgICAgICAgIHBvaW50c1sxXS5zdWIocG9pbnRzWzBdKS5ub3JtYWxpemUoKSxcbiAgICAgICAgICAgICAgICAvLyBSaWdodCBUYW5nZW50XG4gICAgICAgICAgICAgICAgcG9pbnRzW2xlbmd0aCAtIDJdLnN1Yihwb2ludHNbbGVuZ3RoIC0gMV0pLm5vcm1hbGl6ZSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbW1hbmRzO1xuICAgIH0sXG5cbiAgICAvLyBGaXQgYSBCZXppZXIgY3VydmUgdG8gYSAoc3ViKXNldCBvZiBkaWdpdGl6ZWQgcG9pbnRzXG4gICAgZml0Q3ViaWM6IGZ1bmN0aW9uIChmaXJzdCwgbGFzdCwgdGFuMSwgdGFuMikge1xuICAgICAgICAvLyAgVXNlIGhldXJpc3RpYyBpZiByZWdpb24gb25seSBoYXMgdHdvIHBvaW50cyBpbiBpdFxuICAgICAgICBpZiAobGFzdCAtIGZpcnN0ID09PSAxKSB7XG4gICAgICAgICAgICB2YXIgcHQxID0gdGhpcy5wb2ludHNbZmlyc3RdLFxuICAgICAgICAgICAgICAgIHB0MiA9IHRoaXMucG9pbnRzW2xhc3RdLFxuICAgICAgICAgICAgICAgIGRpc3QgPSBwdDEuc3ViKHB0MikubWFnKCkgLyAzO1xuICAgICAgICAgICAgdGhpcy5hZGRDdXJ2ZShbcHQxLCBwdDEuYWRkKHRhbjEubm9ybWFsaXplKCkubXVsU2VsZihkaXN0KSksXG4gICAgICAgICAgICAgICAgICAgIHB0Mi5hZGQodGFuMi5ub3JtYWxpemUoKS5tdWxTZWxmKGRpc3QpKSwgcHQyXSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gUGFyYW1ldGVyaXplIHBvaW50cywgYW5kIGF0dGVtcHQgdG8gZml0IGN1cnZlXG4gICAgICAgIHZhciB1UHJpbWUgPSB0aGlzLmNob3JkTGVuZ3RoUGFyYW1ldGVyaXplKGZpcnN0LCBsYXN0KSxcbiAgICAgICAgICAgIG1heEVycm9yID0gTWF0aC5tYXgodGhpcy5lcnJvciwgdGhpcy5lcnJvciAqIHRoaXMuZXJyb3IpLFxuICAgICAgICAgICAgc3BsaXQsXG4gICAgICAgICAgICBwYXJhbWV0ZXJzSW5PcmRlciA9IHRydWU7XG4gICAgICAgIC8vIFRyeSA0IGl0ZXJhdGlvbnNcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gNDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY3VydmUgPSB0aGlzLmdlbmVyYXRlQmV6aWVyKGZpcnN0LCBsYXN0LCB1UHJpbWUsIHRhbjEsIHRhbjIpO1xuICAgICAgICAgICAgLy8gIEZpbmQgbWF4IGRldmlhdGlvbiBvZiBwb2ludHMgdG8gZml0dGVkIGN1cnZlXG4gICAgICAgICAgICB2YXIgbWF4ID0gdGhpcy5maW5kTWF4RXJyb3IoZmlyc3QsIGxhc3QsIGN1cnZlLCB1UHJpbWUpO1xuICAgICAgICAgICAgaWYgKG1heC5lcnJvciA8IHRoaXMuZXJyb3IgJiYgcGFyYW1ldGVyc0luT3JkZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEN1cnZlKGN1cnZlKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGxpdCA9IG1heC5pbmRleDtcbiAgICAgICAgICAgIC8vIElmIGVycm9yIG5vdCB0b28gbGFyZ2UsIHRyeSByZXBhcmFtZXRlcml6YXRpb24gYW5kIGl0ZXJhdGlvblxuICAgICAgICAgICAgaWYgKG1heC5lcnJvciA+PSBtYXhFcnJvcilcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIHBhcmFtZXRlcnNJbk9yZGVyID0gdGhpcy5yZXBhcmFtZXRlcml6ZShmaXJzdCwgbGFzdCwgdVByaW1lLCBjdXJ2ZSk7XG4gICAgICAgICAgICBtYXhFcnJvciA9IG1heC5lcnJvcjtcbiAgICAgICAgfVxuICAgICAgICAvLyBGaXR0aW5nIGZhaWxlZCAtLSBzcGxpdCBhdCBtYXggZXJyb3IgcG9pbnQgYW5kIGZpdCByZWN1cnNpdmVseVxuICAgICAgICB2YXIgVjEgPSB0aGlzLnBvaW50c1tzcGxpdCAtIDFdLnN1Yih0aGlzLnBvaW50c1tzcGxpdF0pLFxuICAgICAgICAgICAgVjIgPSB0aGlzLnBvaW50c1tzcGxpdF0uc3ViKHRoaXMucG9pbnRzW3NwbGl0ICsgMV0pLFxuICAgICAgICAgICAgdGFuQ2VudGVyID0gVjEuYWRkKFYyKS5kaXYoMikubm9ybWFsaXplKCk7XG4gICAgICAgIHRoaXMuZml0Q3ViaWMoZmlyc3QsIHNwbGl0LCB0YW4xLCB0YW5DZW50ZXIpO1xuICAgICAgICB0aGlzLmZpdEN1YmljKHNwbGl0LCBsYXN0LCB0YW5DZW50ZXIubXVsKC0xKSwgdGFuMik7XG4gICAgfSxcblxuICAgIGFkZEN1cnZlOiBmdW5jdGlvbihjdXJ2ZSkge1xuICAgICAgICBpZiAodGhpcy5jb21tYW5kcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHRoaXMuY29tbWFuZHMucHVzaChbJ00nLCBjdXJ2ZVswXS54LCBjdXJ2ZVswXS55XSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YXIgY21kID0gdGhpcy5jb21tYW5kc1t0aGlzLmNvbW1hbmRzLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgY21kWzVdID0gY3VydmVbMF0ueDtcbiAgICAgICAgICAgIGNtZFs2XSA9IGN1cnZlWzBdLnk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLmNvbW1hbmRzLnB1c2goWydDJywgY3VydmVbMV0ueCwgY3VydmVbMV0ueSwgY3VydmVbMl0ueCwgY3VydmVbMl0ueSwgY3VydmVbM10ueCwgY3VydmVbM10ueV0pO1xuICAgIH0sXG5cbiAgICAvLyBVc2UgbGVhc3Qtc3F1YXJlcyBtZXRob2QgdG8gZmluZCBCZXppZXIgY29udHJvbCBwb2ludHMgZm9yIHJlZ2lvbi5cbiAgICBnZW5lcmF0ZUJlemllcjogZnVuY3Rpb24oZmlyc3QsIGxhc3QsIHVQcmltZSwgdGFuMSwgdGFuMikge1xuICAgICAgICB2YXIgZXBzaWxvbiA9IC8qIz0qL0VQU0lMT04sXG4gICAgICAgICAgICBwdDEgPSB0aGlzLnBvaW50c1tmaXJzdF0sXG4gICAgICAgICAgICBwdDIgPSB0aGlzLnBvaW50c1tsYXN0XSxcbiAgICAgICAgICAgIC8vIENyZWF0ZSB0aGUgQyBhbmQgWCBtYXRyaWNlc1xuICAgICAgICAgICAgQyA9IFtbMCwgMF0sIFswLCAwXV0sXG4gICAgICAgICAgICBYID0gWzAsIDBdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbGFzdCAtIGZpcnN0ICsgMTsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIHUgPSB1UHJpbWVbaV0sXG4gICAgICAgICAgICAgICAgdCA9IDEgLSB1LFxuICAgICAgICAgICAgICAgIGIgPSAzICogdSAqIHQsXG4gICAgICAgICAgICAgICAgYjAgPSB0ICogdCAqIHQsXG4gICAgICAgICAgICAgICAgYjEgPSBiICogdCxcbiAgICAgICAgICAgICAgICBiMiA9IGIgKiB1LFxuICAgICAgICAgICAgICAgIGIzID0gdSAqIHUgKiB1LFxuICAgICAgICAgICAgICAgIGExID0gdGFuMS5ub3JtYWxpemUoKS5tdWxTZWxmKGIxKSxcbiAgICAgICAgICAgICAgICBhMiA9IHRhbjIubm9ybWFsaXplKCkubXVsU2VsZihiMiksXG4gICAgICAgICAgICAgICAgdG1wID0gdGhpcy5wb2ludHNbZmlyc3QgKyBpXVxuICAgICAgICAgICAgICAgICAgICAuc3ViKHB0MS5tdWwoYjAgKyBiMSkpXG4gICAgICAgICAgICAgICAgICAgIC5zdWIocHQyLm11bChiMiArIGIzKSk7XG4gICAgICAgICAgICBDWzBdWzBdICs9IGExLmRvdChhMSk7XG4gICAgICAgICAgICBDWzBdWzFdICs9IGExLmRvdChhMik7XG4gICAgICAgICAgICAvLyBDWzFdWzBdICs9IGExLmRvdChhMik7XG4gICAgICAgICAgICBDWzFdWzBdID0gQ1swXVsxXTtcbiAgICAgICAgICAgIENbMV1bMV0gKz0gYTIuZG90KGEyKTtcbiAgICAgICAgICAgIFhbMF0gKz0gYTEuZG90KHRtcCk7XG4gICAgICAgICAgICBYWzFdICs9IGEyLmRvdCh0bXApO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ29tcHV0ZSB0aGUgZGV0ZXJtaW5hbnRzIG9mIEMgYW5kIFhcbiAgICAgICAgdmFyIGRldEMwQzEgPSBDWzBdWzBdICogQ1sxXVsxXSAtIENbMV1bMF0gKiBDWzBdWzFdLFxuICAgICAgICAgICAgYWxwaGExLCBhbHBoYTI7XG4gICAgICAgIGlmIChNYXRoLmFicyhkZXRDMEMxKSA+IGVwc2lsb24pIHtcbiAgICAgICAgICAgIC8vIEtyYW1lcidzIHJ1bGVcbiAgICAgICAgICAgIHZhciBkZXRDMFggID0gQ1swXVswXSAqIFhbMV0gICAgLSBDWzFdWzBdICogWFswXSxcbiAgICAgICAgICAgICAgICBkZXRYQzEgID0gWFswXSAgICAqIENbMV1bMV0gLSBYWzFdICAgICogQ1swXVsxXTtcbiAgICAgICAgICAgIC8vIERlcml2ZSBhbHBoYSB2YWx1ZXNcbiAgICAgICAgICAgIGFscGhhMSA9IGRldFhDMSAvIGRldEMwQzE7XG4gICAgICAgICAgICBhbHBoYTIgPSBkZXRDMFggLyBkZXRDMEMxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gTWF0cml4IGlzIHVuZGVyLWRldGVybWluZWQsIHRyeSBhc3N1bWluZyBhbHBoYTEgPT0gYWxwaGEyXG4gICAgICAgICAgICB2YXIgYzAgPSBDWzBdWzBdICsgQ1swXVsxXSxcbiAgICAgICAgICAgICAgICBjMSA9IENbMV1bMF0gKyBDWzFdWzFdO1xuICAgICAgICAgICAgaWYgKE1hdGguYWJzKGMwKSA+IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICBhbHBoYTEgPSBhbHBoYTIgPSBYWzBdIC8gYzA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKE1hdGguYWJzKGMxKSA+IGVwc2lsb24pIHtcbiAgICAgICAgICAgICAgICBhbHBoYTEgPSBhbHBoYTIgPSBYWzFdIC8gYzE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSBiZWxvd1xuICAgICAgICAgICAgICAgIGFscGhhMSA9IGFscGhhMiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBJZiBhbHBoYSBuZWdhdGl2ZSwgdXNlIHRoZSBXdS9CYXJza3kgaGV1cmlzdGljIChzZWUgdGV4dClcbiAgICAgICAgLy8gKGlmIGFscGhhIGlzIDAsIHlvdSBnZXQgY29pbmNpZGVudCBjb250cm9sIHBvaW50cyB0aGF0IGxlYWQgdG9cbiAgICAgICAgLy8gZGl2aWRlIGJ5IHplcm8gaW4gYW55IHN1YnNlcXVlbnQgTmV3dG9uUmFwaHNvblJvb3RGaW5kKCkgY2FsbC5cbiAgICAgICAgdmFyIHNlZ0xlbmd0aCA9IHB0Mi5zdWIocHQxKS5tYWcoKSxcbiAgICAgICAgICAgIGVwcyA9IGVwc2lsb24gKiBzZWdMZW5ndGgsXG4gICAgICAgICAgICBoYW5kbGUxLFxuICAgICAgICAgICAgaGFuZGxlMjtcbiAgICAgICAgaWYgKGFscGhhMSA8IGVwcyB8fCBhbHBoYTIgPCBlcHMpIHtcbiAgICAgICAgICAgIC8vIGZhbGwgYmFjayBvbiBzdGFuZGFyZCAocHJvYmFibHkgaW5hY2N1cmF0ZSkgZm9ybXVsYSxcbiAgICAgICAgICAgIC8vIGFuZCBzdWJkaXZpZGUgZnVydGhlciBpZiBuZWVkZWQuXG4gICAgICAgICAgICBhbHBoYTEgPSBhbHBoYTIgPSBzZWdMZW5ndGggLyAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIGZvdW5kIGNvbnRyb2wgcG9pbnRzIGFyZSBpbiB0aGUgcmlnaHQgb3JkZXIgd2hlblxuICAgICAgICAgICAgLy8gcHJvamVjdGVkIG9udG8gdGhlIGxpbmUgdGhyb3VnaCBwdDEgYW5kIHB0Mi5cbiAgICAgICAgICAgIHZhciBsaW5lID0gcHQyLnN1YihwdDEpO1xuICAgICAgICAgICAgLy8gQ29udHJvbCBwb2ludHMgMSBhbmQgMiBhcmUgcG9zaXRpb25lZCBhbiBhbHBoYSBkaXN0YW5jZSBvdXRcbiAgICAgICAgICAgIC8vIG9uIHRoZSB0YW5nZW50IHZlY3RvcnMsIGxlZnQgYW5kIHJpZ2h0LCByZXNwZWN0aXZlbHlcbiAgICAgICAgICAgIGhhbmRsZTEgPSB0YW4xLm5vcm1hbGl6ZSgpLm11bFNlbGYoYWxwaGExKTtcbiAgICAgICAgICAgIGhhbmRsZTIgPSB0YW4yLm5vcm1hbGl6ZSgpLm11bFNlbGYoYWxwaGEyKTtcbiAgICAgICAgICAgIGlmIChoYW5kbGUxLmRvdChsaW5lKSAtIGhhbmRsZTIuZG90KGxpbmUpID4gc2VnTGVuZ3RoICogc2VnTGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gRmFsbCBiYWNrIHRvIHRoZSBXdS9CYXJza3kgaGV1cmlzdGljIGFib3ZlLlxuICAgICAgICAgICAgICAgIGFscGhhMSA9IGFscGhhMiA9IHNlZ0xlbmd0aCAvIDM7XG4gICAgICAgICAgICAgICAgaGFuZGxlMSA9IGhhbmRsZTIgPSBudWxsOyAvLyBGb3JjZSByZWNhbGN1bGF0aW9uXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGaXJzdCBhbmQgbGFzdCBjb250cm9sIHBvaW50cyBvZiB0aGUgQmV6aWVyIGN1cnZlIGFyZVxuICAgICAgICAvLyBwb3NpdGlvbmVkIGV4YWN0bHkgYXQgdGhlIGZpcnN0IGFuZCBsYXN0IGRhdGEgcG9pbnRzXG4gICAgICAgIHJldHVybiBbcHQxLCBwdDEuYWRkKGhhbmRsZTEgfHwgdGFuMS5ub3JtYWxpemUoKS5tdWxTZWxmKGFscGhhMSkpLFxuICAgICAgICAgICAgICAgIHB0Mi5hZGQoaGFuZGxlMiB8fCB0YW4yLm5vcm1hbGl6ZSgpLm11bFNlbGYoYWxwaGEyKSksIHB0Ml07XG4gICAgfSxcblxuICAgIC8vIEdpdmVuIHNldCBvZiBwb2ludHMgYW5kIHRoZWlyIHBhcmFtZXRlcml6YXRpb24sIHRyeSB0byBmaW5kXG4gICAgLy8gYSBiZXR0ZXIgcGFyYW1ldGVyaXphdGlvbi5cbiAgICByZXBhcmFtZXRlcml6ZTogZnVuY3Rpb24oZmlyc3QsIGxhc3QsIHUsIGN1cnZlKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSBmaXJzdDsgaSA8PSBsYXN0OyBpKyspIHtcbiAgICAgICAgICAgIHVbaSAtIGZpcnN0XSA9IHRoaXMuZmluZFJvb3QoY3VydmUsIHRoaXMucG9pbnRzW2ldLCB1W2kgLSBmaXJzdF0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIERldGVjdCBpZiB0aGUgbmV3IHBhcmFtZXRlcml6YXRpb24gaGFzIHJlb3JkZXJlZCB0aGUgcG9pbnRzLlxuICAgICAgICAvLyBJbiB0aGF0IGNhc2UsIHdlIHdvdWxkIGZpdCB0aGUgcG9pbnRzIG9mIHRoZSBwYXRoIGluIHRoZSB3cm9uZyBvcmRlci5cbiAgICAgICAgZm9yICh2YXIgaSA9IDEsIGwgPSB1Lmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgaWYgKHVbaV0gPD0gdVtpIC0gMV0pXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICAvLyBVc2UgTmV3dG9uLVJhcGhzb24gaXRlcmF0aW9uIHRvIGZpbmQgYmV0dGVyIHJvb3QuXG4gICAgZmluZFJvb3Q6IGZ1bmN0aW9uKGN1cnZlLCBwb2ludCwgdSkge1xuICAgICAgICB2YXIgY3VydmUxID0gW10sXG4gICAgICAgICAgICBjdXJ2ZTIgPSBbXTtcbiAgICAgICAgLy8gR2VuZXJhdGUgY29udHJvbCB2ZXJ0aWNlcyBmb3IgUSdcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPD0gMjsgaSsrKSB7XG4gICAgICAgICAgICBjdXJ2ZTFbaV0gPSBjdXJ2ZVtpICsgMV0uc3ViKGN1cnZlW2ldKS5tdWwoMyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2VuZXJhdGUgY29udHJvbCB2ZXJ0aWNlcyBmb3IgUScnXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDw9IDE7IGkrKykge1xuICAgICAgICAgICAgY3VydmUyW2ldID0gY3VydmUxW2kgKyAxXS5zdWIoY3VydmUxW2ldKS5tdWwoMik7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ29tcHV0ZSBRKHUpLCBRJyh1KSBhbmQgUScnKHUpXG4gICAgICAgIHZhciBwdCA9IHRoaXMuZXZhbHVhdGUoMywgY3VydmUsIHUpLFxuICAgICAgICAgICAgcHQxID0gdGhpcy5ldmFsdWF0ZSgyLCBjdXJ2ZTEsIHUpLFxuICAgICAgICAgICAgcHQyID0gdGhpcy5ldmFsdWF0ZSgxLCBjdXJ2ZTIsIHUpLFxuICAgICAgICAgICAgZGlmZiA9IHB0LnN1Yihwb2ludCksXG4gICAgICAgICAgICBkZiA9IHB0MS5kb3QocHQxKSArIGRpZmYuZG90KHB0Mik7XG4gICAgICAgIC8vIENvbXB1dGUgZih1KSAvIGYnKHUpXG4gICAgICAgIGlmIChNYXRoLmFicyhkZikgPCAvKiM9Ki9UT0xFUkFOQ0UpXG4gICAgICAgICAgICByZXR1cm4gdTtcbiAgICAgICAgLy8gdSA9IHUgLSBmKHUpIC8gZicodSlcbiAgICAgICAgcmV0dXJuIHUgLSBkaWZmLmRvdChwdDEpIC8gZGY7XG4gICAgfSxcblxuICAgIC8vIEV2YWx1YXRlIGEgYmV6aWVyIGN1cnZlIGF0IGEgcGFydGljdWxhciBwYXJhbWV0ZXIgdmFsdWVcbiAgICBldmFsdWF0ZTogZnVuY3Rpb24oZGVncmVlLCBjdXJ2ZSwgdCkge1xuICAgICAgICAvLyBDb3B5IGFycmF5XG4gICAgICAgIHZhciB0bXAgPSBjdXJ2ZS5zbGljZSgpO1xuICAgICAgICAvLyBUcmlhbmdsZSBjb21wdXRhdGlvblxuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8PSBkZWdyZWU7IGkrKykge1xuICAgICAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPD0gZGVncmVlIC0gaTsgaisrKSB7XG4gICAgICAgICAgICAgICAgdG1wW2pdID0gdG1wW2pdLm11bCgxIC0gdCkuYWRkKHRtcFtqICsgMV0ubXVsKHQpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG1wWzBdO1xuICAgIH0sXG5cbiAgICAvLyBBc3NpZ24gcGFyYW1ldGVyIHZhbHVlcyB0byBkaWdpdGl6ZWQgcG9pbnRzXG4gICAgLy8gdXNpbmcgcmVsYXRpdmUgZGlzdGFuY2VzIGJldHdlZW4gcG9pbnRzLlxuICAgIGNob3JkTGVuZ3RoUGFyYW1ldGVyaXplOiBmdW5jdGlvbihmaXJzdCwgbGFzdCkge1xuICAgICAgICB2YXIgdSA9IFswXTtcbiAgICAgICAgZm9yICh2YXIgaSA9IGZpcnN0ICsgMTsgaSA8PSBsYXN0OyBpKyspIHtcbiAgICAgICAgICAgIHVbaSAtIGZpcnN0XSA9IHVbaSAtIGZpcnN0IC0gMV1cbiAgICAgICAgICAgICAgICAgICAgKyB0aGlzLnBvaW50c1tpXS5zdWIodGhpcy5wb2ludHNbaSAtIDFdKS5tYWcoKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBpID0gMSwgbSA9IGxhc3QgLSBmaXJzdDsgaSA8PSBtOyBpKyspIHtcbiAgICAgICAgICAgIHVbaV0gLz0gdVttXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdTtcbiAgICB9LFxuXG4gICAgLy8gRmluZCB0aGUgbWF4aW11bSBzcXVhcmVkIGRpc3RhbmNlIG9mIGRpZ2l0aXplZCBwb2ludHMgdG8gZml0dGVkIGN1cnZlLlxuICAgIGZpbmRNYXhFcnJvcjogZnVuY3Rpb24oZmlyc3QsIGxhc3QsIGN1cnZlLCB1KSB7XG4gICAgICAgIHZhciBpbmRleCA9IE1hdGguZmxvb3IoKGxhc3QgLSBmaXJzdCArIDEpIC8gMiksXG4gICAgICAgICAgICBtYXhEaXN0ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IGZpcnN0ICsgMTsgaSA8IGxhc3Q7IGkrKykge1xuICAgICAgICAgICAgdmFyIFAgPSB0aGlzLmV2YWx1YXRlKDMsIGN1cnZlLCB1W2kgLSBmaXJzdF0pO1xuICAgICAgICAgICAgdmFyIHYgPSBQLnN1Yih0aGlzLnBvaW50c1tpXSk7XG4gICAgICAgICAgICB2YXIgZGlzdCA9IHYueCAqIHYueCArIHYueSAqIHYueTsgLy8gc3F1YXJlZFxuICAgICAgICAgICAgaWYgKGRpc3QgPj0gbWF4RGlzdCkge1xuICAgICAgICAgICAgICAgIG1heERpc3QgPSBkaXN0O1xuICAgICAgICAgICAgICAgIGluZGV4ID0gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZXJyb3I6IG1heERpc3QsXG4gICAgICAgICAgICBpbmRleDogaW5kZXhcbiAgICAgICAgfTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBzaW1wbGlmeTogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLl9jb21tYW5kcyA9IEZpdHRlci5maXQodGhpcyk7XG4gICAgfVxufTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson2/Lesson2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '34e64jlXmBH/bSSuHADj+E4', 'Lesson2');
// scripts/listLesson/lesson2/Lesson2.ts

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
var Lesson2 = /** @class */ (function (_super) {
    __extends(Lesson2, _super);
    function Lesson2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelText = null;
        // onLoad () {}
        _this.listReference = [];
        return _this;
    }
    Lesson2.prototype.start = function () {
        this.setAction();
    };
    Lesson2.prototype.setAction = function () {
    };
    __decorate([
        property(cc.Label)
    ], Lesson2.prototype, "labelText", void 0);
    __decorate([
        property([cc.Node])
    ], Lesson2.prototype, "listReference", void 0);
    Lesson2 = __decorate([
        ccclass
    ], Lesson2);
    return Lesson2;
}(cc.Component));
exports.default = Lesson2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uMlxcTGVzc29uMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQWVDO1FBWkcsZUFBUyxHQUFhLElBQUksQ0FBQztRQUMzQixlQUFlO1FBRWYsbUJBQWEsR0FBYyxFQUFFLENBQUM7O0lBU2xDLENBQUM7SUFQRyx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwyQkFBUyxHQUFUO0lBRUEsQ0FBQztJQVhEO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ087SUFHM0I7UUFEQyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7a0RBQ1M7SUFOYixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBZTNCO0lBQUQsY0FBQztDQWZELEFBZUMsQ0Fmb0MsRUFBRSxDQUFDLFNBQVMsR0FlaEQ7a0JBZm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExlc3NvbjIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTGFiZWwpXHJcbiAgICBsYWJlbFRleHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuICAgIC8vIG9uTG9hZCAoKSB7fVxyXG4gICAgQHByb3BlcnR5IChbY2MuTm9kZV0pXHJcbiAgICBsaXN0UmVmZXJlbmNlOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBY3Rpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRBY3Rpb24oKXtcclxuXHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson3/Node1_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '74e94TMAu1AML6kJHn3ze1H', 'Node1_3');
// scripts/listLesson/lesson3/Node1_3.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Node1_3 = /** @class */ (function (_super) {
    __extends(Node1_3, _super);
    function Node1_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeHandLeft = null;
        _this.nodeHandRight = null;
        _this.count = 1;
        return _this;
    }
    Node1_3.prototype.onLoad = function () {
        this.nodeHandLeft.setPosition(-2700, -50);
        this.nodeHandRight.setPosition(2700, -50);
    };
    Node1_3.prototype.start = function () {
        this.setAction();
    };
    Node1_3.prototype.setAction = function () {
        var _this = this;
        var actionHand = cc.callFunc(function () {
            _this.nodeHandLeft.runAction(cc.moveTo(0.8, cc.v2(-380, -50)));
            _this.nodeHandRight.runAction(cc.moveTo(0.8, cc.v2(380, -50)));
        });
        this.node.runAction(cc.sequence(cc.delayTime(1.0), actionHand));
    };
    __decorate([
        property(cc.Label)
    ], Node1_3.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Node1_3.prototype, "nodeHandLeft", void 0);
    __decorate([
        property(cc.Node)
    ], Node1_3.prototype, "nodeHandRight", void 0);
    Node1_3 = __decorate([
        ccclass
    ], Node1_3);
    return Node1_3;
}(cc.Component));
exports.default = Node1_3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uM1xcTm9kZTFfMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTRCQztRQXpCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRzdCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLFdBQUssR0FBVyxDQUFDLENBQUM7O0lBaUJ0QixDQUFDO0lBaEJHLHdCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLElBQUksRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQUEsaUJBTUM7UUFMRyxJQUFJLFVBQVUsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3pCLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDNUQsS0FBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBdkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDVTtJQUc3QjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNXO0lBVGIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTRCM0I7SUFBRCxjQUFDO0NBNUJELEFBNEJDLENBNUJvQyxFQUFFLENBQUMsU0FBUyxHQTRCaEQ7a0JBNUJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlMV8zIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIG5vZGVIYW5kTGVmdDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgbm9kZUhhbmRSaWdodDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgY291bnQ6IG51bWJlciA9IDE7XHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLm5vZGVIYW5kTGVmdC5zZXRQb3NpdGlvbigtMjcwMCwtNTApO1xyXG4gICAgICAgIHRoaXMubm9kZUhhbmRSaWdodC5zZXRQb3NpdGlvbigyNzAwLC01MCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICBsZXQgYWN0aW9uSGFuZCA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUhhbmRMZWZ0LnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC44LGNjLnYyKC0zODAsLTUwKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kUmlnaHQucnVuQWN0aW9uKGNjLm1vdmVUbygwLjgsY2MudjIoMzgwLC01MCkpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEuMCksYWN0aW9uSGFuZCkpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson4/Node5_4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26f0e2hTBxIqq7NqeDfyVYM', 'Node5_4');
// scripts/listLesson/lesson4/Node5_4.ts

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
var Node5_4 = /** @class */ (function (_super) {
    __extends(Node5_4, _super);
    function Node5_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label_refer = null;
        _this.label_result = null;
        _this.nodeHand = null;
        _this.nodeBead = [];
        return _this;
    }
    Node5_4.prototype.start = function () {
        this.setAction();
        this.label_result.node.active = false;
    };
    Node5_4.prototype.setAction = function () {
        var _this = this;
        var txt = this.node.getChildByName("text");
        var action1 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.YELLOW;
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, 55.5)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 ";
        });
        var action2 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.YELLOW;
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.nodeBead[2].runAction(cc.moveTo(0.5, cc.v2(0, -115.5)));
            _this.nodeBead[3].runAction(cc.moveTo(0.5, cc.v2(0, -201)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 + 3";
        });
        var action3 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.WHITE;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 + 3 = 4";
            _this.label_result.string = "4";
            _this.label_result.node.active = true;
            _this.label_result.node.color = cc.Color.YELLOW;
        });
        var hideAnim = cc.callFunc(function () {
            _this.nodeHand.parent.active = false;
        });
        this.node.runAction(cc.sequence(cc.delayTime(2.0), action1, cc.delayTime(1.0), hideAnim, cc.delayTime(2.0), action2, cc.delayTime(1.0), hideAnim, cc.delayTime(2.0), action3, cc.delayTime(1.0), hideAnim));
    };
    __decorate([
        property(cc.Label)
    ], Node5_4.prototype, "label_refer", void 0);
    __decorate([
        property(cc.Label)
    ], Node5_4.prototype, "label_result", void 0);
    __decorate([
        property(cc.Node)
    ], Node5_4.prototype, "nodeHand", void 0);
    __decorate([
        property([cc.Node])
    ], Node5_4.prototype, "nodeBead", void 0);
    Node5_4 = __decorate([
        ccclass
    ], Node5_4);
    return Node5_4;
}(cc.Component));
exports.default = Node5_4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uNFxcTm9kZTVfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXlFQztRQXRFRyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYyxFQUFFLENBQUM7O0lBNkQ3QixDQUFDO0lBM0RHLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBQ0QsMkJBQVMsR0FBVDtRQUFBLGlCQW9EQztRQW5ERyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxLQUFLLENBQUMsQ0FBQztZQUMxRSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFFLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDdkMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDdkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFFLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQztZQUN0QyxLQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDL0IsS0FBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNyQyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7UUFDbkQsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDZixFQUFFLENBQUMsUUFBUSxDQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE9BQU8sRUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixRQUFRLEVBQ1IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxFQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFFBQVEsRUFDUixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixPQUFPLEVBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsUUFBUSxDQUNYLENBQ0osQ0FBQztJQUNOLENBQUM7SUFuRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNXO0lBRzlCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NkNBQ0k7SUFaUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBeUUzQjtJQUFELGNBQUM7Q0F6RUQsQUF5RUMsQ0F6RW9DLEVBQUUsQ0FBQyxTQUFTLEdBeUVoRDtrQkF6RW9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGU1XzQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsX3JlZmVyOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxfcmVzdWx0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgbm9kZUhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoW2NjLk5vZGVdKVxyXG4gICAgbm9kZUJlYWQ6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfcmVzdWx0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICBsZXQgdHh0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgIHR4dC5jaGlsZHJlblswXS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICAgICB0aGlzLm5vZGVCZWFkWzBdLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC41LGNjLnYyKDAsNTUuNSkpKTtcclxuICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgIHRoaXMubm9kZUhhbmQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCxcImFuaW1hdGlvblwiLGZhbHNlKTtcclxuICAgICAgICAgICB0aGlzLmxhYmVsX3JlZmVyLnN0cmluZyA9IFwiMSBcIjtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblswXS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB0eHQuY2hpbGRyZW5bMV0uY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMV0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMzApKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMl0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMTE1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbM10ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMjAxKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsXCJhbmltYXRpb25cIixmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVmZXIuc3RyaW5nID0gXCIxICsgM1wiO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24zID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdHh0LmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblsxXS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsXCJhbmltYXRpb25cIixmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVmZXIuc3RyaW5nID0gXCIxICsgMyA9IDRcIjtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9yZXN1bHQuc3RyaW5nID0gXCI0XCI7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVzdWx0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9yZXN1bHQubm9kZS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgaGlkZUFuaW0gPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgyLjApLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uMSxcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjApLFxyXG4gICAgICAgICAgICAgICAgaGlkZUFuaW0sXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMi4wKSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjIsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS4wKSxcclxuICAgICAgICAgICAgICAgIGhpZGVBbmltLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDIuMCksXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24zLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuMCksXHJcbiAgICAgICAgICAgICAgICBoaWRlQW5pbSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/manager/SoundManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9e58dpymDNKubYGUr12YDTa', 'SoundManager');
// scripts/manager/SoundManager.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
var SoundManager = cc.Class({
  "extends": cc.Component,
  properties: {
    audioSource: {
      "default": null,
      type: cc.AudioSource
    },
    bkg_SoundInGame: {
      "default": null,
      type: cc.AudioClip
    },
    currentAudio: 0,
    soundActive: 0
  },
  onLoad: function onLoad() {
    cc.sys.localStorage.setItem('music', 'on');
    this.soundInGame = this.bkg_SoundInGame;
    SoundManager.instance = this;
    var musicBkg = null;
    cc.loader.loadResDir('sounds', cc.AudioClip, function (error, result) {
      if (error !== null) {}
    });
  },
  start: function start() {},

  /* Start :  Change Method Load Sound => dynamically */
  dynamicallyPlayMusic: function dynamicallyPlayMusic(_soundResource, _loop, _isSFX) {
    var _this = this;

    if (_loop === void 0) {
      _loop = false;
    }

    if (_isSFX === void 0) {
      _isSFX = true;
    }

    if (_isSFX) {
      if (this.isSFX == true) {
        cc.loader.loadRes(_soundResource, cc.AudioClip, function (err, clip) {
          if (err) return;
          _this.currentAudio = cc.audioEngine.play(clip, _loop, 1);
        });
      } else {
        return;
      }
    } else {
      cc.audioEngine.pauseAll();
      cc.loader.loadRes(_soundResource, cc.AudioClip, function (err, clip) {
        _this.currentAudio = cc.audioEngine.play(clip, _loop, 1);
      });
    }
  },
  dynamicallyStopMusic: function dynamicallyStopMusic() {
    cc.audioEngine.pause(this.currentAudio);
  },
  stopMusic: function stopMusic() {
    this.audioSource.pause();
  },
  playMusic: function playMusic() {
    this.audioSource.play();
  },
  playMouse: function playMouse() {
    this.dynamicallyPlayMusic('sounds/mouse_click', false, false);
  }
});
var _default = SoundManager;
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWFuYWdlclxcU291bmRNYW5hZ2VyLmpzIl0sIm5hbWVzIjpbIlNvdW5kTWFuYWdlciIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiYXVkaW9Tb3VyY2UiLCJ0eXBlIiwiQXVkaW9Tb3VyY2UiLCJia2dfU291bmRJbkdhbWUiLCJBdWRpb0NsaXAiLCJjdXJyZW50QXVkaW8iLCJzb3VuZEFjdGl2ZSIsIm9uTG9hZCIsInN5cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJzb3VuZEluR2FtZSIsImluc3RhbmNlIiwibXVzaWNCa2ciLCJsb2FkZXIiLCJsb2FkUmVzRGlyIiwiZXJyb3IiLCJyZXN1bHQiLCJzdGFydCIsImR5bmFtaWNhbGx5UGxheU11c2ljIiwiX3NvdW5kUmVzb3VyY2UiLCJfbG9vcCIsIl9pc1NGWCIsImlzU0ZYIiwibG9hZFJlcyIsImVyciIsImNsaXAiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJwYXVzZUFsbCIsImR5bmFtaWNhbGx5U3RvcE11c2ljIiwicGF1c2UiLCJzdG9wTXVzaWMiLCJwbGF5TXVzaWMiLCJwbGF5TW91c2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxZQUFZLEdBQUdDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ3hCLGFBQVNELEVBQUUsQ0FBQ0UsU0FEWTtBQUd4QkMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTLElBREE7QUFFVEMsTUFBQUEsSUFBSSxFQUFFTCxFQUFFLENBQUNNO0FBRkEsS0FETDtBQU1SQyxJQUFBQSxlQUFlLEVBQUU7QUFDYixpQkFBUyxJQURJO0FBRWJGLE1BQUFBLElBQUksRUFBRUwsRUFBRSxDQUFDUTtBQUZJLEtBTlQ7QUFVUkMsSUFBQUEsWUFBWSxFQUFFLENBVk47QUFXUkMsSUFBQUEsV0FBVyxFQUFFO0FBWEwsR0FIWTtBQWdCeEJDLEVBQUFBLE1BaEJ3QixvQkFnQmY7QUFDTFgsSUFBQUEsRUFBRSxDQUFDWSxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDLElBQXJDO0FBQ0EsU0FBS0MsV0FBTCxHQUFtQixLQUFLUixlQUF4QjtBQUNBUixJQUFBQSxZQUFZLENBQUNpQixRQUFiLEdBQXdCLElBQXhCO0FBQ0EsUUFBSUMsUUFBUSxHQUFHLElBQWY7QUFDQWpCLElBQUFBLEVBQUUsQ0FBQ2tCLE1BQUgsQ0FBVUMsVUFBVixDQUFxQixRQUFyQixFQUErQm5CLEVBQUUsQ0FBQ1EsU0FBbEMsRUFBNkMsVUFBQ1ksS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQzVELFVBQUlELEtBQUssS0FBSyxJQUFkLEVBQW9CLENBQ25CO0FBQ0osS0FIRDtBQUlILEdBekJ1QjtBQTJCeEJFLEVBQUFBLEtBM0J3QixtQkEyQmhCLENBQ1AsQ0E1QnVCOztBQTZCeEI7QUFDQUMsRUFBQUEsb0JBOUJ3QixnQ0E4QkhDLGNBOUJHLEVBOEJhQyxLQTlCYixFQThCNEJDLE1BOUI1QixFQThCMkM7QUFBQTs7QUFBQSxRQUE5QkQsS0FBOEI7QUFBOUJBLE1BQUFBLEtBQThCLEdBQXRCLEtBQXNCO0FBQUE7O0FBQUEsUUFBZkMsTUFBZTtBQUFmQSxNQUFBQSxNQUFlLEdBQU4sSUFBTTtBQUFBOztBQUMvRCxRQUFJQSxNQUFKLEVBQVk7QUFDUixVQUFJLEtBQUtDLEtBQUwsSUFBYyxJQUFsQixFQUF3QjtBQUNwQjNCLFFBQUFBLEVBQUUsQ0FBQ2tCLE1BQUgsQ0FBVVUsT0FBVixDQUFrQkosY0FBbEIsRUFBa0N4QixFQUFFLENBQUNRLFNBQXJDLEVBQWdELFVBQUNxQixHQUFELEVBQU1DLElBQU4sRUFBZTtBQUMzRCxjQUFJRCxHQUFKLEVBQVM7QUFDVCxVQUFBLEtBQUksQ0FBQ3BCLFlBQUwsR0FBb0JULEVBQUUsQ0FBQytCLFdBQUgsQ0FBZUMsSUFBZixDQUFvQkYsSUFBcEIsRUFBMEJMLEtBQTFCLEVBQWlDLENBQWpDLENBQXBCO0FBQ0gsU0FIRDtBQUlILE9BTEQsTUFLTztBQUNIO0FBQ0g7QUFDSixLQVRELE1BU087QUFDSHpCLE1BQUFBLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZUUsUUFBZjtBQUNBakMsTUFBQUEsRUFBRSxDQUFDa0IsTUFBSCxDQUFVVSxPQUFWLENBQWtCSixjQUFsQixFQUFrQ3hCLEVBQUUsQ0FBQ1EsU0FBckMsRUFBZ0QsVUFBQ3FCLEdBQUQsRUFBTUMsSUFBTixFQUFlO0FBQzNELFFBQUEsS0FBSSxDQUFDckIsWUFBTCxHQUFvQlQsRUFBRSxDQUFDK0IsV0FBSCxDQUFlQyxJQUFmLENBQW9CRixJQUFwQixFQUEwQkwsS0FBMUIsRUFBaUMsQ0FBakMsQ0FBcEI7QUFDSCxPQUZEO0FBR0g7QUFDSixHQTlDdUI7QUErQ3hCUyxFQUFBQSxvQkEvQ3dCLGtDQStDRDtBQUNuQmxDLElBQUFBLEVBQUUsQ0FBQytCLFdBQUgsQ0FBZUksS0FBZixDQUFxQixLQUFLMUIsWUFBMUI7QUFDSCxHQWpEdUI7QUFrRHhCMkIsRUFBQUEsU0FsRHdCLHVCQWtEWjtBQUNSLFNBQUtoQyxXQUFMLENBQWlCK0IsS0FBakI7QUFDSCxHQXBEdUI7QUFxRHhCRSxFQUFBQSxTQXJEd0IsdUJBcURaO0FBQ1IsU0FBS2pDLFdBQUwsQ0FBaUI0QixJQUFqQjtBQUNILEdBdkR1QjtBQXdEeEJNLEVBQUFBLFNBeER3Qix1QkF3RFo7QUFDUixTQUFLZixvQkFBTCxDQUEwQixvQkFBMUIsRUFBK0MsS0FBL0MsRUFBcUQsS0FBckQ7QUFDSDtBQTFEdUIsQ0FBVCxDQUFuQjtlQTZEZXhCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgU291bmRNYW5hZ2VyID0gY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgICAgICBhdWRpb1NvdXJjZToge1xyXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb1NvdXJjZSxcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBia2dfU291bmRJbkdhbWU6IHtcclxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY3VycmVudEF1ZGlvOiAwLFxyXG4gICAgICAgIHNvdW5kQWN0aXZlOiAwLFxyXG4gICAgfSxcclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ211c2ljJywgJ29uJyk7XHJcbiAgICAgICAgdGhpcy5zb3VuZEluR2FtZSA9IHRoaXMuYmtnX1NvdW5kSW5HYW1lO1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5pbnN0YW5jZSA9IHRoaXM7XHJcbiAgICAgICAgbGV0IG11c2ljQmtnID0gbnVsbDtcclxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0Rpcignc291bmRzJywgY2MuQXVkaW9DbGlwLCAoZXJyb3IsIHJlc3VsdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXJyb3IgIT09IG51bGwpIHtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSxcclxuXHJcbiAgICBzdGFydCgpIHtcclxuICAgIH0sXHJcbiAgICAvKiBTdGFydCA6ICBDaGFuZ2UgTWV0aG9kIExvYWQgU291bmQgPT4gZHluYW1pY2FsbHkgKi9cclxuICAgIGR5bmFtaWNhbGx5UGxheU11c2ljKF9zb3VuZFJlc291cmNlLCBfbG9vcCA9IGZhbHNlLCBfaXNTRlggPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKF9pc1NGWCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pc1NGWCA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyhfc291bmRSZXNvdXJjZSwgY2MuQXVkaW9DbGlwLCAoZXJyLCBjbGlwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVycikgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEF1ZGlvID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBfbG9vcCwgMSk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlQWxsKCk7XHJcbiAgICAgICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKF9zb3VuZFJlc291cmNlLCBjYy5BdWRpb0NsaXAsIChlcnIsIGNsaXApID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEF1ZGlvID0gY2MuYXVkaW9FbmdpbmUucGxheShjbGlwLCBfbG9vcCwgMSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkeW5hbWljYWxseVN0b3BNdXNpYygpIHtcclxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLmN1cnJlbnRBdWRpbyk7XHJcbiAgICB9LFxyXG4gICAgc3RvcE11c2ljKCkge1xyXG4gICAgICAgIHRoaXMuYXVkaW9Tb3VyY2UucGF1c2UoKTtcclxuICAgIH0sXHJcbiAgICBwbGF5TXVzaWMoKSB7XHJcbiAgICAgICAgdGhpcy5hdWRpb1NvdXJjZS5wbGF5KCk7XHJcbiAgICB9LFxyXG4gICAgcGxheU1vdXNlKCkgeyBcclxuICAgICAgICB0aGlzLmR5bmFtaWNhbGx5UGxheU11c2ljKCdzb3VuZHMvbW91c2VfY2xpY2snLGZhbHNlLGZhbHNlKTtcclxuICAgIH1cclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTb3VuZE1hbmFnZXI7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/raphael/simplify.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7477eND5B9AO5IfyHZno4Ri', 'simplify');
// scripts/miniGame/raphael/simplify.js

"use strict";

cc.Class({
  "extends": cc.Component,
  // use this for initialization
  onLoad: function onLoad() {
    this.path = this.addComponent('R.path');
    this.path.fillColor = 'none';
    this.path.lineWidth = 30;
    this.path.showHandles = false;
    this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
    this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
    this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
  },
  onTouchBegan: function onTouchBegan(touch, event) {
    var touchLoc = touch.getLocation();
    touchLoc = this.node.parent.convertToNodeSpaceAR(touchLoc);
    this.points = [touchLoc];
    return true;
  },
  onTouchMoved: function onTouchMoved(touch, event) {
    var touchLoc = touch.getLocation();
    touchLoc = this.node.parent.convertToNodeSpaceAR(touchLoc);
    console.log(touchLoc);
    this.points.push(touchLoc);
    this.path.points(this.points);
  },
  onTouchEnded: function onTouchEnded(touch, event) {
    this.path.points(this.points);
    this.path.simplify();
  },
  // called every frame, uncomment this function to activate update callback
  update: function update(dt) {},
  onBack: function onBack() {
    this.node.parent.destroy();
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXHJhcGhhZWxcXHNpbXBsaWZ5LmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJvbkxvYWQiLCJwYXRoIiwiYWRkQ29tcG9uZW50IiwiZmlsbENvbG9yIiwibGluZVdpZHRoIiwic2hvd0hhbmRsZXMiLCJub2RlIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJvblRvdWNoQmVnYW4iLCJUT1VDSF9NT1ZFIiwib25Ub3VjaE1vdmVkIiwiVE9VQ0hfRU5EIiwib25Ub3VjaEVuZGVkIiwidG91Y2giLCJldmVudCIsInRvdWNoTG9jIiwiZ2V0TG9jYXRpb24iLCJwYXJlbnQiLCJjb252ZXJ0VG9Ob2RlU3BhY2VBUiIsInBvaW50cyIsImNvbnNvbGUiLCJsb2ciLCJwdXNoIiwic2ltcGxpZnkiLCJ1cGRhdGUiLCJkdCIsIm9uQmFjayIsImRlc3Ryb3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0w7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGtCQUFZO0FBQ2hCLFNBQUtDLElBQUwsR0FBWSxLQUFLQyxZQUFMLENBQWtCLFFBQWxCLENBQVo7QUFDQSxTQUFLRCxJQUFMLENBQVVFLFNBQVYsR0FBc0IsTUFBdEI7QUFDQSxTQUFLRixJQUFMLENBQVVHLFNBQVYsR0FBc0IsRUFBdEI7QUFDQSxTQUFLSCxJQUFMLENBQVVJLFdBQVYsR0FBd0IsS0FBeEI7QUFDQSxTQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYVYsRUFBRSxDQUFDVyxJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFdBQS9CLEVBQTRDLEtBQUtDLFlBQWpELEVBQStELElBQS9EO0FBQ0EsU0FBS0wsSUFBTCxDQUFVQyxFQUFWLENBQWFWLEVBQUUsQ0FBQ1csSUFBSCxDQUFRQyxTQUFSLENBQWtCRyxVQUEvQixFQUEyQyxLQUFLQyxZQUFoRCxFQUE4RCxJQUE5RDtBQUNBLFNBQUtQLElBQUwsQ0FBVUMsRUFBVixDQUFhVixFQUFFLENBQUNXLElBQUgsQ0FBUUMsU0FBUixDQUFrQkssU0FBL0IsRUFBMEMsS0FBS0MsWUFBL0MsRUFBNkQsSUFBN0Q7QUFDSCxHQVpJO0FBY0xKLEVBQUFBLFlBQVksRUFBRSxzQkFBVUssS0FBVixFQUFpQkMsS0FBakIsRUFBd0I7QUFDbEMsUUFBSUMsUUFBUSxHQUFHRixLQUFLLENBQUNHLFdBQU4sRUFBZjtBQUNBRCxJQUFBQSxRQUFRLEdBQUcsS0FBS1osSUFBTCxDQUFVYyxNQUFWLENBQWlCQyxvQkFBakIsQ0FBc0NILFFBQXRDLENBQVg7QUFFQSxTQUFLSSxNQUFMLEdBQWMsQ0FBQ0osUUFBRCxDQUFkO0FBRUEsV0FBTyxJQUFQO0FBQ0gsR0FyQkk7QUF1QkxMLEVBQUFBLFlBQVksRUFBRSxzQkFBVUcsS0FBVixFQUFpQkMsS0FBakIsRUFBd0I7QUFDbEMsUUFBSUMsUUFBUSxHQUFHRixLQUFLLENBQUNHLFdBQU4sRUFBZjtBQUNBRCxJQUFBQSxRQUFRLEdBQUcsS0FBS1osSUFBTCxDQUFVYyxNQUFWLENBQWlCQyxvQkFBakIsQ0FBc0NILFFBQXRDLENBQVg7QUFDQUssSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlOLFFBQVo7QUFDQSxTQUFLSSxNQUFMLENBQVlHLElBQVosQ0FBaUJQLFFBQWpCO0FBQ0EsU0FBS2pCLElBQUwsQ0FBVXFCLE1BQVYsQ0FBaUIsS0FBS0EsTUFBdEI7QUFDSCxHQTdCSTtBQStCTFAsRUFBQUEsWUFBWSxFQUFFLHNCQUFVQyxLQUFWLEVBQWlCQyxLQUFqQixFQUF3QjtBQUNsQyxTQUFLaEIsSUFBTCxDQUFVcUIsTUFBVixDQUFpQixLQUFLQSxNQUF0QjtBQUNBLFNBQUtyQixJQUFMLENBQVV5QixRQUFWO0FBQ0gsR0FsQ0k7QUFvQ0w7QUFDQUMsRUFBQUEsTUFBTSxFQUFFLGdCQUFVQyxFQUFWLEVBQWMsQ0FDckIsQ0F0Q0k7QUF3Q0xDLEVBQUFBLE1BeENLLG9CQXdDSTtBQUNMLFNBQUt2QixJQUFMLENBQVVjLE1BQVYsQ0FBaUJVLE9BQWpCO0FBQ0g7QUExQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGlzLnBhdGggPSB0aGlzLmFkZENvbXBvbmVudCgnUi5wYXRoJyk7XG4gICAgICAgIHRoaXMucGF0aC5maWxsQ29sb3IgPSAnbm9uZSc7XG4gICAgICAgIHRoaXMucGF0aC5saW5lV2lkdGggPSAzMDtcbiAgICAgICAgdGhpcy5wYXRoLnNob3dIYW5kbGVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoQmVnYW4sIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZWQsIHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmRlZCwgdGhpcyk7XG4gICAgfSxcblxuICAgIG9uVG91Y2hCZWdhbjogZnVuY3Rpb24gKHRvdWNoLCBldmVudCkge1xuICAgICAgICB2YXIgdG91Y2hMb2MgPSB0b3VjaC5nZXRMb2NhdGlvbigpO1xuICAgICAgICB0b3VjaExvYyA9IHRoaXMubm9kZS5wYXJlbnQuY29udmVydFRvTm9kZVNwYWNlQVIodG91Y2hMb2MpO1xuXG4gICAgICAgIHRoaXMucG9pbnRzID0gW3RvdWNoTG9jXTtcbiAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0sXG5cbiAgICBvblRvdWNoTW92ZWQ6IGZ1bmN0aW9uICh0b3VjaCwgZXZlbnQpIHtcbiAgICAgICAgdmFyIHRvdWNoTG9jID0gdG91Y2guZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgdG91Y2hMb2MgPSB0aGlzLm5vZGUucGFyZW50LmNvbnZlcnRUb05vZGVTcGFjZUFSKHRvdWNoTG9jKTtcbiAgICAgICAgY29uc29sZS5sb2codG91Y2hMb2MpO1xuICAgICAgICB0aGlzLnBvaW50cy5wdXNoKHRvdWNoTG9jKTtcbiAgICAgICAgdGhpcy5wYXRoLnBvaW50cyh0aGlzLnBvaW50cyk7XG4gICAgfSxcblxuICAgIG9uVG91Y2hFbmRlZDogZnVuY3Rpb24gKHRvdWNoLCBldmVudCkge1xuICAgICAgICB0aGlzLnBhdGgucG9pbnRzKHRoaXMucG9pbnRzKTtcbiAgICAgICAgdGhpcy5wYXRoLnNpbXBsaWZ5KCk7XG4gICAgfSxcblxuICAgIC8vIGNhbGxlZCBldmVyeSBmcmFtZSwgdW5jb21tZW50IHRoaXMgZnVuY3Rpb24gdG8gYWN0aXZhdGUgdXBkYXRlIGNhbGxiYWNrXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICB9LFxuXG4gICAgb25CYWNrKCkge1xuICAgICAgICB0aGlzLm5vZGUucGFyZW50LmRlc3Ryb3koKTtcbiAgICB9XG59KTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/raphael/component/R.transform.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'db19cFf2j1BhqqpBuWkH2Kk', 'R.transform');
// scripts/miniGame/raphael/component/R.transform.js

"use strict";

var Transform = {
  properties: {
    _scale: {
      "default": cc.v2(1, 1),
      type: cc.Vec2
    },
    _position: {
      "default": cc.v2(0, 0),
      type: cc.Vec2
    },
    _rotation: 0,
    _flipX: false,
    _flipY: false,
    _transform: {
      "default": function _default() {
        return {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          tx: 0,
          ty: 0
        };
      },
      serializable: false
    },
    _worldTransform: {
      "default": function _default() {
        return {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          tx: 0,
          ty: 0
        };
      },
      serializable: false
    },
    _transformDirty: {
      "default": true,
      serializable: false,
      notify: function notify() {
        if (this._transformDirty) {
          if (this.parent) {
            this.parent._transformDirty = true;
          }

          this._dirty = true;
        }
      }
    },
    scale: {
      get: function get() {
        return this._scale;
      },
      set: function set(value) {
        if (this._scale.equals(value)) {
          return;
        }

        this._scale = value;
        this._transformDirty = true;
      }
    },
    position: {
      get: function get() {
        return this._position;
      },
      set: function set(value) {
        if (this._position.equals(value)) {
          return;
        }

        this._position = value;
        this._transformDirty = true;
      }
    },
    rotation: {
      get: function get() {
        return this._rotation;
      },
      set: function set(value) {
        if (this._rotation === value) {
          return;
        }

        this._rotation = value;
        this._transformDirty = true;
      }
    },
    flipX: {
      get: function get() {
        return this._flipX;
      },
      set: function set(value) {
        if (this._flipX === value) {
          return;
        }

        this._flipX = value;
        this._transformDirty = true;
      }
    },
    flipY: {
      get: function get() {
        return this._flipY;
      },
      set: function set(value) {
        if (this._flipY === value) {
          return;
        }

        this._flipY = value;
        this._transformDirty = true;
      }
    }
  },
  _transformCommand: function _transformCommand(cmd, t) {
    if (cmd.length <= 1) {
      return cmd;
    }

    cmd = cmd.slice(1, cmd.length);

    if (t.a === 1 && t.d === 1 && t.b === 0 && t.c === 0 && t.tx === 0 && t.ty === 0) {
      return cmd;
    }

    var tempPoint = cc.v2();

    for (var i = 0, ii = cmd.length / 2; i < ii; i++) {
      var j = i * 2;
      tempPoint.x = cmd[j];
      tempPoint.y = cmd[j + 1];
      tempPoint = cc.AffineTransform.transformVec2(cc.v2(0, 0), tempPoint, t);
      cmd[j] = tempPoint.x;
      cmd[j + 1] = tempPoint.y;
    }

    return cmd;
  },
  getTransform: function getTransform() {
    if (this._transformDirty) {
      var scaleX = this.flipX ? -this._scale.x : this._scale.x;
      var scaleY = this.flipY ? -this._scale.y : this._scale.y;
      var positionX = this._position.x;
      var positionY = this._position.y;
      var rotation = this._rotation;
      var t = this._transform;
      t.tx = positionX;
      t.ty = positionY;
      t.a = t.d = 1;
      t.b = t.c = 0; // rotation Cos and Sin

      if (rotation) {
        var rotationRadians = rotation * 0.017453292519943295; //0.017453292519943295 = (Math.PI / 180);   for performance

        t.c = Math.sin(rotationRadians);
        t.d = Math.cos(rotationRadians);
        t.a = t.d;
        t.b = -t.c;
      } // Firefox on Vista and XP crashes
      // GPU thread in case of scale(0.0, 0.0)


      var sx = scaleX < 0.000001 && scaleX > -0.000001 ? 0.000001 : scaleX,
          sy = scaleY < 0.000001 && scaleY > -0.000001 ? 0.000001 : scaleY; // scale

      if (scaleX !== 1 || scaleY !== 1) {
        t.a *= sx;
        t.b *= sx;
        t.c *= sy;
        t.d *= sy;
      }

      this._transformDirty = false;
    }

    return this._transform;
  },
  getWorldTransform: function getWorldTransform() {
    if (this.parent) {
      return cc.AffineTransform.concat(cc.AffineTransform.identity, this.parent.getWorldTransform(), this.getTransform());
    }

    return this.getTransform();
  },
  updateTransform: function updateTransform(parentTransformDirty) {
    if (this._transformDirty || parentTransformDirty) {
      var scaleX = this.flipX ? -this._scale.x : this._scale.x;
      var scaleY = this.flipY ? -this._scale.y : this._scale.y;
      var positionX = this._position.x;
      var positionY = this._position.y;
      var rotation = this._rotation;
      var t = this._transform;
      t.tx = positionX;
      t.ty = positionY;
      t.a = t.d = 1;
      t.b = t.c = 0; // rotation Cos and Sin

      if (rotation) {
        var rotationRadians = rotation * 0.017453292519943295; //0.017453292519943295 = (Math.PI / 180);   for performance

        t.c = Math.sin(rotationRadians);
        t.d = Math.cos(rotationRadians);
        t.a = t.d;
        t.b = -t.c;
      } // Firefox on Vista and XP crashes
      // GPU thread in case of scale(0.0, 0.0)


      var sx = scaleX < 0.000001 && scaleX > -0.000001 ? 0.000001 : scaleX,
          sy = scaleY < 0.000001 && scaleY > -0.000001 ? 0.000001 : scaleY; // scale

      if (scaleX !== 1 || scaleY !== 1) {
        t.a *= sx;
        t.b *= sx;
        t.c *= sy;
        t.d *= sy;
      }
    }

    if (this.parent) {
      this._worldTransform = cc.AffineTransform.concat(cc.AffineTransform.identity, this.parent._worldTransform, this._transform);
    } else {
      this._worldTransform = this._transform;
    }

    var children = this.children;

    if (children) {
      for (var i = 0, ii = children.length; i < ii; i++) {
        var child = children[i];
        child.updateTransform(parentTransformDirty || this._transformDirty);
      }
    }

    this._transformDirty = false;
  }
};
module.exports = Transform;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXHJhcGhhZWxcXGNvbXBvbmVudFxcUi50cmFuc2Zvcm0uanMiXSwibmFtZXMiOlsiVHJhbnNmb3JtIiwicHJvcGVydGllcyIsIl9zY2FsZSIsImNjIiwidjIiLCJ0eXBlIiwiVmVjMiIsIl9wb3NpdGlvbiIsIl9yb3RhdGlvbiIsIl9mbGlwWCIsIl9mbGlwWSIsIl90cmFuc2Zvcm0iLCJhIiwiYiIsImMiLCJkIiwidHgiLCJ0eSIsInNlcmlhbGl6YWJsZSIsIl93b3JsZFRyYW5zZm9ybSIsIl90cmFuc2Zvcm1EaXJ0eSIsIm5vdGlmeSIsInBhcmVudCIsIl9kaXJ0eSIsInNjYWxlIiwiZ2V0Iiwic2V0IiwidmFsdWUiLCJlcXVhbHMiLCJwb3NpdGlvbiIsInJvdGF0aW9uIiwiZmxpcFgiLCJmbGlwWSIsIl90cmFuc2Zvcm1Db21tYW5kIiwiY21kIiwidCIsImxlbmd0aCIsInNsaWNlIiwidGVtcFBvaW50IiwiaSIsImlpIiwiaiIsIngiLCJ5IiwiQWZmaW5lVHJhbnNmb3JtIiwidHJhbnNmb3JtVmVjMiIsImdldFRyYW5zZm9ybSIsInNjYWxlWCIsInNjYWxlWSIsInBvc2l0aW9uWCIsInBvc2l0aW9uWSIsInJvdGF0aW9uUmFkaWFucyIsIk1hdGgiLCJzaW4iLCJjb3MiLCJzeCIsInN5IiwiZ2V0V29ybGRUcmFuc2Zvcm0iLCJjb25jYXQiLCJpZGVudGl0eSIsInVwZGF0ZVRyYW5zZm9ybSIsInBhcmVudFRyYW5zZm9ybURpcnR5IiwiY2hpbGRyZW4iLCJjaGlsZCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0EsSUFBSUEsU0FBUyxHQUFHO0FBRVpDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxNQUFNLEVBQUU7QUFDSixpQkFBU0MsRUFBRSxDQUFDQyxFQUFILENBQU0sQ0FBTixFQUFTLENBQVQsQ0FETDtBQUVKQyxNQUFBQSxJQUFJLEVBQUVGLEVB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cm9wZXJ0aWVzOiB7XG4gICAgICAgIF9zY2FsZToge1xuICAgICAgICAgICAgZGVmYXVsdDogY2MudjIoMSwgMSksXG4gICAgICAgICAgICB0eXBlOiBjYy5WZWMyXG4gICAgICAgIH0sXG4gICAgICAgIF9wb3NpdGlvbjoge1xuICAgICAgICAgICAgZGVmYXVsdDogY2MudjIoMCwwKSxcbiAgICAgICAgICAgIHR5cGU6IGNjLlZlYzJcbiAgICAgICAgfSxcbiAgICAgICAgX3JvdGF0aW9uOiAwLFxuICAgICAgICBcbiAgICAgICAgX2ZsaXBYOiBmYWxzZSxcbiAgICAgICAgX2ZsaXBZOiBmYWxzZSxcblxuICAgICAgICBfdHJhbnNmb3JtOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHthOiAxLCBiOiAwLCBjOiAwLCBkOiAxLCB0eDogMCwgdHk6IDB9O1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2VcbiAgICAgICAgfSxcblxuICAgICAgICBfd29ybGRUcmFuc2Zvcm06IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge2E6IDEsIGI6IDAsIGM6IDAsIGQ6IDEsIHR4OiAwLCB0eTogMH07XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2VyaWFsaXphYmxlOiBmYWxzZVxuICAgICAgICB9LFxuXG4gICAgICAgIF90cmFuc2Zvcm1EaXJ0eToge1xuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2UsXG5cbiAgICAgICAgICAgIG5vdGlmeTogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl90cmFuc2Zvcm1EaXJ0eSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyZW50Ll90cmFuc2Zvcm1EaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHNjYWxlOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2NhbGU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fc2NhbGUuZXF1YWxzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3NjYWxlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtRGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHBvc2l0aW9uOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcG9zaXRpb247XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcG9zaXRpb24uZXF1YWxzKHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX3Bvc2l0aW9uID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtRGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIHJvdGF0aW9uOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fcm90YXRpb247XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcm90YXRpb24gPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fcm90YXRpb24gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2Zvcm1EaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cblxuICAgICAgICBmbGlwWDoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2ZsaXBYO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2ZsaXBYID09PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2ZsaXBYID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtRGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIGZsaXBZOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZmxpcFk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZmxpcFkgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fZmxpcFkgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl90cmFuc2Zvcm1EaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIF90cmFuc2Zvcm1Db21tYW5kOiBmdW5jdGlvbiAoY21kLCB0KSB7XG4gICAgICAgIGlmIChjbWQubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjbWQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGNtZCA9IGNtZC5zbGljZSgxLCBjbWQubGVuZ3RoKTtcblxuICAgICAgICBpZiAodC5hID09PSAxICYmIHQuZCA9PT0gMSAmJlxuICAgICAgICAgICAgdC5iID09PSAwICYmIHQuYyA9PT0gMCAmJlxuICAgICAgICAgICAgdC50eCA9PT0gMCAmJiB0LnR5ID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gY21kO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIHRlbXBQb2ludCA9IGNjLnYyKCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gY21kLmxlbmd0aCAvIDI7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgaiA9IGkqMjtcbiAgICAgICAgICAgIHRlbXBQb2ludC54ID0gY21kW2pdO1xuICAgICAgICAgICAgdGVtcFBvaW50LnkgPSBjbWRbaiArIDFdO1xuXG4gICAgICAgICAgICB0ZW1wUG9pbnQgPSBjYy5BZmZpbmVUcmFuc2Zvcm0udHJhbnNmb3JtVmVjMihjYy52MigwLCAwKSwgdGVtcFBvaW50LCB0KTtcblxuICAgICAgICAgICAgY21kW2pdID0gdGVtcFBvaW50Lng7XG4gICAgICAgICAgICBjbWRbaisxXSA9IHRlbXBQb2ludC55O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNtZDtcbiAgICB9LFxuXG4gICAgZ2V0VHJhbnNmb3JtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFuc2Zvcm1EaXJ0eSkge1xuICAgICAgICAgICAgdmFyIHNjYWxlWCA9IHRoaXMuZmxpcFggPyAtdGhpcy5fc2NhbGUueCA6IHRoaXMuX3NjYWxlLng7XG4gICAgICAgICAgICB2YXIgc2NhbGVZID0gdGhpcy5mbGlwWSA/IC10aGlzLl9zY2FsZS55IDogdGhpcy5fc2NhbGUueTtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvblggPSB0aGlzLl9wb3NpdGlvbi54O1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uWSA9IHRoaXMuX3Bvc2l0aW9uLnk7XG4gICAgICAgICAgICB2YXIgcm90YXRpb24gPSB0aGlzLl9yb3RhdGlvbjtcblxuICAgICAgICAgICAgdmFyIHQgPSB0aGlzLl90cmFuc2Zvcm07XG4gICAgICAgICAgICB0LnR4ID0gcG9zaXRpb25YO1xuICAgICAgICAgICAgdC50eSA9IHBvc2l0aW9uWTtcbiAgICAgICAgICAgIHQuYSA9IHQuZCA9IDE7XG4gICAgICAgICAgICB0LmIgPSB0LmMgPSAwO1xuXG4gICAgICAgICAgICAvLyByb3RhdGlvbiBDb3MgYW5kIFNpblxuICAgICAgICAgICAgaWYgKHJvdGF0aW9uKSB7XG4gICAgICAgICAgICAgICAgdmFyIHJvdGF0aW9uUmFkaWFucyA9IHJvdGF0aW9uICogMC4wMTc0NTMyOTI1MTk5NDMyOTU7ICAvLzAuMDE3NDUzMjkyNTE5OTQzMjk1ID0gKE1hdGguUEkgLyAxODApOyAgIGZvciBwZXJmb3JtYW5jZVxuICAgICAgICAgICAgICAgIHQuYyA9IE1hdGguc2luKHJvdGF0aW9uUmFkaWFucyk7XG4gICAgICAgICAgICAgICAgdC5kID0gTWF0aC5jb3Mocm90YXRpb25SYWRpYW5zKTtcbiAgICAgICAgICAgICAgICB0LmEgPSB0LmQ7XG4gICAgICAgICAgICAgICAgdC5iID0gLXQuYztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gRmlyZWZveCBvbiBWaXN0YSBhbmQgWFAgY3Jhc2hlc1xuICAgICAgICAgICAgLy8gR1BVIHRocmVhZCBpbiBjYXNlIG9mIHNjYWxlKDAuMCwgMC4wKVxuICAgICAgICAgICAgdmFyIHN4ID0gKHNjYWxlWCA8IDAuMDAwMDAxICYmIHNjYWxlWCA+IC0wLjAwMDAwMSkgPyAwLjAwMDAwMSA6IHNjYWxlWCxcbiAgICAgICAgICAgICAgICBzeSA9IChzY2FsZVkgPCAwLjAwMDAwMSAmJiBzY2FsZVkgPiAtMC4wMDAwMDEpID8gMC4wMDAwMDEgOiBzY2FsZVk7XG5cbiAgICAgICAgICAgIC8vIHNjYWxlXG4gICAgICAgICAgICBpZiAoc2NhbGVYICE9PSAxIHx8IHNjYWxlWSAhPT0gMSkge1xuICAgICAgICAgICAgICAgIHQuYSAqPSBzeDtcbiAgICAgICAgICAgICAgICB0LmIgKj0gc3g7XG4gICAgICAgICAgICAgICAgdC5jICo9IHN5O1xuICAgICAgICAgICAgICAgIHQuZCAqPSBzeTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fdHJhbnNmb3JtRGlydHkgPSBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2Zvcm07XG4gICAgfSxcblxuICAgIGdldFdvcmxkVHJhbnNmb3JtOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGNjLkFmZmluZVRyYW5zZm9ybS5jb25jYXQoY2MuQWZmaW5lVHJhbnNmb3JtLmlkZW50aXR5LCB0aGlzLnBhcmVudC5nZXRXb3JsZFRyYW5zZm9ybSgpLCB0aGlzLmdldFRyYW5zZm9ybSgpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLmdldFRyYW5zZm9ybSgpO1xuICAgIH0sXG5cbiAgICB1cGRhdGVUcmFuc2Zvcm06IGZ1bmN0aW9uIChwYXJlbnRUcmFuc2Zvcm1EaXJ0eSkge1xuICAgICAgICBpZiAodGhpcy5fdHJhbnNmb3JtRGlydHkgfHwgcGFyZW50VHJhbnNmb3JtRGlydHkpIHtcbiAgICAgICAgICAgIHZhciBzY2FsZVggPSB0aGlzLmZsaXBYID8gLXRoaXMuX3NjYWxlLnggOiB0aGlzLl9zY2FsZS54O1xuICAgICAgICAgICAgdmFyIHNjYWxlWSA9IHRoaXMuZmxpcFkgPyAtdGhpcy5fc2NhbGUueSA6IHRoaXMuX3NjYWxlLnk7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb25YID0gdGhpcy5fcG9zaXRpb24ueDtcbiAgICAgICAgICAgIHZhciBwb3NpdGlvblkgPSB0aGlzLl9wb3NpdGlvbi55O1xuICAgICAgICAgICAgdmFyIHJvdGF0aW9uID0gdGhpcy5fcm90YXRpb247XG5cbiAgICAgICAgICAgIHZhciB0ID0gdGhpcy5fdHJhbnNmb3JtO1xuICAgICAgICAgICAgdC50eCA9IHBvc2l0aW9uWDtcbiAgICAgICAgICAgIHQudHkgPSBwb3NpdGlvblk7XG4gICAgICAgICAgICB0LmEgPSB0LmQgPSAxO1xuICAgICAgICAgICAgdC5iID0gdC5jID0gMDtcblxuICAgICAgICAgICAgLy8gcm90YXRpb24gQ29zIGFuZCBTaW5cbiAgICAgICAgICAgIGlmIChyb3RhdGlvbikge1xuICAgICAgICAgICAgICAgIHZhciByb3RhdGlvblJhZGlhbnMgPSByb3RhdGlvbiAqIDAuMDE3NDUzMjkyNTE5OTQzMjk1OyAgLy8wLjAxNzQ1MzI5MjUxOTk0MzI5NSA9IChNYXRoLlBJIC8gMTgwKTsgICBmb3IgcGVyZm9ybWFuY2VcbiAgICAgICAgICAgICAgICB0LmMgPSBNYXRoLnNpbihyb3RhdGlvblJhZGlhbnMpO1xuICAgICAgICAgICAgICAgIHQuZCA9IE1hdGguY29zKHJvdGF0aW9uUmFkaWFucyk7XG4gICAgICAgICAgICAgICAgdC5hID0gdC5kO1xuICAgICAgICAgICAgICAgIHQuYiA9IC10LmM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEZpcmVmb3ggb24gVmlzdGEgYW5kIFhQIGNyYXNoZXNcbiAgICAgICAgICAgIC8vIEdQVSB0aHJlYWQgaW4gY2FzZSBvZiBzY2FsZSgwLjAsIDAuMClcbiAgICAgICAgICAgIHZhciBzeCA9IChzY2FsZVggPCAwLjAwMDAwMSAmJiBzY2FsZVggPiAtMC4wMDAwMDEpID8gMC4wMDAwMDEgOiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgc3kgPSAoc2NhbGVZIDwgMC4wMDAwMDEgJiYgc2NhbGVZID4gLTAuMDAwMDAxKSA/IDAuMDAwMDAxIDogc2NhbGVZO1xuXG4gICAgICAgICAgICAvLyBzY2FsZVxuICAgICAgICAgICAgaWYgKHNjYWxlWCAhPT0gMSB8fCBzY2FsZVkgIT09IDEpIHtcbiAgICAgICAgICAgICAgICB0LmEgKj0gc3g7XG4gICAgICAgICAgICAgICAgdC5iICo9IHN4O1xuICAgICAgICAgICAgICAgIHQuYyAqPSBzeTtcbiAgICAgICAgICAgICAgICB0LmQgKj0gc3k7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgICAgICAgIHRoaXMuX3dvcmxkVHJhbnNmb3JtID0gY2MuQWZmaW5lVHJhbnNmb3JtLmNvbmNhdChjYy5BZmZpbmVUcmFuc2Zvcm0uaWRlbnRpdHksIHRoaXMucGFyZW50Ll93b3JsZFRyYW5zZm9ybSwgdGhpcy5fdHJhbnNmb3JtKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuX3dvcmxkVHJhbnNmb3JtID0gdGhpcy5fdHJhbnNmb3JtO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoaWxkcmVuID0gdGhpcy5jaGlsZHJlbjtcbiAgICAgICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBjaGlsZHJlbi5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNoaWxkID0gY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgY2hpbGQudXBkYXRlVHJhbnNmb3JtKHBhcmVudFRyYW5zZm9ybURpcnR5IHx8IHRoaXMuX3RyYW5zZm9ybURpcnR5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSAgICAgICAgXG5cbiAgICAgICAgdGhpcy5fdHJhbnNmb3JtRGlydHkgPSBmYWxzZTtcbiAgICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFRyYW5zZm9ybTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/writeNumber/NodeWrite.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ba084qs3lRIz7QMQMuCwOB1', 'NodeWrite');
// scripts/miniGame/writeNumber/NodeWrite.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  onLoad: function onLoad() {
    this.drawing = this.node.getChildByName('drawing').getComponent(cc.Graphics);
    this.demoNode = this.node.getChildByName('demoNode'); // this.polygonSprite = this.node.getChildByName('polygonSprite').getComponent(cc.PhysicsPolygonCollider);
    // this.points = this.polygonSprite.points;
    // this.points.forEach(element => element = this.node.convertToWorldSpace(element));
    // this.isCheckWrite = false;
    // this.countCheckWrite = 0;
    // this.arrayTouch = [];
    // this.node.on(cc.Node.EventType.TOUCH_START, (touch) => {
    //     // console.error("TOUCH START");
    //     var touchPos = cc.v2(touch.getLocation());
    //     // console.error("TOUCH START", this.polygonSprite.node.convertTouchToNodeSpace(touch));
    //     // console.error("TOUCH START", this.polygonSprite.node.getBoundingBoxToWorld().contains(this.polygonSprite.node.convertTouchToNodeSpace(touch)));
    //     this.arrayTouch.push(touchPos);
    //     this.drawing.lineWidth = 5;
    //     this.drawing.moveTo(touchPos.x, touchPos.y);
    // }, this);
    // this.node.on(cc.Node.EventType.TOUCH_MOVE, (touch) => {
    //     console.error("TOUCH MOVE");
    //     var touchPos = cc.v2(touch.getLocation());
    //     this.arrayTouch.push(touchPos);
    //     this.drawing.lineTo(touchPos.x, touchPos.y);
    //     this.drawing.strokeColor = new cc.Color(0,133,255,255);
    //     this.drawing.stroke();
    //     this.drawing.circle(touchPos.x, touchPos.y,20);
    //     this.drawing.fill();
    // }, this);
    // this.node.on(cc.Node.EventType.TOUCH_END, (touch) => {
    //     console.error("TOUCH END");
    //     var touchPos = cc.v2(touch.getLocation());
    //     this.arrayTouch.push(touchPos);
    //     for(let i = 0;i < this.arrayTouch.length; i++){
    //         if(!this.demoNode.getBoundingBoxToWorld().contains(this.arrayTouch[i])){
    //             this.drawing.clear();
    //         }else{
    //             this.countCheckWrite++;
    //         }
    //     }
    //     console.error(this.countCheckWrite);
    //     this.arrayTouch = [];
    //     this.countCheckWrite = 0;
    // }, this);
  },
  start: function start() {} // update (dt) {},

});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXHdyaXRlTnVtYmVyXFxOb2RlV3JpdGUuanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJvbkxvYWQiLCJkcmF3aW5nIiwibm9kZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0Q29tcG9uZW50IiwiR3JhcGhpY3MiLCJkZW1vTm9kZSIsInN0YXJ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQUtMQyxFQUFBQSxNQUxLLG9CQUtLO0FBQ04sU0FBS0MsT0FBTCxHQUFlLEtBQUtDLElBQUwsQ0FBVUMsY0FBVixDQUF5QixTQUF6QixFQUFvQ0MsWUFBcEMsQ0FBaURSLEVBQUUsQ0FBQ1MsUUFBcEQsQ0FBZjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IsS0FBS0osSUFBTCxDQUFVQyxjQUFWLENBQXlCLFVBQXpCLENBQWhCLENBRk0sQ0FHTjtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNILEdBbkRJO0FBcURMSSxFQUFBQSxLQXJESyxtQkFxREksQ0FFUixDQXZESSxDQXlETDs7QUF6REssQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY2MuQ2xhc3Moe1xyXG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICAgIHByb3BlcnRpZXM6IHtcclxuICAgIH0sXHJcbiAgICBvbkxvYWQgKCkge1xyXG4gICAgICAgIHRoaXMuZHJhd2luZyA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZHJhd2luZycpLmdldENvbXBvbmVudChjYy5HcmFwaGljcyk7XHJcbiAgICAgICAgdGhpcy5kZW1vTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZSgnZGVtb05vZGUnKTtcclxuICAgICAgICAvLyB0aGlzLnBvbHlnb25TcHJpdGUgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoJ3BvbHlnb25TcHJpdGUnKS5nZXRDb21wb25lbnQoY2MuUGh5c2ljc1BvbHlnb25Db2xsaWRlcik7XHJcbiAgICAgICAgLy8gdGhpcy5wb2ludHMgPSB0aGlzLnBvbHlnb25TcHJpdGUucG9pbnRzO1xyXG4gICAgICAgIC8vIHRoaXMucG9pbnRzLmZvckVhY2goZWxlbWVudCA9PiBlbGVtZW50ID0gdGhpcy5ub2RlLmNvbnZlcnRUb1dvcmxkU3BhY2UoZWxlbWVudCkpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gdGhpcy5pc0NoZWNrV3JpdGUgPSBmYWxzZTtcclxuICAgICAgICAvLyB0aGlzLmNvdW50Q2hlY2tXcml0ZSA9IDA7XHJcbiAgICAgICAgLy8gdGhpcy5hcnJheVRvdWNoID0gW107XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCAodG91Y2gpID0+IHtcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5lcnJvcihcIlRPVUNIIFNUQVJUXCIpO1xyXG4gICAgICAgIC8vICAgICB2YXIgdG91Y2hQb3MgPSBjYy52Mih0b3VjaC5nZXRMb2NhdGlvbigpKTtcclxuICAgICAgICAvLyAgICAgLy8gY29uc29sZS5lcnJvcihcIlRPVUNIIFNUQVJUXCIsIHRoaXMucG9seWdvblNwcml0ZS5ub2RlLmNvbnZlcnRUb3VjaFRvTm9kZVNwYWNlKHRvdWNoKSk7XHJcbiAgICAgICAgLy8gICAgIC8vIGNvbnNvbGUuZXJyb3IoXCJUT1VDSCBTVEFSVFwiLCB0aGlzLnBvbHlnb25TcHJpdGUubm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyh0aGlzLnBvbHlnb25TcHJpdGUubm9kZS5jb252ZXJ0VG91Y2hUb05vZGVTcGFjZSh0b3VjaCkpKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5hcnJheVRvdWNoLnB1c2godG91Y2hQb3MpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmRyYXdpbmcubGluZVdpZHRoID0gNTtcclxuICAgICAgICAvLyAgICAgdGhpcy5kcmF3aW5nLm1vdmVUbyh0b3VjaFBvcy54LCB0b3VjaFBvcy55KTtcclxuXHJcbiAgICAgICAgLy8gfSwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX01PVkUsICh0b3VjaCkgPT4ge1xyXG4gICAgICAgIC8vICAgICBjb25zb2xlLmVycm9yKFwiVE9VQ0ggTU9WRVwiKTtcclxuICAgICAgICAvLyAgICAgdmFyIHRvdWNoUG9zID0gY2MudjIodG91Y2guZ2V0TG9jYXRpb24oKSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYXJyYXlUb3VjaC5wdXNoKHRvdWNoUG9zKTtcclxuICAgICAgICAvLyAgICAgdGhpcy5kcmF3aW5nLmxpbmVUbyh0b3VjaFBvcy54LCB0b3VjaFBvcy55KTtcclxuICAgICAgICAvLyAgICAgdGhpcy5kcmF3aW5nLnN0cm9rZUNvbG9yID0gbmV3IGNjLkNvbG9yKDAsMTMzLDI1NSwyNTUpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmRyYXdpbmcuc3Ryb2tlKCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZHJhd2luZy5jaXJjbGUodG91Y2hQb3MueCwgdG91Y2hQb3MueSwyMCk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuZHJhd2luZy5maWxsKCk7XHJcbiAgICAgICAgLy8gfSwgdGhpcyk7XHJcbiAgICAgICAgLy8gdGhpcy5ub2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgKHRvdWNoKSA9PiB7XHJcbiAgICAgICAgLy8gICAgIGNvbnNvbGUuZXJyb3IoXCJUT1VDSCBFTkRcIik7XHJcbiAgICAgICAgLy8gICAgIHZhciB0b3VjaFBvcyA9IGNjLnYyKHRvdWNoLmdldExvY2F0aW9uKCkpO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmFycmF5VG91Y2gucHVzaCh0b3VjaFBvcyk7XHJcbiAgICAgICAgLy8gICAgIGZvcihsZXQgaSA9IDA7aSA8IHRoaXMuYXJyYXlUb3VjaC5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgLy8gICAgICAgICBpZighdGhpcy5kZW1vTm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jb250YWlucyh0aGlzLmFycmF5VG91Y2hbaV0pKXtcclxuICAgICAgICAvLyAgICAgICAgICAgICB0aGlzLmRyYXdpbmcuY2xlYXIoKTtcclxuICAgICAgICAvLyAgICAgICAgIH1lbHNle1xyXG4gICAgICAgIC8vICAgICAgICAgICAgIHRoaXMuY291bnRDaGVja1dyaXRlKys7XHJcbiAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyAgICAgY29uc29sZS5lcnJvcih0aGlzLmNvdW50Q2hlY2tXcml0ZSk7XHJcbiAgICAgICAgLy8gICAgIHRoaXMuYXJyYXlUb3VjaCA9IFtdO1xyXG4gICAgICAgIC8vICAgICB0aGlzLmNvdW50Q2hlY2tXcml0ZSA9IDA7XHJcbiAgICAgICAgLy8gfSwgdGhpcyk7XHJcbiAgICB9LFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuXHJcbiAgICB9LFxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/menu/MenuLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '59eb65+5GpO5J/T0qAd4EkG', 'MenuLoader');
// scripts/menu/MenuLoader.ts

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
var Global_1 = require("../Global");
var SoundManager = require("../manager/SoundManager");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var MenuLoader = /** @class */ (function (_super) {
    __extends(MenuLoader, _super);
    function MenuLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.menu = null;
        _this.challengeChoser = null;
        _this.tutorialChoser = null;
        _this.themeSelector = null;
        _this.miniGame = null;
        _this.startView = null;
        return _this;
    }
    MenuLoader.prototype.loadPlayground = function () {
        SoundManager.instance.playMouse();
        cc.director.loadScene("scenes/playground");
    };
    MenuLoader.prototype.loadListLesson = function (event, value) {
        SoundManager.instance.playMouse();
        cc.director.loadScene("scenes/listLesson");
        Global_1.Global.currentLesson = 0;
    };
    MenuLoader.prototype.loadLessonCurrent = function () {
        var _this = this;
        console.error(Global_1.Global.currentLesson);
        cc.resources.load("prefabs/lesson/Lesson" + Global_1.Global.currentLesson, cc.Prefab, function (error, asset) {
            if (error) {
                console.error(error);
            }
            else {
                console.error("Ok:", Global_1.Global.currentLesson);
                var node = cc.instantiate(asset);
                node.setContentSize(cc.winSize.width, cc.winSize.height);
                _this.startView.addChild(node);
            }
        });
    };
    MenuLoader.prototype.loadChallenge = function (event, value) {
        SoundManager.instance.playMouse();
        if (value == "addition" || value == "subtraction" || value == "multiplication" || value == "division") {
            Global_1.Global.currentChallenge = value;
            cc.director.loadScene("scenes/challenge");
        }
    };
    MenuLoader.prototype.loadTutorial = function (event, value) {
        SoundManager.instance.playMouse();
        if (value == "Basics" || value == "Addition" || value == "Subtraction") {
            Global_1.Global.currentTutorial = value;
            cc.director.loadScene("scenes/tutorial");
        }
        else if (value == "SMultiplication") {
            Global_1.Global.currentTutorial = value;
            cc.director.loadScene("scenes/tutorial_smul");
        }
        else if (value == "DMultiplication" || value == "Division") {
            Global_1.Global.currentTutorial = value;
            cc.director.loadScene("scenes/tutorial_ex");
        }
        else
            console.error("Invalid argument in MenuLoader.loadTutorial!");
    };
    MenuLoader.prototype.loadMiniGame = function (event, value) {
        var _this = this;
        SoundManager.instance.playMouse();
        cc.resources.load("prefabs/miniGame/" + value, cc.Prefab, function (error, asset) {
            if (error) {
                console.error(error);
            }
            else {
                var node = cc.instantiate(asset);
                _this.miniGame.addChild(node);
            }
        });
    };
    MenuLoader.prototype.switchLayout = function (event, value) {
        SoundManager.instance.playMouse();
        if (value == "menu") {
            this.menu.active = true;
            this.themeSelector.active = false;
            this.tutorialChoser.active = false;
            this.challengeChoser.active = false;
            this.startView.active = false;
            this.miniGame.active = false;
        }
        else if (value == "challenge") {
            this.menu.active = false;
            this.challengeChoser.active = true;
        }
        else if (value == "tutorial") {
            this.menu.active = false;
            this.tutorialChoser.active = true;
        }
        else if (value == "themeSelector") {
            this.themeSelector.active = true;
        }
        else if (value == "startView") {
            this.startView.active = true;
        }
        else if (value == "miniGame") {
            this.menu.active = false;
            this.startView.active = false;
            this.miniGame.active = true;
        }
    };
    MenuLoader.prototype.editBoxChanged = function (editBox) {
        Global_1.Global.resourcePack = editBox.string;
    };
    MenuLoader.prototype.onClickSound = function (event, value) {
        SoundManager.instance.playMouse();
        var music = cc.sys.localStorage.getItem("music");
        var state = '';
        if (music == "off") {
            event.currentTarget.opacity = 255;
            SoundManager.instance.playMusic();
            state = 'on';
        }
        else {
            event.currentTarget.opacity = 180;
            SoundManager.instance.stopMusic();
            state = 'off';
        }
        cc.sys.localStorage.setItem("music", state);
    };
    __decorate([
        property(cc.Node)
    ], MenuLoader.prototype, "menu", void 0);
    __decorate([
        property(cc.Node)
    ], MenuLoader.prototype, "challengeChoser", void 0);
    __decorate([
        property(cc.Node)
    ], MenuLoader.prototype, "tutorialChoser", void 0);
    __decorate([
        property(cc.Node)
    ], MenuLoader.prototype, "themeSelector", void 0);
    __decorate([
        property(cc.Node)
    ], MenuLoader.prototype, "miniGame", void 0);
    __decorate([
        property(cc.Node)
    ], MenuLoader.prototype, "startView", void 0);
    MenuLoader = __decorate([
        ccclass
    ], MenuLoader);
    return MenuLoader;
}(cc.Component));
exports.default = MenuLoader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWVudVxcTWVudUxvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBbUM7QUFDbkMsc0RBQXVEO0FBR2pELElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXdDLDhCQUFZO0lBQXBEO1FBQUEscUVBZ0lDO1FBOUhHLFVBQUksR0FBWSxJQUFJLENBQUM7UUFHckIscUJBQWUsR0FBWSxJQUFJLENBQUM7UUFHaEMsb0JBQWMsR0FBWSxJQUFJLENBQUM7UUFHL0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUd6QixlQUFTLEdBQVksSUFBSSxDQUFDOztJQStHOUIsQ0FBQztJQTdHRyxtQ0FBYyxHQUFkO1FBQ0ksWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO0lBQy9DLENBQUM7SUFDRCxtQ0FBYyxHQUFkLFVBQWUsS0FBVSxFQUFFLEtBQWE7UUFDcEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzNDLGVBQU0sQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxzQ0FBaUIsR0FBakI7UUFBQSxpQkFZQztRQVhHLE9BQU8sQ0FBQyxLQUFLLENBQUMsZUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQ3BDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLGVBQU0sQ0FBQyxhQUFhLEVBQUksRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQVksRUFBRSxLQUFnQjtZQUMxRyxJQUFHLEtBQUssRUFBRTtnQkFDTixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFDLGVBQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDMUMsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6RCxLQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNqQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELGtDQUFhLEdBQWIsVUFBYyxLQUFVLEVBQUUsS0FBYTtRQUNuQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xDLElBQUcsS0FBSyxJQUFJLFVBQVUsSUFBSSxLQUFLLElBQUksYUFBYSxJQUFJLEtBQUssSUFBSSxnQkFBZ0IsSUFBSSxLQUFLLElBQUksVUFBVSxFQUFFO1lBQ2xHLGVBQU0sQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7WUFFaEMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsa0JBQWtCLENBQUMsQ0FBQztTQUM3QztJQUNMLENBQUM7SUFFRCxpQ0FBWSxHQUFaLFVBQWEsS0FBVSxFQUFFLEtBQWE7UUFDbEMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxJQUFHLEtBQUssSUFBSSxRQUFRLElBQUksS0FBSyxJQUFJLFVBQVUsSUFBSSxLQUFLLElBQUksYUFBYSxFQUFFO1lBQ25FLGVBQU0sQ0FBQyxlQUFlLEdBQUcsS0FBSyxDQUFDO1lBRS9CLEVBQUUsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDNUM7YUFBTSxJQUFHLEtBQUssSUFBSSxpQkFBaUIsRUFBRTtZQUNsQyxlQUFNLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUUvQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxzQkFBc0IsQ0FBQyxDQUFDO1NBQ2pEO2FBQU0sSUFBRyxLQUFLLElBQUksaUJBQWlCLElBQUksS0FBSyxJQUFJLFVBQVUsRUFBRTtZQUN6RCxlQUFNLENBQUMsZUFBZSxHQUFHLEtBQUssQ0FBQztZQUUvQixFQUFFLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1NBQy9DOztZQUFNLE9BQU8sQ0FBQyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFhLEtBQVUsRUFBRSxLQUFhO1FBQXRDLGlCQVVDO1FBVEcsWUFBWSxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNsQyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxtQkFBbUIsR0FBRyxLQUFLLEVBQUUsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLEtBQVksRUFBRSxLQUFnQjtZQUNyRixJQUFHLEtBQUssRUFBRTtnQkFDTixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNILElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2pDLEtBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ2hDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsaUNBQVksR0FBWixVQUFhLEtBQVUsRUFBRSxLQUFhO1FBQ2xDLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDbEMsSUFBRyxLQUFLLElBQUksTUFBTSxFQUFFO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUN4QixJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDbEMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ25DLElBQUksQ0FBQyxlQUFlLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNwQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ2hDO2FBQU0sSUFBRyxLQUFLLElBQUksV0FBVyxFQUFFO1lBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDdEM7YUFBTSxJQUFHLEtBQUssSUFBSSxVQUFVLEVBQUU7WUFDM0IsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3pCLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztTQUNyQzthQUFNLElBQUcsS0FBSyxJQUFJLGVBQWUsRUFBRTtZQUNoQyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDcEM7YUFBTSxJQUFHLEtBQUssSUFBSSxXQUFXLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQ2hDO2FBQU0sSUFBRyxLQUFLLElBQUksVUFBVSxFQUFFO1lBQzNCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUN6QixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1NBQy9CO0lBQ0wsQ0FBQztJQUVELG1DQUFjLEdBQWQsVUFBZSxPQUFtQjtRQUM5QixlQUFNLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUM7SUFDekMsQ0FBQztJQUVELGlDQUFZLEdBQVosVUFBYSxLQUFVLEVBQUUsS0FBYTtRQUNsQyxZQUFZLENBQUMsUUFBUSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2xDLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNqRCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLEtBQUssSUFBSSxLQUFLLEVBQUU7WUFDaEIsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO1lBQ2pDLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEMsS0FBSyxHQUFHLElBQUksQ0FBQztTQUNoQjthQUNJO1lBQ0QsS0FBSyxDQUFDLGFBQWEsQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFBO1lBQ2pDLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxFQUFFLENBQUM7WUFDbEMsS0FBSyxHQUFHLEtBQUssQ0FBQztTQUNqQjtRQUNELEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFHaEQsQ0FBQztJQTdIRDtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDOzRDQUNFO0lBR3JCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ2E7SUFHaEM7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDWTtJQUcvQjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDO3FEQUNXO0lBRzlCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDTztJQWpCVCxVQUFVO1FBRDlCLE9BQU87T0FDYSxVQUFVLENBZ0k5QjtJQUFELGlCQUFDO0NBaElELEFBZ0lDLENBaEl1QyxFQUFFLENBQUMsU0FBUyxHQWdJbkQ7a0JBaElvQixVQUFVIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0dsb2JhbFwiO1xyXG5pbXBvcnQgKiBhcyBTb3VuZE1hbmFnZXIgZnJvbSBcIi4uL21hbmFnZXIvU291bmRNYW5hZ2VyXCJcclxuaW1wb3J0ICogYXMgTGlzdExlc3NvbiBmcm9tIFwiLi4vbGlzdExlc3Nvbi9MaXN0TGVzc29uXCJcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudUxvYWRlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBtZW51OiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBjaGFsbGVuZ2VDaG9zZXI6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIHR1dG9yaWFsQ2hvc2VyOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICB0aGVtZVNlbGVjdG9yOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBtaW5pR2FtZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgc3RhcnRWaWV3OiBjYy5Ob2RlID0gbnVsbDtcclxuICAgIFxyXG4gICAgbG9hZFBsYXlncm91bmQoKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLnBsYXlNb3VzZSgpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lcy9wbGF5Z3JvdW5kXCIpO1xyXG4gICAgfVxyXG4gICAgbG9hZExpc3RMZXNzb24oZXZlbnQ6IGFueSwgdmFsdWU6IHN0cmluZyl7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLnBsYXlNb3VzZSgpO1xyXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lcy9saXN0TGVzc29uXCIpO1xyXG4gICAgICAgIEdsb2JhbC5jdXJyZW50TGVzc29uID0gMDtcclxuICAgIH1cclxuICAgIGxvYWRMZXNzb25DdXJyZW50KCl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihHbG9iYWwuY3VycmVudExlc3Nvbik7XHJcbiAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJwcmVmYWJzL2xlc3Nvbi9MZXNzb25cIiArIEdsb2JhbC5jdXJyZW50TGVzc29uICAsIGNjLlByZWZhYiwgKGVycm9yOiBFcnJvciwgYXNzZXQ6IGNjLlByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiT2s6XCIsR2xvYmFsLmN1cnJlbnRMZXNzb24pO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShhc3NldCk7XHJcbiAgICAgICAgICAgICAgICBub2RlLnNldENvbnRlbnRTaXplKGNjLndpblNpemUud2lkdGgsIGNjLndpblNpemUuaGVpZ2h0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRWaWV3LmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRDaGFsbGVuZ2UoZXZlbnQ6IGFueSwgdmFsdWU6IHN0cmluZykge1xyXG4gICAgICAgIFNvdW5kTWFuYWdlci5pbnN0YW5jZS5wbGF5TW91c2UoKTtcclxuICAgICAgICBpZih2YWx1ZSA9PSBcImFkZGl0aW9uXCIgfHwgdmFsdWUgPT0gXCJzdWJ0cmFjdGlvblwiIHx8IHZhbHVlID09IFwibXVsdGlwbGljYXRpb25cIiB8fCB2YWx1ZSA9PSBcImRpdmlzaW9uXCIpIHtcclxuICAgICAgICAgICAgR2xvYmFsLmN1cnJlbnRDaGFsbGVuZ2UgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lcy9jaGFsbGVuZ2VcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRUdXRvcmlhbChldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLnBsYXlNb3VzZSgpO1xyXG4gICAgICAgIGlmKHZhbHVlID09IFwiQmFzaWNzXCIgfHwgdmFsdWUgPT0gXCJBZGRpdGlvblwiIHx8IHZhbHVlID09IFwiU3VidHJhY3Rpb25cIikge1xyXG4gICAgICAgICAgICBHbG9iYWwuY3VycmVudFR1dG9yaWFsID0gdmFsdWU7XHJcblxyXG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzY2VuZXMvdHV0b3JpYWxcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09IFwiU011bHRpcGxpY2F0aW9uXCIpIHtcclxuICAgICAgICAgICAgR2xvYmFsLmN1cnJlbnRUdXRvcmlhbCA9IHZhbHVlO1xyXG5cclxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2NlbmVzL3R1dG9yaWFsX3NtdWxcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09IFwiRE11bHRpcGxpY2F0aW9uXCIgfHwgdmFsdWUgPT0gXCJEaXZpc2lvblwiKSB7XHJcbiAgICAgICAgICAgIEdsb2JhbC5jdXJyZW50VHV0b3JpYWwgPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcInNjZW5lcy90dXRvcmlhbF9leFwiKTtcclxuICAgICAgICB9IGVsc2UgY29uc29sZS5lcnJvcihcIkludmFsaWQgYXJndW1lbnQgaW4gTWVudUxvYWRlci5sb2FkVHV0b3JpYWwhXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIGxvYWRNaW5pR2FtZShldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLnBsYXlNb3VzZSgpO1xyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy9taW5pR2FtZS9cIiArIHZhbHVlLCBjYy5QcmVmYWIsIChlcnJvcjogRXJyb3IsIGFzc2V0OiBjYy5QcmVmYWIpID0+IHtcclxuICAgICAgICAgICAgaWYoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShhc3NldCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm1pbmlHYW1lLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaExheW91dChldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLnBsYXlNb3VzZSgpO1xyXG4gICAgICAgIGlmKHZhbHVlID09IFwibWVudVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnRoZW1lU2VsZWN0b3IuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudHV0b3JpYWxDaG9zZXIuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbGxlbmdlQ2hvc2VyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0Vmlldy5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5taW5pR2FtZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9IGVsc2UgaWYodmFsdWUgPT0gXCJjaGFsbGVuZ2VcIikge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuY2hhbGxlbmdlQ2hvc2VyLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09IFwidHV0b3JpYWxcIikge1xyXG4gICAgICAgICAgICB0aGlzLm1lbnUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMudHV0b3JpYWxDaG9zZXIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYodmFsdWUgPT0gXCJ0aGVtZVNlbGVjdG9yXCIpIHtcclxuICAgICAgICAgICAgdGhpcy50aGVtZVNlbGVjdG9yLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIGlmKHZhbHVlID09IFwic3RhcnRWaWV3XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFZpZXcuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2UgaWYodmFsdWUgPT0gXCJtaW5pR2FtZVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMubWVudS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydFZpZXcuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubWluaUdhbWUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZWRpdEJveENoYW5nZWQoZWRpdEJveDogY2MuRWRpdEJveCkge1xyXG4gICAgICAgIEdsb2JhbC5yZXNvdXJjZVBhY2sgPSBlZGl0Qm94LnN0cmluZztcclxuICAgIH1cclxuXHJcbiAgICBvbkNsaWNrU291bmQoZXZlbnQ6IGFueSwgdmFsdWU6IHN0cmluZyl7XHJcbiAgICAgICAgU291bmRNYW5hZ2VyLmluc3RhbmNlLnBsYXlNb3VzZSgpO1xyXG4gICAgICAgIGxldCBtdXNpYyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm11c2ljXCIpO1xyXG4gICAgICAgIGxldCBzdGF0ZSA9ICcnO1xyXG4gICAgICAgIGlmIChtdXNpYyA9PSBcIm9mZlwiKSB7XHJcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQub3BhY2l0eSA9IDI1NVxyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuaW5zdGFuY2UucGxheU11c2ljKCk7XHJcbiAgICAgICAgICAgIHN0YXRlID0gJ29uJztcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGV2ZW50LmN1cnJlbnRUYXJnZXQub3BhY2l0eSA9IDE4MFxyXG4gICAgICAgICAgICBTb3VuZE1hbmFnZXIuaW5zdGFuY2Uuc3RvcE11c2ljKCk7XHJcbiAgICAgICAgICAgIHN0YXRlID0gJ29mZic7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIm11c2ljXCIsIHN0YXRlKTtcclxuXHJcblxyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/raphael/utils/R.utils.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '588929pZCZIpIto22fDnVAb', 'R.utils');
// scripts/miniGame/raphael/utils/R.utils.js

"use strict";

function mixin(dst, src, addon) {
  for (var key in src) {
    if (!addon || addon && !dst[key]) {
      if (typeof src[key] === 'object') {
        dst[key] = {};

        for (var subKey in src[key]) {
          dst[key][subKey] = src[key][subKey];
        }
      } else {
        dst[key] = src[key];
      }
    }
  }
}

module.exports = {
  defineClass: function defineClass() {
    var defines = {
      properties: {},
      statics: {}
    };

    for (var i = 0, ii = arguments.length; i < ii; i++) {
      var d = arguments[i];
      mixin(defines.properties, d.properties);
      mixin(defines.statics, d.statics);
      mixin(defines, d, true);
    }

    return defines;
  },
  path2curve: require('R.curve').path2curve
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXHJhcGhhZWxcXHV0aWxzXFxSLnV0aWxzLmpzIl0sIm5hbWVzIjpbIm1peGluIiwiZHN0Iiwic3JjIiwiYWRkb24iLCJrZXkiLCJzdWJLZXkiLCJtb2R1bGUiLCJleHBvcnRzIiwiZGVmaW5lQ2xhc3MiLCJkZWZpbmVzIiwicHJvcGVydGllcyIsInN0YXRpY3MiLCJpIiwiaWkiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJkIiwicGF0aDJjdXJ2ZSIsInJlcXVpcmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsS0FBVCxDQUFnQkMsR0FBaEIsRUFBcUJDLEdBQXJCLEVBQTBCQyxLQUExQixFQUFpQztBQUM3QixPQUFLLElBQUlDLEdBQVQsSUFBZ0JGLEdBQWhCLEVBQXFCO0FBQ2pCLFFBQUksQ0FBQ0MsS0FBRCxJQUFXQSxLQUFLLElBQUksQ0FBQ0YsR0FBRyxDQUFDRyxHQUFELENBQTVCLEVBQW9DO0FBQ2hDLFVBQUksT0FBT0YsR0FBRyxDQUFDRSxHQUFELENBQVYsS0FBb0IsUUFBeEIsRUFBa0M7QUFDOUJILFFBQUFBLEdBQUcsQ0FBQ0csR0FBRCxDQUFILEdBQVcsRUFBWDs7QUFDQSxhQUFLLElBQUlDLE1BQVQsSUFBbUJILEdBQUcsQ0FBQ0UsR0FBRCxDQUF0QixFQUE2QjtBQUN6QkgsVUFBQUEsR0FBRyxDQUFDRyxHQUFELENBQUgsQ0FBU0MsTUFBVCxJQUFtQkgsR0FBRyxDQUFDRSxHQUFELENBQUgsQ0FBU0MsTUFBVCxDQUFuQjtBQUNIO0FBQ0osT0FMRCxNQU1LO0FBQ0RKLFFBQUFBLEdBQUcsQ0FBQ0csR0FBRCxDQUFILEdBQVdGLEdBQUcsQ0FBQ0UsR0FBRCxDQUFkO0FBQ0g7QUFDSjtBQUNKO0FBQ0o7O0FBRURFLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjtBQUNiQyxFQUFBQSxXQUFXLEVBQUUsdUJBQVk7QUFDckIsUUFBSUMsT0FBTyxHQUFHO0FBQ1ZDLE1BQUFBLFVBQVUsRUFBRSxFQURGO0FBRVZDLE1BQUFBLE9BQU8sRUFBRTtBQUZDLEtBQWQ7O0FBS0EsU0FBSyxJQUFJQyxDQUFDLEdBQUcsQ0FBUixFQUFXQyxFQUFFLEdBQUdDLFNBQVMsQ0FBQ0MsTUFBL0IsRUFBdUNILENBQUMsR0FBR0MsRUFBM0MsRUFBK0NELENBQUMsRUFBaEQsRUFBb0Q7QUFDaEQsVUFBSUksQ0FBQyxHQUFHRixTQUFTLENBQUNGLENBQUQsQ0FBakI7QUFFQVosTUFBQUEsS0FBSyxDQUFDUyxPQUFPLENBQUNDLFVBQVQsRUFBcUJNLENBQUMsQ0FBQ04sVUFBdkIsQ0FBTDtBQUNBVixNQUFBQSxLQUFLLENBQUNTLE9BQU8sQ0FBQ0UsT0FBVCxFQUFrQkssQ0FBQyxDQUFDTCxPQUFwQixDQUFMO0FBQ0FYLE1BQUFBLEtBQUssQ0FBQ1MsT0FBRCxFQUFVTyxDQUFWLEVBQWEsSUFBYixDQUFMO0FBQ0g7O0FBRUQsV0FBT1AsT0FBUDtBQUNILEdBaEJZO0FBaUJiUSxFQUFBQSxVQUFVLEVBQUVDLE9BQU8sQ0FBQyxTQUFELENBQVAsQ0FBbUJEO0FBakJsQixDQUFqQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gbWl4aW4gKGRzdCwgc3JjLCBhZGRvbikge1xuICAgIGZvciAobGV0IGtleSBpbiBzcmMpIHtcbiAgICAgICAgaWYgKCFhZGRvbiB8fCAoYWRkb24gJiYgIWRzdFtrZXldKSkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBzcmNba2V5XSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IHt9O1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHN1YktleSBpbiBzcmNba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBkc3Rba2V5XVtzdWJLZXldID0gc3JjW2tleV1bc3ViS2V5XTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBkc3Rba2V5XSA9IHNyY1trZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBkZWZpbmVDbGFzczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGVmaW5lcyA9IHtcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IHt9LFxuICAgICAgICAgICAgc3RhdGljczoge31cbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMCwgaWkgPSBhcmd1bWVudHMubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgdmFyIGQgPSBhcmd1bWVudHNbaV07XG5cbiAgICAgICAgICAgIG1peGluKGRlZmluZXMucHJvcGVydGllcywgZC5wcm9wZXJ0aWVzKTtcbiAgICAgICAgICAgIG1peGluKGRlZmluZXMuc3RhdGljcywgZC5zdGF0aWNzKTtcbiAgICAgICAgICAgIG1peGluKGRlZmluZXMsIGQsIHRydWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGRlZmluZXM7XG4gICAgfSxcbiAgICBwYXRoMmN1cnZlOiByZXF1aXJlKCdSLmN1cnZlJykucGF0aDJjdXJ2ZSxcbn07XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/playground/PlaygroundLoader.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8c5fbtNk+pNgpqkfwD1mNQh', 'PlaygroundLoader');
// scripts/playground/PlaygroundLoader.ts

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
var PlaygroundLoader = /** @class */ (function (_super) {
    __extends(PlaygroundLoader, _super);
    function PlaygroundLoader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingScreen = null;
        _this.abacus = null;
        return _this;
    }
    PlaygroundLoader.prototype.onLoad = function () {
        var _this = this;
        this.loadingScreen.active = true;
        this.abacus.getComponent("Abacus").initialize().then(function () {
            _this.loadingScreen.active = false;
        }).catch(function (error) { return console.error(error); });
    };
    PlaygroundLoader.prototype.loadMenu = function () {
        cc.director.loadScene("scenes/menu");
    };
    __decorate([
        property(cc.Node)
    ], PlaygroundLoader.prototype, "loadingScreen", void 0);
    __decorate([
        property(cc.Node)
    ], PlaygroundLoader.prototype, "abacus", void 0);
    PlaygroundLoader = __decorate([
        ccclass
    ], PlaygroundLoader);
    return PlaygroundLoader;
}(cc.Component));
exports.default = PlaygroundLoader;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xccGxheWdyb3VuZFxcUGxheWdyb3VuZExvYWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE4QyxvQ0FBWTtJQUExRDtRQUFBLHFFQWtCQztRQWhCRyxtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixZQUFNLEdBQVksSUFBSSxDQUFDOztJQWEzQixDQUFDO0lBWEcsaUNBQU0sR0FBTjtRQUFBLGlCQU1DO1FBTEcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWpDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksQ0FBQztZQUNqRCxLQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsRUFBcEIsQ0FBb0IsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUFFRCxtQ0FBUSxHQUFSO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQWZEO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkRBQ1c7SUFHOUI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDSTtJQUxOLGdCQUFnQjtRQURwQyxPQUFPO09BQ2EsZ0JBQWdCLENBa0JwQztJQUFELHVCQUFDO0NBbEJELEFBa0JDLENBbEI2QyxFQUFFLENBQUMsU0FBUyxHQWtCekQ7a0JBbEJvQixnQkFBZ0IiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBsYXlncm91bmRMb2FkZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgbG9hZGluZ1NjcmVlbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgYWJhY3VzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2NyZWVuLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIHRoaXMuYWJhY3VzLmdldENvbXBvbmVudChcIkFiYWN1c1wiKS5pbml0aWFsaXplKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGluZ1NjcmVlbi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE1lbnUoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2NlbmVzL21lbnVcIik7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/tutorial/TutorialNode.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '86728QrhvBIQ4yuj6TeNBOh', 'TutorialNode');
// scripts/tutorial/TutorialNode.ts

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
var TutorialNode = /** @class */ (function (_super) {
    __extends(TutorialNode, _super);
    function TutorialNode() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.predefinedRows = [];
        _this.interactiveRows = []; // the beads that are allowed to move are stored in binary number (ex. 0b10000 for first [1] bead to be interactive)
        _this.completeValue = -1;
        return _this;
    }
    __decorate([
        property([cc.Integer])
    ], TutorialNode.prototype, "predefinedRows", void 0);
    __decorate([
        property([cc.Integer])
    ], TutorialNode.prototype, "interactiveRows", void 0);
    __decorate([
        property(cc.Integer)
    ], TutorialNode.prototype, "completeValue", void 0);
    TutorialNode = __decorate([
        ccclass
    ], TutorialNode);
    return TutorialNode;
}(cc.Component));
exports.default = TutorialNode;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdHV0b3JpYWxcXFR1dG9yaWFsTm9kZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQVNDO1FBUEcsb0JBQWMsR0FBYSxFQUFFLENBQUM7UUFHOUIscUJBQWUsR0FBYSxFQUFFLENBQUMsQ0FBQyxvSEFBb0g7UUFHcEosbUJBQWEsR0FBVyxDQUFDLENBQUMsQ0FBQzs7SUFDL0IsQ0FBQztJQVBHO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3dEQUNPO0lBRzlCO1FBREMsUUFBUSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lEQUNRO0lBRy9CO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUM7dURBQ0s7SUFSVixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBU2hDO0lBQUQsbUJBQUM7Q0FURCxBQVNDLENBVHlDLEVBQUUsQ0FBQyxTQUFTLEdBU3JEO2tCQVRvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdXRvcmlhbE5vZGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KFtjYy5JbnRlZ2VyXSlcclxuICAgIHByZWRlZmluZWRSb3dzOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eShbY2MuSW50ZWdlcl0pXHJcbiAgICBpbnRlcmFjdGl2ZVJvd3M6IG51bWJlcltdID0gW107IC8vIHRoZSBiZWFkcyB0aGF0IGFyZSBhbGxvd2VkIHRvIG1vdmUgYXJlIHN0b3JlZCBpbiBiaW5hcnkgbnVtYmVyIChleC4gMGIxMDAwMCBmb3IgZmlyc3QgWzFdIGJlYWQgdG8gYmUgaW50ZXJhY3RpdmUpXHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5JbnRlZ2VyKVxyXG4gICAgY29tcGxldGVWYWx1ZTogbnVtYmVyID0gLTE7XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson0/Lesson0.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2abebBym7FFtpgs0w2LvT06', 'Lesson0');
// scripts/listLesson/lesson0/Lesson0.ts

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
var Lesson0 = /** @class */ (function (_super) {
    __extends(Lesson0, _super);
    function Lesson0() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.labelText = null;
        // onLoad () {}
        _this.listReference = [];
        _this.arrow = null;
        _this.animHand = null;
        return _this;
        // runAction(action){
        //     this.node.stopAllActions();
        //     this.node.runAction(action);
        // }
    }
    Lesson0.prototype.start = function () {
        this.setAction();
    };
    Lesson0.prototype.setAction = function () {
        var _this = this;
        var action1 = cc.callFunc(function () {
            _this.arrow.active = false;
            _this.listReference[0].active = true;
            _this.listReference[1].active = false;
            _this.listReference[2].active = false;
        });
        var action2 = cc.callFunc(function () {
            _this.animHand.setPosition(-120, -200);
            _this.listReference[0].active = false;
            _this.listReference[1].active = true;
            _this.listReference[2].active = false;
        });
        var action3 = cc.callFunc(function () {
            _this.animHand.runAction(cc.moveTo(0.1, cc.v2(-940, -200)));
        });
        var action4 = cc.callFunc(function () {
            _this.listReference[0].active = false;
            _this.listReference[1].active = false;
            _this.listReference[2].active = true;
            _this.arrow.active = true;
        });
        this.node.runAction(cc.sequence(action1, cc.delayTime(2.5), action2, cc.delayTime(2.0), action3, cc.delayTime(3.0), action4));
    };
    __decorate([
        property(cc.Label)
    ], Lesson0.prototype, "labelText", void 0);
    __decorate([
        property([cc.Node])
    ], Lesson0.prototype, "listReference", void 0);
    __decorate([
        property(cc.Node)
    ], Lesson0.prototype, "arrow", void 0);
    __decorate([
        property(cc.Node)
    ], Lesson0.prototype, "animHand", void 0);
    Lesson0 = __decorate([
        ccclass
    ], Lesson0);
    return Lesson0;
}(cc.Component));
exports.default = Lesson0;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uMFxcTGVzc29uMC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXdEQztRQXRERyxlQUFTLEdBQWEsSUFBSSxDQUFDO1FBQzNCLGVBQWU7UUFFZixtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUc5QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBR3RCLGNBQVEsR0FBWSxJQUFJLENBQUM7O1FBeUN6QixxQkFBcUI7UUFDckIsa0NBQWtDO1FBQ2xDLG1DQUFtQztRQUNuQyxJQUFJO0lBQ1IsQ0FBQztJQTFDRyx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFFRCwyQkFBUyxHQUFUO1FBQUEsaUJBZ0NDO1FBL0JHLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQzFCLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNwQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDckMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUNyQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDcEMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3pDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDckMsS0FBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNwQyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDN0IsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDZixFQUFFLENBQUMsUUFBUSxDQUNDLE9BQU8sRUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixPQUFPLEVBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxFQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE9BQU8sQ0FBQyxDQUN2QixDQUFBO0lBQ0wsQ0FBQztJQWhERDtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsS0FBSyxDQUFDOzhDQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO2tEQUNTO0lBRzlCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFHdEI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQVhSLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F3RDNCO0lBQUQsY0FBQztDQXhERCxBQXdEQyxDQXhEb0MsRUFBRSxDQUFDLFNBQVMsR0F3RGhEO2tCQXhEb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGVzc29uMCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkgKGNjLkxhYmVsKVxyXG4gICAgbGFiZWxUZXh0OiBjYy5MYWJlbCA9IG51bGw7XHJcbiAgICAvLyBvbkxvYWQgKCkge31cclxuICAgIEBwcm9wZXJ0eSAoW2NjLk5vZGVdKVxyXG4gICAgbGlzdFJlZmVyZW5jZTogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgYXJyb3c6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIGFuaW1IYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0QWN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmFycm93LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RSZWZlcmVuY2VbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0UmVmZXJlbmNlWzFdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RSZWZlcmVuY2VbMl0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbUhhbmQuc2V0UG9zaXRpb24oLTEyMCwtMjAwKTtcclxuICAgICAgICAgICAgdGhpcy5saXN0UmVmZXJlbmNlWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RSZWZlcmVuY2VbMV0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5saXN0UmVmZXJlbmNlWzJdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGFjdGlvbjMgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1IYW5kLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC4xLGNjLnYyKC05NDAsLTIwMCkpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb240ID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5saXN0UmVmZXJlbmNlWzBdLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RSZWZlcmVuY2VbMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFJlZmVyZW5jZVsyXS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFycm93LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uMSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDIuNSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFjdGlvbjIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgyLjApLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY3Rpb24zLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMy4wKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uNClcclxuICAgICAgICApXHJcbiAgICB9XHJcblxyXG4gICAgLy8gcnVuQWN0aW9uKGFjdGlvbil7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XHJcbiAgICAvLyAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihhY3Rpb24pO1xyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/FullSize.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e3eb11LGg9LLLo+wbA7dDLV', 'FullSize');
// scripts/FullSize.ts

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
var FullSize = /** @class */ (function (_super) {
    __extends(FullSize, _super);
    function FullSize() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FullSize.prototype.start = function () {
        this.node.setContentSize(cc.winSize.width, cc.winSize.height);
    };
    FullSize.prototype.onLoad = function () {
        this.node.setContentSize(cc.winSize.width, cc.winSize.height);
    };
    FullSize = __decorate([
        ccclass
    ], FullSize);
    return FullSize;
}(cc.Component));
exports.default = FullSize;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcRnVsbFNpemUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBc0MsNEJBQVk7SUFBbEQ7O0lBUUEsQ0FBQztJQVBHLHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFDRCx5QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBTmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FRNUI7SUFBRCxlQUFDO0NBUkQsQUFRQyxDQVJxQyxFQUFFLENBQUMsU0FBUyxHQVFqRDtrQkFSb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRnVsbFNpemUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLm5vZGUuc2V0Q29udGVudFNpemUoY2Mud2luU2l6ZS53aWR0aCwgY2Mud2luU2l6ZS5oZWlnaHQpO1xyXG4gICAgfVxyXG4gICAgb25Mb2FkKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ThemeList.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '97a659HBMFJYJ3d6XJ/Cyrn', 'ThemeList');
// scripts/ThemeList.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ThemeList = void 0;
var ThemeList = [
    "Green",
    "Orange",
    "Purple",
    "Honey",
    "Glass"
];
exports.ThemeList = ThemeList;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVGhlbWVMaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU0sU0FBUyxHQUFHO0lBQ2QsT0FBTztJQUNQLFFBQVE7SUFDUixRQUFRO0lBQ1IsT0FBTztJQUNQLE9BQU87Q0FDVixDQUFDO0FBRU8sOEJBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBUaGVtZUxpc3QgPSBbXHJcbiAgICBcIkdyZWVuXCIsXHJcbiAgICBcIk9yYW5nZVwiLFxyXG4gICAgXCJQdXJwbGVcIixcclxuICAgIFwiSG9uZXlcIixcclxuICAgIFwiR2xhc3NcIlxyXG5dO1xyXG5cclxuZXhwb3J0IHsgVGhlbWVMaXN0IH07XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Row.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6eb15TA0LlND5OJAuO7PHgp', 'Row');
// scripts/Row.ts

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
var Row = /** @class */ (function (_super) {
    __extends(Row, _super);
    function Row() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // horizontal on 120
        _this.numberLabel = null;
        _this.beads = [];
        _this.number = 0;
        _this.initialized = false;
        return _this;
    }
    Row.prototype.initialize = function () {
        var _this = this;
        this.node.children.forEach(function (value) {
            if (value.name == "Bead") {
                _this.beads.push(value);
                value.getComponent("Bead").initialize();
            }
            _this.initialized = true;
        });
    };
    Row.prototype.update = function (dt) {
        var _this = this;
        if (!this.initialized)
            return;
        this.number = 0;
        this.beads.forEach(function (value, index) {
            if (value.getComponent("Bead").placement == 1) {
                if (index < 4)
                    _this.number++;
                else
                    _this.number += 5;
            }
        });
        this.numberLabel.string = this.number.toString();
    };
    Row.prototype.setValue = function (value) {
        if (value < 0 || value > 9) {
            console.error("Invalid value passed to Row.setValue");
            return;
        }
        // reset row
        this.beads.forEach(function (value) {
            value.getComponent("Bead").setPlacement(0);
        });
        var index = 0; // keep track of (1) beads to set them in order
        while (value > 0) {
            var node = null;
            if (value >= 5) {
                node = this.beads[4];
                value -= 5;
            }
            else {
                node = this.beads[index];
                index++;
                value--;
            }
            node.getComponent("Bead").setPlacement(1);
        }
    };
    Row.prototype.setInteractive = function (value, which) {
        if (!value) {
            this.beads.forEach(function (node) {
                node.getComponent("Bead").setInteractive(false);
            });
        }
        else {
            for (var i = this.beads.length - 1; i >= 0; --i) {
                if (((which >> i) & 1) == 1) {
                    this.beads[this.beads.length - 1 - i].getComponent("Bead").setInteractive(true);
                }
            }
        }
    };
    Row.prototype.applyTheme = function (resourcePack) {
        this.beads.forEach(function (value) {
            value.getComponent("Bead").applyTheme(resourcePack);
        });
        this.node.getChildByName("MiddleVBar").getComponent(cc.Sprite).spriteFrame = resourcePack.vbar;
    };
    Row.prototype.reset = function () {
        this.beads.forEach(function (value) {
            value.getComponent("Bead").reset();
        });
    };
    __decorate([
        property(cc.Label)
    ], Row.prototype, "numberLabel", void 0);
    Row = __decorate([
        ccclass
    ], Row);
    return Row;
}(cc.Component));
exports.default = Row;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUm93LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQWlDLHVCQUFZO0lBQTdDO1FBQUEscUVBNkZDO1FBNUZHLG9CQUFvQjtRQUVwQixpQkFBVyxHQUFhLElBQUksQ0FBQztRQUU3QixXQUFLLEdBQWMsRUFBRSxDQUFDO1FBQ3RCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFFWCxpQkFBVyxHQUFZLEtBQUssQ0FBQzs7SUFxRmpDLENBQUM7SUFuRkcsd0JBQVUsR0FBVjtRQUFBLGlCQVVDO1FBVEcsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBYztZQUN0QyxJQUFHLEtBQUssQ0FBQyxJQUFJLElBQUksTUFBTSxFQUFFO2dCQUNyQixLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFdkIsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLEVBQUUsQ0FBQzthQUMzQztZQUVELEtBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQzVCLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUVELG9CQUFNLEdBQU4sVUFBTyxFQUFFO1FBQVQsaUJBYUM7UUFaRyxJQUFHLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBRTdCLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBYyxFQUFFLEtBQWE7WUFDN0MsSUFBRyxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxDQUFDLEVBQUU7Z0JBQzFDLElBQUcsS0FB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QUUsQ0FBQztRQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUF6RkQ7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDUztJQUhaLEdBQUc7UUFEdkIsT0FBTztPQUNhLEdBQUcsQ0E2RnZCO0lBQUQsVUFBQztDQTdGRCxBQTZGQyxDQTdGZ0MsRUFBRSxDQUFDLFNBQVMsR0E2RjVDO2tCQTdGb0IsR0FBRyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc291cmNlUGFjayB9IGZyb20gXCIuL1Jlc291cmNlUGFja1wiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3cgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgLy8gaG9yaXpvbnRhbCBvbiAxMjBcclxuICAgIEBwcm9wZXJ0eSAoY2MuTGFiZWwpXHJcbiAgICBudW1iZXJMYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIGJlYWRzOiBjYy5Ob2RlW10gPSBbXTtcclxuICAgIG51bWJlciA9IDA7XHJcblxyXG4gICAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBpbml0aWFsaXplKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5jaGlsZHJlbi5mb3JFYWNoKCh2YWx1ZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICBpZih2YWx1ZS5uYW1lID09IFwiQmVhZFwiKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlYWRzLnB1c2godmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhbHVlLmdldENvbXBvbmVudChcIkJlYWRcIikuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUoZHQpIHtcclxuICAgICAgICBpZighdGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICB0aGlzLm51bWJlciA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMuYmVhZHMuZm9yRWFjaCgodmFsdWU6IGNjLk5vZGUsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgaWYodmFsdWUuZ2V0Q29tcG9uZW50KFwiQmVhZFwiKS5wbGFjZW1lbnQgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPCA0KSB0aGlzLm51bWJlcisrO1xyXG4gICAgICAgICAgICAgICAgZWxzZSB0aGlzLm51bWJlciArPSA1O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHRoaXMubnVtYmVyTGFiZWwuc3RyaW5nID0gdGhpcy5udW1iZXIudG9TdHJpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYodmFsdWUgPCAwIHx8IHZhbHVlID4gOSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCB2YWx1ZSBwYXNzZWQgdG8gUm93LnNldFZhbHVlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyByZXNldCByb3dcclxuICAgICAgICB0aGlzLmJlYWRzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5nZXRDb21wb25lbnQoXCJCZWFkXCIpLnNldFBsYWNlbWVudCgwKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDsgLy8ga2VlcCB0cmFjayBvZiAoMSkgYmVhZHMgdG8gc2V0IHRoZW0gaW4gb3JkZXJcclxuICAgICAgICB3aGlsZSh2YWx1ZSA+IDApIHtcclxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgaWYodmFsdWUgPj0gNSkge1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMuYmVhZHNbNF07XHJcbiAgICAgICAgICAgICAgICB2YWx1ZSAtPSA1O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbm9kZSA9IHRoaXMuYmVhZHNbaW5kZXhdO1xyXG5cclxuICAgICAgICAgICAgICAgIGluZGV4Kys7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZS0tO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChcIkJlYWRcIikuc2V0UGxhY2VtZW50KDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRlcmFjdGl2ZSh2YWx1ZTogYm9vbGVhbiwgd2hpY2g6IG51bWJlcikge1xyXG4gICAgICAgIGlmKCF2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLmJlYWRzLmZvckVhY2gobm9kZSA9PiB7XHJcbiAgICAgICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChcIkJlYWRcIikuc2V0SW50ZXJhY3RpdmUoZmFsc2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSB0aGlzLmJlYWRzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XHJcbiAgICAgICAgICAgICAgICBpZigoKHdoaWNoID4+IGkpICYgMSkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmVhZHNbdGhpcy5iZWFkcy5sZW5ndGggLSAxIC0gaV0uZ2V0Q29tcG9uZW50KFwiQmVhZFwiKS5zZXRJbnRlcmFjdGl2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBhcHBseVRoZW1lKHJlc291cmNlUGFjazogUmVzb3VyY2VQYWNrKSB7XHJcbiAgICAgICAgdGhpcy5iZWFkcy5mb3JFYWNoKCh2YWx1ZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5nZXRDb21wb25lbnQoXCJCZWFkXCIpLmFwcGx5VGhlbWUocmVzb3VyY2VQYWNrKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiTWlkZGxlVkJhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHJlc291cmNlUGFjay52YmFyO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMuYmVhZHMuZm9yRWFjaCgodmFsdWU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgdmFsdWUuZ2V0Q29tcG9uZW50KFwiQmVhZFwiKS5yZXNldCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/Common.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e6b22R73CROJ52X/r3lICnQ', 'Common');
// scripts/listLesson/Common.ts

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
var Global_1 = require("../Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TutorialManager = /** @class */ (function (_super) {
    __extends(TutorialManager, _super);
    function TutorialManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.progressBar = null;
        _this.backSplash = null;
        _this.arrowNode = null;
        _this.listReference = [];
        _this.indexCurrent = null;
        return _this;
    }
    TutorialManager.prototype.onLoad = function () {
        this.progressBar.progress = 0;
        this.indexCurrent = 0;
    };
    TutorialManager.prototype.start = function () {
        this.listReference[0].active = true;
    };
    TutorialManager.prototype.update = function (dt) {
        if (this.indexCurrent >= this.listReference.length) {
            this.backSplash.active = true;
            this.listReference[this.indexCurrent - 1].active = false;
            this.indexCurrent -= 1;
        }
    };
    TutorialManager.prototype.loadMenu = function () {
        if (Global_1.Global.firstTime)
            Global_1.Global.firstTime = false;
        cc.director.loadScene("scenes/menu");
    };
    TutorialManager.prototype.loadListLesson = function () {
        if (Global_1.Global.firstTime)
            Global_1.Global.firstTime = false;
        cc.director.loadScene("scenes/listLesson");
    };
    TutorialManager.prototype.loadNextLesson = function () {
        var _this = this;
        var nextLesson = Global_1.Global.currentLesson + 1;
        console.error(nextLesson);
        console.error(typeof Global_1.Global.currentLesson);
        cc.resources.load("prefabs/lesson/Lesson" + nextLesson, cc.Prefab, function (error, asset) {
            if (error) {
                console.error(error);
            }
            else {
                var node = cc.instantiate(asset);
                node.setContentSize(cc.winSize.width, cc.winSize.height);
                _this.node.addChild(node);
                Global_1.Global.currentLesson = (Global_1.Global.currentLesson + 1);
            }
        });
    };
    TutorialManager.prototype.nextProgress = function () {
        this.progressBar.progress += 1 / (this.listReference.length - 1);
        this.indexCurrent += 1;
        if (this.indexCurrent >= this.listReference.length) {
            return;
        }
        this.listReference[this.indexCurrent].active = true;
        this.listReference[this.indexCurrent - 1].active = false;
    };
    __decorate([
        property(cc.ProgressBar)
    ], TutorialManager.prototype, "progressBar", void 0);
    __decorate([
        property(cc.Node)
    ], TutorialManager.prototype, "backSplash", void 0);
    __decorate([
        property(cc.Node)
    ], TutorialManager.prototype, "arrowNode", void 0);
    __decorate([
        property([cc.Node])
    ], TutorialManager.prototype, "listReference", void 0);
    TutorialManager = __decorate([
        ccclass
    ], TutorialManager);
    return TutorialManager;
}(cc.Component));
exports.default = TutorialManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcQ29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9DQUFtQztBQUc3QixJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUE2QyxtQ0FBWTtJQUF6RDtRQUFBLHFFQXNFQztRQW5FRyxpQkFBVyxHQUFtQixJQUFJLENBQUM7UUFHbkMsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFHM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUcxQixtQkFBYSxHQUFjLEVBQUUsQ0FBQztRQUU5QixrQkFBWSxHQUFXLElBQUksQ0FBQzs7SUF3RGhDLENBQUM7SUF0REcsZ0NBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQztRQUM5QixJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsQ0FBQztJQUMxQixDQUFDO0lBQ0QsK0JBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztJQUN4QyxDQUFDO0lBRUQsZ0NBQU0sR0FBTixVQUFRLEVBQUU7UUFDTixJQUFHLElBQUksQ0FBQyxZQUFZLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEVBQUM7WUFDOUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQzlCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksR0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxZQUFZLElBQUksQ0FBQyxDQUFDO1NBQzFCO0lBQ0wsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFHLGVBQU0sQ0FBQyxTQUFTO1lBQUUsZUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDOUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHdDQUFjLEdBQWQ7UUFDSSxJQUFHLGVBQU0sQ0FBQyxTQUFTO1lBQUUsZUFBTSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7UUFDOUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUMvQyxDQUFDO0lBRUQsd0NBQWMsR0FBZDtRQUFBLGlCQWNDO1FBYkcsSUFBSSxVQUFVLEdBQUcsZUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDMUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMxQixPQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sZUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBQzNDLEVBQUUsQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLHVCQUF1QixHQUFHLFVBQVUsRUFBRyxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsS0FBWSxFQUFFLEtBQWdCO1lBQy9GLElBQUcsS0FBSyxFQUFFO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0gsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDakMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUN6RCxLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDekIsZUFBTSxDQUFDLGFBQWEsR0FBRyxDQUFDLGVBQU0sQ0FBQyxhQUFhLEdBQUMsQ0FBQyxDQUFDLENBQUM7YUFDbkQ7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxzQ0FBWSxHQUFaO1FBQ0ksSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7UUFFL0QsSUFBSSxDQUFDLFlBQVksSUFBSSxDQUFDLENBQUM7UUFFdkIsSUFBRyxJQUFJLENBQUMsWUFBWSxJQUFJLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxFQUFDO1lBQzlDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDcEQsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsWUFBWSxHQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDM0QsQ0FBQztJQWpFRDtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsV0FBVyxDQUFDO3dEQUNTO0lBR25DO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7dURBQ1E7SUFHM0I7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztzREFDTztJQUcxQjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzswREFDUztJQVpiLGVBQWU7UUFEbkMsT0FBTztPQUNhLGVBQWUsQ0FzRW5DO0lBQUQsc0JBQUM7Q0F0RUQsQUFzRUMsQ0F0RTRDLEVBQUUsQ0FBQyxTQUFTLEdBc0V4RDtrQkF0RW9CLGVBQWUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi4vR2xvYmFsXCI7XHJcbmltcG9ydCAqIGFzICBMaXN0TGVzc29uICBmcm9tIFwiLi9MaXN0TGVzc29uXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1dG9yaWFsTWFuYWdlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Qcm9ncmVzc0JhcilcclxuICAgIHByb2dyZXNzQmFyOiBjYy5Qcm9ncmVzc0JhciA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgYmFja1NwbGFzaDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgYXJyb3dOb2RlOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5Ob2RlXSlcclxuICAgIGxpc3RSZWZlcmVuY2U6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIGluZGV4Q3VycmVudDogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyA9IDA7XHJcbiAgICAgICAgdGhpcy5pbmRleEN1cnJlbnQgPSAwO1xyXG4gICAgfVxyXG4gICAgc3RhcnQoKXtcclxuICAgICAgICB0aGlzLmxpc3RSZWZlcmVuY2VbMF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYodGhpcy5pbmRleEN1cnJlbnQgPj0gdGhpcy5saXN0UmVmZXJlbmNlLmxlbmd0aCl7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja1NwbGFzaC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxpc3RSZWZlcmVuY2VbdGhpcy5pbmRleEN1cnJlbnQtMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHRoaXMuaW5kZXhDdXJyZW50IC09IDE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvYWRNZW51KCkge1xyXG4gICAgICAgIGlmKEdsb2JhbC5maXJzdFRpbWUpIEdsb2JhbC5maXJzdFRpbWUgPSBmYWxzZTtcclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzY2VuZXMvbWVudVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBsb2FkTGlzdExlc3NvbigpIHtcclxuICAgICAgICBpZihHbG9iYWwuZmlyc3RUaW1lKSBHbG9iYWwuZmlyc3RUaW1lID0gZmFsc2U7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2NlbmVzL2xpc3RMZXNzb25cIik7XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE5leHRMZXNzb24oKXtcclxuICAgICAgICBsZXQgbmV4dExlc3NvbiA9IEdsb2JhbC5jdXJyZW50TGVzc29uICsgMTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKG5leHRMZXNzb24pO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IodHlwZW9mIEdsb2JhbC5jdXJyZW50TGVzc29uKTtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvbGVzc29uL0xlc3NvblwiICsgbmV4dExlc3NvbiAsIGNjLlByZWZhYiwgKGVycm9yOiBFcnJvciwgYXNzZXQ6IGNjLlByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKGFzc2V0KTtcclxuICAgICAgICAgICAgICAgIG5vZGUuc2V0Q29udGVudFNpemUoY2Mud2luU2l6ZS53aWR0aCwgY2Mud2luU2l6ZS5oZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKG5vZGUpO1xyXG4gICAgICAgICAgICAgICAgR2xvYmFsLmN1cnJlbnRMZXNzb24gPSAoR2xvYmFsLmN1cnJlbnRMZXNzb24rMSk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgbmV4dFByb2dyZXNzKCl7XHJcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Jhci5wcm9ncmVzcyArPSAxIC8gKHRoaXMubGlzdFJlZmVyZW5jZS5sZW5ndGgtMSk7XHJcblxyXG4gICAgICAgIHRoaXMuaW5kZXhDdXJyZW50ICs9IDE7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuaW5kZXhDdXJyZW50ID49IHRoaXMubGlzdFJlZmVyZW5jZS5sZW5ndGgpe1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMubGlzdFJlZmVyZW5jZVt0aGlzLmluZGV4Q3VycmVudF0uYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxpc3RSZWZlcmVuY2VbdGhpcy5pbmRleEN1cnJlbnQtMV0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiBcclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ResourcePack.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fbabfmB6StPLbbwsr7VfPjG', 'ResourcePack');
// scripts/ResourcePack.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourcePack = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ResourcePack = /** @class */ (function () {
    function ResourcePack() {
        this.bead_active = null;
        this.bead_focused = null;
        this.bead_inactive = null;
        this.hbar = null;
        this.vbar = null;
        this.mbar = null;
        this.vborder = null;
    }
    ResourcePack.prototype.loadTheme = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var TOTAL = 7;
            var CURRENT = 0;
            var callback = function () {
                CURRENT++;
                if (CURRENT == TOTAL)
                    resolve("");
            };
            cc.resources.load("themes/" + name + "/bead_active", cc.SpriteFrame, function (error, asset) {
                if (error)
                    reject(error.message);
                _this.bead_active = asset;
                callback();
            });
            cc.resources.load("themes/" + name + "/bead_focused", cc.SpriteFrame, function (error, asset) {
                if (error)
                    reject(error.message);
                _this.bead_focused = asset;
                callback();
            });
            cc.resources.load("themes/" + name + "/bead_inactive", cc.SpriteFrame, function (error, asset) {
                if (error)
                    reject(error.message);
                _this.bead_inactive = asset;
                callback();
            });
            cc.resources.load("themes/" + name + "/hbar", cc.SpriteFrame, function (error, asset) {
                if (error)
                    reject(error.message);
                _this.hbar = asset;
                callback();
            });
            cc.resources.load("themes/" + name + "/vbar", cc.SpriteFrame, function (error, asset) {
                if (error)
                    reject(error.message);
                _this.vbar = asset;
                callback();
            });
            cc.resources.load("themes/" + name + "/vborder", cc.SpriteFrame, function (error, asset) {
                if (error)
                    reject(error.message);
                _this.vborder = asset;
                callback();
            });
            cc.resources.load("themes/" + name + "/mbar", cc.SpriteFrame, function (error, asset) {
                if (error)
                    reject(error.message);
                _this.mbar = asset;
                callback();
            });
        });
    };
    return ResourcePack;
}());
exports.ResourcePack = ResourcePack;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUmVzb3VyY2VQYWNrLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRTFDO0lBQUE7UUFDSSxnQkFBVyxHQUFtQixJQUFJLENBQUM7UUFDbkMsaUJBQVksR0FBbUIsSUFBSSxDQUFDO1FBQ3BDLGtCQUFhLEdBQW1CLElBQUksQ0FBQztRQUVyQyxTQUFJLEdBQW1CLElBQUksQ0FBQztRQUM1QixTQUFJLEdBQW1CLElBQUksQ0FBQztRQUM1QixTQUFJLEdBQW1CLElBQUksQ0FBQztRQUM1QixZQUFPLEdBQW1CLElBQUksQ0FBQztJQXdEbkMsQ0FBQztJQXRERyxnQ0FBUyxHQUFULFVBQVUsSUFBWTtRQUF0QixpQkFxREM7UUFwREcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLElBQU0sS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNoQixJQUFJLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFFaEIsSUFBSSxRQUFRLEdBQUc7Z0JBQ1gsT0FBTyxFQUFFLENBQUM7Z0JBRVYsSUFBRyxPQUFPLElBQUksS0FBSztvQkFBRSxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDckMsQ0FBQyxDQUFBO1lBRUQsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxjQUFjLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQVksRUFBRSxLQUFxQjtnQkFDckcsSUFBRyxLQUFLO29CQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO2dCQUN6QixRQUFRLEVBQUUsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxlQUFlLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEtBQVksRUFBRSxLQUFxQjtnQkFDdEcsSUFBRyxLQUFLO29CQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ2hDLEtBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDO2dCQUMxQixRQUFRLEVBQUUsQ0FBQztZQUNmLENBQUMsQ0FBQyxDQUFDO1lBRUgsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxnQkFBZ0IsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBWSxFQUFFLEtBQXFCO2dCQUN2RyxJQUFHLEtBQUs7b0JBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7Z0JBQzNCLFFBQVEsRUFBRSxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLE9BQU8sRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBWSxFQUFFLEtBQXFCO2dCQUM5RixJQUFHLEtBQUs7b0JBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2xCLFFBQVEsRUFBRSxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLE9BQU8sRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBWSxFQUFFLEtBQXFCO2dCQUM5RixJQUFHLEtBQUs7b0JBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2xCLFFBQVEsRUFBRSxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLFVBQVUsRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBWSxFQUFFLEtBQXFCO2dCQUNqRyxJQUFHLEtBQUs7b0JBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7Z0JBQ3JCLFFBQVEsRUFBRSxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7WUFFSCxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLE9BQU8sRUFBRSxFQUFFLENBQUMsV0FBVyxFQUFFLFVBQUMsS0FBWSxFQUFFLEtBQXFCO2dCQUM5RixJQUFHLEtBQUs7b0JBQUUsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2xCLFFBQVEsRUFBRSxDQUFDO1lBQ2YsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFDTCxtQkFBQztBQUFELENBaEVBLEFBZ0VDLElBQUE7QUFoRVksb0NBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNvdXJjZVBhY2sge1xyXG4gICAgYmVhZF9hY3RpdmU6IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcclxuICAgIGJlYWRfZm9jdXNlZDogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgYmVhZF9pbmFjdGl2ZTogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgXHJcbiAgICBoYmFyOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICB2YmFyOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBtYmFyOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICB2Ym9yZGVyOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgbG9hZFRoZW1lKG5hbWU6IHN0cmluZykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFRPVEFMID0gNztcclxuICAgICAgICAgICAgbGV0IENVUlJFTlQgPSAwO1xyXG5cclxuICAgICAgICAgICAgbGV0IGNhbGxiYWNrID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ1VSUkVOVCsrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKENVUlJFTlQgPT0gVE9UQUwpIHJlc29sdmUoXCJcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwidGhlbWVzL1wiICsgbmFtZSArIFwiL2JlYWRfYWN0aXZlXCIsIGNjLlNwcml0ZUZyYW1lLCAoZXJyb3I6IEVycm9yLCBhc3NldDogY2MuU3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGVycm9yKSByZWplY3QoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmJlYWRfYWN0aXZlID0gYXNzZXQ7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwidGhlbWVzL1wiICsgbmFtZSArIFwiL2JlYWRfZm9jdXNlZFwiLCBjYy5TcHJpdGVGcmFtZSwgKGVycm9yOiBFcnJvciwgYXNzZXQ6IGNjLlNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihlcnJvcikgcmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZWFkX2ZvY3VzZWQgPSBhc3NldDtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJ0aGVtZXMvXCIgKyBuYW1lICsgXCIvYmVhZF9pbmFjdGl2ZVwiLCBjYy5TcHJpdGVGcmFtZSwgKGVycm9yOiBFcnJvciwgYXNzZXQ6IGNjLlNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihlcnJvcikgcmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iZWFkX2luYWN0aXZlID0gYXNzZXQ7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwidGhlbWVzL1wiICsgbmFtZSArIFwiL2hiYXJcIiwgY2MuU3ByaXRlRnJhbWUsIChlcnJvcjogRXJyb3IsIGFzc2V0OiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZXJyb3IpIHJlamVjdChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaGJhciA9IGFzc2V0O1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInRoZW1lcy9cIiArIG5hbWUgKyBcIi92YmFyXCIsIGNjLlNwcml0ZUZyYW1lLCAoZXJyb3I6IEVycm9yLCBhc3NldDogY2MuU3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGVycm9yKSByZWplY3QoZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZiYXIgPSBhc3NldDtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJ0aGVtZXMvXCIgKyBuYW1lICsgXCIvdmJvcmRlclwiLCBjYy5TcHJpdGVGcmFtZSwgKGVycm9yOiBFcnJvciwgYXNzZXQ6IGNjLlNwcml0ZUZyYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihlcnJvcikgcmVqZWN0KGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy52Ym9yZGVyID0gYXNzZXQ7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwidGhlbWVzL1wiICsgbmFtZSArIFwiL21iYXJcIiwgY2MuU3ByaXRlRnJhbWUsIChlcnJvcjogRXJyb3IsIGFzc2V0OiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoZXJyb3IpIHJlamVjdChlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubWJhciA9IGFzc2V0O1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Task.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '66ce6x7j+BPEaqtWr94SWM3', 'Task');
// scripts/Task.ts

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
var Global_1 = require("./Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Task = /** @class */ (function (_super) {
    __extends(Task, _super);
    function Task() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.abacus = null;
        _this.numbers = [];
        _this.result = 0;
        _this.initialized = false;
        return _this;
    }
    Task.prototype.initialize = function () {
        this.randomizeTask(Global_1.Global.currentChallenge);
        this.initialized = true;
    };
    Task.prototype.randomizeTask = function (type) {
        var _this = this;
        if (!this.initialized)
            return;
        this.result = 0;
        if (type == "addition") {
            this.randomizeNumbers(3, 90, 10);
        }
        else if (type == "subtraction") {
            while (true) {
                this.randomizeNumbers(3, 90, 10);
                // prevent subtraction result from being negative
                var total = this.numbers[0];
                for (var i = 1; i < this.numbers.length; ++i)
                    total -= this.numbers[i];
                if (total >= 0)
                    break;
            }
        }
        else if (type == "multiplication") {
            this.randomizeNumbers(2, 2, 10);
        }
        else if (type == "division") {
            while (true) {
                this.numbers = [];
                this.numbers.push(Math.round(Math.random() * 1000 + 1000));
                this.numbers.push(Math.round(Math.random() * 3 + 2));
                if (Number.isInteger(this.numbers[0] / this.numbers[1]))
                    break;
            }
        }
        var label = this.node.getComponent(cc.Label);
        label.string = "";
        // set up label and calculate result
        this.numbers.forEach(function (value, index) {
            label.string += value.toString();
            if (index < _this.numbers.length - 1) {
                switch (type) {
                    case "addition":
                        label.string += " + ";
                        break;
                    case "subtraction":
                        label.string += " - ";
                        break;
                    case "multiplication":
                        label.string += " * ";
                        break;
                    case "division":
                        label.string += " / ";
                        break;
                    default: break;
                }
            }
            else
                label.string += " = ";
            switch (type) {
                case "addition":
                    _this.result += value;
                    break;
                case "subtraction":
                    if (index == 0)
                        _this.result = value;
                    else
                        _this.result -= value;
                    break;
                case "multiplication":
                    if (index == 0)
                        _this.result = 1;
                    _this.result *= value;
                    break;
                case "division":
                    if (index == 0)
                        _this.result = value;
                    else
                        _this.result /= value;
                    break;
            }
        });
        console.log("Result: " + this.result);
    };
    Task.prototype.randomizeNumbers = function (amount, lowRange, highRange) {
        this.numbers = [];
        for (var i = 0; i < amount; ++i)
            this.numbers.push(Math.round(Math.random() * (highRange - lowRange) + lowRange));
    };
    Task.prototype.update = function (dt) {
        if (this.abacus.getComponent("Abacus").score == this.result) {
            this.abacus.getComponent("Abacus").reset();
            this.randomizeTask(Global_1.Global.currentChallenge);
        }
    };
    __decorate([
        property(cc.Node)
    ], Task.prototype, "abacus", void 0);
    Task = __decorate([
        ccclass
    ], Task);
    return Task;
}(cc.Component));
exports.default = Task;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcVGFzay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtQ0FBa0M7QUFFNUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUErRkM7UUE3RkcsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixhQUFPLEdBQWEsRUFBRSxDQUFDO1FBQ3ZCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFFbkIsaUJBQVcsR0FBWSxLQUFLLENBQUM7O0lBd0ZqQyxDQUFDO0lBdEZHLHlCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRTVDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO0lBQzVCLENBQUM7SUFFRCw0QkFBYSxHQUFiLFVBQWMsSUFBWTtRQUExQixpQkFrRUM7UUFqRUcsSUFBRyxDQUFDLElBQUksQ0FBQyxXQUFXO1lBQUUsT0FBTztRQUU3QixJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUVoQixJQUFHLElBQUksSUFBSSxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUcsRUFBRSxDQUFDLENBQUM7U0FDckM7YUFBTSxJQUFHLElBQUksSUFBSSxhQUFhLEVBQUU7WUFDN0IsT0FBTSxJQUFJLEVBQUU7Z0JBQ1IsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBRWpDLGlEQUFpRDtnQkFDakQsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUIsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUs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QUFNO2FBQ2I7UUFDTCxDQUFDLENBQUMsQ0FBQztRQUVILE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8sK0JBQWdCLEdBQXhCLFVBQXlCLE1BQWMsRUFBRSxRQUFnQixFQUFFLFNBQWlCO1FBQ3hFLElBQUksQ0FBQyxPQUFPLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxNQUFNLEVBQUUsRUFBRSxDQUFDO1lBQzFCLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDekYsQ0FBQztJQUVELHFCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsSUFBRyxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN4RCxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUMzQyxJQUFJLENBQUMsYUFBYSxDQUFDLGVBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1NBQy9DO0lBQ0wsQ0FBQztJQTVGRDtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNJO0lBRk4sSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQStGeEI7SUFBRCxXQUFDO0NBL0ZELEFBK0ZDLENBL0ZpQyxFQUFFLENBQUMsU0FBUyxHQStGN0M7a0JBL0ZvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4vR2xvYmFsXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgYWJhY3VzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBudW1iZXJzOiBudW1iZXJbXSA9IFtdO1xyXG4gICAgcmVzdWx0OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLnJhbmRvbWl6ZVRhc2soR2xvYmFsLmN1cnJlbnRDaGFsbGVuZ2UpO1xyXG5cclxuICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByYW5kb21pemVUYXNrKHR5cGU6IHN0cmluZykge1xyXG4gICAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcblxyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gMDtcclxuICAgICAgICBcclxuICAgICAgICBpZih0eXBlID09IFwiYWRkaXRpb25cIikge1xyXG4gICAgICAgICAgICB0aGlzLnJhbmRvbWl6ZU51bWJlcnMoMywgOTAgLCAxMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT0gXCJzdWJ0cmFjdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHdoaWxlKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmFuZG9taXplTnVtYmVycygzLCA5MCwgMTApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIHByZXZlbnQgc3VidHJhY3Rpb24gcmVzdWx0IGZyb20gYmVpbmcgbmVnYXRpdmVcclxuICAgICAgICAgICAgICAgIGxldCB0b3RhbCA9IHRoaXMubnVtYmVyc1swXTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDE7IGkgPCB0aGlzLm51bWJlcnMubGVuZ3RoOyArK2kpIHRvdGFsIC09IHRoaXMubnVtYmVyc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmKHRvdGFsID49IDApIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT0gXCJtdWx0aXBsaWNhdGlvblwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmFuZG9taXplTnVtYmVycygyLCAyLCAxMCk7XHJcbiAgICAgICAgfSBlbHNlIGlmKHR5cGUgPT0gXCJkaXZpc2lvblwiKSB7XHJcbiAgICAgICAgICAgIHdoaWxlKHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5udW1iZXJzLnB1c2goTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMTAwMCArIDEwMDApKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubnVtYmVycy5wdXNoKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIDMgKyAyKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYoTnVtYmVyLmlzSW50ZWdlcih0aGlzLm51bWJlcnNbMF0gLyB0aGlzLm51bWJlcnNbMV0pKSBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcblxyXG4gICAgICAgIGxldCBsYWJlbCA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXHJcbiAgICAgICAgbGFiZWwuc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICAgICAgLy8gc2V0IHVwIGxhYmVsIGFuZCBjYWxjdWxhdGUgcmVzdWx0XHJcbiAgICAgICAgdGhpcy5udW1iZXJzLmZvckVhY2goKHZhbHVlOiBudW1iZXIsIGluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgICAgbGFiZWwuc3RyaW5nICs9IHZhbHVlLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgICAgICBpZihpbmRleCA8IHRoaXMubnVtYmVycy5sZW5ndGggLSAxKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2godHlwZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJhZGRpdGlvblwiOiBsYWJlbC5zdHJpbmcgKz0gXCIgKyBcIjsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcInN1YnRyYWN0aW9uXCI6IGxhYmVsLnN0cmluZyArPSBcIiAtIFwiOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwibXVsdGlwbGljYXRpb25cIjogbGFiZWwuc3RyaW5nICs9IFwiICogXCI7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCJkaXZpc2lvblwiOiBsYWJlbC5zdHJpbmcgKz0gXCIgLyBcIjsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBsYWJlbC5zdHJpbmcgKz0gXCIgPSBcIjtcclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCh0eXBlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiYWRkaXRpb25cIjogXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgKz0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwic3VidHJhY3Rpb25cIjpcclxuICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA9PSAwKSB0aGlzLnJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5yZXN1bHQgLT0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwibXVsdGlwbGljYXRpb25cIjpcclxuICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA9PSAwKSB0aGlzLnJlc3VsdCA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXN1bHQgKj0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIFwiZGl2aXNpb25cIjpcclxuICAgICAgICAgICAgICAgICAgICBpZihpbmRleCA9PSAwKSB0aGlzLnJlc3VsdCA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgdGhpcy5yZXN1bHQgLz0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHQ6IFwiICsgdGhpcy5yZXN1bHQpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcmFuZG9taXplTnVtYmVycyhhbW91bnQ6IG51bWJlciwgbG93UmFuZ2U6IG51bWJlciwgaGlnaFJhbmdlOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLm51bWJlcnMgPSBbXTtcclxuICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgYW1vdW50OyArK2kpXHJcbiAgICAgICAgICAgIHRoaXMubnVtYmVycy5wdXNoKE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSAqIChoaWdoUmFuZ2UgLSBsb3dSYW5nZSkgKyBsb3dSYW5nZSkpO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZShkdCkge1xyXG4gICAgICAgIGlmKHRoaXMuYWJhY3VzLmdldENvbXBvbmVudChcIkFiYWN1c1wiKS5zY29yZSA9PSB0aGlzLnJlc3VsdCkge1xyXG4gICAgICAgICAgICB0aGlzLmFiYWN1cy5nZXRDb21wb25lbnQoXCJBYmFjdXNcIikucmVzZXQoKTtcclxuICAgICAgICAgICAgdGhpcy5yYW5kb21pemVUYXNrKEdsb2JhbC5jdXJyZW50Q2hhbGxlbmdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/ListLesson.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2729fpapghK77QQnB4jImdu', 'ListLesson');
// scripts/listLesson/ListLesson.ts

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
var Global_1 = require("../Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ListLesson = /** @class */ (function (_super) {
    __extends(ListLesson, _super);
    function ListLesson() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListLesson.prototype.start = function () {
    };
    ListLesson.prototype.onBackMenu = function () {
        cc.director.loadScene("scenes/menu");
    };
    ListLesson.prototype.loadPrefab = function (evt, data) {
        var _this = this;
        console.error(data);
        cc.resources.load("prefabs/lesson/Lesson" + data, cc.Prefab, function (error, asset) {
            if (error) {
                console.error(error);
            }
            else {
                var node = cc.instantiate(asset);
                node.setContentSize(cc.winSize.width, cc.winSize.height);
                _this.node.addChild(node);
                Global_1.Global.currentLesson = parseInt(data);
            }
        });
    };
    ListLesson = __decorate([
        ccclass
    ], ListLesson);
    return ListLesson;
}(cc.Component));
exports.default = ListLesson;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcTGlzdExlc3Nvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBbUM7QUFDN0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7O0lBbUJBLENBQUM7SUFsQkcsMEJBQUssR0FBTDtJQUNBLENBQUM7SUFDRCwrQkFBVSxHQUFWO1FBQ0ksRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUNELCtCQUFVLEdBQVYsVUFBVyxHQUFHLEVBQUUsSUFBSTtRQUFwQixpQkFZQztRQVhHLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsdUJBQXVCLEdBQUcsSUFBSSxFQUFFLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFZLEVBQUUsS0FBZ0I7WUFDeEYsSUFBRyxLQUFLLEVBQUU7Z0JBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUN4QjtpQkFBTTtnQkFDSCxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNqQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQ3pELEtBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUN6QixlQUFNLENBQUMsYUFBYSxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN6QztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQWxCZ0IsVUFBVTtRQUQ5QixPQUFPO09BQ2EsVUFBVSxDQW1COUI7SUFBRCxpQkFBQztDQW5CRCxBQW1CQyxDQW5CdUMsRUFBRSxDQUFDLFNBQVMsR0FtQm5EO2tCQW5Cb0IsVUFBVSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdsb2JhbCB9IGZyb20gXCIuLi9HbG9iYWxcIjtcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMaXN0TGVzc29uIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIHN0YXJ0ICgpIHtcclxuICAgIH1cclxuICAgIG9uQmFja01lbnUoKSB7XHJcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwic2NlbmVzL21lbnVcIik7XHJcbiAgICB9XHJcbiAgICBsb2FkUHJlZmFiKGV2dCwgZGF0YSl7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihkYXRhKTtcclxuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChcInByZWZhYnMvbGVzc29uL0xlc3NvblwiICsgZGF0YSwgY2MuUHJlZmFiLCAoZXJyb3I6IEVycm9yLCBhc3NldDogY2MuUHJlZmFiKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUoYXNzZXQpO1xyXG4gICAgICAgICAgICAgICAgbm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgICAgICBHbG9iYWwuY3VycmVudExlc3NvbiA9IHBhcnNlSW50KGRhdGEpO1xyXG4gICAgICAgICAgICB9ICAgICAgICAgIFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Abacus.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8ce3fAYModJIZEYrqDvSXjc', 'Abacus');
// scripts/Abacus.ts

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
var ResourcePack_1 = require("./ResourcePack");
var Global_1 = require("./Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Abacus = /** @class */ (function (_super) {
    __extends(Abacus, _super);
    function Abacus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.vbars = null;
        _this.hbars = null;
        _this.resourcePack = null;
        _this.rows = [];
        _this.score = 0;
        _this.initialized = false;
        return _this;
    }
    Abacus.prototype.onLoad = function () {
        this.initialize();
    };
    Abacus.prototype.initialize = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            _this.rows = [];
            _this.node.children.forEach(function (value) {
                if (value.name == "Row")
                    _this.rows.push(value);
            });
            _this.resourcePack = new ResourcePack_1.ResourcePack();
            _this.resourcePack.loadTheme(Global_1.Global.resourcePack).then(function () {
                _this.rows.forEach(function (value) {
                    value.getComponent("Row").initialize();
                    value.getComponent("Row").applyTheme(_this.resourcePack);
                });
                _this.vbars.children.forEach(function (value) {
                    value.getComponent(cc.Sprite).spriteFrame = _this.resourcePack.vborder;
                });
                _this.hbars.children.forEach(function (value) {
                    if (value.name == "Middle")
                        value.getComponent(cc.Sprite).spriteFrame = _this.resourcePack.mbar;
                    else
                        value.getComponent(cc.Sprite).spriteFrame = _this.resourcePack.hbar;
                });
                _this.initialized = true;
                resolve("");
            }).catch(function (error) { return reject(error); });
        });
    };
    Abacus.prototype.update = function (dt) {
        var _this = this;
        if (!this.initialized)
            return;
        this.score = 0;
        this.rows.forEach(function (value, index) {
            var number = value.getComponent("Row").number;
            for (var i = _this.rows.length - 1 - index; i > 0; --i)
                number *= 10;
            _this.score += number;
        });
    };
    Abacus.prototype.setInteractive = function (value) {
        this.rows.forEach(function (node) {
            node.getComponent("Row").setInteractive(value);
        });
    };
    Abacus.prototype.setRowInteractive = function (row, which) {
        if (row < 0 || row >= this.rows.length) {
            console.error("Invalid row index on Abacus.setRowValue");
            return;
        }
        this.rows[row].getComponent("Row").setInteractive(true, which);
    };
    Abacus.prototype.setRowValue = function (row, value) {
        if (row < 0 || row >= this.rows.length) {
            console.error("Invalid row index on Abacus.setRowValue");
            return;
        }
        this.rows[row].getComponent("Row").setValue(value);
    };
    Abacus.prototype.reset = function () {
        this.rows.forEach(function (value) {
            value.getComponent("Row").reset();
        });
    };
    __decorate([
        property(cc.Node)
    ], Abacus.prototype, "vbars", void 0);
    __decorate([
        property(cc.Node)
    ], Abacus.prototype, "hbars", void 0);
    Abacus = __decorate([
        ccclass
    ], Abacus);
    return Abacus;
}(cc.Component));
exports.default = Abacus;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQWJhY3VzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUE4QztBQUM5QyxtQ0FBa0M7QUFFNUIsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBb0MsMEJBQVk7SUFBaEQ7UUFBQSxxRUErRkM7UUE3RkcsV0FBSyxHQUFZLElBQUksQ0FBQztRQUd0QixXQUFLLEdBQVksSUFBSSxDQUFDO1FBRXRCLGtCQUFZLEdBQWlCLElBQUksQ0FBQztRQUVsQyxVQUFJLEdBQWMsRUFBRSxDQUFDO1FBQ3JCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFFbEIsaUJBQVcsR0FBWSxLQUFLLENBQUM7O0lBbUZqQyxDQUFDO0lBakZHLHVCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDdEIsQ0FBQztJQUVELDJCQUFVLEdBQVY7UUFBQSxpQkErQkM7UUE5QkcsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQy9CLEtBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO1lBRWYsS0FBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBYztnQkFDdEMsSUFBRyxLQUFLLENBQUMsSUFBSSxJQUFJLEtBQUs7b0JBQUUsS0FBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbEQsQ0FBQyxDQUFDLENBQUM7WUFFSCxLQUFJLENBQUMsWUFBWSxHQUFHLElBQUksMkJBQVksRUFBRSxDQUFDO1lBQ3ZDLEtBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLGVBQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUM7Z0JBQ2xELEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFD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SSxDQUFDLE1BQU0sRUFBRTtZQUNuQyxPQUFPLENBQUMsS0FBSyxDQUFDLHlDQUF5QyxDQUFDLENBQUM7WUFDekQsT0FBTztTQUNWO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFRCxzQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxLQUFjO1lBQzdCLEtBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDdEMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBNUZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ0k7SUFHdEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDSTtJQUxMLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0ErRjFCO0lBQUQsYUFBQztDQS9GRCxBQStGQyxDQS9GbUMsRUFBRSxDQUFDLFNBQVMsR0ErRi9DO2tCQS9Gb0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJlc291cmNlUGFjayB9IGZyb20gXCIuL1Jlc291cmNlUGFja1wiO1xyXG5pbXBvcnQgeyBHbG9iYWwgfSBmcm9tIFwiLi9HbG9iYWxcIjtcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWJhY3VzIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgdmJhcnM6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKSBcclxuICAgIGhiYXJzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICByZXNvdXJjZVBhY2s6IFJlc291cmNlUGFjayA9IG51bGw7XHJcblxyXG4gICAgcm93czogY2MuTm9kZVtdID0gW107XHJcbiAgICBzY29yZTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5yb3dzID0gW107XHJcblxyXG4gICAgICAgICAgICB0aGlzLm5vZGUuY2hpbGRyZW4uZm9yRWFjaCgodmFsdWU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHZhbHVlLm5hbWUgPT0gXCJSb3dcIikgdGhpcy5yb3dzLnB1c2godmFsdWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVzb3VyY2VQYWNrID0gbmV3IFJlc291cmNlUGFjaygpO1xyXG4gICAgICAgICAgICB0aGlzLnJlc291cmNlUGFjay5sb2FkVGhlbWUoR2xvYmFsLnJlc291cmNlUGFjaykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvd3MuZm9yRWFjaCgodmFsdWU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5nZXRDb21wb25lbnQoXCJSb3dcIikuaW5pdGlhbGl6ZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlLmdldENvbXBvbmVudChcIlJvd1wiKS5hcHBseVRoZW1lKHRoaXMucmVzb3VyY2VQYWNrKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMudmJhcnMuY2hpbGRyZW4uZm9yRWFjaCgodmFsdWU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucmVzb3VyY2VQYWNrLnZib3JkZXI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmhiYXJzLmNoaWxkcmVuLmZvckVhY2goKHZhbHVlOiBjYy5Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYodmFsdWUubmFtZSA9PSBcIk1pZGRsZVwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucmVzb3VyY2VQYWNrLm1iYXI7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMucmVzb3VyY2VQYWNrLmhiYXI7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKFwiXCIpO1xyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgdGhpcy5zY29yZSA9IDA7XHJcblxyXG4gICAgICAgIHRoaXMucm93cy5mb3JFYWNoKCh2YWx1ZTogY2MuTm9kZSwgaW5kZXg6IG51bWJlcikgPT4ge1xyXG4gICAgICAgICAgICBsZXQgbnVtYmVyID0gdmFsdWUuZ2V0Q29tcG9uZW50KFwiUm93XCIpLm51bWJlcjtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IHRoaXMucm93cy5sZW5ndGggLSAxIC0gaW5kZXg7IGkgPiAwOyAtLWkpXHJcbiAgICAgICAgICAgICAgICBudW1iZXIgKj0gMTA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNjb3JlICs9IG51bWJlcjtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRlcmFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIHRoaXMucm93cy5mb3JFYWNoKG5vZGUgPT4ge1xyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChcIlJvd1wiKS5zZXRJbnRlcmFjdGl2ZSh2YWx1ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Um93SW50ZXJhY3RpdmUocm93OiBudW1iZXIsIHdoaWNoOiBudW1iZXIpIHtcclxuICAgICAgICBpZihyb3cgPCAwIHx8IHJvdyA+PSB0aGlzLnJvd3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIHJvdyBpbmRleCBvbiBBYmFjdXMuc2V0Um93VmFsdWVcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucm93c1tyb3ddLmdldENvbXBvbmVudChcIlJvd1wiKS5zZXRJbnRlcmFjdGl2ZSh0cnVlLCB3aGljaCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0Um93VmFsdWUocm93OiBudW1iZXIsIHZhbHVlOiBudW1iZXIpIHtcclxuICAgICAgICBpZihyb3cgPCAwIHx8IHJvdyA+PSB0aGlzLnJvd3MubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJJbnZhbGlkIHJvdyBpbmRleCBvbiBBYmFjdXMuc2V0Um93VmFsdWVcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMucm93c1tyb3ddLmdldENvbXBvbmVudChcIlJvd1wiKS5zZXRWYWx1ZSh2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVzZXQoKSB7XHJcbiAgICAgICAgdGhpcy5yb3dzLmZvckVhY2goKHZhbHVlOiBjYy5Ob2RlKSA9PiB7XHJcbiAgICAgICAgICAgIHZhbHVlLmdldENvbXBvbmVudChcIlJvd1wiKS5yZXNldCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson3/Node5_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e44feu8mw9FwJcLD7Rlnk49', 'Node5_3');
// scripts/listLesson/lesson3/Node5_3.ts

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
var Node5_3 = /** @class */ (function (_super) {
    __extends(Node5_3, _super);
    function Node5_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeHand = null;
        _this.nodeBead = [];
        return _this;
    }
    Node5_3.prototype.onLoad = function () {
    };
    Node5_3.prototype.start = function () {
        this.setAction();
    };
    Node5_3.prototype.setAction = function () {
        var _this = this;
        var action1 = cc.callFunc(function () {
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, 55.5)));
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.label.string = "2";
            _this.label.node.active = true;
            _this.nodeHand.parent.active = true;
        });
        var action2 = cc.callFunc(function () {
            _this.nodeHand.parent.active = false;
        });
        this.node.runAction(cc.sequence(cc.delayTime(1.0), action1, cc.delayTime(1.0), action2));
    };
    __decorate([
        property(cc.Label)
    ], Node5_3.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Node5_3.prototype, "nodeHand", void 0);
    __decorate([
        property([cc.Node])
    ], Node5_3.prototype, "nodeBead", void 0);
    Node5_3 = __decorate([
        ccclass
    ], Node5_3);
    return Node5_3;
}(cc.Component));
exports.default = Node5_3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uM1xcTm9kZTVfMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQWdDQztRQTdCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFjLEVBQUUsQ0FBQzs7SUF1QjdCLENBQUM7SUFyQkcsd0JBQU0sR0FBTjtJQUNBLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQUEsaUJBYUM7UUFaRyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7WUFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQTNCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NkNBQ0k7SUFUUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBZ0MzQjtJQUFELGNBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQ29DLEVBQUUsQ0FBQyxTQUFTLEdBZ0NoRDtrQkFoQ29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlNV8zIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIG5vZGVIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5Ob2RlXSlcclxuICAgIG5vZGVCZWFkOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHNldEFjdGlvbigpe1xyXG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlQmVhZFswXS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNSxjYy52MigwLDU1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMV0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMzApKSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCIyXCJcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUhhbmQucGFyZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbjIgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEuMCksYWN0aW9uMSxjYy5kZWxheVRpbWUoMS4wKSxhY3Rpb24yKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson2/Node1_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3b2d8nhfM1BFavo9n1PI1gx', 'Node1_2');
// scripts/listLesson/lesson2/Node1_2.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Node1_2 = /** @class */ (function (_super) {
    __extends(Node1_2, _super);
    function Node1_2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeBead = null;
        _this.nodeLayout = null;
        _this.count = 1;
        return _this;
    }
    Node1_2.prototype.onLoad = function () {
    };
    Node1_2.prototype.start = function () {
        this.setAction();
    };
    Node1_2.prototype.setAction = function () {
        var _this = this;
        var action = cc.callFunc(function () {
            var newBead = cc.instantiate(_this.nodeBead);
            _this.count++;
            _this.nodeLayout.node.addChild(newBead);
            _this.label.string = _this.count + " đơn vị";
        });
        this.node.runAction(cc.repeat(cc.sequence(cc.delayTime(1), action, cc.delayTime(1)), 4));
    };
    __decorate([
        property(cc.Label)
    ], Node1_2.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Node1_2.prototype, "nodeBead", void 0);
    __decorate([
        property(cc.Layout)
    ], Node1_2.prototype, "nodeLayout", void 0);
    Node1_2 = __decorate([
        ccclass
    ], Node1_2);
    return Node1_2;
}(cc.Component));
exports.default = Node1_2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uMlxcTm9kZTFfMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTRCQztRQXpCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFDN0IsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFrQnRCLENBQUM7SUFqQkcsd0JBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQUEsaUJBUUM7UUFQRyxJQUFJLE1BQU0sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3JCLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQzVDLEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLEtBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUN2QyxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztRQUMvQyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxFQUFDLE1BQU0sRUFBQyxFQUFFLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxRixDQUFDO0lBdkJEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUd6QjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNRO0lBVFosT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTRCM0I7SUFBRCxjQUFDO0NBNUJELEFBNEJDLENBNUJvQyxFQUFFLENBQUMsU0FBUyxHQTRCaEQ7a0JBNUJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlMV8yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIG5vZGVCZWFkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLkxheW91dClcclxuICAgIG5vZGVMYXlvdXQ6IGNjLkxheW91dCA9IG51bGw7XHJcbiAgICBjb3VudDogbnVtYmVyID0gMTtcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0QWN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGFjdGlvbiA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIGxldCBuZXdCZWFkID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2RlQmVhZCk7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnQrKztcclxuICAgICAgICAgICAgdGhpcy5ub2RlTGF5b3V0Lm5vZGUuYWRkQ2hpbGQobmV3QmVhZCk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gdGhpcy5jb3VudCArIFwiIMSRxqFuIHbhu4tcIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2MucmVwZWF0KGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxKSxhY3Rpb24sY2MuZGVsYXlUaW1lKDEpKSw0KSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson2/Node4_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c8daeERs6BMeoSs1yy36ato', 'Node4_2');
// scripts/listLesson/lesson2/Node4_2.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Node4_2 = /** @class */ (function (_super) {
    __extends(Node4_2, _super);
    function Node4_2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeBead = null;
        _this.nodeLayout = null;
        _this.listButton = [];
        _this.listResultLb = [];
        _this.result = 0;
        _this.listResult = [];
        return _this;
    }
    Node4_2.prototype.onLoad = function () {
    };
    Node4_2.prototype.start = function () {
        this.setAction();
    };
    Node4_2.prototype.setAction = function () {
        this.result = this.getRanNum(1, 6);
        var randomBox = this.getRanNum(0, 4);
        console.error(randomBox);
        this.listResult = [];
        this.listResult.push(this.result);
        for (var i = 0; i < this.listButton.length; i++) {
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; // This node is the node to which your event handler code component belongs
            clickEventHandler.component = "Node4_2"; // This is the code file name
            clickEventHandler.handler = "onClickChoose";
            if (i == randomBox) {
                clickEventHandler.customEventData = "" + this.result;
            }
            else {
                var random = this.getRanNum(1, 10);
                clickEventHandler.customEventData = "" + random;
                this.listResult.push(random);
            }
            console.error(this.listResult);
            this.listResultLb[i].string = clickEventHandler.customEventData;
            this.listButton[i].clickEvents = [];
            this.listButton[i].clickEvents.push(clickEventHandler);
        }
        // console.error(this.listResult)
        // create node 
        this.nodeLayout.node.removeAllChildren();
        for (var i = 0; i < this.result; i++) {
            var nodeNew = cc.instantiate(this.nodeBead);
            this.nodeLayout.node.addChild(nodeNew);
        }
    };
    Node4_2.prototype.onClickChoose = function (event, value) {
        console.log(value);
        if (value == this.result.toString()) {
            this.label.string = "Chính xác";
            this.setAction();
        }
        else {
            this.label.string = "Sai rồi";
        }
    };
    Node4_2.prototype.onBackMenu = function () {
        this.node.destroy();
    };
    Node4_2.prototype.getRanNum = function (min_value, max_value) {
        var random_number = Math.random() * (max_value - min_value) + min_value;
        if (this.listResult.includes(Math.floor(random_number))) {
            return this.getRanNum(min_value, max_value);
        }
        return Math.floor(random_number);
    };
    __decorate([
        property(cc.Label)
    ], Node4_2.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Node4_2.prototype, "nodeBead", void 0);
    __decorate([
        property(cc.Layout)
    ], Node4_2.prototype, "nodeLayout", void 0);
    __decorate([
        property([cc.Button])
    ], Node4_2.prototype, "listButton", void 0);
    __decorate([
        property([cc.Label])
    ], Node4_2.prototype, "listResultLb", void 0);
    Node4_2 = __decorate([
        ccclass
    ], Node4_2);
    return Node4_2;
}(cc.Component));
exports.default = Node4_2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uMlxcTm9kZTRfMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTZFQztRQTFFRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsZ0JBQVUsR0FBYyxJQUFJLENBQUM7UUFHN0IsZ0JBQVUsR0FBZ0IsRUFBRSxDQUFDO1FBRzdCLGtCQUFZLEdBQWUsRUFBRSxDQUFDO1FBQzlCLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsZ0JBQVUsR0FBYSxFQUFFLENBQUM7O0lBNEQ5QixDQUFDO0lBM0RHLHdCQUFNLEdBQU47SUFFQSxDQUFDO0lBQ0QsdUJBQUssR0FBTDtRQUNJLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBQ0QsMkJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsT0FBTyxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDbEMsS0FB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QUFDO0lBeEVFO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUd6QjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsTUFBTSxDQUFDOytDQUNRO0lBRzdCO1FBREMsUUFBUSxDQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDOytDQUNNO0lBRzdCO1FBREMsUUFBUSxDQUFFLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO2lEQUNRO0lBZmIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTZFM0I7SUFBRCxjQUFDO0NBN0VELEFBNkVDLENBN0VvQyxFQUFFLENBQUMsU0FBUyxHQTZFaEQ7a0JBN0VvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gVHlwZVNjcmlwdDpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlNF8yIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIG5vZGVCZWFkOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLkxheW91dClcclxuICAgIG5vZGVMYXlvdXQ6IGNjLkxheW91dCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChbY2MuQnV0dG9uXSlcclxuICAgIGxpc3RCdXR0b246IGNjLkJ1dHRvbltdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5IChbY2MuTGFiZWxdKVxyXG4gICAgbGlzdFJlc3VsdExiOiBjYy5MYWJlbFtdID0gW107XHJcbiAgICByZXN1bHQ6IG51bWJlciA9IDA7XHJcbiAgICBsaXN0UmVzdWx0OiBudW1iZXJbXSA9IFtdO1xyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHNldEFjdGlvbigpe1xyXG4gICAgICAgIHRoaXMucmVzdWx0ID0gdGhpcy5nZXRSYW5OdW0oMSw2KTtcclxuICAgICAgICBsZXQgcmFuZG9tQm94ID0gdGhpcy5nZXRSYW5OdW0oMCw0KTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKHJhbmRvbUJveClcclxuICAgICAgICB0aGlzLmxpc3RSZXN1bHQgPSBbXTtcclxuICAgICAgICB0aGlzLmxpc3RSZXN1bHQucHVzaCh0aGlzLnJlc3VsdCk7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpc3RCdXR0b24ubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuXHRcdFx0Y2xpY2tFdmVudEhhbmRsZXIudGFyZ2V0ID0gdGhpcy5ub2RlOyAvLyBUaGlzIG5vZGUgaXMgdGhlIG5vZGUgdG8gd2hpY2ggeW91ciBldmVudCBoYW5kbGVyIGNvZGUgY29tcG9uZW50IGJlbG9uZ3NcclxuXHRcdFx0Y2xpY2tFdmVudEhhbmRsZXIuY29tcG9uZW50ID0gXCJOb2RlNF8yXCI7IC8vIFRoaXMgaXMgdGhlIGNvZGUgZmlsZSBuYW1lXHJcblx0XHRcdGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIm9uQ2xpY2tDaG9vc2VcIjtcclxuICAgICAgICAgICAgaWYoaSA9PSByYW5kb21Cb3gpe1xyXG4gICAgICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gXCJcIiArIHRoaXMucmVzdWx0O1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIGxldCByYW5kb20gPSB0aGlzLmdldFJhbk51bSgxLDEwKTtcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IFwiXCIgKyByYW5kb207XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxpc3RSZXN1bHQucHVzaChyYW5kb20pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5saXN0UmVzdWx0KTtcclxuICAgICAgICAgICAgdGhpcy5saXN0UmVzdWx0TGJbaV0uc3RyaW5nID0gY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhO1xyXG5cdFx0XHR0aGlzLmxpc3RCdXR0b25baV0uY2xpY2tFdmVudHMgPSBbXTtcclxuXHRcdFx0dGhpcy5saXN0QnV0dG9uW2ldLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG5cdFx0fVxyXG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IodGhpcy5saXN0UmVzdWx0KVxyXG4gICAgICAgIC8vIGNyZWF0ZSBub2RlIFxyXG4gICAgICAgIHRoaXMubm9kZUxheW91dC5ub2RlLnJlbW92ZUFsbENoaWxkcmVuKCk7XHJcbiAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucmVzdWx0OyBpKyspe1xyXG4gICAgICAgICAgICBsZXQgbm9kZU5ldyA9IGNjLmluc3RhbnRpYXRlKHRoaXMubm9kZUJlYWQpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVMYXlvdXQubm9kZS5hZGRDaGlsZChub2RlTmV3KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBvbkNsaWNrQ2hvb3NlKGV2ZW50OiBhbnksIHZhbHVlOiBzdHJpbmcpe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKHZhbHVlKTtcclxuICAgICAgICBpZih2YWx1ZSA9PSB0aGlzLnJlc3VsdC50b1N0cmluZygpKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIkNow61uaCB4w6FjXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9uKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCJTYWkgcuG7k2lcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrTWVudSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRSYW5OdW0obWluX3ZhbHVlLCBtYXhfdmFsdWUpIHtcclxuXHRcdGxldCByYW5kb21fbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIChtYXhfdmFsdWUgLSBtaW5fdmFsdWUpICsgbWluX3ZhbHVlO1xyXG4gICAgICAgIGlmKHRoaXMubGlzdFJlc3VsdC5pbmNsdWRlcyhNYXRoLmZsb29yKHJhbmRvbV9udW1iZXIpKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbk51bShtaW5fdmFsdWUsIG1heF92YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IocmFuZG9tX251bWJlcik7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson3/Node4_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28ebbtNXJlE9Zt4u9aegqIA', 'Node4_3');
// scripts/listLesson/lesson3/Node4_3.ts

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
var Node4_3 = /** @class */ (function (_super) {
    __extends(Node4_3, _super);
    function Node4_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeHand = null;
        _this.nodeBead = [];
        return _this;
    }
    Node4_3.prototype.onLoad = function () {
    };
    Node4_3.prototype.start = function () {
        this.setAction();
    };
    Node4_3.prototype.setAction = function () {
        var _this = this;
        var action1 = cc.callFunc(function () {
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, 55.5)));
            _this.label.string = "1";
            _this.label.node.active = true;
            _this.nodeHand.parent.active = true;
        });
        var action2 = cc.callFunc(function () {
            _this.nodeHand.parent.active = false;
        });
        this.node.runAction(cc.sequence(cc.delayTime(1.0), action1, cc.delayTime(1.0), action2));
    };
    __decorate([
        property(cc.Label)
    ], Node4_3.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Node4_3.prototype, "nodeHand", void 0);
    __decorate([
        property([cc.Node])
    ], Node4_3.prototype, "nodeBead", void 0);
    Node4_3 = __decorate([
        ccclass
    ], Node4_3);
    return Node4_3;
}(cc.Component));
exports.default = Node4_3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uM1xcTm9kZTRfMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQStCQztRQTVCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFjLEVBQUUsQ0FBQzs7SUFzQjdCLENBQUM7SUFwQkcsd0JBQU0sR0FBTjtJQUNBLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQUEsaUJBWUM7UUFYRyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDeEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQTFCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NkNBQ0k7SUFUUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBK0IzQjtJQUFELGNBQUM7Q0EvQkQsQUErQkMsQ0EvQm9DLEVBQUUsQ0FBQyxTQUFTLEdBK0JoRDtrQkEvQm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlNF8zIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIG5vZGVIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5Ob2RlXSlcclxuICAgIG5vZGVCZWFkOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHNldEFjdGlvbigpe1xyXG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlQmVhZFswXS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNSxjYy52MigwLDU1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCIxXCI7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24yID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlSGFuZC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxLjApLGFjdGlvbjEsY2MuZGVsYXlUaW1lKDEuMCksYWN0aW9uMikpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson3/Node6_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '707683KNw9E7pZTnIRw2pEB', 'Node6_3');
// scripts/listLesson/lesson3/Node6_3.ts

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
var Node6_3 = /** @class */ (function (_super) {
    __extends(Node6_3, _super);
    function Node6_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeHand = null;
        _this.nodeBead = [];
        return _this;
    }
    Node6_3.prototype.onLoad = function () {
    };
    Node6_3.prototype.start = function () {
        this.setAction();
    };
    Node6_3.prototype.setAction = function () {
        var _this = this;
        var action1 = cc.callFunc(function () {
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, 55.5)));
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.nodeBead[2].runAction(cc.moveTo(0.5, cc.v2(0, -115.5)));
            _this.label.string = "3";
            _this.label.node.active = true;
            _this.nodeHand.parent.active = true;
        });
        var action2 = cc.callFunc(function () {
            _this.nodeHand.parent.active = false;
        });
        this.node.runAction(cc.sequence(cc.delayTime(1.0), action1, cc.delayTime(1.0), action2));
    };
    __decorate([
        property(cc.Label)
    ], Node6_3.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Node6_3.prototype, "nodeHand", void 0);
    __decorate([
        property([cc.Node])
    ], Node6_3.prototype, "nodeBead", void 0);
    Node6_3 = __decorate([
        ccclass
    ], Node6_3);
    return Node6_3;
}(cc.Component));
exports.default = Node6_3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uM1xcTm9kZTZfMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQWlDQztRQTlCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFjLEVBQUUsQ0FBQzs7SUF3QjdCLENBQUM7SUF0Qkcsd0JBQU0sR0FBTjtJQUNBLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQUEsaUJBY0M7UUFiRyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7WUFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQTVCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NkNBQ0k7SUFUUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBaUMzQjtJQUFELGNBQUM7Q0FqQ0QsQUFpQ0MsQ0FqQ29DLEVBQUUsQ0FBQyxTQUFTLEdBaUNoRDtrQkFqQ29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlNl8zIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIG5vZGVIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5Ob2RlXSlcclxuICAgIG5vZGVCZWFkOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHNldEFjdGlvbigpe1xyXG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlQmVhZFswXS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNSxjYy52MigwLDU1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMV0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMzApKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMl0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMTE1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCIzXCJcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUhhbmQucGFyZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbjIgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZGVsYXlUaW1lKDEuMCksYWN0aW9uMSxjYy5kZWxheVRpbWUoMS4wKSxhY3Rpb24yKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson3/Node8_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '803d3yn6LlMhaZ1kKxXUu/B', 'Node8_3');
// scripts/listLesson/lesson3/Node8_3.ts

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
var Node8_3 = /** @class */ (function (_super) {
    __extends(Node8_3, _super);
    function Node8_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeHand = null;
        _this.nodeBead = [];
        return _this;
    }
    Node8_3.prototype.onLoad = function () {
    };
    Node8_3.prototype.start = function () {
        this.setAction();
    };
    Node8_3.prototype.setAction = function () {
        var _this = this;
        var action1 = cc.callFunc(function () {
            _this.nodeBead[4].runAction(cc.moveTo(0.5, cc.v2(0, 195)));
            _this.label.string = "5";
            _this.label.node.active = true;
            _this.nodeHand.parent.active = true;
        });
        var action2 = cc.callFunc(function () {
            _this.nodeHand.parent.active = false;
        });
        this.node.runAction(cc.sequence(cc.delayTime(1.0), action1, cc.delayTime(1.0), action2));
    };
    __decorate([
        property(cc.Label)
    ], Node8_3.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Node8_3.prototype, "nodeHand", void 0);
    __decorate([
        property([cc.Node])
    ], Node8_3.prototype, "nodeBead", void 0);
    Node8_3 = __decorate([
        ccclass
    ], Node8_3);
    return Node8_3;
}(cc.Component));
exports.default = Node8_3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uM1xcTm9kZThfMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQStCQztRQTVCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFjLEVBQUUsQ0FBQzs7SUFzQjdCLENBQUM7SUFwQkcsd0JBQU0sR0FBTjtJQUNBLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQUEsaUJBWUM7UUFYRyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7WUFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQTFCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NkNBQ0k7SUFUUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBK0IzQjtJQUFELGNBQUM7Q0EvQkQsQUErQkMsQ0EvQm9DLEVBQUUsQ0FBQyxTQUFTLEdBK0JoRDtrQkEvQm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlOF8zIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIG5vZGVIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5Ob2RlXSlcclxuICAgIG5vZGVCZWFkOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHNldEFjdGlvbigpe1xyXG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlQmVhZFs0XS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNSxjYy52MigwLDE5NSkpKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIjVcIlxyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlSGFuZC5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUhhbmQucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5kZWxheVRpbWUoMS4wKSxhY3Rpb24xLGNjLmRlbGF5VGltZSgxLjApLGFjdGlvbjIpKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson4/Node3_4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8f1feTEWhpLMo5/3hCGIB1h', 'Node3_4');
// scripts/listLesson/lesson4/Node3_4.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Node3_4 = /** @class */ (function (_super) {
    __extends(Node3_4, _super);
    function Node3_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label_refer = null;
        _this.label_result = null;
        _this.nodeHand = null;
        _this.nodeBead = [];
        return _this;
    }
    Node3_4.prototype.start = function () {
        this.setAction();
        this.label_result.node.active = false;
    };
    Node3_4.prototype.setAction = function () {
        var _this = this;
        var txt = this.node.getChildByName("text");
        var action1 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.YELLOW;
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, 55.5)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 ";
        });
        var action2 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.YELLOW;
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 + 1";
        });
        var action3 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.WHITE;
            txt.children[2].color = cc.Color.YELLOW;
            _this.nodeBead[2].runAction(cc.moveTo(0.5, cc.v2(0, -115.5)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 + 1 + 1";
        });
        var action4 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.WHITE;
            txt.children[2].color = cc.Color.WHITE;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 + 1 + 1 = 3";
            _this.label_result.string = "3";
            _this.label_result.node.active = true;
            _this.label_result.node.color = cc.Color.YELLOW;
        });
        var hideAnim = cc.callFunc(function () {
            _this.nodeHand.parent.active = false;
        });
        this.node.runAction(cc.sequence(cc.delayTime(2.0), action1, cc.delayTime(1.0), hideAnim, cc.delayTime(2.0), action2, cc.delayTime(1.0), hideAnim, cc.delayTime(2.0), action3, cc.delayTime(1.0), hideAnim, cc.delayTime(1.0), action4));
    };
    __decorate([
        property(cc.Label)
    ], Node3_4.prototype, "label_refer", void 0);
    __decorate([
        property(cc.Label)
    ], Node3_4.prototype, "label_result", void 0);
    __decorate([
        property(cc.Node)
    ], Node3_4.prototype, "nodeHand", void 0);
    __decorate([
        property([cc.Node])
    ], Node3_4.prototype, "nodeBead", void 0);
    Node3_4 = __decorate([
        ccclass
    ], Node3_4);
    return Node3_4;
}(cc.Component));
exports.default = Node3_4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uNFxcTm9kZTNfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQW9GQztRQWpGRyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYyxFQUFFLENBQUM7O0lBd0U3QixDQUFDO0lBdEVHLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBQ0QsMkJBQVMsR0FBVDtRQUFBLGlCQStEQztRQTlERyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxLQUFLLENBQUMsQ0FBQztZQUMxRSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFFLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDdkMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDdkMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO1lBQzFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQTtRQUVILElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNmLEVBQUUsQ0FBQyxRQUFRLENBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxFQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFFBQVEsRUFDUixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixPQUFPLEVBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsUUFBUSxFQUNSLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE9BQU8sRUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixRQUFRLEVBQ1IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxDQUNWLENBQ0osQ0FBQztJQUNOLENBQUM7SUE5RUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNXO0lBRzlCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NkNBQ0k7SUFaUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBb0YzQjtJQUFELGNBQUM7Q0FwRkQsQUFvRkMsQ0FwRm9DLEVBQUUsQ0FBQyxTQUFTLEdBb0ZoRDtrQkFwRm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUzXzQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsX3JlZmVyOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxfcmVzdWx0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgbm9kZUhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoW2NjLk5vZGVdKVxyXG4gICAgbm9kZUJlYWQ6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfcmVzdWx0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICBsZXQgdHh0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgIHR4dC5jaGlsZHJlblswXS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICAgICB0aGlzLm5vZGVCZWFkWzBdLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC41LGNjLnYyKDAsNTUuNSkpKTtcclxuICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgIHRoaXMubm9kZUhhbmQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCxcImFuaW1hdGlvblwiLGZhbHNlKTtcclxuICAgICAgICAgICB0aGlzLmxhYmVsX3JlZmVyLnN0cmluZyA9IFwiMSBcIjtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblswXS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB0eHQuY2hpbGRyZW5bMV0uY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMV0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMzApKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUhhbmQucGFyZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUhhbmQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCxcImFuaW1hdGlvblwiLGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9yZWZlci5zdHJpbmcgPSBcIjEgKyAxXCI7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbjMgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0eHQuY2hpbGRyZW5bMF0uY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgdHh0LmNoaWxkcmVuWzFdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblsyXS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICAgICAgdGhpcy5ub2RlQmVhZFsyXS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNSxjYy52MigwLC0xMTUuNSkpKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlSGFuZC5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlSGFuZC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLFwiYW5pbWF0aW9uXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsX3JlZmVyLnN0cmluZyA9IFwiMSArIDEgKyAxXCI7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbjQgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0eHQuY2hpbGRyZW5bMF0uY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgdHh0LmNoaWxkcmVuWzFdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblsyXS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsXCJhbmltYXRpb25cIixmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVmZXIuc3RyaW5nID0gXCIxICsgMSArIDEgPSAzXCI7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVzdWx0LnN0cmluZyA9IFwiM1wiO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsX3Jlc3VsdC5ub2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVzdWx0Lm5vZGUuY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XHJcbiAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBoaWRlQW5pbSA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUhhbmQucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDIuMCksXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24xLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuMCksXHJcbiAgICAgICAgICAgICAgICBoaWRlQW5pbSxcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgyLjApLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uMixcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjApLFxyXG4gICAgICAgICAgICAgICAgaGlkZUFuaW0sXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMi4wKSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjMsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS4wKSxcclxuICAgICAgICAgICAgICAgIGhpZGVBbmltLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuMCksXHJcbiAgICAgICAgICAgICAgICBhY3Rpb240XHJcbiAgICAgICAgICAgIClcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson2/Node3_2.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '26415nvyfZGr4byOGW9TRlL', 'Node3_2');
// scripts/listLesson/lesson2/Node3_2.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Node1_2 = /** @class */ (function (_super) {
    __extends(Node1_2, _super);
    function Node1_2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeBead = [];
        _this.count = 0;
        return _this;
    }
    Node1_2.prototype.onLoad = function () {
    };
    Node1_2.prototype.start = function () {
        this.setAction();
    };
    Node1_2.prototype.setAction = function () {
        var _this = this;
        var action1 = cc.callFunc(function () {
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, 55.5)));
            _this.count++;
            _this.label.string = _this.count + " hạt dưới là số: " + _this.count;
            _this.label.node.active = true;
        });
        var action2 = cc.callFunc(function () {
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.count++;
            _this.label.string = _this.count + " hạt dưới là số: " + _this.count;
        });
        var action3 = cc.callFunc(function () {
            _this.nodeBead[2].runAction(cc.moveTo(0.5, cc.v2(0, -115.5)));
            _this.count++;
            _this.label.string = _this.count + " hạt dưới là số: " + _this.count;
        });
        var action4 = cc.callFunc(function () {
            _this.nodeBead[3].runAction(cc.moveTo(0.5, cc.v2(0, -201)));
            _this.count++;
            _this.label.string = _this.count + " hạt dưới là số: " + _this.count;
        });
        var action5 = cc.callFunc(function () {
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -115.5)));
            _this.nodeBead[2].runAction(cc.moveTo(0.5, cc.v2(0, -201)));
            _this.nodeBead[3].runAction(cc.moveTo(0.5, cc.v2(0, -286.5)));
        });
        var action6 = cc.callFunc(function () {
            _this.nodeBead[4].runAction(cc.moveTo(0.5, cc.v2(0, 195)));
            _this.count++;
            _this.label.string = "Hạt trên là số: " + _this.count;
        });
        this.node.runAction(cc.sequence(cc.delayTime(1.5), action1, cc.delayTime(1.5), action2, cc.delayTime(1.5), action3, cc.delayTime(1.5), action4, cc.delayTime(1.5), action5, cc.delayTime(1.0), action6));
    };
    __decorate([
        property(cc.Label)
    ], Node1_2.prototype, "label", void 0);
    __decorate([
        property([cc.Node])
    ], Node1_2.prototype, "nodeBead", void 0);
    Node1_2 = __decorate([
        ccclass
    ], Node1_2);
    return Node1_2;
}(cc.Component));
exports.default = Node1_2;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uMlxcTm9kZTNfMi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQW1FQztRQWhFRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBYyxFQUFFLENBQUM7UUFFekIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUEyRHRCLENBQUM7SUExREcsd0JBQU0sR0FBTjtJQUVBLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQUEsaUJBaURDO1FBaERHLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdEIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pELEtBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUNiLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLEtBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLEdBQUcsS0FBSSxDQUFDLEtBQUssQ0FBQztZQUNsRSxLQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBRWxDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFB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QUFLLENBQUMsTUFBTSxHQUFHLGtCQUFrQixHQUFHLEtBQUksQ0FBQyxLQUFLLENBQUM7UUFDeEQsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FDZixFQUFFLENBQUMsUUFBUSxDQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE9BQU8sRUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixPQUFPLEVBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxFQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE9BQU8sRUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixPQUFPLEVBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxDQUNWLENBQUMsQ0FBQztJQUNYLENBQUM7SUE5REQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2Q0FDSTtJQU5SLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0FtRTNCO0lBQUQsY0FBQztDQW5FRCxBQW1FQyxDQW5Fb0MsRUFBRSxDQUFDLFNBQVMsR0FtRWhEO2tCQW5Fb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIFR5cGVTY3JpcHQ6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxyXG4vLyBMZWFybiBBdHRyaWJ1dGU6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcclxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcclxuXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZTFfMiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5Ob2RlXSlcclxuICAgIG5vZGVCZWFkOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBjb3VudDogbnVtYmVyID0gMDtcclxuICAgIG9uTG9hZCgpe1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0QWN0aW9uKCl7XHJcbiAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVCZWFkWzBdLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC41LGNjLnYyKDAsNTUuNSkpKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMuY291bnQgKyBcIiBo4bqhdCBkxrDhu5tpIGzDoCBz4buROiBcIiArIHRoaXMuY291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb24yID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlQmVhZFsxXS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNSxjYy52MigwLC0zMCkpKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMuY291bnQgKyBcIiBo4bqhdCBkxrDhu5tpIGzDoCBz4buROiBcIiArIHRoaXMuY291bnQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMl0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMTE1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnQrKztcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSB0aGlzLmNvdW50ICsgXCIgaOG6oXQgZMaw4bubaSBsw6Agc+G7kTogXCIgKyB0aGlzLmNvdW50O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGFjdGlvbjQgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVCZWFkWzNdLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC41LGNjLnYyKDAsLTIwMSkpKTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCsrO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IHRoaXMuY291bnQgKyBcIiBo4bqhdCBkxrDhu5tpIGzDoCBz4buROiBcIiArIHRoaXMuY291bnQ7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgYWN0aW9uNSA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMF0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMzApKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMV0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMTE1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMl0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMjAxKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVCZWFkWzNdLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC41LGNjLnYyKDAsLTI4Ni41KSkpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbGV0IGFjdGlvbjYgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVCZWFkWzRdLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC41LGNjLnYyKDAsMTk1KSkpO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50Kys7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCJI4bqhdCB0csOqbiBsw6Agc+G7kTogXCIgKyB0aGlzLmNvdW50O1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgdGhpcy5ub2RlLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS41KSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjEsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS41KSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjIsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS41KSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjMsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS41KSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjQsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS41KSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjUsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS4wKSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjZcclxuICAgICAgICAgICAgKSk7XHJcbiAgICB9XHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson4/Node1_4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bbf76vLbx9C4ZylmPPHJ8k8', 'Node1_4');
// scripts/listLesson/lesson4/Node1_4.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Node1_4 = /** @class */ (function (_super) {
    __extends(Node1_4, _super);
    function Node1_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        return _this;
    }
    Node1_4.prototype.onLoad = function () { };
    Node1_4.prototype.start = function () {
        this.setAction();
    };
    Node1_4.prototype.setAction = function () {
        var spr1 = this.node.getChildByName("spr1");
        var txt1 = this.node.getChildByName("text1");
        spr1.opacity = 0;
        txt1.opacity = 0;
        spr1.setPosition(cc.v2(-585, 250));
        var spr2 = this.node.getChildByName("spr2");
        var txt2 = this.node.getChildByName("text2");
        spr2.opacity = 0;
        txt2.opacity = 0;
        spr2.setPosition(cc.v2(-413, 250));
        var txt3 = this.node.getChildByName("text3");
        txt3.opacity = 0;
        var spr4 = this.node.getChildByName("spr4");
        var txt4 = this.node.getChildByName("text4");
        spr4.opacity = 0;
        txt4.opacity = 0;
        spr4.setPosition(cc.v2(77, 250));
        var actionSpr1 = cc.callFunc(function () {
            spr1.runAction(cc.sequence(cc.fadeTo(0.5, 255), cc.moveTo(0.5, cc.v2(-585, 0))));
        });
        var actionLb1 = cc.callFunc(function () {
            txt1.runAction(cc.fadeTo(0.5, 255));
        });
        var actionSpr2 = cc.callFunc(function () {
            spr2.runAction(cc.sequence(cc.fadeTo(0.5, 255), cc.moveTo(0.5, cc.v2(-413, 0))));
        });
        var actionLb2 = cc.callFunc(function () {
            txt2.runAction(cc.fadeTo(0.5, 255));
        });
        var actionSpr3_1 = cc.callFunc(function () {
            spr1.runAction(cc.moveTo(0.5, cc.v2(-500, 0)));
        });
        var actionSpr3_2 = cc.callFunc(function () {
            spr2.runAction(cc.moveTo(0.5, cc.v2(-500, 0)));
        });
        var actionText3 = cc.callFunc(function () {
            txt3.runAction(cc.fadeTo(0.5, 255));
        });
        var actionSpr4 = cc.callFunc(function () {
            spr4.runAction(cc.sequence(cc.fadeTo(0.5, 255), cc.moveTo(0.5, cc.v2(77, 0))));
        });
        var actionLb4 = cc.callFunc(function () {
            txt4.runAction(cc.fadeTo(0.5, 255));
        });
        this.node.runAction(cc.sequence(cc.delayTime(1.0), cc.sequence(actionLb1, cc.delayTime(0.5), actionSpr1), cc.delayTime(1.0), cc.sequence(actionLb2, cc.delayTime(0.5), actionSpr2), cc.delayTime(1.0), cc.sequence(actionText3, cc.delayTime(0.5), cc.spawn(actionSpr3_1, actionSpr3_2)), cc.delayTime(1.0), cc.sequence(actionSpr4, cc.delayTime(0.5), actionLb4)));
    };
    __decorate([
        property(cc.Label)
    ], Node1_4.prototype, "label", void 0);
    Node1_4 = __decorate([
        ccclass
    ], Node1_4);
    return Node1_4;
}(cc.Component));
exports.default = Node1_4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uNFxcTm9kZTFfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTRHQztRQXpHRyxXQUFLLEdBQWEsSUFBSSxDQUFDOztJQXlHM0IsQ0FBQztJQXRHRyx3QkFBTSxHQUFOLGNBQVcsQ0FBQztJQUVaLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELDJCQUFTLEdBQVQ7UUFDSSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1QyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsT0FBTyxHQUFHLENB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LENBQ1osQ0FDSixDQUNKLENBQUM7SUFDTixDQUFDO0lBdkdEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MENBQ0k7SUFITixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBNEczQjtJQUFELGNBQUM7Q0E1R0QsQUE0R0MsQ0E1R29DLEVBQUUsQ0FBQyxTQUFTLEdBNEdoRDtrQkE1R29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUxXzQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG5cclxuICAgIG9uTG9hZCAoKSB7fVxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgfVxyXG4gICAgc2V0QWN0aW9uKCl7XHJcbiAgICAgICAgbGV0IHNwcjEgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJzcHIxXCIpO1xyXG4gICAgICAgIGxldCB0eHQxID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGV4dDFcIik7XHJcbiAgICAgICAgc3ByMS5vcGFjaXR5ID0gMDtcclxuICAgICAgICB0eHQxLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHNwcjEuc2V0UG9zaXRpb24oY2MudjIoLTU4NSwyNTApKTtcclxuICAgICAgICBsZXQgc3ByMiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwcjJcIik7XHJcbiAgICAgICAgbGV0IHR4dDIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0MlwiKTtcclxuICAgICAgICBzcHIyLm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHR4dDIub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgc3ByMi5zZXRQb3NpdGlvbihjYy52MigtNDEzLDI1MCkpO1xyXG4gICAgICAgIGxldCB0eHQzID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGV4dDNcIik7XHJcbiAgICAgICAgdHh0My5vcGFjaXR5ID0gMDtcclxuICAgICAgICBsZXQgc3ByNCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwcjRcIik7XHJcbiAgICAgICAgbGV0IHR4dDQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0NFwiKTtcclxuICAgICAgICBzcHI0Lm9wYWNpdHkgPSAwO1xyXG4gICAgICAgIHR4dDQub3BhY2l0eSA9IDA7XHJcbiAgICAgICAgc3ByNC5zZXRQb3NpdGlvbihjYy52Mig3NywyNTApKTtcclxuICAgICBcclxuICAgICAgICBsZXQgYWN0aW9uU3ByMSA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHNwcjEucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZmFkZVRvKDAuNSwyNTUpLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuNSxjYy52MigtNTg1LDApKSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb25MYjEgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0eHQxLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgIGNjLmZhZGVUbygwLjUsMjU1KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgYWN0aW9uU3ByMiA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHNwcjIucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZmFkZVRvKDAuNSwyNTUpLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuNSxjYy52MigtNDEzLDApKSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb25MYjIgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0eHQyLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgIGNjLmZhZGVUbygwLjUsMjU1KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb25TcHIzXzEgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICBzcHIxLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsY2MudjIoLTUwMCwwKSkpICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb25TcHIzXzIgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICBzcHIyLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgIGNjLm1vdmVUbygwLjUsY2MudjIoLTUwMCwwKSkpXHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgYWN0aW9uVGV4dDMgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0eHQzLnJ1bkFjdGlvbihcclxuICAgICAgICAgICAgICAgIGNjLmZhZGVUbygwLjUsMjU1KSxcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgYWN0aW9uU3ByNCA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHNwcjQucnVuQWN0aW9uKGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZmFkZVRvKDAuNSwyNTUpLFxyXG4gICAgICAgICAgICAgICAgY2MubW92ZVRvKDAuNSxjYy52Mig3NywwKSkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgYWN0aW9uTGI0ID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdHh0NC5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgICAgICBjYy5mYWRlVG8oMC41LDI1NSksXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjApLFxyXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uTGIxLFxyXG4gICAgICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgwLjUpLFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvblNwcjFcclxuICAgICAgICAgICAgICAgICksXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS4wKSxcclxuICAgICAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbkxiMixcclxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC41KSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25TcHIyXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuMCksXHJcbiAgICAgICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25UZXh0MyxcclxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC41KSxcclxuICAgICAgICAgICAgICAgICAgICBjYy5zcGF3bihhY3Rpb25TcHIzXzEsYWN0aW9uU3ByM18yKVxyXG4gICAgICAgICAgICAgICAgKSxcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjApLFxyXG4gICAgICAgICAgICAgICAgY2Muc2VxdWVuY2UoXHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uU3ByNCxcclxuICAgICAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMC41KSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25MYjQsXHJcbiAgICAgICAgICAgICAgICApLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson3/Node7_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '983d5nL4ghFabJ5f1TpMjKz', 'Node7_3');
// scripts/listLesson/lesson3/Node7_3.ts

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
var Node7_3 = /** @class */ (function (_super) {
    __extends(Node7_3, _super);
    function Node7_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeHand = null;
        _this.nodeBead = [];
        return _this;
    }
    Node7_3.prototype.onLoad = function () {
    };
    Node7_3.prototype.start = function () {
        this.setAction();
    };
    Node7_3.prototype.setAction = function () {
        var _this = this;
        var action1 = cc.callFunc(function () {
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, 55.5)));
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.nodeBead[2].runAction(cc.moveTo(0.5, cc.v2(0, -115.5)));
            _this.nodeBead[3].runAction(cc.moveTo(0.5, cc.v2(0, -201)));
            _this.label.string = "4";
            _this.label.node.active = true;
            _this.nodeHand.parent.active = true;
        });
        var action2 = cc.callFunc(function () {
            _this.nodeHand.parent.active = false;
        });
        this.node.runAction(cc.sequence(cc.delayTime(1.0), action1, cc.delayTime(1.0), action2));
    };
    __decorate([
        property(cc.Label)
    ], Node7_3.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Node7_3.prototype, "nodeHand", void 0);
    __decorate([
        property([cc.Node])
    ], Node7_3.prototype, "nodeBead", void 0);
    Node7_3 = __decorate([
        ccclass
    ], Node7_3);
    return Node7_3;
}(cc.Component));
exports.default = Node7_3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uM1xcTm9kZTdfMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQWtDQztRQS9CRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFHekIsY0FBUSxHQUFjLEVBQUUsQ0FBQzs7SUF5QjdCLENBQUM7SUF2Qkcsd0JBQU0sR0FBTjtJQUNBLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ3JCLENBQUM7SUFDRCwyQkFBUyxHQUFUO1FBQUEsaUJBZUM7UUFkRyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN4RCxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMzRCxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUE7WUFDdkIsS0FBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUM5QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQU8sRUFBQyxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7SUFDMUYsQ0FBQztJQTdCRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzBDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NkNBQ0k7SUFUUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBa0MzQjtJQUFELGNBQUM7Q0FsQ0QsQUFrQ0MsQ0FsQ29DLEVBQUUsQ0FBQyxTQUFTLEdBa0NoRDtrQkFsQ29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb2RlN18zIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIG5vZGVIYW5kOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5Ob2RlXSlcclxuICAgIG5vZGVCZWFkOiBjYy5Ob2RlW10gPSBbXTtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5zZXRBY3Rpb24oKTtcclxuICAgIH1cclxuICAgIHNldEFjdGlvbigpe1xyXG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlQmVhZFswXS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNSxjYy52MigwLDU1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMV0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMzApKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMl0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMTE1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbM10ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMjAxKSkpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwiNFwiXHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24yID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5ub2RlSGFuZC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgxLjApLGFjdGlvbjEsY2MuZGVsYXlUaW1lKDEuMCksYWN0aW9uMikpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson4/Node2_4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '47a3aRhQy1KOaNTVI3xbpIO', 'Node2_4');
// scripts/listLesson/lesson4/Node2_4.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var Node2_4 = /** @class */ (function (_super) {
    __extends(Node2_4, _super);
    function Node2_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.text = 'hello';
        return _this;
    }
    Node2_4.prototype.start = function () {
        this.setAction();
    };
    Node2_4.prototype.setAction = function () {
        var _this = this;
        var txt = this.node.getChildByName("text");
        var lb = this.node.getChildByName("lb");
        txt.active = false;
        lb.active = false;
        var action1 = cc.callFunc(function () {
            _this.label.string = "Phép tính trên được đọc là 1 + 1 + 1 con nhé!";
            txt.active = true;
            lb.active = true;
        });
        var action2 = cc.callFunc(function () {
            _this.label.string = "Trong toán bàn tính soroban thường phép tính cộng không ghi là cộng và thường được viết theo cột dọc. Bây giờ chúng mình cùng biểu diễn phép tính 1 + 1 + 1 trên bàn tính soroban nào";
        });
        var action3 = cc.callFunc(function () {
            _this.label.string = "Phép tính trên được đọc là 1 + 1 + 1 con nhé!";
            txt.active = true;
            lb.active = true;
        });
        this.node.runAction(cc.sequence(cc.delayTime(3.0), action1, cc.delayTime(3.0), action2));
    };
    __decorate([
        property(cc.Label)
    ], Node2_4.prototype, "label", void 0);
    __decorate([
        property
    ], Node2_4.prototype, "text", void 0);
    Node2_4 = __decorate([
        ccclass
    ], Node2_4);
    return Node2_4;
}(cc.Component));
exports.default = Node2_4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uNFxcTm9kZTJfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0JBQW9CO0FBQ3BCLHdFQUF3RTtBQUN4RSxtQkFBbUI7QUFDbkIsa0ZBQWtGO0FBQ2xGLDhCQUE4QjtBQUM5QixrRkFBa0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU1RSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXlDQztRQXRDRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLFVBQUksR0FBVyxPQUFPLENBQUM7O0lBbUMzQixDQUFDO0lBakNHLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUVELDJCQUFTLEdBQVQ7UUFBQSxpQkE0QkM7UUEzQkcsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDM0MsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDeEMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbkIsRUFBRSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN2QixLQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRywrQ0FBK0MsQ0FBQztZQUNwRSxHQUFHLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNsQixFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdEIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsdUxBQXVMLENBQUM7UUFDaE4sQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEtBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLCtDQUErQyxDQUFDO1lBQ3BFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ2xCLEVBQUUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLENBQUMsQ0FBQyxDQUFBO1FBR0gsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQ2YsRUFBRSxDQUFDLFFBQVEsQ0FDUCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixPQUFPLEVBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxDQUNWLENBQ0osQ0FBQztJQUNOLENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSTtJQUd2QjtRQURDLFFBQVE7eUNBQ2M7SUFOTixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBeUMzQjtJQUFELGNBQUM7Q0F6Q0QsQUF5Q0MsQ0F6Q29DLEVBQUUsQ0FBQyxTQUFTLEdBeUNoRDtrQkF6Q29CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGUyXzQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB0ZXh0OiBzdHJpbmcgPSAnaGVsbG8nO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEFjdGlvbigpe1xyXG4gICAgICAgIGxldCB0eHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpO1xyXG4gICAgICAgIGxldCBsYiA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxiXCIpO1xyXG4gICAgICAgIHR4dC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsYi5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBsZXQgYWN0aW9uMSA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIlBow6lwIHTDrW5oIHRyw6puIMSRxrDhu6NjIMSR4buNYyBsw6AgMSArIDEgKyAxIGNvbiBuaMOpIVwiO1xyXG4gICAgICAgICAgIHR4dC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgIGxiLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfSlcclxuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCJUcm9uZyB0b8OhbiBiw6BuIHTDrW5oIHNvcm9iYW4gdGjGsOG7nW5nIHBow6lwIHTDrW5oIGPhu5luZyBraMO0bmcgZ2hpIGzDoCBj4buZbmcgdsOgIHRoxrDhu51uZyDEkcaw4bujYyB2aeG6v3QgdGhlbyBj4buZdCBk4buNYy4gQsOieSBnaeG7nSBjaMO6bmcgbcOsbmggY8O5bmcgYmnhu4N1IGRp4buFbiBwaMOpcCB0w61uaCAxICsgMSArIDEgdHLDqm4gYsOgbiB0w61uaCBzb3JvYmFuIG7DoG9cIjtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb24zID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIlBow6lwIHTDrW5oIHRyw6puIMSRxrDhu6NjIMSR4buNYyBsw6AgMSArIDEgKyAxIGNvbiBuaMOpIVwiO1xyXG4gICAgICAgICAgICB0eHQuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgbGIuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIHRoaXMubm9kZS5ydW5BY3Rpb24oXHJcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDMuMCksXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24xLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDMuMCksXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24yLFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson4/Node6_4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6f036iT1mtK/Jfb3rpp4LHR', 'Node6_4');
// scripts/listLesson/lesson4/Node6_4.ts

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
var Node6_4 = /** @class */ (function (_super) {
    __extends(Node6_4, _super);
    function Node6_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label_refer = null;
        _this.label_result = null;
        _this.nodeHand = null;
        _this.nodeBead = [];
        return _this;
    }
    Node6_4.prototype.start = function () {
        this.setAction();
        this.label_result.node.active = false;
    };
    Node6_4.prototype.setAction = function () {
        var _this = this;
        var txt = this.node.getChildByName("text");
        var action1 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.YELLOW;
            _this.nodeHand.parent.active = false;
            _this.label_refer.string = "0 ";
        });
        var action2 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.YELLOW;
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, 55.5)));
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.nodeBead[2].runAction(cc.moveTo(0.5, cc.v2(0, -115.5)));
            _this.nodeBead[3].runAction(cc.moveTo(0.5, cc.v2(0, -201)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "0 + 4";
        });
        var action3 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.WHITE;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "0 + 4 = 4";
            _this.label_result.string = "4";
            _this.label_result.node.active = true;
            _this.label_result.node.color = cc.Color.YELLOW;
        });
        var hideAnim = cc.callFunc(function () {
            _this.nodeHand.parent.active = false;
        });
        this.node.runAction(cc.sequence(cc.delayTime(2.0), action1, cc.delayTime(1.0), hideAnim, cc.delayTime(2.0), action2, cc.delayTime(1.0), hideAnim, cc.delayTime(2.0), action3, cc.delayTime(1.0), hideAnim));
    };
    __decorate([
        property(cc.Label)
    ], Node6_4.prototype, "label_refer", void 0);
    __decorate([
        property(cc.Label)
    ], Node6_4.prototype, "label_result", void 0);
    __decorate([
        property(cc.Node)
    ], Node6_4.prototype, "nodeHand", void 0);
    __decorate([
        property([cc.Node])
    ], Node6_4.prototype, "nodeBead", void 0);
    Node6_4 = __decorate([
        ccclass
    ], Node6_4);
    return Node6_4;
}(cc.Component));
exports.default = Node6_4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uNFxcTm9kZTZfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXdFQztRQXJFRyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYyxFQUFFLENBQUM7O0lBNEQ3QixDQUFDO0lBMURHLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBQ0QsMkJBQVMsR0FBVDtRQUFBLGlCQW1EQztRQWxERyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEMsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1FBQ2xDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztZQUN4QyxLQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDM0QsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1lBQ3RDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNmLEVBQUUsQ0FBQyxRQUFRLENBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxFQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFFBQVEsRUFDUixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixPQUFPLEVBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsUUFBUSxFQUNSLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE9BQU8sRUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixRQUFRLENBQ1gsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQWxFRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2dEQUNVO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7aURBQ1c7SUFHOUI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUd6QjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2Q0FDSTtJQVpSLE9BQU87UUFEM0IsT0FBTztPQUNhLE9BQU8sQ0F3RTNCO0lBQUQsY0FBQztDQXhFRCxBQXdFQyxDQXhFb0MsRUFBRSxDQUFDLFNBQVMsR0F3RWhEO2tCQXhFb0IsT0FBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZTZfNCBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxfcmVmZXI6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbF9yZXN1bHQ6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBub2RlSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChbY2MuTm9kZV0pXHJcbiAgICBub2RlQmVhZDogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aW9uKCk7XHJcbiAgICAgICAgdGhpcy5sYWJlbF9yZXN1bHQubm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgIH1cclxuICAgIHNldEFjdGlvbigpe1xyXG4gICAgICAgIGxldCB0eHQgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpO1xyXG5cclxuICAgICAgICBsZXQgYWN0aW9uMSA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgdHh0LmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xyXG4gICAgICAgICAgIHRoaXMubm9kZUhhbmQucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgIHRoaXMubGFiZWxfcmVmZXIuc3RyaW5nID0gXCIwIFwiO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24yID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdHh0LmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblsxXS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICAgICAgdGhpcy5ub2RlQmVhZFswXS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNSxjYy52MigwLDU1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMV0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMzApKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMl0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMTE1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbM10ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMjAxKSkpO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsXCJhbmltYXRpb25cIixmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVmZXIuc3RyaW5nID0gXCIwICsgNFwiO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBhY3Rpb24zID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdHh0LmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblsxXS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLmdldENvbXBvbmVudChzcC5Ta2VsZXRvbikuc2V0QW5pbWF0aW9uKDAsXCJhbmltYXRpb25cIixmYWxzZSk7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVmZXIuc3RyaW5nID0gXCIwICsgNCA9IDRcIjtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9yZXN1bHQuc3RyaW5nID0gXCI0XCI7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWxfcmVzdWx0Lm5vZGUuYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9yZXN1bHQubm9kZS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgaGlkZUFuaW0gPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgyLjApLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uMSxcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjApLFxyXG4gICAgICAgICAgICAgICAgaGlkZUFuaW0sXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMi4wKSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjIsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS4wKSxcclxuICAgICAgICAgICAgICAgIGhpZGVBbmltLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDIuMCksXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24zLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuMCksXHJcbiAgICAgICAgICAgICAgICBoaWRlQW5pbSxcclxuICAgICAgICAgICAgKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson4/Node4_4.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f3714qvFDZBBJD+Ev+ntSs4', 'Node4_4');
// scripts/listLesson/lesson4/Node4_4.ts

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
var Node4_4 = /** @class */ (function (_super) {
    __extends(Node4_4, _super);
    function Node4_4() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label_refer = null;
        _this.label_result = null;
        _this.nodeHand = null;
        _this.nodeBead = [];
        return _this;
    }
    Node4_4.prototype.start = function () {
        this.setAction();
        this.label_result.node.active = false;
    };
    Node4_4.prototype.setAction = function () {
        var _this = this;
        var txt = this.node.getChildByName("text");
        var action1 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.YELLOW;
            _this.nodeBead[0].runAction(cc.moveTo(0.5, cc.v2(0, 55.5)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 ";
        });
        var action2 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.YELLOW;
            _this.nodeBead[1].runAction(cc.moveTo(0.5, cc.v2(0, -30)));
            _this.nodeBead[2].runAction(cc.moveTo(0.5, cc.v2(0, -115.5)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 + 2";
        });
        var action3 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.WHITE;
            txt.children[2].color = cc.Color.YELLOW;
            _this.nodeBead[3].runAction(cc.moveTo(0.5, cc.v2(0, -201)));
            _this.nodeHand.parent.active = true;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 + 2 + 1";
        });
        var action4 = cc.callFunc(function () {
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.WHITE;
            txt.children[2].color = cc.Color.WHITE;
            _this.nodeHand.getComponent(sp.Skeleton).setAnimation(0, "animation", false);
            _this.label_refer.string = "1 + 2 + 1 = 4";
            _this.label_result.string = "4";
            _this.label_result.node.active = true;
            _this.label_result.node.color = cc.Color.YELLOW;
        });
        var hideAnim = cc.callFunc(function () {
            _this.nodeHand.parent.active = false;
        });
        this.node.runAction(cc.sequence(cc.delayTime(2.0), action1, cc.delayTime(1.0), hideAnim, cc.delayTime(2.0), action2, cc.delayTime(1.0), hideAnim, cc.delayTime(2.0), action3, cc.delayTime(1.0), hideAnim, cc.delayTime(1.0), action4));
    };
    __decorate([
        property(cc.Label)
    ], Node4_4.prototype, "label_refer", void 0);
    __decorate([
        property(cc.Label)
    ], Node4_4.prototype, "label_result", void 0);
    __decorate([
        property(cc.Node)
    ], Node4_4.prototype, "nodeHand", void 0);
    __decorate([
        property([cc.Node])
    ], Node4_4.prototype, "nodeBead", void 0);
    Node4_4 = __decorate([
        ccclass
    ], Node4_4);
    return Node4_4;
}(cc.Component));
exports.default = Node4_4;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uNFxcTm9kZTRfNC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQXFGQztRQWxGRyxpQkFBVyxHQUFhLElBQUksQ0FBQztRQUc3QixrQkFBWSxHQUFhLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGNBQVEsR0FBYyxFQUFFLENBQUM7O0lBeUU3QixDQUFDO0lBdkVHLHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUMxQyxDQUFDO0lBQ0QsMkJBQVMsR0FBVDtRQUFBLGlCQWdFQztRQS9ERyxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUUzQyxJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3ZCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6RCxLQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ25DLEtBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFDLFdBQVcsRUFBQyxLQUFLLENBQUMsQ0FBQztZQUMxRSxLQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFDbEMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDO1lBQ3RCLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO1lBQ3ZDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDO1lBQ3hDLEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hELEtBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzNELEtBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUMsV0FBVyxFQUFDLEtBQUssQ0FBQyxDQUFDO1lBQzFFLEtBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztRQUN0QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksT0FBTyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdEIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDdkMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUM7WUFDdkMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUM7WUFDeEMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxHQUFHLEVBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztZQUNuQyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO1FBQzFDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQztZQUN0QixHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQztZQUN2QyxLQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBQyxXQUFXLEVBQUMsS0FBSyxDQUFDLENBQUM7WUFDMUUsS0FBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO1lBQzFDLEtBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQztZQUMvQixLQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO1lBQ3JDLEtBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQztRQUNsRCxDQUFDLENBQUMsQ0FBQTtRQUVILElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDdkIsS0FBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN4QyxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUNmLEVBQUUsQ0FBQyxRQUFRLENBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxFQUNQLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLFFBQVEsRUFDUixFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixPQUFPLEVBQ1AsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsUUFBUSxFQUNSLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEVBQ2pCLE9BQU8sRUFDUCxFQUFFLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxFQUNqQixRQUFRLEVBQ1IsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFDakIsT0FBTyxDQUNWLENBQ0osQ0FBQztJQUNOLENBQUM7SUEvRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDVTtJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO2lEQUNXO0lBRzlCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUM7NkNBQ0k7SUFaUixPQUFPO1FBRDNCLE9BQU87T0FDYSxPQUFPLENBcUYzQjtJQUFELGNBQUM7Q0FyRkQsQUFxRkMsQ0FyRm9DLEVBQUUsQ0FBQyxTQUFTLEdBcUZoRDtrQkFyRm9CLE9BQU8iLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vZGU0XzQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsX3JlZmVyOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWxfcmVzdWx0OiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgbm9kZUhhbmQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoW2NjLk5vZGVdKVxyXG4gICAgbm9kZUJlYWQ6IGNjLk5vZGVbXSA9IFtdO1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubGFiZWxfcmVzdWx0Lm5vZGUuYWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICBsZXQgdHh0ID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKTtcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbjEgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgIHR4dC5jaGlsZHJlblswXS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICAgICB0aGlzLm5vZGVCZWFkWzBdLnJ1bkFjdGlvbihjYy5tb3ZlVG8oMC41LGNjLnYyKDAsNTUuNSkpKTtcclxuICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgIHRoaXMubm9kZUhhbmQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCxcImFuaW1hdGlvblwiLGZhbHNlKTtcclxuICAgICAgICAgICB0aGlzLmxhYmVsX3JlZmVyLnN0cmluZyA9IFwiMSBcIjtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLmNhbGxGdW5jKCgpPT57XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblswXS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB0eHQuY2hpbGRyZW5bMV0uY29sb3IgPSBjYy5Db2xvci5ZRUxMT1c7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMV0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMzApKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUJlYWRbMl0ucnVuQWN0aW9uKGNjLm1vdmVUbygwLjUsY2MudjIoMCwtMTE1LjUpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUhhbmQucGFyZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUhhbmQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCxcImFuaW1hdGlvblwiLGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9yZWZlci5zdHJpbmcgPSBcIjEgKyAyXCI7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgbGV0IGFjdGlvbjMgPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0eHQuY2hpbGRyZW5bMF0uY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgdHh0LmNoaWxkcmVuWzFdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblsyXS5jb2xvciA9IGNjLkNvbG9yLllFTExPVztcclxuICAgICAgICAgICAgdGhpcy5ub2RlQmVhZFszXS5ydW5BY3Rpb24oY2MubW92ZVRvKDAuNSxjYy52MigwLC0yMDEpKSk7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUhhbmQucGFyZW50LmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMubm9kZUhhbmQuZ2V0Q29tcG9uZW50KHNwLlNrZWxldG9uKS5zZXRBbmltYXRpb24oMCxcImFuaW1hdGlvblwiLGZhbHNlKTtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9yZWZlci5zdHJpbmcgPSBcIjEgKyAyICsgMVwiO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGxldCBhY3Rpb240ID0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdHh0LmNoaWxkcmVuWzBdLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XHJcbiAgICAgICAgICAgIHR4dC5jaGlsZHJlblsxXS5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xyXG4gICAgICAgICAgICB0eHQuY2hpbGRyZW5bMl0uY29sb3IgPSBjYy5Db2xvci5XSElURTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlSGFuZC5nZXRDb21wb25lbnQoc3AuU2tlbGV0b24pLnNldEFuaW1hdGlvbigwLFwiYW5pbWF0aW9uXCIsZmFsc2UpO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsX3JlZmVyLnN0cmluZyA9IFwiMSArIDIgKyAxID0gNFwiO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsX3Jlc3VsdC5zdHJpbmcgPSBcIjRcIjtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbF9yZXN1bHQubm9kZS5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsX3Jlc3VsdC5ub2RlLmNvbG9yID0gY2MuQ29sb3IuWUVMTE9XO1xyXG4gICAgICAgICB9KVxyXG5cclxuICAgICAgICBsZXQgaGlkZUFuaW0gPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKFxyXG4gICAgICAgICAgICBjYy5zZXF1ZW5jZShcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgyLjApLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uMSxcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjApLFxyXG4gICAgICAgICAgICAgICAgaGlkZUFuaW0sXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMi4wKSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbjIsXHJcbiAgICAgICAgICAgICAgICBjYy5kZWxheVRpbWUoMS4wKSxcclxuICAgICAgICAgICAgICAgIGhpZGVBbmltLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDIuMCksXHJcbiAgICAgICAgICAgICAgICBhY3Rpb24zLFxyXG4gICAgICAgICAgICAgICAgY2MuZGVsYXlUaW1lKDEuMCksXHJcbiAgICAgICAgICAgICAgICBoaWRlQW5pbSxcclxuICAgICAgICAgICAgICAgIGNjLmRlbGF5VGltZSgxLjApLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9uNFxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcblxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/NumberSeed.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '05c01uDKUtLkIyFjDcLo787', 'NumberSeed');
// scripts/miniGame/NumberSeed.ts

"use strict";
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
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
var NumberSeed = /** @class */ (function (_super) {
    __extends(NumberSeed, _super);
    function NumberSeed() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeBead = null;
        _this.nodeLayout = null;
        _this.listButton = [];
        _this.listResultLb = [];
        _this.result = 0;
        _this.listResult = [];
        return _this;
    }
    NumberSeed.prototype.onLoad = function () {
    };
    NumberSeed.prototype.start = function () {
        this.setAction();
        this.node.setContentSize(cc.winSize.width, cc.winSize.height);
    };
    NumberSeed.prototype.setAction = function () {
        this.result = this.getRanNum(1, 6);
        var randomBox = this.getRanNum(0, 4);
        this.listResult = [];
        this.listResult.push(this.result);
        for (var i = 0; i < this.listButton.length; i++) {
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; // This node is the node to which your event handler code component belongs
            clickEventHandler.component = "NumberSeed"; // This is the code file name
            clickEventHandler.handler = "onClickChoose";
            if (i == randomBox) {
                clickEventHandler.customEventData = "" + this.result;
            }
            else {
                var random = this.getRanNum(1, 10);
                clickEventHandler.customEventData = "" + random;
                this.listResult.push(random);
            }
            console.error(this.listResult);
            this.listResultLb[i].string = clickEventHandler.customEventData;
            this.listButton[i].clickEvents = [];
            this.listButton[i].clickEvents.push(clickEventHandler);
        }
        // create node 
        this.nodeLayout.node.removeAllChildren();
        for (var i = 0; i < this.result; i++) {
            var nodeNew = cc.instantiate(this.nodeBead);
            this.nodeLayout.node.addChild(nodeNew);
        }
    };
    NumberSeed.prototype.onClickChoose = function (event, value) {
        if (value == this.result.toString()) {
            this.label.string = "Chính xác";
            this.setAction();
        }
        else {
            this.label.string = "Sai rồi";
        }
    };
    NumberSeed.prototype.onBackMenu = function () {
        this.node.destroy();
    };
    NumberSeed.prototype.getRanNum = function (min_value, max_value) {
        var random_number = Math.random() * (max_value - min_value) + min_value;
        if (this.listResult.includes(Math.floor(random_number))) {
            return this.getRanNum(min_value, max_value);
        }
        return Math.floor(random_number);
    };
    __decorate([
        property(cc.Label)
    ], NumberSeed.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], NumberSeed.prototype, "nodeBead", void 0);
    __decorate([
        property(cc.Layout)
    ], NumberSeed.prototype, "nodeLayout", void 0);
    __decorate([
        property([cc.Button])
    ], NumberSeed.prototype, "listButton", void 0);
    __decorate([
        property([cc.Label])
    ], NumberSeed.prototype, "listResultLb", void 0);
    NumberSeed = __decorate([
        ccclass
    ], NumberSeed);
    return NumberSeed;
}(cc.Component));
exports.default = NumberSeed;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXE51bWJlclNlZWQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9CQUFvQjtBQUNwQix3RUFBd0U7QUFDeEUsbUJBQW1CO0FBQ25CLGtGQUFrRjtBQUNsRiw4QkFBOEI7QUFDOUIsa0ZBQWtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFNUUsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBd0MsOEJBQVk7SUFBcEQ7UUFBQSxxRUEyRUM7UUF4RUcsV0FBSyxHQUFhLElBQUksQ0FBQztRQUd2QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUc3QixrQkFBWSxHQUFlLEVBQUUsQ0FBQztRQUM5QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGdCQUFVLEdBQWEsRUFBRSxDQUFDOztJQTBEOUIsQ0FBQztJQXpERywyQkFBTSxHQUFOO0lBRUEsQ0FBQztJQUNELDBCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsOEJBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEMsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFVB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QztJQXRFRTtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNJO0lBR3ZCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7Z0RBQ007SUFHekI7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDUTtJQUc3QjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQztrREFDTTtJQUc3QjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztvREFDUTtJQWZiLFVBQVU7UUFEOUIsT0FBTztPQUNhLFVBQVUsQ0EyRTlCO0lBQUQsaUJBQUM7Q0EzRUQsQUEyRUMsQ0EzRXVDLEVBQUUsQ0FBQyxTQUFTLEdBMkVuRDtrQkEzRW9CLFVBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBMZWFybiBUeXBlU2NyaXB0OlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE51bWJlclNlZWQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5MYWJlbClcclxuICAgIGxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgbm9kZUJlYWQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTGF5b3V0KVxyXG4gICAgbm9kZUxheW91dDogY2MuTGF5b3V0ID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5CdXR0b25dKVxyXG4gICAgbGlzdEJ1dHRvbjogY2MuQnV0dG9uW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5MYWJlbF0pXHJcbiAgICBsaXN0UmVzdWx0TGI6IGNjLkxhYmVsW10gPSBbXTtcclxuICAgIHJlc3VsdDogbnVtYmVyID0gMDtcclxuICAgIGxpc3RSZXN1bHQ6IG51bWJlcltdID0gW107XHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICBcclxuICAgIH1cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuZ2V0UmFuTnVtKDEsNik7XHJcbiAgICAgICAgbGV0IHJhbmRvbUJveCA9IHRoaXMuZ2V0UmFuTnVtKDAsNCk7XHJcbiAgICAgICAgdGhpcy5saXN0UmVzdWx0ID0gW107XHJcbiAgICAgICAgdGhpcy5saXN0UmVzdWx0LnB1c2godGhpcy5yZXN1bHQpO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QnV0dG9uLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcblx0XHRcdGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgLy8gVGhpcyBub2RlIGlzIHRoZSBub2RlIHRvIHdoaWNoIHlvdXIgZXZlbnQgaGFuZGxlciBjb2RlIGNvbXBvbmVudCBiZWxvbmdzXHJcblx0XHRcdGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiTnVtYmVyU2VlZFwiOyAvLyBUaGlzIGlzIHRoZSBjb2RlIGZpbGUgbmFtZVxyXG5cdFx0XHRjbGlja0V2ZW50SGFuZGxlci5oYW5kbGVyID0gXCJvbkNsaWNrQ2hvb3NlXCI7XHJcbiAgICAgICAgICAgIGlmKGkgPT0gcmFuZG9tQm94KXtcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YSA9IFwiXCIgKyB0aGlzLnJlc3VsdDtcclxuICAgICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgICAgICBsZXQgcmFuZG9tID0gdGhpcy5nZXRSYW5OdW0oMSwxMCk7XHJcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBcIlwiICsgcmFuZG9tO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UmVzdWx0LnB1c2gocmFuZG9tKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMubGlzdFJlc3VsdCk7XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFJlc3VsdExiW2ldLnN0cmluZyA9IGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YTtcclxuXHRcdFx0dGhpcy5saXN0QnV0dG9uW2ldLmNsaWNrRXZlbnRzID0gW107XHJcblx0XHRcdHRoaXMubGlzdEJ1dHRvbltpXS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHRcdH1cclxuICAgICAgICAvLyBjcmVhdGUgbm9kZSBcclxuICAgICAgICB0aGlzLm5vZGVMYXlvdXQubm9kZS5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnJlc3VsdDsgaSsrKXtcclxuICAgICAgICAgICAgbGV0IG5vZGVOZXcgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLm5vZGVCZWFkKTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlTGF5b3V0Lm5vZGUuYWRkQ2hpbGQobm9kZU5ldyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25DbGlja0Nob29zZShldmVudDogYW55LCB2YWx1ZTogc3RyaW5nKXtcclxuICAgICAgICBpZih2YWx1ZSA9PSB0aGlzLnJlc3VsdC50b1N0cmluZygpKXtcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIkNow61uaCB4w6FjXCI7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QWN0aW9uKCk7XHJcbiAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCJTYWkgcuG7k2lcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25CYWNrTWVudSgpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRSYW5OdW0obWluX3ZhbHVlLCBtYXhfdmFsdWUpIHtcclxuXHRcdGxldCByYW5kb21fbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIChtYXhfdmFsdWUgLSBtaW5fdmFsdWUpICsgbWluX3ZhbHVlO1xyXG4gICAgICAgIGlmKHRoaXMubGlzdFJlc3VsdC5pbmNsdWRlcyhNYXRoLmZsb29yKHJhbmRvbV9udW1iZXIpKSl7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFJhbk51bShtaW5fdmFsdWUsIG1heF92YWx1ZSk7XHJcbiAgICAgICAgfVxyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IocmFuZG9tX251bWJlcik7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/ChooseNumber.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87482wORc9KNaw1VnAOzH20', 'ChooseNumber');
// scripts/miniGame/ChooseNumber.ts

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
var ChooseNumber = /** @class */ (function (_super) {
    __extends(ChooseNumber, _super);
    function ChooseNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.listButton = [];
        _this.backSplash = null;
        _this.listResultLb = [];
        _this.result = 0;
        _this.listResult = [];
        _this.countResult = 0;
        return _this;
    }
    ChooseNumber.prototype.onLoad = function () {
        this.countResult = 0;
    };
    ChooseNumber.prototype.start = function () {
        this.setAction();
        this.node.setContentSize(cc.winSize.width, cc.winSize.height);
    };
    ChooseNumber.prototype.setAction = function () {
        this.result = this.getRanNum(0, 10);
        this.label.string = "Choose Number : " + this.result;
        this.listResult = [];
        for (var i = 0; i < 10; i++) {
            if (this.getRanNum(0, 10) % 2 == 0) {
                this.listResult.push(this.result);
            }
            else {
                this.listResult.push(this.getRanNum(0, 10));
            }
        }
        for (var i = 0; i < this.listButton.length; i++) {
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; // This node is the node to which your event handler code component belongs
            clickEventHandler.component = "ChooseNumber"; // This is the code file name
            clickEventHandler.handler = "onClickChoose";
            clickEventHandler.customEventData = "" + this.listResult[i];
            this.listResultLb[i].string = clickEventHandler.customEventData;
            this.listButton[i].clickEvents = [];
            this.listButton[i].clickEvents.push(clickEventHandler);
        }
        for (var i = 0; i < 10; i++) {
            if (this.listResult[i] == this.result)
                this.countResult++;
        }
        console.error(this.listResult);
        console.error(this.countResult);
    };
    ChooseNumber.prototype.onClickChoose = function (event, value) {
        if (value == this.result.toString()) {
            event.target.active = false;
            this.countResult--;
            if (this.countResult == 0) {
                this.label.string = "Finished!";
                this.backSplash.active = true;
            }
        }
    };
    ChooseNumber.prototype.checkLeftResult = function () {
        for (var i = 0; i < 10; i++) {
            if (this.getRanNum(0, 10) % 2 == 0) {
                this.listResult.push(this.result);
            }
            else {
                this.listResult.push(this.getRanNum(0, 10));
            }
        }
    };
    ChooseNumber.prototype.onBack = function () {
        this.node.destroy();
    };
    ChooseNumber.prototype.getRanNum = function (min_value, max_value) {
        var random_number = Math.random() * (max_value - min_value) + min_value;
        return Math.floor(random_number);
    };
    __decorate([
        property(cc.Label)
    ], ChooseNumber.prototype, "label", void 0);
    __decorate([
        property([cc.Button])
    ], ChooseNumber.prototype, "listButton", void 0);
    __decorate([
        property(cc.Node)
    ], ChooseNumber.prototype, "backSplash", void 0);
    __decorate([
        property([cc.Label])
    ], ChooseNumber.prototype, "listResultLb", void 0);
    ChooseNumber = __decorate([
        ccclass
    ], ChooseNumber);
    return ChooseNumber;
}(cc.Component));
exports.default = ChooseNumber;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXENob29zZU51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQW9GQztRQWpGRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUc3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixrQkFBWSxHQUFlLEVBQUUsQ0FBQztRQUU5QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBRW5CLGdCQUFVLEdBQWEsRUFBRSxDQUFDO1FBRTFCLGlCQUFXLEdBQVcsQ0FBQyxDQUFDOztJQWtFNUIsQ0FBQztJQWhFRyw2QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFdBQVcsR0FBRyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELDRCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBQ0QsZ0NBQVMsR0FBVDtRQUNJLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsa0JBQWtCLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pCLElBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBQztnQkFDN0IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3JDO2lCQUFJO2dCQUNELElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDOUM7U0FDVjtRQUNLLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN0RCxJQUFJLGlCQUFpQixHQUFHLElBQUksRUFBRSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztZQUN4RCxpQkFBaUIsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLDJFQUEyRTtZQUNqSCxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsY0FBYyxDQUFDLENBQUMsNkJBQTZCO1lBQzNFLGlCQUFpQixDQUFDLE9BQU8sR0FBRyxlQUFlLENBQUM7WUFDbkMsaUJBQWlCLENBQUMsZUFBZSxHQUFHLEVBQUUsR0FBSSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdELElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsTUFBTSxHQUFHLGlCQUFpQixDQUFDLGVBQWUsQ0FBQztZQUN6RSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDcEMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLENBQUM7U0FDdkQ7UUFDSyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3pCLElBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUMsTUFBTTtnQkFDaEMsSUFBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQ2hDO1FBQ0ssT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDL0IsT0FBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNELG9DQUFhLEdBQWIsVUFBYyxLQUFVLEVBQUUsS0FBYTtRQUNuQyxJQUFHLEtBQUssSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsRUFBRSxFQUFDO1lBQy9CLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7WUFDbkIsSUFBRyxJQUFJLENBQUMsV0FBVyxJQUFJLENBQUMsRUFBQztnQkFDckIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDO2dCQUNoQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7YUFDakM7U0FDSjtJQUNMLENBQUM7SUFDRCxzQ0FBZSxHQUFmO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUM7Z0JBQzdCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNyQztpQkFBSTtnQkFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2FBQzlDO1NBQ1Y7SUFDQyxDQUFDO0lBRUQsNkJBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVELGdDQUFTLEdBQVQsVUFBVSxTQUFTLEVBQUUsU0FBUztRQUNoQyxJQUFJLGFBQWEsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDLEdBQUcsU0FBUyxDQUFDO1FBQ3hFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBL0VFO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUUsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7b0RBQ007SUFHN0I7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztvREFDUTtJQUczQjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztzREFDUTtJQVpiLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0FvRmhDO0lBQUQsbUJBQUM7Q0FwRkQsQUFvRkMsQ0FwRnlDLEVBQUUsQ0FBQyxTQUFTLEdBb0ZyRDtrQkFwRm9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENob29zZU51bWJlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5CdXR0b25dKVxyXG4gICAgbGlzdEJ1dHRvbjogY2MuQnV0dG9uW10gPSBbXTtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBiYWNrU3BsYXNoOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKFtjYy5MYWJlbF0pXHJcbiAgICBsaXN0UmVzdWx0TGI6IGNjLkxhYmVsW10gPSBbXTtcclxuXHJcbiAgICByZXN1bHQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgbGlzdFJlc3VsdDogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgICBjb3VudFJlc3VsdDogbnVtYmVyID0gMDtcclxuXHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLmNvdW50UmVzdWx0ID0gMDtcclxuICAgIH1cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICB0aGlzLnJlc3VsdCA9IHRoaXMuZ2V0UmFuTnVtKDAsMTApO1xyXG4gICAgICAgIHRoaXMubGFiZWwuc3RyaW5nID0gXCJDaG9vc2UgTnVtYmVyIDogXCIgKyB0aGlzLnJlc3VsdDtcclxuICAgICAgICB0aGlzLmxpc3RSZXN1bHQgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5nZXRSYW5OdW0oMCwxMCkgJSAyID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UmVzdWx0LnB1c2godGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFJlc3VsdC5wdXNoKHRoaXMuZ2V0UmFuTnVtKDAsMTApKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0fVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saXN0QnV0dG9uLmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdHZhciBjbGlja0V2ZW50SGFuZGxlciA9IG5ldyBjYy5Db21wb25lbnQuRXZlbnRIYW5kbGVyKCk7XHJcblx0XHRcdGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTsgLy8gVGhpcyBub2RlIGlzIHRoZSBub2RlIHRvIHdoaWNoIHlvdXIgZXZlbnQgaGFuZGxlciBjb2RlIGNvbXBvbmVudCBiZWxvbmdzXHJcblx0XHRcdGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiQ2hvb3NlTnVtYmVyXCI7IC8vIFRoaXMgaXMgdGhlIGNvZGUgZmlsZSBuYW1lXHJcblx0XHRcdGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIm9uQ2xpY2tDaG9vc2VcIjtcclxuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gXCJcIiArICB0aGlzLmxpc3RSZXN1bHRbaV07XHJcbiAgICAgICAgICAgIHRoaXMubGlzdFJlc3VsdExiW2ldLnN0cmluZyA9IGNsaWNrRXZlbnRIYW5kbGVyLmN1c3RvbUV2ZW50RGF0YTtcclxuXHRcdFx0dGhpcy5saXN0QnV0dG9uW2ldLmNsaWNrRXZlbnRzID0gW107XHJcblx0XHRcdHRoaXMubGlzdEJ1dHRvbltpXS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHRcdH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5saXN0UmVzdWx0W2ldID09IHRoaXMucmVzdWx0KVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudFJlc3VsdCsrO1xyXG5cdFx0fVxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5saXN0UmVzdWx0KTtcclxuICAgICAgICBjb25zb2xlLmVycm9yKHRoaXMuY291bnRSZXN1bHQpO1xyXG4gICAgfVxyXG4gICAgb25DbGlja0Nob29zZShldmVudDogYW55LCB2YWx1ZTogc3RyaW5nICl7XHJcbiAgICAgICAgaWYodmFsdWUgPT0gdGhpcy5yZXN1bHQudG9TdHJpbmcoKSl7XHJcbiAgICAgICAgICAgIGV2ZW50LnRhcmdldC5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5jb3VudFJlc3VsdC0tO1xyXG4gICAgICAgICAgICBpZih0aGlzLmNvdW50UmVzdWx0ID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIkZpbmlzaGVkIVwiO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5iYWNrU3BsYXNoLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjaGVja0xlZnRSZXN1bHQoKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcclxuICAgICAgICAgICAgaWYodGhpcy5nZXRSYW5OdW0oMCwxMCkgJSAyID09IDApe1xyXG4gICAgICAgICAgICAgICAgdGhpcy5saXN0UmVzdWx0LnB1c2godGhpcy5yZXN1bHQpO1xyXG4gICAgICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgICAgIHRoaXMubGlzdFJlc3VsdC5wdXNoKHRoaXMuZ2V0UmFuTnVtKDAsMTApKTtcclxuICAgICAgICAgICAgfVxyXG5cdFx0fVxyXG4gICAgfVxyXG5cclxuICAgIG9uQmFjaygpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBnZXRSYW5OdW0obWluX3ZhbHVlLCBtYXhfdmFsdWUpIHtcclxuXHRcdGxldCByYW5kb21fbnVtYmVyID0gTWF0aC5yYW5kb20oKSAqIChtYXhfdmFsdWUgLSBtaW5fdmFsdWUpICsgbWluX3ZhbHVlO1xyXG5cdFx0cmV0dXJuIE1hdGguZmxvb3IocmFuZG9tX251bWJlcik7XHJcblx0fVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/listLesson/lesson3/Node2_3.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0cf9clqY01JbZkgoEdkifp+', 'Node2_3');
// scripts/listLesson/lesson3/Node2_3.ts

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
var Node2_3 = /** @class */ (function (_super) {
    __extends(Node2_3, _super);
    function Node2_3() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.nodeHand = null;
        _this.count = 1;
        return _this;
    }
    Node2_3.prototype.onLoad = function () {
        this.nodeHand.setPosition(-872, -200);
    };
    Node2_3.prototype.start = function () {
        this.setAction();
    };
    Node2_3.prototype.setAction = function () {
        var _this = this;
        var action1 = cc.callFunc(function () {
            _this.label.string = "Các hạt dưới chúng mình gẩy lên bằng ngón tay cái";
            _this.nodeHand.setPosition(-1625, -200);
        });
        var action2 = cc.callFunc(function () {
            _this.label.string = "Và gẩy hạt xuống bằng ngón tay trỏ";
            _this.nodeHand.setPosition(-105, -200);
        });
        this.node.runAction(cc.sequence(cc.delayTime(2.0), action1, cc.delayTime(2.0), action2));
    };
    __decorate([
        property(cc.Label)
    ], Node2_3.prototype, "label", void 0);
    __decorate([
        property(cc.Node)
    ], Node2_3.prototype, "nodeHand", void 0);
    Node2_3 = __decorate([
        ccclass
    ], Node2_3);
    return Node2_3;
}(cc.Component));
exports.default = Node2_3;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbGlzdExlc3NvblxcbGVzc29uM1xcTm9kZTJfMy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFxQywyQkFBWTtJQUFqRDtRQUFBLHFFQTRCQztRQXpCRyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGNBQVEsR0FBWSxJQUFJLENBQUM7UUFFekIsV0FBSyxHQUFXLENBQUMsQ0FBQzs7SUFvQnRCLENBQUM7SUFuQkcsd0JBQU0sR0FBTjtRQUNJLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUMsR0FBRyxFQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsQ0FBQztJQUVELHVCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDckIsQ0FBQztJQUNELDJCQUFTLEdBQVQ7UUFBQSxpQkFVQztRQVRHLElBQUksT0FBTyxHQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsbURBQW1ELENBQUM7WUFDeEUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksT0FBTyxHQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUM7WUFDckIsS0FBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsb0NBQW9DLENBQUM7WUFDekQsS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLEVBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QyxDQUFDLENBQUMsQ0FBQTtRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxPQUFPLEVBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0lBQzFGLENBQUM7SUF2QkQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzswQ0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBTlIsT0FBTztRQUQzQixPQUFPO09BQ2EsT0FBTyxDQTRCM0I7SUFBRCxjQUFDO0NBNUJELEFBNEJDLENBNUJvQyxFQUFFLENBQUMsU0FBUyxHQTRCaEQ7a0JBNUJvQixPQUFPIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9kZTJfMyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKVxyXG4gICAgbGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBub2RlSGFuZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgY291bnQ6IG51bWJlciA9IDE7XHJcbiAgICBvbkxvYWQoKXtcclxuICAgICAgICB0aGlzLm5vZGVIYW5kLnNldFBvc2l0aW9uKC04NzIsLTIwMCk7XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMuc2V0QWN0aW9uKCk7XHJcbiAgICB9XHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICBsZXQgYWN0aW9uMT0gY2MuY2FsbEZ1bmMoKCk9PntcclxuICAgICAgICAgICAgdGhpcy5sYWJlbC5zdHJpbmcgPSBcIkPDoWMgaOG6oXQgZMaw4bubaSBjaMO6bmcgbcOsbmggZ+G6qXkgbMOqbiBi4bqxbmcgbmfDs24gdGF5IGPDoWlcIjtcclxuICAgICAgICAgICAgdGhpcy5ub2RlSGFuZC5zZXRQb3NpdGlvbigtMTYyNSwtMjAwKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCBhY3Rpb24yPSBjYy5jYWxsRnVuYygoKT0+e1xyXG4gICAgICAgICAgICB0aGlzLmxhYmVsLnN0cmluZyA9IFwiVsOgIGfhuql5IGjhuqF0IHh14buRbmcgYuG6sW5nIG5nw7NuIHRheSB0cuG7j1wiO1xyXG4gICAgICAgICAgICB0aGlzLm5vZGVIYW5kLnNldFBvc2l0aW9uKC0xMDUsLTIwMCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICB0aGlzLm5vZGUucnVuQWN0aW9uKGNjLnNlcXVlbmNlKGNjLmRlbGF5VGltZSgyLjApLGFjdGlvbjEsY2MuZGVsYXlUaW1lKDIuMCksYWN0aW9uMikpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/menu/ThemeSelector.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b0722Q3P1RCRrMW7sb0U+Qs', 'ThemeSelector');
// scripts/menu/ThemeSelector.ts

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
var ThemeList_1 = require("../ThemeList");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ThemeSelector = /** @class */ (function (_super) {
    __extends(ThemeSelector, _super);
    function ThemeSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.themeOptionPrefab = null;
        _this.content = null;
        return _this;
    }
    ThemeSelector.prototype.onLoad = function () {
        var _this = this;
        var TOTAL = ThemeList_1.ThemeList.length;
        var CURRENT = 0;
        ThemeList_1.ThemeList.forEach(function (value, index) {
            var node = cc.instantiate(_this.themeOptionPrefab);
            _this.content.addChild(node);
            node.setPosition(0, index * -node.getBoundingBox().height);
            node.getComponent("ThemeOption").initialize(value).then(function () {
                CURRENT++;
                if (TOTAL == CURRENT) {
                    _this.content.height = TOTAL * node.getBoundingBox().height;
                    console.log("Theme selector initialized");
                }
            }).catch(function (error) {
                console.error(error);
            });
        });
    };
    __decorate([
        property(cc.Prefab)
    ], ThemeSelector.prototype, "themeOptionPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], ThemeSelector.prototype, "content", void 0);
    ThemeSelector = __decorate([
        ccclass
    ], ThemeSelector);
    return ThemeSelector;
}(cc.Component));
exports.default = ThemeSelector;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWVudVxcVGhlbWVTZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBeUM7QUFDbkMsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBMkMsaUNBQVk7SUFBdkQ7UUFBQSxxRUE4QkM7UUE1QkcsdUJBQWlCLEdBQWMsSUFBSSxDQUFDO1FBR3BDLGFBQU8sR0FBWSxJQUFJLENBQUM7O0lBeUI1QixDQUFDO0lBdkJHLDhCQUFNLEdBQU47UUFBQSxpQkFzQkM7UUFyQkcsSUFBTSxLQUFLLEdBQUcscUJBQVMsQ0FBQyxNQUFNLENBQUM7UUFDL0IsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBRWhCLHFCQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSyxFQUFFLEtBQUs7WUFDM0IsSUFBSSxJQUFJLEdBQVksRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsQ0FBQztZQUUzRCxLQUFJLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsRUFBRSxLQUFLLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7WUFFM0QsSUFBSSxDQUFDLFlBQVksQ0FBQyxhQUFhLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO2dCQUNwRCxPQUFPLEVBQUUsQ0FBQztnQkFFVixJQUFHLEtBQUssSUFBSSxPQUFPLEVBQUU7b0JBQ2pCLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssR0FBRyxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUMsTUFBTSxDQUFDO29CQUUzRCxPQUFPLENBQUMsR0FBRyxDQUFDLDRCQUE0QixDQUFDLENBQUM7aUJBQzdDO1lBQ0wsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFVBQUEsS0FBSztnQkFDVixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBM0JEO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUM7NERBQ2U7SUFHcEM7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDSztJQUxQLGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0E4QmpDO0lBQUQsb0JBQUM7Q0E5QkQsQUE4QkMsQ0E5QjBDLEVBQUUsQ0FBQyxTQUFTLEdBOEJ0RDtrQkE5Qm9CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUaGVtZUxpc3QgfSBmcm9tIFwiLi4vVGhlbWVMaXN0XCI7XHJcbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3NcclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGhlbWVTZWxlY3RvciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkgKGNjLlByZWZhYilcclxuICAgIHRoZW1lT3B0aW9uUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIGNvbnRlbnQ6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIG9uTG9hZCgpIHtcclxuICAgICAgICBjb25zdCBUT1RBTCA9IFRoZW1lTGlzdC5sZW5ndGg7XHJcbiAgICAgICAgbGV0IENVUlJFTlQgPSAwO1xyXG5cclxuICAgICAgICBUaGVtZUxpc3QuZm9yRWFjaCgodmFsdWUsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBub2RlOiBjYy5Ob2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aGVtZU9wdGlvblByZWZhYik7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvbnRlbnQuYWRkQ2hpbGQobm9kZSk7XHJcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oMCwgaW5kZXggKiAtbm9kZS5nZXRCb3VuZGluZ0JveCgpLmhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBub2RlLmdldENvbXBvbmVudChcIlRoZW1lT3B0aW9uXCIpLmluaXRpYWxpemUodmFsdWUpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQ1VSUkVOVCsrO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmKFRPVEFMID09IENVUlJFTlQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbnRlbnQuaGVpZ2h0ID0gVE9UQUwgKiBub2RlLmdldEJvdW5kaW5nQm94KCkuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlRoZW1lIHNlbGVjdG9yIGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/menu/ThemeOption.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '71005466qlNdJlYxqIfRjfw', 'ThemeOption');
// scripts/menu/ThemeOption.ts

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
var Global_1 = require("../Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var ThemeOption = /** @class */ (function (_super) {
    __extends(ThemeOption, _super);
    function ThemeOption() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.nameLabel = null;
        _this.previewSprite = null;
        _this.button = null;
        return _this;
    }
    ThemeOption.prototype.initialize = function (name) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            cc.resources.load("themes/" + name + "/bead_inactive", cc.SpriteFrame, function (error, asset) {
                if (error) {
                    reject(error.name + " " + error.message);
                }
                name[0].toLocaleUpperCase();
                _this.nameLabel.string = name;
                _this.previewSprite.spriteFrame = asset;
                var clickEventHandler = new cc.Component.EventHandler();
                clickEventHandler.target = _this.node;
                clickEventHandler.component = "ThemeOption";
                clickEventHandler.handler = "buttonCallback";
                clickEventHandler.customEventData = name;
                _this.button.clickEvents.push(clickEventHandler);
                resolve("");
            });
        });
    };
    ThemeOption.prototype.buttonCallback = function (event, customEventData) {
        Global_1.Global.resourcePack = customEventData;
        console.log("Changed to " + customEventData);
    };
    __decorate([
        property(cc.Label)
    ], ThemeOption.prototype, "nameLabel", void 0);
    __decorate([
        property(cc.Sprite)
    ], ThemeOption.prototype, "previewSprite", void 0);
    __decorate([
        property(cc.Button)
    ], ThemeOption.prototype, "button", void 0);
    ThemeOption = __decorate([
        ccclass
    ], ThemeOption);
    return ThemeOption;
}(cc.Component));
exports.default = ThemeOption;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWVudVxcVGhlbWVPcHRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0NBQW1DO0FBRTdCLElBQUEsS0FBc0IsRUFBRSxDQUFDLFVBQVUsRUFBbEMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFpQixDQUFDO0FBRzFDO0lBQXlDLCtCQUFZO0lBQXJEO1FBQUEscUVBd0NDO1FBdENHLGVBQVMsR0FBYSxJQUFJLENBQUM7UUFHM0IsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFHaEMsWUFBTSxHQUFjLElBQUksQ0FBQzs7SUFnQzdCLENBQUM7SUE5QkcsZ0NBQVUsR0FBVixVQUFXLElBQVk7UUFBdkIsaUJBdUJDO1FBdEJHLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLGdCQUFnQixFQUFFLEVBQUUsQ0FBQyxXQUFXLEVBQUUsVUFBQyxLQUFLLEVBQUUsS0FBcUI7Z0JBQ2hHLElBQUcsS0FBSyxFQUFFO29CQUNOLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsR0FBRyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7aUJBQzVDO2dCQUVELElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2dCQUM1QixLQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBRTdCLEtBQUksQ0FBQyxhQUFhLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztnQkFFdkMsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7Z0JBQ3hELGlCQUFpQixDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDO2dCQUNyQyxpQkFBaUIsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO2dCQUM1QyxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsZ0JBQWdCLENBQUM7Z0JBQzdDLGlCQUFpQixDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7Z0JBRXpDLEtBQUksQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO2dCQUVoRCxPQUFPLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFRCxvQ0FBYyxHQUFkLFVBQWUsS0FBVSxFQUFFLGVBQXVCO1FBQzlDLGVBQU0sQ0FBQyxZQUFZLEdBQUcsZUFBZSxDQUFDO1FBRXRDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLGVBQWUsQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFyQ0Q7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQztrREFDTztJQUczQjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsTUFBTSxDQUFDO3NEQUNXO0lBR2hDO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ0k7SUFSUixXQUFXO1FBRC9CLE9BQU87T0FDYSxXQUFXLENBd0MvQjtJQUFELGtCQUFDO0NBeENELEFBd0NDLENBeEN3QyxFQUFFLENBQUMsU0FBUyxHQXdDcEQ7a0JBeENvQixXQUFXIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0dsb2JhbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaGVtZU9wdGlvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XHJcbiAgICBAcHJvcGVydHkgKGNjLkxhYmVsKVxyXG4gICAgbmFtZUxhYmVsOiBjYy5MYWJlbCA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5TcHJpdGUpXHJcbiAgICBwcmV2aWV3U3ByaXRlOiBjYy5TcHJpdGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuQnV0dG9uKVxyXG4gICAgYnV0dG9uOiBjYy5CdXR0b24gPSBudWxsO1xyXG5cclxuICAgIGluaXRpYWxpemUobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoXCJ0aGVtZXMvXCIgKyBuYW1lICsgXCIvYmVhZF9pbmFjdGl2ZVwiLCBjYy5TcHJpdGVGcmFtZSwgKGVycm9yLCBhc3NldDogY2MuU3ByaXRlRnJhbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yLm5hbWUgKyBcIiBcIiArIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIG5hbWVbMF0udG9Mb2NhbGVVcHBlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgIHRoaXMubmFtZUxhYmVsLnN0cmluZyA9IG5hbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wcmV2aWV3U3ByaXRlLnNwcml0ZUZyYW1lID0gYXNzZXQ7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGNsaWNrRXZlbnRIYW5kbGVyID0gbmV3IGNjLkNvbXBvbmVudC5FdmVudEhhbmRsZXIoKTtcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLnRhcmdldCA9IHRoaXMubm9kZTtcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmNvbXBvbmVudCA9IFwiVGhlbWVPcHRpb25cIjtcclxuICAgICAgICAgICAgICAgIGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcImJ1dHRvbkNhbGxiYWNrXCI7XHJcbiAgICAgICAgICAgICAgICBjbGlja0V2ZW50SGFuZGxlci5jdXN0b21FdmVudERhdGEgPSBuYW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYnV0dG9uLmNsaWNrRXZlbnRzLnB1c2goY2xpY2tFdmVudEhhbmRsZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoXCJcIik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJ1dHRvbkNhbGxiYWNrKGV2ZW50OiBhbnksIGN1c3RvbUV2ZW50RGF0YTogc3RyaW5nKSB7XHJcbiAgICAgICAgR2xvYmFsLnJlc291cmNlUGFjayA9IGN1c3RvbUV2ZW50RGF0YTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJDaGFuZ2VkIHRvIFwiICsgY3VzdG9tRXZlbnREYXRhKTtcclxuICAgIH1cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Bead.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ab206Dcn6xGmacuYaqK1bKL', 'Bead');
// scripts/Bead.ts

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
var Bead = /** @class */ (function (_super) {
    __extends(Bead, _super);
    function Bead() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bodyNode = null;
        _this.startNode = null;
        _this.endNode = null;
        _this.showDebug = false;
        _this.activeSF = null;
        _this.focusedSF = null;
        _this.inactiveSF = null;
        _this.reverted = false;
        _this.placement = 0;
        _this.touched = false;
        _this.nearBeads = [];
        _this.dragged = false;
        _this.initialized = false;
        return _this;
    }
    Bead.prototype.initialize = function () {
        this.reverted = (this.startNode.getPosition().y > this.endNode.getPosition().y);
        this.bodyNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.bodyNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.bodyNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.bodyNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        this.initialized = true;
    };
    Bead.prototype.update = function (dt) {
        if (!this.initialized)
            return;
        // snap body to the predefined positions
        if (this.touched) {
            if (!this.reverted) {
                if (this.bodyNode.y >= this.endNode.y)
                    this.setPlacement(1);
                else if (this.bodyNode.y <= this.startNode.y)
                    this.setPlacement(0);
            }
            else {
                if (this.bodyNode.y <= this.endNode.y)
                    this.setPlacement(1);
                else if (this.bodyNode.y >= this.startNode.y)
                    this.setPlacement(0);
            }
        }
        if (this.showDebug) {
            console.log("Placement: " + this.placement);
        }
    };
    Bead.prototype.applyTheme = function (resourcePack) {
        this.activeSF = resourcePack.bead_active;
        this.focusedSF = resourcePack.bead_focused;
        this.inactiveSF = resourcePack.bead_inactive;
        this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.inactiveSF;
    };
    Bead.prototype.reset = function () {
        this.onTouchEnd(null);
        this.setPlacement(0);
    };
    Bead.prototype.setPlacement = function (value) {
        if (value == 0) {
            // disable bead movement if placement changes only if the bead is dragged by other
            if (this.placement == 1 && this.dragged)
                this.onTouchEnd(null);
            this.bodyNode.setPosition(this.startNode.getPosition());
            this.placement = 0;
        }
        else {
            if (this.placement == 0 && this.dragged)
                this.onTouchEnd(null);
            this.bodyNode.setPosition(this.endNode.getPosition());
            this.placement = 1;
        }
    };
    Bead.prototype.setInteractive = function (value) {
        // sloppy shit
        console.log("interactive off");
        this.bodyNode.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        this.bodyNode.off(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        this.bodyNode.off(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
        this.bodyNode.off(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        if (value) {
            console.log("interactive on");
            this.bodyNode.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            this.bodyNode.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
            this.bodyNode.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);
            this.bodyNode.on(cc.Node.EventType.TOUCH_CANCEL, this.onTouchEnd, this);
        }
    };
    Bead.prototype.onTouchStart = function (event) {
        this.touched = true;
        this.dragged = false;
        this.nearBeads = [];
        // don't drag any beads if user choose (5) bead
        if (this.reverted) {
            this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.activeSF;
            return;
        }
        if (!event) {
            this.dragged = true; // dragged beads don't drag any beads with them
            this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.focusedSF;
        }
        else {
            var foundThis = false;
            for (var i = 1; i < 5; ++i) { // don't count last beard (top one)
                var value = this.node.getParent().children[i];
                if (this.node == value) {
                    foundThis = true;
                    continue;
                }
                // add only upper beads for first placement and down beads if second placement
                if ((this.placement == 0 && !foundThis) || (this.placement == 1 && foundThis)) {
                    // add only beads with the same placement
                    if (value.name == "Bead" && value.getComponent("Bead").placement == this.placement) {
                        value.getComponent("Bead").onTouchStart(null);
                        this.nearBeads.push(value);
                    }
                }
            }
            this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.activeSF;
        }
    };
    Bead.prototype.onTouchMove = function (event) {
        if (!this.touched)
            return;
        var delta_y = event.getDeltaY();
        if (this.dragged ||
            (delta_y > 0 && event.getLocationY() >= this.bodyNode.getBoundingBoxToWorld().center.y) ||
            (delta_y < 0 && event.getLocationY() <= this.bodyNode.getBoundingBoxToWorld().center.y)) {
            this.bodyNode.y += delta_y;
            // prevent beads dragged from first position to go down and from second position to go up
            if ((this.placement == 0 && delta_y > 0) || (this.placement == 1 && delta_y < 0))
                this.nearBeads.forEach(function (value) {
                    value.getComponent("Bead").onTouchMove(event);
                });
        }
    };
    Bead.prototype.onTouchEnd = function (event) {
        this.bodyNode.setPosition((this.placement == 0 ? this.startNode.getPosition() : this.endNode.getPosition()));
        this.nearBeads.forEach(function (value) {
            value.getComponent("Bead").onTouchEnd(event);
        });
        this.bodyNode.getComponent(cc.Sprite).spriteFrame = this.inactiveSF;
        this.touched = false;
        this.dragged = false;
        this.nearBeads = [];
    };
    __decorate([
        property(cc.Node)
    ], Bead.prototype, "bodyNode", void 0);
    __decorate([
        property(cc.Node)
    ], Bead.prototype, "startNode", void 0);
    __decorate([
        property(cc.Node)
    ], Bead.prototype, "endNode", void 0);
    __decorate([
        property(cc.Boolean)
    ], Bead.prototype, "showDebug", void 0);
    Bead = __decorate([
        ccclass
    ], Bead);
    return Bead;
}(cc.Component));
exports.default = Bead;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcQmVhZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFrQyx3QkFBWTtJQUE5QztRQUFBLHFFQStLQztRQTdLRyxjQUFRLEdBQVksSUFBSSxDQUFDO1FBR3pCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFHMUIsYUFBTyxHQUFZLElBQUksQ0FBQztRQUd4QixlQUFTLEdBQUcsS0FBSyxDQUFDO1FBRWxCLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBQ2hDLGVBQVMsR0FBbUIsSUFBSSxDQUFDO1FBQ2pDLGdCQUFVLEdBQW1CLElBQUksQ0FBQztRQUVsQyxjQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLGVBQVMsR0FBVyxDQUFDLENBQUM7UUFFdEIsYUFBTyxHQUFZLEtBQUssQ0FBQztRQUV6QixlQUFTLEdBQWMsRUFBRSxDQUFDO1FBRTFCLGFBQU8sR0FBWSxLQUFLLENBQUM7UUFFekIsaUJBQVcsR0FBWSxLQUFLLENBQUM7O0lBb0pqQyxDQUFDO0lBbEpHLHlCQUFVLEdBQVY7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUVoRixJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUV4RSxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQscUJBQU0sR0FBTixVQUFPLEVBQUU7UUFDTCxJQUFHLENBQUMsSUFBSSxDQUFDLFdBQVc7WUFBRSxPQUFPO1FBRTdCLHdDQUF3QztRQUN4QyxJQUFHLElBQUksQ0FBQyxPQUFPLEVBQUU7WUFDYixJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDZixJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO3FCQUN0RCxJQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztvQkFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO2FBQ3JFO2lCQUFNO2dCQUNILElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO29CQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7cUJBQ3RELElBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUM7YUFDckU7U0FDSjtRQUVELElBQUcsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNmLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztTQUMvQztJQUNMLENBQUM7SUFFRCx5QkFBVSxHQUFWLFVBQVcsWUFBMEI7UUFDakMsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO1FBQ3pDLElBQUksQ0FBQyxTQUFTLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUM7UUFFN0MsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO0lBQ3hFLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRCwyQkFBWSxHQUFaLFVBQWEsS0FBYTtRQUN0QixJQUFHLEtBQUssSUFBSSxDQUFDLEVBQUU7WUFDWCxrRkFBa0Y7WUFDbEYsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTztnQkFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUN4RCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUN0QjthQUFNO1lBQ0gsSUFBRyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsT0FBTztnQkFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBRTlELElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztZQUN0RCxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztTQUN0QjtJQUNMLENBQUM7SUFFRCw2QkFBYyxHQUFkLFVBQWUsS0FBYztRQUN6QixjQUFjO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQy9CLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3hFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RFLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBRXpFLElBQUcsS0FBSyxFQUFFO1lBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO1lBQzlCLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3pFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3ZFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQ3JFLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzNFO0lBQ0wsQ0FBQztJQUVELDJCQUFZLEdBQVosVUFBYSxLQUEwQjtRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQztRQUNwQixJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssQ0FBQztRQUNyQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUVwQiwrQ0FBK0M7UUFDL0MsSUFBRyxJQUFJLENBQUMsUUFBUSxFQUFFO1lBQ2QsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1lBRWxFLE9BQU87U0FDVjtRQUVELElBQUcsQ0FBQyxLQUFLLEVBQUU7WUFDUCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxDQUFDLCtDQUErQztZQUVwRSxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7U0FDdEU7YUFBTztZQUNKLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztZQUN0QixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUUsbUNBQW1DO2dCQUM1RCxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFFOUMsSUFBRyxJQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssRUFBRTtvQkFDbkIsU0FBUyxHQUFHLElBQUksQ0FBQztvQkFDakIsU0FBUztpQkFDWjtnQkFFRCw4RUFBOEU7Z0JBQzlFLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsSUFBSSxDQUFDLElBQUksU0FBUyxDQUFDLEVBQUU7b0JBQzFFLHlDQUF5QztvQkFDekMsSUFBRyxLQUFLLENBQUMsSUFBSSxJQUFJLE1BQU0sSUFBSSxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFNBQVMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO3dCQUMvRSxLQUFLLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDOUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7cUJBQzlCO2lCQUNKO2FBQ0o7WUFFRCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7U0FDckU7SUFDTCxDQUFDO0lBRUQsMEJBQVcsR0FBWCxVQUFZLEtBQTBCO1FBQ2xDLElBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTztZQUFFLE9BQU87UUFFekIsSUFBSSxPQUFPLEdBQUcsS0FBSyxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBRWhDLElBQUcsSUFBSSxDQUFDLE9BQU87WUFDYixDQUFDLE9BQU8sR0FBRyxDQUFDLElBQUksS0FBSyxDQUFDLFlBQVksRUFBRSxJQUFJLElBQUksQ0FBQyxRQUFRLENBQUMscUJBQXFCLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQ3ZGLENBQUMsT0FBTyxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsWUFBWSxFQUFFLElBQUksSUFBSSxDQUFDLFFBQVEsQ0FBQyxxQkFBcUIsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUN2RixJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsSUFBSSxPQUFPLENBQUM7WUFFM0IseUZBQXlGO1lBQ3pGLElBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxDQUFDO2dCQUMzRSxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQWM7b0JBQ2xDLEtBQUssQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNsRCxDQUFDLENBQUMsQ0FBQztTQUNWO0lBQ0wsQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxLQUEwQjtRQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUU3RyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQWM7WUFDbEMsS0FBSyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUM7UUFFcEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQTVLRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNPO0lBR3pCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1E7SUFHMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5Q0FDTTtJQUd4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOzJDQUNIO0lBWEQsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQStLeEI7SUFBRCxXQUFDO0NBL0tELEFBK0tDLENBL0tpQyxFQUFFLENBQUMsU0FBUyxHQStLN0M7a0JBL0tvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUmVzb3VyY2VQYWNrIH0gZnJvbSBcIi4vUmVzb3VyY2VQYWNrXCI7XHJcblxyXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJlYWQgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBib2R5Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLk5vZGUpXHJcbiAgICBzdGFydE5vZGU6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eShjYy5Ob2RlKVxyXG4gICAgZW5kTm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KGNjLkJvb2xlYW4pXHJcbiAgICBzaG93RGVidWcgPSBmYWxzZTtcclxuXHJcbiAgICBhY3RpdmVTRjogY2MuU3ByaXRlRnJhbWUgPSBudWxsO1xyXG4gICAgZm9jdXNlZFNGOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcbiAgICBpbmFjdGl2ZVNGOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XHJcblxyXG4gICAgcmV2ZXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBwbGFjZW1lbnQ6IG51bWJlciA9IDA7XHJcblxyXG4gICAgdG91Y2hlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIG5lYXJCZWFkczogY2MuTm9kZVtdID0gW107XHJcblxyXG4gICAgZHJhZ2dlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgaW5pdGlhbGl6ZSgpIHtcclxuICAgICAgICB0aGlzLnJldmVydGVkID0gKHRoaXMuc3RhcnROb2RlLmdldFBvc2l0aW9uKCkueSA+IHRoaXMuZW5kTm9kZS5nZXRQb3NpdGlvbigpLnkpO1xyXG5cclxuICAgICAgICB0aGlzLmJvZHlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ib2R5Tm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJvZHlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJvZHlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKGR0KSB7XHJcbiAgICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuICAgICAgICBcclxuICAgICAgICAvLyBzbmFwIGJvZHkgdG8gdGhlIHByZWRlZmluZWQgcG9zaXRpb25zXHJcbiAgICAgICAgaWYodGhpcy50b3VjaGVkKSB7XHJcbiAgICAgICAgICAgIGlmKCF0aGlzLnJldmVydGVkKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvZHlOb2RlLnkgPj0gdGhpcy5lbmROb2RlLnkpIHRoaXMuc2V0UGxhY2VtZW50KDEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmJvZHlOb2RlLnkgPD0gdGhpcy5zdGFydE5vZGUueSkgdGhpcy5zZXRQbGFjZW1lbnQoMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmJvZHlOb2RlLnkgPD0gdGhpcy5lbmROb2RlLnkpIHRoaXMuc2V0UGxhY2VtZW50KDEpO1xyXG4gICAgICAgICAgICAgICAgZWxzZSBpZih0aGlzLmJvZHlOb2RlLnkgPj0gdGhpcy5zdGFydE5vZGUueSkgdGhpcy5zZXRQbGFjZW1lbnQoMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc2hvd0RlYnVnKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGxhY2VtZW50OiBcIiArIHRoaXMucGxhY2VtZW50KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlUaGVtZShyZXNvdXJjZVBhY2s6IFJlc291cmNlUGFjaykge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlU0YgPSByZXNvdXJjZVBhY2suYmVhZF9hY3RpdmU7XHJcbiAgICAgICAgdGhpcy5mb2N1c2VkU0YgPSByZXNvdXJjZVBhY2suYmVhZF9mb2N1c2VkO1xyXG4gICAgICAgIHRoaXMuaW5hY3RpdmVTRiA9IHJlc291cmNlUGFjay5iZWFkX2luYWN0aXZlO1xyXG5cclxuICAgICAgICB0aGlzLmJvZHlOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pbmFjdGl2ZVNGO1xyXG4gICAgfVxyXG5cclxuICAgIHJlc2V0KCkge1xyXG4gICAgICAgIHRoaXMub25Ub3VjaEVuZChudWxsKTtcclxuICAgICAgICB0aGlzLnNldFBsYWNlbWVudCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRQbGFjZW1lbnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHZhbHVlID09IDApIHtcclxuICAgICAgICAgICAgLy8gZGlzYWJsZSBiZWFkIG1vdmVtZW50IGlmIHBsYWNlbWVudCBjaGFuZ2VzIG9ubHkgaWYgdGhlIGJlYWQgaXMgZHJhZ2dlZCBieSBvdGhlclxyXG4gICAgICAgICAgICBpZih0aGlzLnBsYWNlbWVudCA9PSAxICYmIHRoaXMuZHJhZ2dlZCkgdGhpcy5vblRvdWNoRW5kKG51bGwpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5ib2R5Tm9kZS5zZXRQb3NpdGlvbih0aGlzLnN0YXJ0Tm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSAwO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucGxhY2VtZW50ID09IDAgJiYgdGhpcy5kcmFnZ2VkKSB0aGlzLm9uVG91Y2hFbmQobnVsbCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJvZHlOb2RlLnNldFBvc2l0aW9uKHRoaXMuZW5kTm9kZS5nZXRQb3NpdGlvbigpKTtcclxuICAgICAgICAgICAgdGhpcy5wbGFjZW1lbnQgPSAxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBzZXRJbnRlcmFjdGl2ZSh2YWx1ZTogYm9vbGVhbikge1xyXG4gICAgICAgIC8vIHNsb3BweSBzaGl0XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJpbnRlcmFjdGl2ZSBvZmZcIik7XHJcbiAgICAgICAgdGhpcy5ib2R5Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJvZHlOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9NT1ZFLCB0aGlzLm9uVG91Y2hNb3ZlLCB0aGlzKTtcclxuICAgICAgICB0aGlzLmJvZHlOb2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25Ub3VjaEVuZCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ib2R5Tm9kZS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfQ0FOQ0VMLCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgICAgICBpZih2YWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImludGVyYWN0aXZlIG9uXCIpO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLm9uVG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfTU9WRSwgdGhpcy5vblRvdWNoTW92ZSwgdGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keU5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLm9uVG91Y2hFbmQsIHRoaXMpO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHlOb2RlLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0NBTkNFTCwgdGhpcy5vblRvdWNoRW5kLCB0aGlzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgb25Ub3VjaFN0YXJ0KGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy50b3VjaGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmRyYWdnZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5lYXJCZWFkcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBkb24ndCBkcmFnIGFueSBiZWFkcyBpZiB1c2VyIGNob29zZSAoNSkgYmVhZFxyXG4gICAgICAgIGlmKHRoaXMucmV2ZXJ0ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5Tm9kZS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuYWN0aXZlU0Y7XHJcblxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZighZXZlbnQpIHtcclxuICAgICAgICAgICAgdGhpcy5kcmFnZ2VkID0gdHJ1ZTsgLy8gZHJhZ2dlZCBiZWFkcyBkb24ndCBkcmFnIGFueSBiZWFkcyB3aXRoIHRoZW1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYm9keU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmZvY3VzZWRTRjtcclxuICAgICAgICB9IGVsc2UgIHtcclxuICAgICAgICAgICAgbGV0IGZvdW5kVGhpcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAxOyBpIDwgNTsgKytpKSB7IC8vIGRvbid0IGNvdW50IGxhc3QgYmVhcmQgKHRvcCBvbmUpXHJcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSB0aGlzLm5vZGUuZ2V0UGFyZW50KCkuY2hpbGRyZW5baV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5ub2RlID09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm91bmRUaGlzID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8gYWRkIG9ubHkgdXBwZXIgYmVhZHMgZm9yIGZpcnN0IHBsYWNlbWVudCBhbmQgZG93biBiZWFkcyBpZiBzZWNvbmQgcGxhY2VtZW50XHJcbiAgICAgICAgICAgICAgICBpZigodGhpcy5wbGFjZW1lbnQgPT0gMCAmJiAhZm91bmRUaGlzKSB8fCAodGhpcy5wbGFjZW1lbnQgPT0gMSAmJiBmb3VuZFRoaXMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIG9ubHkgYmVhZHMgd2l0aCB0aGUgc2FtZSBwbGFjZW1lbnRcclxuICAgICAgICAgICAgICAgICAgICBpZih2YWx1ZS5uYW1lID09IFwiQmVhZFwiICYmIHZhbHVlLmdldENvbXBvbmVudChcIkJlYWRcIikucGxhY2VtZW50ID09IHRoaXMucGxhY2VtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlLmdldENvbXBvbmVudChcIkJlYWRcIikub25Ub3VjaFN0YXJ0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5lYXJCZWFkcy5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuYm9keU5vZGUuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLmFjdGl2ZVNGO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoTW92ZShldmVudDogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xyXG4gICAgICAgIGlmKCF0aGlzLnRvdWNoZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgbGV0IGRlbHRhX3kgPSBldmVudC5nZXREZWx0YVkoKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5kcmFnZ2VkIHx8IFxyXG4gICAgICAgICAgKGRlbHRhX3kgPiAwICYmIGV2ZW50LmdldExvY2F0aW9uWSgpID49IHRoaXMuYm9keU5vZGUuZ2V0Qm91bmRpbmdCb3hUb1dvcmxkKCkuY2VudGVyLnkpIHx8XHJcbiAgICAgICAgICAoZGVsdGFfeSA8IDAgJiYgZXZlbnQuZ2V0TG9jYXRpb25ZKCkgPD0gdGhpcy5ib2R5Tm9kZS5nZXRCb3VuZGluZ0JveFRvV29ybGQoKS5jZW50ZXIueSkpIHtcclxuICAgICAgICAgICAgdGhpcy5ib2R5Tm9kZS55ICs9IGRlbHRhX3k7XHJcblxyXG4gICAgICAgICAgICAvLyBwcmV2ZW50IGJlYWRzIGRyYWdnZWQgZnJvbSBmaXJzdCBwb3NpdGlvbiB0byBnbyBkb3duIGFuZCBmcm9tIHNlY29uZCBwb3NpdGlvbiB0byBnbyB1cFxyXG4gICAgICAgICAgICBpZigodGhpcy5wbGFjZW1lbnQgPT0gMCAmJiBkZWx0YV95ID4gMCkgfHwgKHRoaXMucGxhY2VtZW50ID09IDEgJiYgZGVsdGFfeSA8IDApKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5uZWFyQmVhZHMuZm9yRWFjaCgodmFsdWU6IGNjLk5vZGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5nZXRDb21wb25lbnQoXCJCZWFkXCIpLm9uVG91Y2hNb3ZlKGV2ZW50KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblRvdWNoRW5kKGV2ZW50OiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5ib2R5Tm9kZS5zZXRQb3NpdGlvbigodGhpcy5wbGFjZW1lbnQgPT0gMCA/IHRoaXMuc3RhcnROb2RlLmdldFBvc2l0aW9uKCkgOiB0aGlzLmVuZE5vZGUuZ2V0UG9zaXRpb24oKSkpO1xyXG5cclxuICAgICAgICB0aGlzLm5lYXJCZWFkcy5mb3JFYWNoKCh2YWx1ZTogY2MuTm9kZSkgPT4ge1xyXG4gICAgICAgICAgICB2YWx1ZS5nZXRDb21wb25lbnQoXCJCZWFkXCIpLm9uVG91Y2hFbmQoZXZlbnQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmJvZHlOb2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5pbmFjdGl2ZVNGO1xyXG5cclxuICAgICAgICB0aGlzLnRvdWNoZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmRyYWdnZWQgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLm5lYXJCZWFkcyA9IFtdO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/raphael/R.path.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7e039m0wZhNaIqogYMr6uCY', 'R.path');
// scripts/miniGame/raphael/R.path.js

'use strict';

var utils = require('./utils/R.utils');

var trasform = require('./component/R.transform');

var style = require('./component/R.style'); // optional


var simplify = require('./component/optional/R.simplify');

var drawer = {
  M: 'moveTo',
  L: 'lineTo',
  C: 'bezierCurveTo',
  Z: 'close'
};
var sqrt = Math.sqrt;
var max = Math.max;
var abs = Math.abs;
var selectedColor = cc.color(0, 157, 236);
var PathDefine = {
  "extends": cc.Component,
  properties: {
    _dirty: {
      "default": true,
      serializable: false,
      notify: function notify() {
        if (this.parent && this._dirty) {
          this.parent._dirty = true;

          if (this._commands) {
            this._commands.points = undefined;
          }
        }
      }
    }
  },
  init: function init(parent) {
    if (parent) {
      this.parent = parent;
      this.ctx = parent.ctx;
    }

    this._commands = [];
    this._dirty = true;
    this.showHandles = false;
    this.showBoundingBox = false;
  },
  onLoad: function onLoad() {
    this.init();

    if (!this.ctx) {
      var _gNode = new cc.Node();

      this.ctx = _gNode.addComponent(cc.Graphics);
      this.node.addChild(_gNode);

      this._applyStyle();
    }
  },
  ellipse: function ellipse(cx, cy, rx, ry) {
    if (!ry) {
      ry = rx;
    }

    var cmds = this._commands;
    cmds.push(['M', cx, cy]);
    cmds.push(['m', 0, -ry]);
    cmds.push(['a', rx, ry, 0, 1, 1, 0, 2 * ry]);
    cmds.push(['a', rx, ry, 0, 1, 1, 0, -2 * ry]); // cmds.push(['z']);
  },
  circle: function circle(cx, cy, r) {
    this.ellipse(cx, cy, r);
  },
  rect: function rect(x, y, w, h, r) {
    var cmds = this._commands;

    if (r) {
      cmds.push(['M', x + r, y]);
      cmds.push(['l', w - r * 2, 0]);
      cmds.push(['a', r, r, 0, 0, 1, r, r]);
      cmds.push(['l', 0, h - r * 2]);
      cmds.push(['a', r, r, 0, 0, 1, -r, r]);
      cmds.push(['l', r * 2 - w, 0]);
      cmds.push(['a', r, r, 0, 0, 1, -r, -r]);
      cmds.push(['l', 0, r * 2 - h]);
      cmds.push(['a', r, r, 0, 0, 1, r, -r]);
    } else {
      cmds.push(['M', x, y]);
      cmds.push(['l', w, 0]);
      cmds.push(['l', 0, h]);
      cmds.push(['l', -w, 0]);
    }

    cmds.push(['z']);
  },
  close: function close() {
    this._commands.push(['Z']);
  },
  points: function points(_points, closed) {
    if (_points.length <= 1) {
      return;
    }

    this.clear();
    var lastPoint = _points[0];
    this.M(lastPoint.x, lastPoint.y);

    for (var i = 1, ii = _points.length; i < ii; i++) {
      var point = _points[i];
      this.C(lastPoint.x, lastPoint.y, point.x, point.y, point.x, point.y);
      lastPoint = point;
    }

    if (closed) {
      this.C(lastPoint.x, lastPoint.y, _points[0].x, _points[0].y, _points[0].x, _points[0].y);
    }

    this.makePath();
  },
  makePath: function makePath() {
    this._commands = utils.path2curve(this._commands);
    this._dirty = true;
  },
  path: function path(_path) {
    this._commands = utils.path2curve(_path);
    this._dirty = true;
  },
  clear: function clear() {
    this._commands.length = 0;
  },
  getPathString: function getPathString() {
    var commands = this._commands;
    var string = [];

    for (var i = 0, ii = commands.length; i < ii; i++) {
      string[i] = commands[i].join(' ');
    }

    string = string.join(' ');
    return string;
  },
  getTotalLength: function getTotalLength() {
    if (this._commands.totalLength === undefined) {
      this._analysis();
    }

    return this._commands.totalLength;
  },
  getBbox: function getBbox() {
    if (this._commands.bbox === undefined) {
      this._analysis();
    }

    return this._commands.bbox;
  },
  getWorldBbox: function getWorldBbox() {
    if (this._commands.worldBbox === undefined || this._transformDirty) {
      this._analysis();
    }

    return this._commands.worldBbox;
  },
  center: function center(x, y) {
    x = x || 0;
    y = y || 0;
    var bbox = this.getBbox();
    this.position = this.position.add(cc.v2(-bbox.width / 2 - bbox.x + x, -bbox.height / 2 - bbox.y + y));
  },
  _curves: function _curves() {
    var cmds = this._commands;
    if (cmds.curves) return cmds.curves;
    var curves = [];
    var subCurves;
    var x, y;

    for (var i = 0, ii = cmds.length; i < ii; i++) {
      var cmd = cmds[i];
      var c = cmd[0];

      if (c === 'M') {
        subCurves = [];
        curves.push(subCurves);
        x = cmd[1];
        y = cmd[2];
      } else if (c === 'C' && x !== undefined && y !== undefined) {
        subCurves.push([x, y, cmd[1], cmd[2], cmd[3], cmd[4], cmd[5], cmd[6]]);
        x = cmd[5];
        y = cmd[6];
      }
    }

    cmds.curves = curves;
    return curves;
  },
  _analysis: function _analysis() {},
  //////////////////////////////////////
  _drawCommands: function _drawCommands() {
    var commands = this._commands;
    var ctx = this.ctx;
    var t = this.getWorldTransform();

    for (var i = 0, ii = commands.length; i < ii; i++) {
      var cmd = commands[i];
      var c = cmd[0];
      cmd = this._transformCommand(cmd, t);
      var func = ctx[drawer[c]];
      if (func) func.apply(ctx, cmd);
    }
  },
  _drawHandles: function _drawHandles() {
    var ctx = this.ctx;
    var commands = this._commands;
    var prev;
    var size = 5;
    var half = size / 2;
    var originLineWidth = ctx.lineWidth;
    var originStrokeColor = ctx.strokeColor;
    var originFillColor = ctx.fillColor;
    ctx.lineWidth = 1;
    ctx.strokeColor = selectedColor;
    ctx.fillColor = selectedColor;
    var t = this.getWorldTransform();

    function drawHandle(x1, y1, x2, y2) {
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.circle(x2, y2, half);
      ctx.fill();
    }

    for (var i = 0, ii = commands.length; i < ii; i++) {
      var cmd = commands[i];
      var c = cmd[0];
      cmd = this._transformCommand(cmd, t);

      if (c === 'M') {
        prev = cmd;
      } else if (c === 'C') {
        drawHandle(prev[0], prev[1], cmd[0], cmd[1]);
        drawHandle(cmd[4], cmd[5], cmd[2], cmd[3]);
        prev = [cmd[4], cmd[5]];
      }

      if (prev) ctx.fillRect(prev[0] - half, prev[1] - half, size, size);
    }

    ctx.lineWidth = originLineWidth;
    ctx.strokeColor = originStrokeColor;
    ctx.fillColor = originFillColor;
  },
  _drawDashPath: function _drawDashPath() {
    var cmds = this._commands;
    var ctx = this.ctx;
    var dashArray = this.dashArray;
    var dashOffset = this.dashOffset;
    var points;

    if (!cmds.points) {
      this._analysis();
    }

    points = cmds.points;
    var t = this.getWorldTransform();

    for (var i = 0, ii = points.length; i < ii; i++) {
      var subPoints = points[i];
      R.utils.drawDashPoints(subPoints, ctx, dashArray, dashOffset, t);
    }
  },
  //////////////////////////////////////
  update: function update(dt) {
    if (this._updateAnimate) {
      this._updateAnimate(dt);
    }

    if (this._commands.length === 0 || !this._dirty || this.parent && !this.parent._dirty) {
      return;
    }

    this._applyStyle();

    if (!this.parent) {
      this.ctx.clear();
    }

    if (this.dashArray.length > 0) {
      if (this.getStyledColor('fillColor')) {
        this._drawCommands();

        this.ctx.fill();
      }

      if (this.getStyledColor('strokeColor')) {
        this._drawDashPath();

        this.ctx.stroke();
      }
    } else {
      this._drawCommands();

      if (this.getStyledColor('fillColor')) this.ctx.fill();
      if (this.getStyledColor('strokeColor')) this.ctx.stroke();
    }

    if (this.showBoundingBox) {
      var bbox = this.getWorldBbox();
      this.ctx.rect(bbox.x, bbox.y, bbox.width, bbox.height);
      this.ctx.stroke();
    }

    if (this.showHandles) this._drawHandles();
    this._dirty = false;
  }
};
var Path = cc.Class(utils.defineClass(PathDefine, trasform, style, simplify));
['M', 'm', 'L', 'l', 'H', 'h', 'V', 'v', 'C', 'c', 'S', 's', 'Q', 'q', 'T', 't', 'A', 'a', 'Z', 'z'].forEach(function (cmd) {
  Path.prototype[cmd] = function () {
    var cmds = [cmd];

    for (var i = 0, l = arguments.length; i < l; i++) {
      cmds[i + 1] = arguments[i];
    }

    this._commands.push(cmds);
  };
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXHJhcGhhZWxcXFIucGF0aC5qcyJdLCJuYW1lcyI6WyJ1dGlscyIsInJlcXVpcmUiLCJ0cmFzZm9ybSIsInN0eWxlIiwic2ltcGxpZnkiLCJkcmF3ZXIiLCJNIiwiTCIsIkMiLCJaIiwic3FydCIsIk1hdGgiLCJtYXgiLCJhYnMiLCJzZWxlY3RlZENvbG9yIiwiY2MiLCJjb2xvciIsIlBhdGhEZWZpbmUiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwiX2RpcnR5Iiwic2VyaWFsaXphYmxlIiwibm90aWZ5IiwicGFyZW50IiwiX2NvbW1hbmRzIiwicG9pbnRzIiwidW5kZWZpbmVkIiwiaW5pdCIsImN0eCIsInNob3dIYW5kbGVzIiwic2hvd0JvdW5kaW5nQm94Iiwib25Mb2FkIiwiX2dOb2RlIiwiTm9kZSIsImFkZENvbXBvbmVudCIsIkdyYXBoaWNzIiwibm9kZSIsImFkZENoaWxkIiwiX2FwcGx5U3R5bGUiLCJlbGxpcHNlIiwiY3giLCJjeSIsInJ4IiwicnkiLCJjbWRzIiwicHVzaCIsImNpcmNsZSIsInIiLCJyZWN0IiwieCIsInkiLCJ3IiwiaCIsImNsb3NlIiwiY2xvc2VkIiwibGVuZ3RoIiwiY2xlYXIiLCJsYXN0UG9pbnQiLCJpIiwiaWkiLCJwb2ludCIsIm1ha2VQYXRoIiwicGF0aDJjdXJ2ZSIsInBhdGgiLCJnZXRQYXRoU3RyaW5nIiwiY29tbWFuZHMiLCJzdHJpbmciLCJqb2luIiwiZ2V0VG90YWxMZW5ndGgiLCJ0b3RhbExlbmd0aCIsIl9hbmFseXNpcyIsImdldEJib3giLCJiYm94IiwiZ2V0V29ybGRCYm94Iiwid29ybGRCYm94IiwiX3RyYW5zZm9ybURpcnR5IiwiY2VudGVyIiwicG9zaXRpb24iLCJhZGQiLCJ2MiIsIndpZHRoIiwiaGVpZ2h0IiwiX2N1cnZlcyIsImN1cnZlcyIsInN1YkN1cnZlcyIsImNtZCIsImMiLCJfZHJhd0NvbW1hbmRzIiwidCIsImdldFdvcmxkVHJhbnNmb3JtIiwiX3RyYW5zZm9ybUNvbW1hbmQiLCJmdW5jIiwiYXBwbHkiLCJfZHJhd0hhbmRsZXMiLCJwcmV2Iiwic2l6ZSIsImhhbGYiLCJvcmlnaW5MaW5lV2lkdGgiLCJsaW5lV2lkdGgiLCJvcmlnaW5TdHJva2VDb2xvciIsInN0cm9rZUNvbG9yIiwib3JpZ2luRmlsbENvbG9yIiwiZmlsbENvbG9yIiwiZHJhd0hhbmRsZSIsIngxIiwieTEiLCJ4MiIsInkyIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZmlsbCIsImZpbGxSZWN0IiwiX2RyYXdEYXNoUGF0aCIsImRhc2hBcnJheSIsImRhc2hPZmZzZXQiLCJzdWJQb2ludHMiLCJSIiwiZHJhd0Rhc2hQb2ludHMiLCJ1cGRhdGUiLCJkdCIsIl91cGRhdGVBbmltYXRlIiwiZ2V0U3R5bGVkQ29sb3IiLCJQYXRoIiwiQ2xhc3MiLCJkZWZpbmVDbGFzcyIsImZvckVhY2giLCJwcm90b3R5cGUiLCJsIiwiYXJndW1lbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFJQSxLQUFLLEdBQUdDLE9BQU8sQ0FBQyxpQkFBRCxDQUFuQjs7QUFDQSxJQUFJQyxRQUFRLEdBQUdELE9BQU8sQ0FBQyx5QkFBRCxDQUF0Qjs7QUFDQSxJQUFJRSxLQUFLLEdBQUdGLE9BQU8sQ0FBQyxxQkFBRCxDQUFuQixFQUNBOzs7QUFDQSxJQUFJRyxRQUFRLEdBQUdILE9BQU8sQ0FBQyxpQ0FBRCxDQUF0Qjs7QUFFQSxJQUFJSSxNQUFNLEdBQUc7QUFDVEMsRUFBQUEsQ0FBQyxFQUFFLFFBRE07QUFFVEMsRUFBQUEsQ0FBQyxFQUFFLFFBRk07QUFHVEMsRUFBQUEsQ0FBQyxFQUFFLGVBSE07QUFJVEMsRUFBQUEsQ0FBQyxFQUFFO0FBSk0sQ0FBYjtBQU9BLElBQUlDLElBQUksR0FBR0MsSUFBSSxDQUFDRCxJQUFoQjtBQUNBLElBQUlFLEdBQUcsR0FBSUQsSUFBSSxDQUFDQyxHQUFoQjtBQUNBLElBQUlDLEdBQUcsR0FBSUYsSUFBSSxDQUFDRSxH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RDtBQU9ILENBUkQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxudmFyIHV0aWxzID0gcmVxdWlyZSgnLi91dGlscy9SLnV0aWxzJyk7XG52YXIgdHJhc2Zvcm0gPSByZXF1aXJlKCcuL2NvbXBvbmVudC9SLnRyYW5zZm9ybScpO1xudmFyIHN0eWxlID0gcmVxdWlyZSgnLi9jb21wb25lbnQvUi5zdHlsZScpO1xuLy8gb3B0aW9uYWxcbnZhciBzaW1wbGlmeSA9IHJlcXVpcmUoJy4vY29tcG9uZW50L29wdGlvbmFsL1Iuc2ltcGxpZnknKTtcblxudmFyIGRyYXdlciA9IHtcbiAgICBNOiAnbW92ZVRvJyxcbiAgICBMOiAnbGluZVRvJyxcbiAgICBDOiAnYmV6aWVyQ3VydmVUbycsXG4gICAgWjogJ2Nsb3NlJyxcbn07XG5cbnZhciBzcXJ0ID0gTWF0aC5zcXJ0O1xudmFyIG1heCAgPSBNYXRoLm1heDtcbnZhciBhYnMgID0gTWF0aC5hYnM7XG5cbnZhciBzZWxlY3RlZENvbG9yID0gY2MuY29sb3IoMCwxNTcsMjM2KTtcblxuXG52YXIgUGF0aERlZmluZSA9IHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIF9kaXJ0eToge1xuICAgICAgICAgICAgZGVmYXVsdDogdHJ1ZSxcbiAgICAgICAgICAgIHNlcmlhbGl6YWJsZTogZmFsc2UsXG4gICAgICAgICAgICBub3RpZnk6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5wYXJlbnQgJiYgdGhpcy5fZGlydHkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wYXJlbnQuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9jb21tYW5kcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29tbWFuZHMucG9pbnRzID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIGluaXQ6IGZ1bmN0aW9uIChwYXJlbnQpIHtcbiAgICAgICAgaWYgKHBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnQgPSBwYXJlbnQ7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IHBhcmVudC5jdHg7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9jb21tYW5kcyA9IFtdO1xuICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG5cbiAgICAgICAgdGhpcy5zaG93SGFuZGxlcyA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dCb3VuZGluZ0JveCA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLmN0eCkge1xuICAgICAgICAgICAgbGV0IF9nTm9kZSA9IG5ldyBjYy5Ob2RlKCk7XG4gICAgICAgICAgICB0aGlzLmN0eCA9IF9nTm9kZS5hZGRDb21wb25lbnQoY2MuR3JhcGhpY3MpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKF9nTm9kZSk7XG5cbiAgICAgICAgICAgIHRoaXMuX2FwcGx5U3R5bGUoKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBlbGxpcHNlOiBmdW5jdGlvbiAoY3gsIGN5LCByeCwgcnkpIHtcbiAgICAgICAgaWYgKCFyeSkge1xuICAgICAgICAgICAgcnkgPSByeDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbGV0IGNtZHMgPSB0aGlzLl9jb21tYW5kcztcbiAgICAgICAgY21kcy5wdXNoKFsnTScsIGN4LCBjeV0pO1xuICAgICAgICBjbWRzLnB1c2goWydtJywgMCwgLXJ5XSk7XG4gICAgICAgIGNtZHMucHVzaChbJ2EnLCByeCwgcnksIDAsIDEsIDEsIDAsIDIgKiByeV0pO1xuICAgICAgICBjbWRzLnB1c2goWydhJywgcngsIHJ5LCAwLCAxLCAxLCAwLCAtMiAqIHJ5XSk7XG4gICAgICAgIC8vIGNtZHMucHVzaChbJ3onXSk7XG4gICAgfSxcblxuICAgIGNpcmNsZTogZnVuY3Rpb24gKGN4LCBjeSwgcikge1xuICAgICAgICB0aGlzLmVsbGlwc2UoY3gsIGN5LCByKTtcbiAgICB9LFxuXG4gICAgcmVjdDogZnVuY3Rpb24gKHgsIHksIHcsIGgsIHIpIHtcbiAgICAgICAgbGV0IGNtZHMgPSB0aGlzLl9jb21tYW5kcztcblxuICAgICAgICBpZiAocikge1xuICAgICAgICAgICAgY21kcy5wdXNoKFsnTScsIHggKyByLCB5XSk7XG4gICAgICAgICAgICBjbWRzLnB1c2goWydsJywgdyAtIHIgKiAyLCAwXSk7XG4gICAgICAgICAgICBjbWRzLnB1c2goWydhJywgciwgciwgMCwgMCwgMSwgciwgcl0pO1xuICAgICAgICAgICAgY21kcy5wdXNoKFsnbCcsIDAsIGggLSByICogMl0pO1xuICAgICAgICAgICAgY21kcy5wdXNoKFsnYScsIHIsIHIsIDAsIDAsIDEsIC1yLCByXSk7XG4gICAgICAgICAgICBjbWRzLnB1c2goWydsJywgciAqIDIgLSB3LCAwXSk7XG4gICAgICAgICAgICBjbWRzLnB1c2goWydhJywgciwgciwgMCwgMCwgMSwgLXIsIC1yXSk7XG4gICAgICAgICAgICBjbWRzLnB1c2goWydsJywgMCwgciAqIDIgLSBoXSk7XG4gICAgICAgICAgICBjbWRzLnB1c2goWydhJywgciwgciwgMCwgMCwgMSwgciwgLXJdKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNtZHMucHVzaChbJ00nLCB4LCB5XSk7XG4gICAgICAgICAgICBjbWRzLnB1c2goWydsJywgdywgMF0pO1xuICAgICAgICAgICAgY21kcy5wdXNoKFsnbCcsIDAsIGhdKTtcbiAgICAgICAgICAgIGNtZHMucHVzaChbJ2wnLCAtdywgMF0pO1xuICAgICAgICB9XG5cbiAgICAgICAgY21kcy5wdXNoKFsneiddKTtcbiAgICB9LFxuXG5cbiAgIFxuXG4gICAgY2xvc2U6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY29tbWFuZHMucHVzaChbJ1onXSk7XG4gICAgfSxcblxuICAgIHBvaW50czogZnVuY3Rpb24gKHBvaW50cywgY2xvc2VkKSB7XG4gICAgICAgIGlmIChwb2ludHMubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuY2xlYXIoKTtcblxuICAgICAgICB2YXIgbGFzdFBvaW50ID0gcG9pbnRzWzBdO1xuICAgICAgICB0aGlzLk0obGFzdFBvaW50LngsIGxhc3RQb2ludC55KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMSwgaWkgPSBwb2ludHMubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBvaW50ID0gcG9pbnRzW2ldO1xuICAgICAgICAgICAgdGhpcy5DKGxhc3RQb2ludC54LCBsYXN0UG9pbnQueSwgcG9pbnQueCwgcG9pbnQueSwgcG9pbnQueCwgcG9pbnQueSk7XG4gICAgICAgICAgICBsYXN0UG9pbnQgPSBwb2ludDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChjbG9zZWQpIHtcbiAgICAgICAgICAgIHRoaXMuQyhsYXN0UG9pbnQueCwgbGFzdFBvaW50LnksIHBvaW50c1swXS54LCBwb2ludHNbMF0ueSwgcG9pbnRzWzBdLngsIHBvaW50c1swXS55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMubWFrZVBhdGgoKTtcbiAgICB9LFxuXG4gICAgbWFrZVBhdGg6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY29tbWFuZHMgPSB1dGlscy5wYXRoMmN1cnZlKHRoaXMuX2NvbW1hbmRzKTtcbiAgICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICAgIH0sXG5cbiAgICBwYXRoOiBmdW5jdGlvbiAocGF0aCkge1xuICAgICAgICB0aGlzLl9jb21tYW5kcyA9IHV0aWxzLnBhdGgyY3VydmUocGF0aCk7XG4gICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICB9LFxuXG4gICAgY2xlYXI6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5fY29tbWFuZHMubGVuZ3RoID0gMDtcbiAgICB9LFxuXG4gICAgZ2V0UGF0aFN0cmluZzogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY29tbWFuZHMgPSB0aGlzLl9jb21tYW5kcztcbiAgICAgICAgdmFyIHN0cmluZyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGNvbW1hbmRzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgIHN0cmluZ1tpXSA9IGNvbW1hbmRzW2ldLmpvaW4oJyAnKTtcbiAgICAgICAgfVxuICAgICAgICBzdHJpbmcgPSBzdHJpbmcuam9pbignICcpO1xuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgIH0sXG5cbiAgICBnZXRUb3RhbExlbmd0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fY29tbWFuZHMudG90YWxMZW5ndGggPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5fYW5hbHlzaXMoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0aGlzLl9jb21tYW5kcy50b3RhbExlbmd0aDtcbiAgICB9LFxuXG4gICAgZ2V0QmJveDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fY29tbWFuZHMuYmJveCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLl9hbmFseXNpcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NvbW1hbmRzLmJib3g7XG4gICAgfSxcblxuICAgIGdldFdvcmxkQmJveDogZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5fY29tbWFuZHMud29ybGRCYm94ID09PSB1bmRlZmluZWQgfHwgdGhpcy5fdHJhbnNmb3JtRGlydHkpIHtcbiAgICAgICAgICAgIHRoaXMuX2FuYWx5c2lzKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fY29tbWFuZHMud29ybGRCYm94O1xuICAgIH0sXG5cbiAgICBjZW50ZXI6IGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgIHggPSB4IHx8IDA7XG4gICAgICAgIHkgPSB5IHx8IDA7XG4gICAgICAgIFxuICAgICAgICB2YXIgYmJveCA9IHRoaXMuZ2V0QmJveCgpO1xuICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbi5hZGQoY2MudjIoLWJib3gud2lkdGgvMiAtIGJib3gueCArIHgsIC1iYm94LmhlaWdodC8yIC0gYmJveC55ICsgeSkpO1xuICAgIH0sXG5cbiAgICBfY3VydmVzOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjbWRzID0gdGhpcy5fY29tbWFuZHM7XG4gICAgICAgIGlmIChjbWRzLmN1cnZlcykgcmV0dXJuIGNtZHMuY3VydmVzO1xuXG4gICAgICAgIHZhciBjdXJ2ZXMgPSBbXTtcbiAgICAgICAgdmFyIHN1YkN1cnZlcztcbiAgICAgICAgdmFyIHgsIHk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gY21kcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgY21kID0gY21kc1tpXTtcbiAgICAgICAgICAgIHZhciBjID0gY21kWzBdO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoYyA9PT0gJ00nKSB7XG4gICAgICAgICAgICAgICAgc3ViQ3VydmVzID0gW107XG4gICAgICAgICAgICAgICAgY3VydmVzLnB1c2goc3ViQ3VydmVzKTtcblxuICAgICAgICAgICAgICAgIHggPSBjbWRbMV07XG4gICAgICAgICAgICAgICAgeSA9IGNtZFsyXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgPT09ICdDJyAmJiB4ICE9PSB1bmRlZmluZWQgJiYgeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgc3ViQ3VydmVzLnB1c2goW3gsIHksIGNtZFsxXSwgY21kWzJdLCBjbWRbM10sIGNtZFs0XSwgY21kWzVdLCBjbWRbNl1dKTtcblxuICAgICAgICAgICAgICAgIHggPSBjbWRbNV07XG4gICAgICAgICAgICAgICAgeSA9IGNtZFs2XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNtZHMuY3VydmVzID0gY3VydmVzO1xuICAgICAgICByZXR1cm4gY3VydmVzO1xuICAgIH0sXG5cbiAgICBfYW5hbHlzaXM6IGZ1bmN0aW9uICgpIHtcbiAgICAgIFxuICAgIH0sXG5cbiAgICAvLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgIF9kcmF3Q29tbWFuZHM6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGNvbW1hbmRzID0gdGhpcy5fY29tbWFuZHM7XG4gICAgICAgIHZhciBjdHggPSB0aGlzLmN0eDtcbiAgICAgICAgdmFyIHQgPSB0aGlzLmdldFdvcmxkVHJhbnNmb3JtKCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGlpID0gY29tbWFuZHMubGVuZ3RoOyBpIDwgaWk7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNtZCA9IGNvbW1hbmRzW2ldO1xuICAgICAgICAgICAgdmFyIGMgPSBjbWRbMF07XG4gICAgICAgICAgICBjbWQgPSB0aGlzLl90cmFuc2Zvcm1Db21tYW5kKGNtZCwgdCk7XG5cbiAgICAgICAgICAgIHZhciBmdW5jID0gY3R4WyBkcmF3ZXJbY10gXTtcblxuICAgICAgICAgICAgaWYgKGZ1bmMpIGZ1bmMuYXBwbHkoY3R4LCBjbWQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIF9kcmF3SGFuZGxlczogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIHZhciBjb21tYW5kcyA9IHRoaXMuX2NvbW1hbmRzO1xuXG4gICAgICAgIHZhciBwcmV2O1xuICAgICAgICB2YXIgc2l6ZSA9IDU7XG4gICAgICAgIHZhciBoYWxmID0gc2l6ZSAvIDI7XG5cbiAgICAgICAgdmFyIG9yaWdpbkxpbmVXaWR0aCA9IGN0eC5saW5lV2lkdGg7XG4gICAgICAgIHZhciBvcmlnaW5TdHJva2VDb2xvciA9IGN0eC5zdHJva2VDb2xvcjtcbiAgICAgICAgdmFyIG9yaWdpbkZpbGxDb2xvciAgID0gY3R4LmZpbGxDb2xvcjtcblxuICAgICAgICBjdHgubGluZVdpZHRoID0gMTtcbiAgICAgICAgY3R4LnN0cm9rZUNvbG9yID0gc2VsZWN0ZWRDb2xvcjtcbiAgICAgICAgY3R4LmZpbGxDb2xvciA9IHNlbGVjdGVkQ29sb3I7XG5cbiAgICAgICAgdmFyIHQgPSB0aGlzLmdldFdvcmxkVHJhbnNmb3JtKCk7XG5cbiAgICAgICAgZnVuY3Rpb24gZHJhd0hhbmRsZSh4MSwgeTEsIHgyLCB5Mikge1xuICAgICAgICAgICAgY3R4Lm1vdmVUbyh4MSwgeTEpO1xuICAgICAgICAgICAgY3R4LmxpbmVUbyh4MiwgeTIpO1xuICAgICAgICAgICAgY3R4LnN0cm9rZSgpO1xuICAgICAgICAgICAgY3R4LmNpcmNsZSh4MiwgeTIsIGhhbGYpO1xuICAgICAgICAgICAgY3R4LmZpbGwoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IGNvbW1hbmRzLmxlbmd0aDsgaSA8IGlpOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjbWQgPSBjb21tYW5kc1tpXTtcbiAgICAgICAgICAgIHZhciBjID0gY21kWzBdO1xuICAgICAgICAgICAgY21kID0gdGhpcy5fdHJhbnNmb3JtQ29tbWFuZChjbWQsIHQpO1xuXG4gICAgICAgICAgICBpZiAoYyA9PT0gJ00nKSB7XG4gICAgICAgICAgICAgICAgcHJldiA9IGNtZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoYyA9PT0gJ0MnKSB7XG4gICAgICAgICAgICAgICAgZHJhd0hhbmRsZShwcmV2WzBdLCBwcmV2WzFdLCBjbWRbMF0sIGNtZFsxXSk7XG4gICAgICAgICAgICAgICAgZHJhd0hhbmRsZShjbWRbNF0sIGNtZFs1XSwgY21kWzJdLCBjbWRbM10pO1xuICAgICAgICAgICAgICAgIHByZXYgPSBbY21kWzRdLCBjbWRbNV1dO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocHJldilcbiAgICAgICAgICAgICAgICBjdHguZmlsbFJlY3QocHJldlswXS1oYWxmLCBwcmV2WzFdLWhhbGYsIHNpemUsIHNpemUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IG9yaWdpbkxpbmVXaWR0aDtcbiAgICAgICAgY3R4LnN0cm9rZUNvbG9yID0gb3JpZ2luU3Ryb2tlQ29sb3I7XG4gICAgICAgIGN0eC5maWxsQ29sb3IgICA9IG9yaWdpbkZpbGxDb2xvcjtcbiAgICB9LFxuXG4gICAgX2RyYXdEYXNoUGF0aDogZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgY21kcyA9IHRoaXMuX2NvbW1hbmRzO1xuICAgICAgICB2YXIgY3R4ID0gdGhpcy5jdHg7XG4gICAgICAgIHZhciBkYXNoQXJyYXkgPSB0aGlzLmRhc2hBcnJheTtcbiAgICAgICAgdmFyIGRhc2hPZmZzZXQgPSB0aGlzLmRhc2hPZmZzZXQ7XG5cbiAgICAgICAgdmFyIHBvaW50cztcblxuICAgICAgICBpZiAoIWNtZHMucG9pbnRzKSB7XG4gICAgICAgICAgICB0aGlzLl9hbmFseXNpcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgcG9pbnRzID0gY21kcy5wb2ludHM7XG5cbiAgICAgICAgdmFyIHQgPSB0aGlzLmdldFdvcmxkVHJhbnNmb3JtKCk7XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHBvaW50cy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc3ViUG9pbnRzID0gcG9pbnRzW2ldO1xuXG4gICAgICAgICAgICBSLnV0aWxzLmRyYXdEYXNoUG9pbnRzKHN1YlBvaW50cywgY3R4LCBkYXNoQXJyYXksIGRhc2hPZmZzZXQsIHQpO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vXG4gICAgdXBkYXRlOiBmdW5jdGlvbiAoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUFuaW1hdGUpIHtcbiAgICAgICAgICAgIHRoaXMuX3VwZGF0ZUFuaW1hdGUoZHQpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoIHRoaXMuX2NvbW1hbmRzLmxlbmd0aCA9PT0gMCB8fCAhdGhpcy5fZGlydHkgfHwgKHRoaXMucGFyZW50ICYmICF0aGlzLnBhcmVudC5fZGlydHkpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9hcHBseVN0eWxlKCk7XG5cbiAgICAgICAgaWYgKCF0aGlzLnBhcmVudCkge1xuICAgICAgICAgICAgdGhpcy5jdHguY2xlYXIoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmRhc2hBcnJheS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRTdHlsZWRDb2xvcignZmlsbENvbG9yJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9kcmF3Q29tbWFuZHMoKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdldFN0eWxlZENvbG9yKCdzdHJva2VDb2xvcicpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHJhd0Rhc2hQYXRoKCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9kcmF3Q29tbWFuZHMoKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0U3R5bGVkQ29sb3IoJ2ZpbGxDb2xvcicpKSB0aGlzLmN0eC5maWxsKCk7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRTdHlsZWRDb2xvcignc3Ryb2tlQ29sb3InKSkgdGhpcy5jdHguc3Ryb2tlKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodGhpcy5zaG93Qm91bmRpbmdCb3gpIHtcbiAgICAgICAgICAgIHZhciBiYm94ID0gdGhpcy5nZXRXb3JsZEJib3goKTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnJlY3QoYmJveC54LCBiYm94LnksIGJib3gud2lkdGgsIGJib3guaGVpZ2h0KTtcbiAgICAgICAgICAgIHRoaXMuY3R4LnN0cm9rZSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCB0aGlzLnNob3dIYW5kbGVzICkgdGhpcy5fZHJhd0hhbmRsZXMoKTtcblxuICAgICAgICB0aGlzLl9kaXJ0eSA9IGZhbHNlO1xuICAgIH1cbn07XG5cbnZhciBQYXRoID0gY2MuQ2xhc3ModXRpbHMuZGVmaW5lQ2xhc3MoUGF0aERlZmluZSx0cmFzZm9ybSxzdHlsZSwgc2ltcGxpZnkpKTtcblxuWydNJywgJ20nLCAnTCcsICdsJywgJ0gnLCAnaCcsICdWJywgJ3YnLCAnQycsICdjJywgJ1MnLCAncycsICdRJywgJ3EnLCAnVCcsICd0JywgJ0EnLCAnYScsICdaJywneiddLmZvckVhY2goZnVuY3Rpb24gKGNtZCkge1xuICAgIFBhdGgucHJvdG90eXBlW2NtZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBjbWRzID0gW2NtZF07XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgY21kc1tpKzFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2NvbW1hbmRzLnB1c2goY21kcyk7XG4gICAgfTtcbn0pO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/raphael/component/R.style.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '09b02JpT3VMDq9inGP6arE+', 'R.style');
// scripts/miniGame/raphael/component/R.style.js

"use strict";

var LineJoin = cc.Graphics.LineJoin;
var LineCap = cc.Graphics.LineCap;
var Style = {
  properties: {
    _lineWidth: undefined,
    _strokeColor: undefined,
    _fillColor: undefined,
    _lineJoin: undefined,
    _lineCap: undefined,
    _miterLimit: undefined,
    _dashOffset: undefined,
    _dashArray: undefined,
    lineWidth: {
      get: function get() {
        return this._lineWidth || 1;
      },
      set: function set(value) {
        this._lineWidth = value;
        this._dirty = true;
      }
    },
    lineJoin: {
      get: function get() {
        return this._lineJoin || LineJoin.MITER;
      },
      set: function set(value) {
        this._lineJoin = value;
        this._dirty = true;
      },
      type: LineJoin
    },
    lineCap: {
      get: function get() {
        return this._lineCap || LineCap.BUTT;
      },
      set: function set(value) {
        this._lineCap = value;
        this._dirty = true;
      },
      type: LineCap
    },
    strokeColor: {
      get: function get() {
        return this._strokeColor || cc.Color.BLACK;
      },
      set: function set(value) {
        this._strokeColor = value;
        this._dirty = true;
      }
    },
    fillColor: {
      get: function get() {
        return this._fillColor || cc.Color.WHITE;
      },
      set: function set(value) {
        this._fillColor = value;
        this._dirty = true;
      }
    },
    miterLimit: {
      get: function get() {
        return this._miterLimit || 10;
      },
      set: function set(value) {
        this._miterLimit = value;
        this._dirty = true;
      }
    },
    dashOffset: {
      get: function get() {
        return this._dashOffset || 0;
      },
      set: function set(value) {
        if (this._dashOffset === value) {
          return;
        }

        this._dashOffset = value;
        this._dirty = true;
      }
    },
    dashArray: {
      get: function get() {
        return this._dashArray || [];
      },
      set: function set(value) {
        if (!Array.isArray(value)) {
          return;
        }

        this._dashArray = value;
        this._dirty = true;
      }
    }
  },
  getStyled: function getStyled(type) {
    var value = this['_' + type];

    if (value === 'inherit' || value === undefined) {
      if (this.parent) value = this.parent.getStyled(type);else value = this[type];
    }

    return value;
  },
  getStyledColor: function getStyledColor(type) {
    var value = this.getStyled(type);

    if (value === 'none' || !value) {
      value = null;
    } else if (typeof value === 'string') {
      value = new cc.Color().fromHEX(value);
    }

    return value;
  },
  _applyStyle: function _applyStyle() {
    var ctx = this.ctx;
    ctx.lineWidth = this.getStyled('lineWidth');
    ctx.lineJoin = this.getStyled('lineJoin');
    ctx.lineCap = this.getStyled('lineCap');
    var strokeColor = this.getStyledColor('strokeColor');
    var fillColor = this.getStyledColor('fillColor');
    if (strokeColor) ctx.strokeColor = strokeColor;
    if (fillColor) ctx.fillColor = fillColor;
  }
};
module.exports = Style;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXHJhcGhhZWxcXGNvbXBvbmVudFxcUi5zdHlsZS5qcyJdLCJuYW1lcyI6WyJMaW5lSm9pbiIsImNjIiwiR3JhcGhpY3MiLCJMaW5lQ2FwIiwiU3R5bGUiLCJwcm9wZXJ0aWVzIiwiX2xpbmVXaWR0aCIsInVuZGVmaW5lZCIsIl9zdHJva2VDb2xvciIsIl9maWxsQ29sb3IiLCJfbGluZUpvaW4iLCJfbGluZUNhcCIsIl9taXRlckxpbWl0IiwiX2Rhc2hPZmZzZXQiLCJfZGFzaEFycmF5IiwibGluZVdpZHRoIiwiZ2V0Iiwic2V0IiwidmFsdWUiLCJfZGlydHkiLCJsaW5lSm9pbiIsIk1JVEVSIiwidHlwZSIsImxpbmVDYXAiLCJCVVRUIiwic3Ryb2tlQ29sb3IiLCJDb2xvciIsIkJMQUNLIiwiZmlsbENvbG9yIiwiV0hJVEUiLCJtaXRlckxpbWl0IiwiZGFzaE9mZnNldCIsImRhc2hBcnJheSIsIkFycmF5IiwiaXNBcnJheSIsImdldFN0eWxlZCIsInBhcmVudCIsImdldFN0eWxlZENvbG9yIiwiZnJvbUhFWCIsIl9hcHBseVN0eWxlIiwiY3R4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFJQSxRQUFRLEdBQUdDLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZRixRQUEzQjtBQUNBLElBQUlHLE9BQU8sR0FBR0YsRUFBRSxDQUFDQyxRQUFILENBQVlDLE9BQTFCO0FBRUEsSUFBSUMsS0FBSyxHQUFHO0FBQ1JDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxVQUFVLEVBQUVDLFNBREo7QUFFUkMsSUFBQUEsWUFBWSxFQUFFRCxTQUZOO0FBR1JFLElBQUFBLFVBQVUsRUFBRUYsU0FISjtBQUlSRyxJQUFBQSxTQUFTLEVBQUVILFNBSkg7QUFLUkksSUFBQUEsUUFBUSxFQUFFSixTQUxGO0FBTVJLLElBQUFBLFdBQVcsRUFBRUwsU0FOTDtBQVFSTSxJQUFBQSxXQUFXLEVBQUVOLFNBUkw7QUFTUk8sSUFBQUEsVUFBVSxFQUFFUCxTQVRKO0FBV1JRLElBQUFBLFNBQVMsRUFBRTtBQUNQQyxNQUFBQSxHQUFHLEVBQUUsZUFBWTtBQUNiLGVBQU8sS0FBS1YsVUFBTCxJQUFtQixDQUExQjtBQUNILE9BSE07QUFJUFcsTUFBQUEsR0FBRyxFQUFFLGFBQVVDLEtBQVYsRUFBaUI7QUFDbEIsYUFBS1osVUFBTCxHQUFrQlksS0FBbEI7QUFDQSxhQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNIO0FBUE0sS0FYSDtBQXFCUkMsSUFBQUEsUUFBUSxFQUFFO0FBQ05KLE1BQUFBLEdBQUcsRUFBRSxlQUFZO0FBQ2IsZUFBTyxLQUFLTixTQUFMLElBQWtCVixRQUFRLENBQUNxQixLQUFsQztBQUNILE9BSEs7QUFJTkosTUFBQUEsR0FBRyxFQUFFLGFBQVVDLEtBQVYsRUFBaUI7QUFDbEIsYUFBS1IsU0FBTCxHQUFpQlEsS0FBakI7QUFDQSxhQUFLQyxNQUFMLEdBQWMsSUFBZDtBQUNILE9BUEs7QUFRTkcsTUFBQUEsSUFBSSxFQUFFdEI7QUFSQSxLQXJCRjtBQWdDUnVCLElBQUFBLE9BQU8sRUFBRTtBQUNMUCxNQUFBQSxHQUFHLEVBQUUsZUFBWTtBQUNiLGVBQU8sS0FBS0wsUUFBTCxJQUFpQlIsT0FBTyxDQUFDcUIsSUFBaEM7QUFDSCxPQUhJO0FBSUxQLE1BQUFBLEdBQUcsRUFBRSxhQUFVQyxLQUFWLEVBQWlCO0FBQ2xCLGFBQUtQLFFBQUwsR0FBZ0JPLEtBQWhCO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLElBQWQ7QUFDSCxPQVBJO0FBUUxHLE1BQUFBLElBQUksRUFBRW5CO0FBUkQsS0FoQ0Q7QUEyQ1JzQixJQUFBQSxXQUFXLEVBQUU7QUFDVFQsTUFBQUEsR0FBRyxFQUFFLGVBQVk7QUFDYixlQUFPLEtBQUtSLFlBQUwsSUFBcUJQLEVBQUUsQ0FBQ3lCLEtBQUgsQ0FBU0MsS0FBckM7QUFDSCxPQUhRO0FBSVRWLE1BQUFBLEdBQUcsRUFBRSxhQUFVQyxLQUFWLEVBQWlCO0FBQ2xCLGFBQUtWLFlBQUwsR0FBb0JVLEtBQXBCO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLElBQWQ7QUFDSDtBQVBRLEtBM0NMO0FBcURSUyxJQUFBQSxTQUFTLEVBQUU7QUFDUFosTUFBQUEsR0FBRyxFQUFFLGVBQVk7QUFDYixlQUFPLEtBQUtQLFVBQUwsSUFBbUJSLEVBQUUsQ0FBQ3lCLEtBQUgsQ0FBU0csS0FBbkM7QUFDSCxPQUhNO0FBSVBaLE1BQUFBLEdBQUcsRUFBRSxhQUFVQyxLQUFWLEVBQWlCO0FBQ2xCLGFBQUtULFVBQUwsR0FBa0JTLEtBQWxCO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLElBQWQ7QUFDSDtBQVBNLEtBckRIO0FBK0RSVyxJQUFBQSxVQUFVLEVBQUU7QUFDUmQsTUFBQUEsR0FBRyxFQUFFLGVBQVk7QUFDYixlQUFPLEtBQUtKLFdBQUwsSUFBb0IsRUFBM0I7QUFDSCxPQUhPO0FBSVJLLE1BQUFBLEdBQUcsRUFBRSxhQUFVQyxLQUFWLEVBQWlCO0FBQ2xCLGFBQUtOLFdBQUwsR0FBbUJNLEtBQW5CO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLElBQWQ7QUFDSDtBQVBPLEtBL0RKO0FBeUVSWSxJQUFBQSxVQUFVLEVBQUU7QUFDUmYsTUFBQUEsR0FBRyxFQUFFLGVBQVk7QUFDYixlQUFPLEtBQUtILFdBQUwsSUFBb0IsQ0FBM0I7QUFDSCxPQUhPO0FBSVJJLE1BQUFBLEdBQUcsRUFBRSxhQUFVQyxLQUFWLEVBQWlCO0FBQ2xCLFlBQUksS0FBS0wsV0FBTCxLQUFxQkssS0FBekIsRUFBZ0M7QUFDNUI7QUFDSDs7QUFDRCxhQUFLTCxXQUFMLEdBQW1CSyxLQUFuQjtBQUNBLGFBQUtDLE1BQUwsR0FBYyxJQUFkO0FBQ0g7QUFWTyxLQXpFSjtBQXFGUmEsSUFBQUEsU0FBUyxFQUFFO0FBQ1BoQixNQUFBQSxHQUFHLEVBQUUsZUFBWTtBQUNiLGVBQU8sS0FBS0YsVUFBTCxJQUFtQixFQUExQjtBQUNILE9BSE07QUFJUEcsTUFBQUEsR0FBRyxFQUFFLGFBQVVDLEtBQVYsRUFBaUI7QUFDbEIsWUFBSSxDQUFDZSxLQUFLLENBQUNDLE9BQU4sQ0FBY2hCLEtBQWQsQ0FBTCxFQUEyQjtBQUN2QjtBQUNIOztBQUNELGFBQUtKLFVBQUwsR0FBa0JJLEtBQWxCO0FBQ0EsYUFBS0MsTUFBTCxHQUFjLElBQWQ7QUFDSDtBQVZNO0FBckZILEdBREo7QUFvR1JnQixFQUFBQSxTQUFTLEVBQUUsbUJBQVViLElBQVYsRUFBZ0I7QUFDdkIsUUFBSUosS0FBSyxHQUFHLEtBQUssTUFBTUksSUFBWCxDQUFaOztBQUVBLFFBQUlKLEtBQUssS0FBSyxTQUFWLElBQXVCQSxLQUFLLEtBQUtYLFNBQXJDLEVBQWdEO0FBQzVDLFVBQUksS0FBSzZCLE1BQVQsRUFBaUJsQixLQUFLLEdBQUcsS0FBS2tCLE1BQUwsQ0FBWUQsU0FBWixDQUFzQmIsSUFBdEIsQ0FBUixDQUFqQixLQUNLSixLQUFLLEdBQUcsS0FBS0ksSUFBTCxDQUFSO0FBQ1I7O0FBRUQsV0FBT0osS0FBUDtBQUNILEdBN0dPO0FBK0dSbUIsRUFBQUEsY0FBYyxFQUFFLHdCQUFVZixJQUFWLEVBQWdCO0FBQzVCLFFBQUlKLEtBQUssR0FBRyxLQUFLaUIsU0FBTCxDQUFlYixJQUFmLENBQVo7O0FBRUEsUUFBSUosS0FBSyxLQUFLLE1BQVYsSUFBb0IsQ0FBQ0EsS0FBekIsRUFBZ0M7QUFDNUJBLE1BQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0gsS0FGRCxNQUdLLElBQUksT0FBT0EsS0FBUCxLQUFpQixRQUFyQixFQUErQjtBQUNoQ0EsTUFBQUEsS0FBSyxHQUFHLElBQUlqQixFQUFFLENBQUN5QixLQUFQLEdBQWVZLE9BQWYsQ0FBdUJwQixLQUF2QixDQUFSO0FBQ0g7O0FBRUQsV0FBT0EsS0FBUDtBQUNILEdBMUhPO0FBNEhScUIsRUFBQUEsV0FBVyxFQUFFLHVCQUFZO0FBQ3JCLFFBQUlDLEdBQUcsR0FBRyxLQUFLQSxHQUFmO0FBQ0FBLElBQUFBLEdBQUcsQ0FBQ3pCLFNBQUosR0FBZ0IsS0FBS29CLFNBQUwsQ0FBZSxXQUFmLENBQWhCO0FBQ0FLLElBQUFBLEdBQUcsQ0FBQ3BCLFFBQUosR0FBZSxLQUFLZSxTQUFMLENBQWUsVUFBZixDQUFmO0FBQ0FLLElBQUFBLEdBQUcsQ0FBQ2pCLE9BQUosR0FBYyxLQUFLWSxTQUFMLENBQWUsU0FBZixDQUFkO0FBRUEsUUFBSVYsV0FBVyxHQUFHLEtBQUtZLGNBQUwsQ0FBb0IsYUFBcEIsQ0FBbEI7QUFDQSxRQUFJVCxTQUFTLEdBQUcsS0FBS1MsY0FBTCxDQUFvQixXQUFwQixDQUFoQjtBQUVBLFFBQUlaLFdBQUosRUFDSWUsR0FBRyxDQUFDZixXQUFKLEdBQWtCQSxXQUFsQjtBQUNKLFFBQUlHLFNBQUosRUFDSVksR0FBRyxDQUFDWixTQUFKLEdBQWdCQSxTQUFoQjtBQUNQO0FBeklPLENBQVo7QUE0SUFhLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnRDLEtBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJcbnZhciBMaW5lSm9pbiA9IGNjLkdyYXBoaWNzLkxpbmVKb2luO1xudmFyIExpbmVDYXAgPSBjYy5HcmFwaGljcy5MaW5lQ2FwO1xuXG52YXIgU3R5bGUgPSB7XG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBfbGluZVdpZHRoOiB1bmRlZmluZWQsXG4gICAgICAgIF9zdHJva2VDb2xvcjogdW5kZWZpbmVkLFxuICAgICAgICBfZmlsbENvbG9yOiB1bmRlZmluZWQsXG4gICAgICAgIF9saW5lSm9pbjogdW5kZWZpbmVkLFxuICAgICAgICBfbGluZUNhcDogdW5kZWZpbmVkLFxuICAgICAgICBfbWl0ZXJMaW1pdDogdW5kZWZpbmVkLFxuXG4gICAgICAgIF9kYXNoT2Zmc2V0OiB1bmRlZmluZWQsXG4gICAgICAgIF9kYXNoQXJyYXk6IHVuZGVmaW5lZCxcblxuICAgICAgICBsaW5lV2lkdGg6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9saW5lV2lkdGggfHwgMTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXQ6IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVXaWR0aCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBsaW5lSm9pbjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2xpbmVKb2luIHx8IExpbmVKb2luLk1JVEVSO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbGluZUpvaW4gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdHlwZTogTGluZUpvaW5cbiAgICAgICAgfSxcblxuICAgICAgICBsaW5lQ2FwOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fbGluZUNhcCB8fCBMaW5lQ2FwLkJVVFQ7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9saW5lQ2FwID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHR5cGU6IExpbmVDYXBcbiAgICAgICAgfSxcblxuICAgICAgICBzdHJva2VDb2xvcjoge1xuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cm9rZUNvbG9yIHx8IGNjLkNvbG9yLkJMQUNLO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3Ryb2tlQ29sb3IgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9kaXJ0eSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgZmlsbENvbG9yOiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZmlsbENvbG9yIHx8IGNjLkNvbG9yLldISVRFO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fZmlsbENvbG9yID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgdGhpcy5fZGlydHkgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuXG4gICAgICAgIG1pdGVyTGltaXQ6IHtcbiAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9taXRlckxpbWl0IHx8IDEwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fbWl0ZXJMaW1pdCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcblxuICAgICAgICBkYXNoT2Zmc2V0OiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGFzaE9mZnNldCB8fCAwO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2Rhc2hPZmZzZXQgPT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5fZGFzaE9mZnNldCA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgZGFzaEFycmF5OiB7XG4gICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fZGFzaEFycmF5IHx8IFtdO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2Rhc2hBcnJheSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMuX2RpcnR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgZ2V0U3R5bGVkOiBmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzWydfJyArIHR5cGVdO1xuICAgICAgICBcbiAgICAgICAgaWYgKHZhbHVlID09PSAnaW5oZXJpdCcgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50KSB2YWx1ZSA9IHRoaXMucGFyZW50LmdldFN0eWxlZCh0eXBlKTtcbiAgICAgICAgICAgIGVsc2UgdmFsdWUgPSB0aGlzW3R5cGVdO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG5cbiAgICBnZXRTdHlsZWRDb2xvcjogZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5nZXRTdHlsZWQodHlwZSk7XG5cbiAgICAgICAgaWYgKHZhbHVlID09PSAnbm9uZScgfHwgIXZhbHVlKSB7XG4gICAgICAgICAgICB2YWx1ZSA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgdmFsdWUgPSBuZXcgY2MuQ29sb3IoKS5mcm9tSEVYKHZhbHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9LFxuXG4gICAgX2FwcGx5U3R5bGU6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIGN0eCA9IHRoaXMuY3R4O1xuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5nZXRTdHlsZWQoJ2xpbmVXaWR0aCcpO1xuICAgICAgICBjdHgubGluZUpvaW4gPSB0aGlzLmdldFN0eWxlZCgnbGluZUpvaW4nKTtcbiAgICAgICAgY3R4LmxpbmVDYXAgPSB0aGlzLmdldFN0eWxlZCgnbGluZUNhcCcpO1xuXG4gICAgICAgIHZhciBzdHJva2VDb2xvciA9IHRoaXMuZ2V0U3R5bGVkQ29sb3IoJ3N0cm9rZUNvbG9yJyk7XG4gICAgICAgIHZhciBmaWxsQ29sb3IgPSB0aGlzLmdldFN0eWxlZENvbG9yKCdmaWxsQ29sb3InKTtcblxuICAgICAgICBpZiAoc3Ryb2tlQ29sb3IpXG4gICAgICAgICAgICBjdHguc3Ryb2tlQ29sb3IgPSBzdHJva2VDb2xvcjtcbiAgICAgICAgaWYgKGZpbGxDb2xvcilcbiAgICAgICAgICAgIGN0eC5maWxsQ29sb3IgPSBmaWxsQ29sb3I7XG4gICAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBTdHlsZTtcbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/raphael/utils/R.curve.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5bf85wxeCdBxp/caEswsCfC', 'R.curve');
// scripts/miniGame/raphael/utils/R.curve.js

'use strict';

var pathCommand = /([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/ig;
var pathValues = /(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/ig;
var concat = 'concat';
var apply = 'apply';
var split = 'split';
var has = 'hasOwnProperty';
var toFloat = parseFloat;
var mmax = Math.max;
var mmin = Math.min;
var PI = Math.PI;
var abs = Math.abs;
var math = Math;
var pow = Math.pow;
var upperCase = String.prototype.toUpperCase;
var cache = {
  string2curve: {},
  string2path: {}
};

function clone(obj) {
  if (typeof obj === 'function' || Object(obj) !== obj) {
    return obj;
  }

  var res = new obj.constructor();

  for (var key in obj) {
    if (obj[has](key)) {
      res[key] = clone(obj[key]);
    }
  }

  return res;
}

var a2c = function a2c(x1, y1, rx, ry, angle, large_arc_flag, sweep_flag, x2, y2, recursive) {
  // for more information of where this math came from visit:
  // http://www.w3.org/TR/SVG11/implnote.html#ArcImplementationNotes
  var _120 = PI * 120 / 180,
      rad = PI / 180 * (+angle || 0),
      res = [],
      xy,
      rotate = function rotate(x, y, rad) {
    var X = x * math.cos(rad) - y * math.sin(rad),
        Y = x * math.sin(rad) + y * math.cos(rad);
    return {
      x: X,
      y: Y
    };
  };

  if (!recursive) {
    xy = rotate(x1, y1, -rad);
    x1 = xy.x;
    y1 = xy.y;
    xy = rotate(x2, y2, -rad);
    x2 = xy.x;
    y2 = xy.y;
    var cos = math.cos(PI / 180 * angle),
        sin = math.sin(PI / 180 * angle),
        x = (x1 - x2) / 2,
        y = (y1 - y2) / 2;
    var h = x * x / (rx * rx) + y * y / (ry * ry);

    if (h > 1) {
      h = math.sqrt(h);
      rx = h * rx;
      ry = h * ry;
    }

    var rx2 = rx * rx,
        ry2 = ry * ry,
        k = (large_arc_flag === sweep_flag ? -1 : 1) * math.sqrt(abs((rx2 * ry2 - rx2 * y * y - ry2 * x * x) / (rx2 * y * y + ry2 * x * x))),
        cx = k * rx * y / ry + (x1 + x2) / 2,
        cy = k * -ry * x / rx + (y1 + y2) / 2,
        f1 = math.asin(((y1 - cy) / ry).toFixed(9)),
        f2 = math.asin(((y2 - cy) / ry).toFixed(9));
    f1 = x1 < cx ? PI - f1 : f1;
    f2 = x2 < cx ? PI - f2 : f2;
    f1 < 0 && (f1 = PI * 2 + f1);
    f2 < 0 && (f2 = PI * 2 + f2);

    if (sweep_flag && f1 > f2) {
      f1 = f1 - PI * 2;
    }

    if (!sweep_flag && f2 > f1) {
      f2 = f2 - PI * 2;
    }
  } else {
    f1 = recursive[0];
    f2 = recursive[1];
    cx = recursive[2];
    cy = recursive[3];
  }

  var df = f2 - f1;

  if (abs(df) > _120) {
    var f2old = f2,
        x2old = x2,
        y2old = y2;
    f2 = f1 + _120 * (sweep_flag && f2 > f1 ? 1 : -1);
    x2 = cx + rx * math.cos(f2);
    y2 = cy + ry * math.sin(f2);
    res = a2c(x2, y2, rx, ry, angle, 0, sweep_flag, x2old, y2old, [f2, f2old, cx, cy]);
  }

  df = f2 - f1;
  var c1 = math.cos(f1),
      s1 = math.sin(f1),
      c2 = math.cos(f2),
      s2 = math.sin(f2),
      t = math.tan(df / 4),
      hx = 4 / 3 * rx * t,
      hy = 4 / 3 * ry * t,
      m1 = [x1, y1],
      m2 = [x1 + hx * s1, y1 - hy * c1],
      m3 = [x2 + hx * s2, y2 - hy * c2],
      m4 = [x2, y2];
  m2[0] = 2 * m1[0] - m2[0];
  m2[1] = 2 * m1[1] - m2[1];

  if (recursive) {
    return [m2, m3, m4][concat](res);
  } else {
    res = [m2, m3, m4][concat](res).join()[split](',');
    var newres = [];

    for (var i = 0, ii = res.length; i < ii; i++) {
      newres[i] = i % 2 ? rotate(res[i - 1], res[i], rad).y : rotate(res[i], res[i + 1], rad).x;
    }

    return newres;
  }
};

var l2c = function l2c(x1, y1, x2, y2) {
  return [x1, y1, x2, y2, x2, y2];
};

var q2c = function q2c(x1, y1, ax, ay, x2, y2) {
  var _13 = 1 / 3,
      _23 = 2 / 3;

  return [_13 * x1 + _23 * ax, _13 * y1 + _23 * ay, _13 * x2 + _23 * ax, _13 * y2 + _23 * ay, x2, y2];
};

var parsePathString = function parsePathString(pathString) {
  if (!pathString) {
    return null;
  }

  if (typeof pathString !== 'string') {
    return pathString;
  }

  if (cache.string2path[pathString]) {
    return clone(cache.string2path[pathString]);
  }

  var paramCounts = {
    a: 7,
    c: 6,
    h: 1,
    l: 2,
    m: 2,
    r: 4,
    q: 4,
    s: 4,
    t: 2,
    v: 1,
    z: 0
  },
      data = [];
  String(pathString).replace(pathCommand, function (a, b, c) {
    var params = [],
        name = b.toLowerCase();
    c.replace(pathValues, function (a, b) {
      b && params.push(+b);
    });

    if (name === 'm' && params.length > 2) {
      data.push([b][concat](params.splice(0, 2)));
      name = 'l';
      b = b === 'm' ? 'l' : 'L';
    }

    if (name === 'r') {
      data.push([b][concat](params));
    } else while (params.length >= paramCounts[name]) {
      data.push([b][concat](params.splice(0, paramCounts[name])));

      if (!paramCounts[name]) {
        break;
      }
    }
  });
  return data;
};

var path2absolute = function path2absolute(pathString) {
  var pathArray = parsePathString(pathString);
  var res = [],
      x = 0,
      y = 0,
      mx = 0,
      my = 0,
      start = 0;

  if (pathArray[0][0] == 'M') {
    x = +pathArray[0][1];
    y = +pathArray[0][2];
    mx = x;
    my = y;
    start++;
    res[0] = ['M', x, y];
  }

  var crz = pathArray.length == 3 && pathArray[0][0] == 'M' && pathArray[1][0].toUpperCase() == 'R' && pathArray[2][0].toUpperCase() == 'Z';

  for (var r, pa, i = start, ii = pathArray.length; i < ii; i++) {
    res.push(r = []);
    pa = pathArray[i];

    if (pa[0] != upperCase.call(pa[0])) {
      r[0] = upperCase.call(pa[0]);

      switch (r[0]) {
        case 'A':
          r[1] = pa[1];
          r[2] = pa[2];
          r[3] = pa[3];
          r[4] = pa[4];
          r[5] = pa[5];
          r[6] = +(pa[6] + x);
          r[7] = +(pa[7] + y);
          break;

        case 'V':
          r[1] = +pa[1] + y;
          break;

        case 'H':
          r[1] = +pa[1] + x;
          break;

        case 'R':
          var dots = [x, y][concat](pa.slice(1));

          for (var j = 2, jj = dots.length; j < jj; j++) {
            dots[j] = +dots[j] + x;
            dots[++j] = +dots[j] + y;
          }

          res.pop();
          res = res[concat](catmullRom2bezier(dots, crz));
          break;

        case 'M':
          mx = +pa[1] + x;
          my = +pa[2] + y;

        default:
          for (j = 1, jj = pa.length; j < jj; j++) {
            r[j] = +pa[j] + (j % 2 ? x : y);
          }

      }
    } else if (pa[0] == 'R') {
      dots = [x, y][concat](pa.slice(1));
      res.pop();
      res = res[concat](catmullRom2bezier(dots, crz));
      r = ['R'][concat](pa.slice(-2));
    } else {
      for (var k = 0, kk = pa.length; k < kk; k++) {
        r[k] = pa[k];
      }
    }

    switch (r[0]) {
      case 'Z':
        x = mx;
        y = my;
        break;

      case 'H':
        x = r[1];
        break;

      case 'V':
        y = r[1];
        break;

      case 'M':
        mx = r[r.length - 2];
        my = r[r.length - 1];

      default:
        x = r[r.length - 2];
        y = r[r.length - 1];
    }
  }

  return res;
};

var path2curve = function path2curve(pathString, pathString2) {
  if (typeof pathString === 'string' && !pathString2 && cache.string2curve[pathString]) {
    return clone(cache.string2curve[pathString]);
  }

  var p = path2absolute(pathString),
      p2 = pathString2 && path2absolute(pathString2),
      attrs = {
    x: 0,
    y: 0,
    bx: 0,
    by: 0,
    X: 0,
    Y: 0,
    qx: null,
    qy: null
  },
      attrs2 = {
    x: 0,
    y: 0,
    bx: 0,
    by: 0,
    X: 0,
    Y: 0,
    qx: null,
    qy: null
  },
      processPath = function processPath(path, d, pcom) {
    var nx,
        ny,
        tq = {
      T: 1,
      Q: 1
    };

    if (!path) {
      return ['C', d.x, d.y, d.x, d.y, d.x, d.y];
    }

    !(path[0] in tq) && (d.qx = d.qy = null);

    switch (path[0]) {
      case 'M':
        d.X = path[1];
        d.Y = path[2];
        break;

      case 'A':
        path = ['C'][concat](a2c[apply](0, [d.x, d.y][concat](path.slice(1))));
        break;

      case 'S':
        if (pcom == 'C' || pcom == 'S') {
          // In 'S' case we have to take into account, if the previous command is C/S.
          nx = d.x * 2 - d.bx; // And reflect the previous

          ny = d.y * 2 - d.by; // command's control point relative to the current point.
        } else {
          // or some else or nothing
          nx = d.x;
          ny = d.y;
        }

        path = ['C', nx, ny][concat](path.slice(1));
        break;

      case 'T':
        if (pcom == 'Q' || pcom == 'T') {
          // In 'T' case we have to take into account, if the previous command is Q/T.
          d.qx = d.x * 2 - d.qx; // And make a reflection similar

          d.qy = d.y * 2 - d.qy; // to case 'S'.
        } else {
          // or something else or nothing
          d.qx = d.x;
          d.qy = d.y;
        }

        path = ['C'][concat](q2c(d.x, d.y, d.qx, d.qy, path[1], path[2]));
        break;

      case 'Q':
        d.qx = path[1];
        d.qy = path[2];
        path = ['C'][concat](q2c(d.x, d.y, path[1], path[2], path[3], path[4]));
        break;

      case 'L':
        path = ['C'][concat](l2c(d.x, d.y, path[1], path[2]));
        break;

      case 'H':
        path = ['C'][concat](l2c(d.x, d.y, path[1], d.y));
        break;

      case 'V':
        path = ['C'][concat](l2c(d.x, d.y, d.x, path[1]));
        break;

      case 'Z':
        path = ['C'][concat](l2c(d.x, d.y, d.X, d.Y));
        break;
    }

    return path;
  },
      fixArc = function fixArc(pp, i) {
    if (pp[i].length > 7) {
      pp[i].shift();
      var pi = pp[i];

      while (pi.length) {
        pcoms1[i] = 'A'; // if created multiple C:s, their original seg is saved

        p2 && (pcoms2[i] = 'A'); // the same as above

        pp.splice(i++, 0, ['C'][concat](pi.splice(0, 6)));
      }

      pp.splice(i, 1);
      ii = mmax(p.length, p2 && p2.length || 0);
    }
  },
      fixM = function fixM(path1, path2, a1, a2, i) {
    if (path1 && path2 && path1[i][0] == 'M' && path2[i][0] != 'M') {
      path2.splice(i, 0, ['M', a2.x, a2.y]);
      a1.bx = 0;
      a1.by = 0;
      a1.x = path1[i][1];
      a1.y = path1[i][2];
      ii = mmax(p.length, p2 && p2.length || 0);
    }
  },
      pcoms1 = [],
      // path commands of original path p
  pcoms2 = [],
      // path commands of original path p2
  pfirst = '',
      // temporary holder for original path command
  pcom = ''; // holder for previous path command of original path


  for (var i = 0, ii = mmax(p.length, p2 && p2.length || 0); i < ii; i++) {
    p[i] && (pfirst = p[i][0]); // save current path command

    if (pfirst != 'C') // C is not saved yet, because it may be result of conversion
      {
        pcoms1[i] = pfirst; // Save current path command

        i && (pcom = pcoms1[i - 1]); // Get previous path command pcom
      }

    p[i] = processPath(p[i], attrs, pcom); // Previous path command is inputted to processPath

    if (pcoms1[i] != 'A' && pfirst == 'C') pcoms1[i] = 'C'; // A is the only command
    // which may produce multiple C:s
    // so we have to make sure that C is also C in original path

    fixArc(p, i); // fixArc adds also the right amount of A:s to pcoms1

    if (p2) {
      // the same procedures is done to p2
      p2[i] && (pfirst = p2[i][0]);

      if (pfirst != 'C') {
        pcoms2[i] = pfirst;
        i && (pcom = pcoms2[i - 1]);
      }

      p2[i] = processPath(p2[i], attrs2, pcom);
      if (pcoms2[i] != 'A' && pfirst == 'C') pcoms2[i] = 'C';
      fixArc(p2, i);
    }

    fixM(p, p2, attrs, attrs2, i);
    fixM(p2, p, attrs2, attrs, i);
    var seg = p[i],
        seg2 = p2 && p2[i],
        seglen = seg.length,
        seg2len = p2 && seg2.length;
    attrs.x = seg[seglen - 2];
    attrs.y = seg[seglen - 1];
    attrs.bx = toFloat(seg[seglen - 4]) || attrs.x;
    attrs.by = toFloat(seg[seglen - 3]) || attrs.y;
    attrs2.bx = p2 && (toFloat(seg2[seg2len - 4]) || attrs2.x);
    attrs2.by = p2 && (toFloat(seg2[seg2len - 3]) || attrs2.y);
    attrs2.x = p2 && seg2[seg2len - 2];
    attrs2.y = p2 && seg2[seg2len - 1];
  }

  if (typeof pathString === 'string' && !pathString2) {
    cache.string2curve[pathString] = clone(p);
  }

  return p2 ? [p, p2] : p;
};

module.exports = {
  path2absolute: path2absolute,
  path2curve: path2curve
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXHJhcGhhZWxcXHV0aWxzXFxSLmN1cnZlLmpzIl0sIm5hbWVzIjpbInBhdGhDb21tYW5kIiwicGF0aFZhbHVlcyIsImNvbmNhdCIsImFwcGx5Iiwic3BsaXQiLCJoYXMiLCJ0b0Zsb2F0IiwicGFyc2VGbG9hdCIsIm1tYXgiLCJNYXRoIiwibWF4IiwibW1pbiIsIm1pbiIsIlBJIiwiYWJzIiwibWF0aCIsInBvdyIsInVwcGVyQ2FzZSIsIlN0cmluZyIsInByb3RvdHlwZSIsInRvVXBwZXJDYXNlIiwiY2FjaGUiLCJzdHJpbmcyY3VydmUiLCJzdHJpbmcycGF0aCIsImNsb25lIiwib2JqIiwiT2JqZWN0IiwicmVzIiwiY29uc3RydWN0b3IiLCJrZXkiLCJhMmMiLCJ4MSIsInkxIiwicngiLCJyeSIsImFuZ2xlIiwibGFyZ2VfYXJjX2ZsYWciLCJzd2VlcF9mbGFnIiwieDIiLCJ5MiIsInJlY3Vyc2l2ZSIsIl8xMjAiLCJyYWQiLCJ4eSIsInJvdGF0ZSIsIngiLCJ5IiwiWCIsImNvcyIsInNpbiIsIlkiLCJoIiwic3FydCIsInJ4MiIsInJ5MiIsImsiLCJjeCIsImN5IiwiZjEiLCJhc2luIiwidG9GaXhlZCIsImYyIiwiZGYiLCJmMm9sZCIsIngyb2xkIiwieTJvbGQiLCJjMSIsInMxIiwiYzIiLCJzMiIsInQiLCJ0YW4iLCJoeCIsImh5IiwibTEiLCJtMiIsIm0zIiwibTQiLCJqb2luIiwibmV3cmVzIiwiaSIsImlpIiwibGVuZ3RoIiwibDJjIiwicTJjIiwiYXgiLCJheSIsIl8xMyIsIl8yMyIsInBhcnNlUGF0aFN0cmluZyIsInBhdGhTdHJpbmciLCJwYXJhbUNvdW50cyIsImEiLCJjIiwibCIsIm0iLCJyIiwicSIsInMiLCJ2IiwieiIsImRhdGEiLCJyZXBsYWNlIiwiYiIsInBhcmFtcyIsIm5hbWUiLCJ0b0xvd2VyQ2FzZSIsInB1c2giLCJzcGxpY2UiLCJwYXRoMmFic29sdXRlIiwicGF0aEFycmF5IiwibXgiLCJteSIsInN0YXJ0IiwiY3J6IiwicGEiLCJjYWxsIiwiZG90cyIsInNsaWNlIiwiaiIsImpqIiwicG9wIiwiY2F0bXVsbFJvbTJiZXppZXIiLCJrayIsInBhdGgyY3VydmUiLCJwYXRoU3RyaW5nMiIsInAiLCJwMiIsImF0dHJzIiwiYngiLCJieSIsInF4IiwicXkiLCJhdHRyczIiLCJwcm9jZXNzUGF0aCIsInBhdGgiLCJkIiwicGNvbSIsIm54IiwibnkiLCJ0cSIsIlQiLCJRIiwiZml4QXJjIiwicHAiLCJzaGlmdCIsInBpIiwicGNvbXMxIiwicGNvbXMyIiwiZml4TSIsInBhdGgxIiwicGF0aDIiLCJhMSIsImEyIiwicGZpcnN0Iiwic2VnIiwic2VnMiIsInNlZ2xlbiIsInNlZzJsZW4iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFJQSxXQUFXLEdBQUcsc2RBQWxCO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLHdUQUFqQjtBQUVBLElBQUlDLE1BQU0sR0FBRyxRQUFiO0FBQ0EsSUFBSUMsS0FBSyxHQUFJLE9BQWI7QUFDQSxJQUFJQyxLQUFLLEdBQUksT0FBYjtBQUNBLElBQUlDLEdBQUcsR0FBTSxnQkFBYjtBQUVBLElBQUlDLE9BQU8sR0FBR0MsVUFBZDtBQUVBLElBQUlDLElBQUksR0FBR0MsSUFBSSxDQUFDQyxHQUFoQjtBQUNBLElBQUlDLElBQUksR0FBR0YsSUFBSSxDQUFDRyxHQUFoQjtBQUNBLElBQUlDLEVBQUUsR0FBS0osSUFBSSxDQUFDSSxFQUFoQjtBQUNBLElBQUlDLEdBQUcsR0FBSUwsSUFBSSxDQUFDSyxHQUFoQjtBQUNBLElBQUlDLElBQUksR0FBR04sSUFBWDtBQUNBLElBQUlPLEdBQUcsR0FBSVAsSUFBSSxDQUFDTyxHQUFoQjtBQUVBLElBQUlDLFNBQVMsR0FBR0MsTUFBTSxDQUFDQyxTQUFQLENBQWlCQyxXQUFqQztBQUVBLElBQUlDLEtBQUssR0FBRztBQUNSQyxFQUFBQSxZQUFZLEVBQUUsRUFETjtB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QztBQUNBdUYsSUFBQUEsTUFBTSxDQUFDSixFQUFQLEdBQVlGLEVBQUUsS0FBS3pILE9BQU8sQ0FBQ3NKLElBQUksQ0FBQ0UsT0FBTyxHQUFHLENBQVgsQ0FBTCxDQUFQLElBQThCekIsTUFBTSxDQUFDeEYsQ0FBMUMsQ0FBZDtBQUNBd0YsSUFBQUEsTUFBTSxDQUFDSCxFQUFQLEdBQVlILEVBQUUsS0FBS3pILE9BQU8sQ0FBQ3NKLElBQUksQ0FBQ0UsT0FBTyxHQUFHLENBQVgsQ0FBTCxDQUFQLElBQThCekIsTUFBTSxDQUFDdkYsQ0FBMUMsQ0FBZDtBQUNBdUYsSUFBQUEsTUFBTSxDQUFDeEYsQ0FBUCxHQUFXa0YsRUFBRSxJQUFJNkIsSUFBSSxDQUFDRSxPQUFPLEdBQUcsQ0FBWCxDQUFyQjtBQUNBekIsSUFBQUEsTUFBTSxDQUFDdkYsQ0FBUCxHQUFXaUYsRUFBRSxJQUFJNkIsSUFBSSxDQUFDRSxPQUFPLEdBQUcsQ0FBWCxDQUFyQjtBQUNIOztBQUVELE1BQUssT0FBT3BFLFVBQVAsS0FBc0IsUUFBdEIsSUFBa0MsQ0FBQ21DLFdBQXhDLEVBQXNEO0FBQ2xEeEcsSUFBQUEsS0FBSyxDQUFDQyxZQUFOLENBQW1Cb0UsVUFBbkIsSUFBaUNsRSxLQUFLLENBQUNzRyxDQUFELENBQXRDO0FBQ0g7O0FBRUQsU0FBT0MsRUFBRSxHQUFHLENBQUNELENBQUQsRUFBSUMsRUFBSixDQUFILEdBQWFELENBQXRCO0FBQ0gsQ0E5SUQ7O0FBZ0pBaUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQ2JuRCxFQUFBQSxhQUFhLEVBQUVBLGFBREY7QUFFYmUsRUFBQUEsVUFBVSxFQUFFQTtBQUZDLENBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnZhciBwYXRoQ29tbWFuZCA9IC8oW2FjaGxtcnFzdHZ6XSlbXFx4MDlcXHgwYVxceDBiXFx4MGNcXHgwZFxceDIwXFx4YTBcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXFx1MjAyOFxcdTIwMjksXSooKC0/XFxkKlxcLj9cXGQqKD86ZVtcXC0rXT9cXGQrKT9bXFx4MDlcXHgwYVxceDBiXFx4MGNcXHgwZFxceDIwXFx4YTBcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXFx1MjAyOFxcdTIwMjldKiw/W1xceDA5XFx4MGFcXHgwYlxceDBjXFx4MGRcXHgyMFxceGEwXFx1MTY4MFxcdTE4MGVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcdTIwMjhcXHUyMDI5XSopKykvaWc7XG52YXIgcGF0aFZhbHVlcyA9IC8oLT9cXGQqXFwuP1xcZCooPzplW1xcLStdP1xcZCspPylbXFx4MDlcXHgwYVxceDBiXFx4MGNcXHgwZFxceDIwXFx4YTBcXHUxNjgwXFx1MTgwZVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDNcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBhXFx1MjAyZlxcdTIwNWZcXHUzMDAwXFx1MjAyOFxcdTIwMjldKiw/W1xceDA5XFx4MGFcXHgwYlxceDBjXFx4MGRcXHgyMFxceGEwXFx1MTY4MFxcdTE4MGVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwYVxcdTIwMmZcXHUyMDVmXFx1MzAwMFxcdTIwMjhcXHUyMDI5XSovaWc7XG5cbnZhciBjb25jYXQgPSAnY29uY2F0JztcbnZhciBhcHBseSAgPSAnYXBwbHknO1xudmFyIHNwbGl0ICA9ICdzcGxpdCc7XG52YXIgaGFzICAgID0gJ2hhc093blByb3BlcnR5JztcblxudmFyIHRvRmxvYXQgPSBwYXJzZUZsb2F0O1xuXG52YXIgbW1heCA9IE1hdGgubWF4O1xudmFyIG1taW4gPSBNYXRoLm1pbjtcbnZhciBQSSAgID0gTWF0aC5QSTtcbnZhciBhYnMgID0gTWF0aC5hYnM7XG52YXIgbWF0aCA9IE1hdGg7XG52YXIgcG93ICA9IE1hdGgucG93O1xuXG52YXIgdXBwZXJDYXNlID0gU3RyaW5nLnByb3RvdHlwZS50b1VwcGVyQ2FzZTtcblxudmFyIGNhY2hlID0ge1xuICAgIHN0cmluZzJjdXJ2ZToge30sXG4gICAgc3RyaW5nMnBhdGg6IHt9XG59O1xuXG5mdW5jdGlvbiBjbG9uZSAob2JqKSB7XG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdmdW5jdGlvbicgfHwgT2JqZWN0KG9iaikgIT09IG9iaikge1xuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICB2YXIgcmVzID0gbmV3IG9iai5jb25zdHJ1Y3RvcigpO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmopIGlmIChvYmpbaGFzXShrZXkpKSB7XG4gICAgICAgIHJlc1trZXldID0gY2xvbmUob2JqW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmVzO1xufVxuXG52YXIgYTJjID0gZnVuY3Rpb24gKHgxLCB5MSwgcngsIHJ5LCBhbmdsZSwgbGFyZ2VfYXJjX2ZsYWcsIHN3ZWVwX2ZsYWcsIHgyLCB5MiwgcmVjdXJzaXZlKSB7XG4gICAgLy8gZm9yIG1vcmUgaW5mb3JtYXRpb24gb2Ygd2hlcmUgdGhpcyBtYXRoIGNhbWUgZnJvbSB2aXNpdDpcbiAgICAvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9TVkcxMS9pbXBsbm90ZS5odG1sI0FyY0ltcGxlbWVudGF0aW9uTm90ZXNcbiAgICB2YXIgXzEyMCA9IFBJICogMTIwIC8gMTgwLFxuICAgICAgICByYWQgPSBQSSAvIDE4MCAqICgrYW5nbGUgfHwgMCksXG4gICAgICAgIHJlcyA9IFtdLFxuICAgICAgICB4eSxcbiAgICAgICAgcm90YXRlID0gZnVuY3Rpb24gKHgsIHksIHJhZCkge1xuICAgICAgICAgICAgdmFyIFggPSB4ICogbWF0aC5jb3MocmFkKSAtIHkgKiBtYXRoLnNpbihyYWQpLFxuICAgICAgICAgICAgICAgIFkgPSB4ICogbWF0aC5zaW4ocmFkKSArIHkgKiBtYXRoLmNvcyhyYWQpO1xuICAgICAgICAgICAgcmV0dXJuIHt4OiBYLCB5OiBZfTtcbiAgICAgICAgfTtcbiAgICBpZiAoIXJlY3Vyc2l2ZSkge1xuICAgICAgICB4eSA9IHJvdGF0ZSh4MSwgeTEsIC1yYWQpO1xuICAgICAgICB4MSA9IHh5Lng7XG4gICAgICAgIHkxID0geHkueTtcbiAgICAgICAgeHkgPSByb3RhdGUoeDIsIHkyLCAtcmFkKTtcbiAgICAgICAgeDIgPSB4eS54O1xuICAgICAgICB5MiA9IHh5Lnk7XG4gICAgICAgIHZhciBjb3MgPSBtYXRoLmNvcyhQSSAvIDE4MCAqIGFuZ2xlKSxcbiAgICAgICAgICAgIHNpbiA9IG1hdGguc2luKFBJIC8gMTgwICogYW5nbGUpLFxuICAgICAgICAgICAgeCA9ICh4MSAtIHgyKSAvIDIsXG4gICAgICAgICAgICB5ID0gKHkxIC0geTIpIC8gMjtcbiAgICAgICAgdmFyIGggPSAoeCAqIHgpIC8gKHJ4ICogcngpICsgKHkgKiB5KSAvIChyeSAqIHJ5KTtcbiAgICAgICAgaWYgKGggPiAxKSB7XG4gICAgICAgICAgICBoID0gbWF0aC5zcXJ0KGgpO1xuICAgICAgICAgICAgcnggPSBoICogcng7XG4gICAgICAgICAgICByeSA9IGggKiByeTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgcngyID0gcnggKiByeCxcbiAgICAgICAgICAgIHJ5MiA9IHJ5ICogcnksXG4gICAgICAgICAgICBrID0gKGxhcmdlX2FyY19mbGFnID09PSBzd2VlcF9mbGFnID8gLTEgOiAxKSAqXG4gICAgICAgICAgICAgICAgbWF0aC5zcXJ0KGFicygocngyICogcnkyIC0gcngyICogeSAqIHkgLSByeTIgKiB4ICogeCkgLyAocngyICogeSAqIHkgKyByeTIgKiB4ICogeCkpKSxcbiAgICAgICAgICAgIGN4ID0gayAqIHJ4ICogeSAvIHJ5ICsgKHgxICsgeDIpIC8gMixcbiAgICAgICAgICAgIGN5ID0gayAqIC1yeSAqIHggLyByeCArICh5MSArIHkyKSAvIDIsXG4gICAgICAgICAgICBmMSA9IG1hdGguYXNpbigoKHkxIC0gY3kpIC8gcnkpLnRvRml4ZWQoOSkpLFxuICAgICAgICAgICAgZjIgPSBtYXRoLmFzaW4oKCh5MiAtIGN5KSAvIHJ5KS50b0ZpeGVkKDkpKTtcblxuICAgICAgICBmMSA9IHgxIDwgY3ggPyBQSSAtIGYxIDogZjE7XG4gICAgICAgIGYyID0geDIgPCBjeCA/IFBJIC0gZjIgOiBmMjtcbiAgICAgICAgZjEgPCAwICYmIChmMSA9IFBJICogMiArIGYxKTtcbiAgICAgICAgZjIgPCAwICYmIChmMiA9IFBJICogMiArIGYyKTtcbiAgICAgICAgaWYgKHN3ZWVwX2ZsYWcgJiYgZjEgPiBmMikge1xuICAgICAgICAgICAgZjEgPSBmMSAtIFBJICogMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN3ZWVwX2ZsYWcgJiYgZjIgPiBmMSkge1xuICAgICAgICAgICAgZjIgPSBmMiAtIFBJICogMjtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIGYxID0gcmVjdXJzaXZlWzBdO1xuICAgICAgICBmMiA9IHJlY3Vyc2l2ZVsxXTtcbiAgICAgICAgY3ggPSByZWN1cnNpdmVbMl07XG4gICAgICAgIGN5ID0gcmVjdXJzaXZlWzNdO1xuICAgIH1cbiAgICB2YXIgZGYgPSBmMiAtIGYxO1xuICAgIGlmIChhYnMoZGYpID4gXzEyMCkge1xuICAgICAgICB2YXIgZjJvbGQgPSBmMixcbiAgICAgICAgICAgIHgyb2xkID0geDIsXG4gICAgICAgICAgICB5Mm9sZCA9IHkyO1xuICAgICAgICBmMiA9IGYxICsgXzEyMCAqIChzd2VlcF9mbGFnICYmIGYyID4gZjEgPyAxIDogLTEpO1xuICAgICAgICB4MiA9IGN4ICsgcnggKiBtYXRoLmNvcyhmMik7XG4gICAgICAgIHkyID0gY3kgKyByeSAqIG1hdGguc2luKGYyKTtcbiAgICAgICAgcmVzID0gYTJjKHgyLCB5MiwgcngsIHJ5LCBhbmdsZSwgMCwgc3dlZXBfZmxhZywgeDJvbGQsIHkyb2xkLCBbZjIsIGYyb2xkLCBjeCwgY3ldKTtcbiAgICB9XG4gICAgZGYgPSBmMiAtIGYxO1xuICAgIHZhciBjMSA9IG1hdGguY29zKGYxKSxcbiAgICAgICAgczEgPSBtYXRoLnNpbihmMSksXG4gICAgICAgIGMyID0gbWF0aC5jb3MoZjIpLFxuICAgICAgICBzMiA9IG1hdGguc2luKGYyKSxcbiAgICAgICAgdCA9IG1hdGgudGFuKGRmIC8gNCksXG4gICAgICAgIGh4ID0gNCAvIDMgKiByeCAqIHQsXG4gICAgICAgIGh5ID0gNCAvIDMgKiByeSAqIHQsXG4gICAgICAgIG0xID0gW3gxLCB5MV0sXG4gICAgICAgIG0yID0gW3gxICsgaHggKiBzMSwgeTEgLSBoeSAqIGMxXSxcbiAgICAgICAgbTMgPSBbeDIgKyBoeCAqIHMyLCB5MiAtIGh5ICogYzJdLFxuICAgICAgICBtNCA9IFt4MiwgeTJdO1xuICAgIG0yWzBdID0gMiAqIG0xWzBdIC0gbTJbMF07XG4gICAgbTJbMV0gPSAyICogbTFbMV0gLSBtMlsxXTtcbiAgICBpZiAocmVjdXJzaXZlKSB7XG4gICAgICAgIHJldHVybiBbbTIsIG0zLCBtNF1bY29uY2F0XShyZXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJlcyA9IFttMiwgbTMsIG00XVtjb25jYXRdKHJlcykuam9pbigpW3NwbGl0XSgnLCcpO1xuICAgICAgICB2YXIgbmV3cmVzID0gW107XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBpaSA9IHJlcy5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgICAgICBuZXdyZXNbaV0gPSBpICUgMiA/IHJvdGF0ZShyZXNbaSAtIDFdLCByZXNbaV0sIHJhZCkueSA6IHJvdGF0ZShyZXNbaV0sIHJlc1tpICsgMV0sIHJhZCkueDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbmV3cmVzO1xuICAgIH1cbn07XG5cbnZhciBsMmMgPSBmdW5jdGlvbiAoeDEsIHkxLCB4MiwgeTIpIHtcbiAgICByZXR1cm4gW3gxLCB5MSwgeDIsIHkyLCB4MiwgeTJdO1xufTtcblxudmFyIHEyYyA9IGZ1bmN0aW9uICh4MSwgeTEsIGF4LCBheSwgeDIsIHkyKSB7XG4gICAgdmFyIF8xMyA9IDEgLyAzLFxuICAgICAgICBfMjMgPSAyIC8gMztcbiAgICByZXR1cm4gW1xuICAgICAgICBfMTMgKiB4MSArIF8yMyAqIGF4LFxuICAgICAgICBfMTMgKiB5MSArIF8yMyAqIGF5LFxuICAgICAgICBfMTMgKiB4MiArIF8yMyAqIGF4LFxuICAgICAgICBfMTMgKiB5MiArIF8yMyAqIGF5LFxuICAgICAgICB4MixcbiAgICAgICAgeTJcbiAgICBdO1xufTtcblxudmFyIHBhcnNlUGF0aFN0cmluZyA9IGZ1bmN0aW9uIChwYXRoU3RyaW5nKSB7XG4gICAgaWYgKCFwYXRoU3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcGF0aFN0cmluZyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgcmV0dXJuIHBhdGhTdHJpbmc7XG4gICAgfVxuXG4gICAgaWYgKCBjYWNoZS5zdHJpbmcycGF0aFtwYXRoU3RyaW5nXSApIHtcbiAgICAgICAgcmV0dXJuIGNsb25lKCBjYWNoZS5zdHJpbmcycGF0aFtwYXRoU3RyaW5nXSApO1xuICAgIH1cblxuICAgIHZhciBwYXJhbUNvdW50cyA9IHthOiA3LCBjOiA2LCBoOiAxLCBsOiAyLCBtOiAyLCByOiA0LCBxOiA0LCBzOiA0LCB0OiAyLCB2OiAxLCB6OiAwfSxcbiAgICAgICAgZGF0YSA9IFtdO1xuXG4gICAgU3RyaW5nKHBhdGhTdHJpbmcpLnJlcGxhY2UocGF0aENvbW1hbmQsIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICAgIHZhciBwYXJhbXMgPSBbXSxcbiAgICAgICAgICAgIG5hbWUgPSBiLnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGMucmVwbGFjZShwYXRoVmFsdWVzLCBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgYiAmJiBwYXJhbXMucHVzaCgrYik7XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAobmFtZSA9PT0gJ20nICYmIHBhcmFtcy5sZW5ndGggPiAyKSB7XG4gICAgICAgICAgICBkYXRhLnB1c2goW2JdW2NvbmNhdF0ocGFyYW1zLnNwbGljZSgwLCAyKSkpO1xuICAgICAgICAgICAgbmFtZSA9ICdsJztcbiAgICAgICAgICAgIGIgPSBiID09PSAnbScgPyAnbCcgOiAnTCc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgPT09ICdyJykge1xuICAgICAgICAgICAgZGF0YS5wdXNoKFtiXVtjb25jYXRdKHBhcmFtcykpO1xuICAgICAgICB9IGVsc2Ugd2hpbGUgKHBhcmFtcy5sZW5ndGggPj0gcGFyYW1Db3VudHNbbmFtZV0pIHtcbiAgICAgICAgICAgIGRhdGEucHVzaChbYl1bY29uY2F0XShwYXJhbXMuc3BsaWNlKDAsIHBhcmFtQ291bnRzW25hbWVdKSkpO1xuICAgICAgICAgICAgaWYgKCFwYXJhbUNvdW50c1tuYW1lXSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICByZXR1cm4gZGF0YTtcbn07XG5cbnZhciBwYXRoMmFic29sdXRlID0gZnVuY3Rpb24gKHBhdGhTdHJpbmcpIHtcbiAgICB2YXIgcGF0aEFycmF5ID0gcGFyc2VQYXRoU3RyaW5nKHBhdGhTdHJpbmcpO1xuICAgIHZhciByZXMgPSBbXSxcbiAgICAgICAgeCA9IDAsXG4gICAgICAgIHkgPSAwLFxuICAgICAgICBteCA9IDAsXG4gICAgICAgIG15ID0gMCxcbiAgICAgICAgc3RhcnQgPSAwO1xuICAgIGlmIChwYXRoQXJyYXlbMF1bMF0gPT0gJ00nKSB7XG4gICAgICAgIHggPSArcGF0aEFycmF5WzBdWzFdO1xuICAgICAgICB5ID0gK3BhdGhBcnJheVswXVsyXTtcbiAgICAgICAgbXggPSB4O1xuICAgICAgICBteSA9IHk7XG4gICAgICAgIHN0YXJ0Kys7XG4gICAgICAgIHJlc1swXSA9IFsnTScsIHgsIHldO1xuICAgIH1cbiAgICB2YXIgY3J6ID0gcGF0aEFycmF5Lmxlbmd0aCA9PSAzICYmIHBhdGhBcnJheVswXVswXSA9PSAnTScgJiYgcGF0aEFycmF5WzFdWzBdLnRvVXBwZXJDYXNlKCkgPT0gJ1InICYmIHBhdGhBcnJheVsyXVswXS50b1VwcGVyQ2FzZSgpID09ICdaJztcbiAgICBmb3IgKHZhciByLCBwYSwgaSA9IHN0YXJ0LCBpaSA9IHBhdGhBcnJheS5sZW5ndGg7IGkgPCBpaTsgaSsrKSB7XG4gICAgICAgIHJlcy5wdXNoKHIgPSBbXSk7XG4gICAgICAgIHBhID0gcGF0aEFycmF5W2ldO1xuICAgICAgICBpZiAocGFbMF0gIT0gdXBwZXJDYXNlLmNhbGwocGFbMF0pKSB7XG4gICAgICAgICAgICByWzBdID0gdXBwZXJDYXNlLmNhbGwocGFbMF0pO1xuICAgICAgICAgICAgc3dpdGNoIChyWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnQSc6XG4gICAgICAgICAgICAgICAgICAgIHJbMV0gPSBwYVsxXTtcbiAgICAgICAgICAgICAgICAgICAgclsyXSA9IHBhWzJdO1xuICAgICAgICAgICAgICAgICAgICByWzNdID0gcGFbM107XG4gICAgICAgICAgICAgICAgICAgIHJbNF0gPSBwYVs0XTtcbiAgICAgICAgICAgICAgICAgICAgcls1XSA9IHBhWzVdO1xuICAgICAgICAgICAgICAgICAgICByWzZdID0gKyhwYVs2XSArIHgpO1xuICAgICAgICAgICAgICAgICAgICByWzddID0gKyhwYVs3XSArIHkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdWJzpcbiAgICAgICAgICAgICAgICAgICAgclsxXSA9ICtwYVsxXSArIHk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0gnOlxuICAgICAgICAgICAgICAgICAgICByWzFdID0gK3BhWzFdICsgeDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUic6XG4gICAgICAgICAgICAgICAgICAgIHZhciBkb3RzID0gW3gsIHldW2NvbmNhdF0ocGEuc2xpY2UoMSkpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMiwgamogPSBkb3RzLmxlbmd0aDsgaiA8IGpqOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvdHNbal0gPSArZG90c1tqXSArIHg7XG4gICAgICAgICAgICAgICAgICAgICAgICBkb3RzWysral0gPSArZG90c1tqXSArIHk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmVzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICByZXMgPSByZXNbY29uY2F0XShjYXRtdWxsUm9tMmJlemllcihkb3RzLCBjcnopKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAgICAgIG14ID0gK3BhWzFdICsgeDtcbiAgICAgICAgICAgICAgICAgICAgbXkgPSArcGFbMl0gKyB5O1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGZvciAoaiA9IDEsIGpqID0gcGEubGVuZ3RoOyBqIDwgamo7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcltqXSA9ICtwYVtqXSArICgoaiAlIDIpID8geCA6IHkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAocGFbMF0gPT0gJ1InKSB7XG4gICAgICAgICAgICBkb3RzID0gW3gsIHldW2NvbmNhdF0ocGEuc2xpY2UoMSkpO1xuICAgICAgICAgICAgcmVzLnBvcCgpO1xuICAgICAgICAgICAgcmVzID0gcmVzW2NvbmNhdF0oY2F0bXVsbFJvbTJiZXppZXIoZG90cywgY3J6KSk7XG4gICAgICAgICAgICByID0gWydSJ11bY29uY2F0XShwYS5zbGljZSgtMikpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZm9yICh2YXIgayA9IDAsIGtrID0gcGEubGVuZ3RoOyBrIDwga2s7IGsrKykge1xuICAgICAgICAgICAgICAgIHJba10gPSBwYVtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzd2l0Y2ggKHJbMF0pIHtcbiAgICAgICAgICAgIGNhc2UgJ1onOlxuICAgICAgICAgICAgICAgIHggPSBteDtcbiAgICAgICAgICAgICAgICB5ID0gbXk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdIJzpcbiAgICAgICAgICAgICAgICB4ID0gclsxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgICAgICAgIHkgPSByWzFdO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAgbXggPSByW3IubGVuZ3RoIC0gMl07XG4gICAgICAgICAgICAgICAgbXkgPSByW3IubGVuZ3RoIC0gMV07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHggPSByW3IubGVuZ3RoIC0gMl07XG4gICAgICAgICAgICAgICAgeSA9IHJbci5sZW5ndGggLSAxXTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICByZXR1cm4gcmVzO1xufTtcblxudmFyIHBhdGgyY3VydmUgPSBmdW5jdGlvbiAocGF0aFN0cmluZywgcGF0aFN0cmluZzIpIHtcbiAgICBpZiAoIHR5cGVvZiBwYXRoU3RyaW5nID09PSAnc3RyaW5nJyAmJiAhcGF0aFN0cmluZzIgJiYgY2FjaGUuc3RyaW5nMmN1cnZlW3BhdGhTdHJpbmddICkge1xuICAgICAgICByZXR1cm4gY2xvbmUoIGNhY2hlLnN0cmluZzJjdXJ2ZVtwYXRoU3RyaW5nXSApO1xuICAgIH1cblxuICAgIHZhciBwID0gcGF0aDJhYnNvbHV0ZShwYXRoU3RyaW5nKSxcbiAgICAgICAgcDIgPSBwYXRoU3RyaW5nMiAmJiBwYXRoMmFic29sdXRlKHBhdGhTdHJpbmcyKSxcbiAgICAgICAgYXR0cnMgPSB7eDogMCwgeTogMCwgYng6IDAsIGJ5OiAwLCBYOiAwLCBZOiAwLCBxeDogbnVsbCwgcXk6IG51bGx9LFxuICAgICAgICBhdHRyczIgPSB7eDogMCwgeTogMCwgYng6IDAsIGJ5OiAwLCBYOiAwLCBZOiAwLCBxeDogbnVsbCwgcXk6IG51bGx9LFxuICAgICAgICBwcm9jZXNzUGF0aCA9IGZ1bmN0aW9uIChwYXRoLCBkLCBwY29tKSB7XG4gICAgICAgICAgICB2YXIgbngsIG55LCB0cSA9IHtUOjEsIFE6MX07XG4gICAgICAgICAgICBpZiAoIXBhdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gWydDJywgZC54LCBkLnksIGQueCwgZC55LCBkLngsIGQueV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAhKHBhdGhbMF0gaW4gdHEpICYmIChkLnF4ID0gZC5xeSA9IG51bGwpO1xuICAgICAgICAgICAgc3dpdGNoIChwYXRoWzBdKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnTSc6XG4gICAgICAgICAgICAgICAgICAgIGQuWCA9IHBhdGhbMV07XG4gICAgICAgICAgICAgICAgICAgIGQuWSA9IHBhdGhbMl07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0EnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gWydDJ11bY29uY2F0XShhMmNbYXBwbHldKDAsIFtkLngsIGQueV1bY29uY2F0XShwYXRoLnNsaWNlKDEpKSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdTJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBjb20gPT0gJ0MnIHx8IHBjb20gPT0gJ1MnKSB7IC8vIEluICdTJyBjYXNlIHdlIGhhdmUgdG8gdGFrZSBpbnRvIGFjY291bnQsIGlmIHRoZSBwcmV2aW91cyBjb21tYW5kIGlzIEMvUy5cbiAgICAgICAgICAgICAgICAgICAgICAgIG54ID0gZC54ICogMiAtIGQuYng7ICAgICAgICAgIC8vIEFuZCByZWZsZWN0IHRoZSBwcmV2aW91c1xuICAgICAgICAgICAgICAgICAgICAgICAgbnkgPSBkLnkgKiAyIC0gZC5ieTsgICAgICAgICAgLy8gY29tbWFuZCdzIGNvbnRyb2wgcG9pbnQgcmVsYXRpdmUgdG8gdGhlIGN1cnJlbnQgcG9pbnQuXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9yIHNvbWUgZWxzZSBvciBub3RoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBueCA9IGQueDtcbiAgICAgICAgICAgICAgICAgICAgICAgIG55ID0gZC55O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBbJ0MnLCBueCwgbnldW2NvbmNhdF0ocGF0aC5zbGljZSgxKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1QnOlxuICAgICAgICAgICAgICAgICAgICBpZiAocGNvbSA9PSAnUScgfHwgcGNvbSA9PSAnVCcpIHsgLy8gSW4gJ1QnIGNhc2Ugd2UgaGF2ZSB0byB0YWtlIGludG8gYWNjb3VudCwgaWYgdGhlIHByZXZpb3VzIGNvbW1hbmQgaXMgUS9ULlxuICAgICAgICAgICAgICAgICAgICAgICAgZC5xeCA9IGQueCAqIDIgLSBkLnF4OyAgICAgICAgLy8gQW5kIG1ha2UgYSByZWZsZWN0aW9uIHNpbWlsYXJcbiAgICAgICAgICAgICAgICAgICAgICAgIGQucXkgPSBkLnkgKiAyIC0gZC5xeTsgICAgICAgIC8vIHRvIGNhc2UgJ1MnLlxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgeyAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBvciBzb21ldGhpbmcgZWxzZSBvciBub3RoaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICBkLnF4ID0gZC54O1xuICAgICAgICAgICAgICAgICAgICAgICAgZC5xeSA9IGQueTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gWydDJ11bY29uY2F0XShxMmMoZC54LCBkLnksIGQucXgsIGQucXksIHBhdGhbMV0sIHBhdGhbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICAgICAgICAgIGQucXggPSBwYXRoWzFdO1xuICAgICAgICAgICAgICAgICAgICBkLnF5ID0gcGF0aFsyXTtcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IFsnQyddW2NvbmNhdF0ocTJjKGQueCwgZC55LCBwYXRoWzFdLCBwYXRoWzJdLCBwYXRoWzNdLCBwYXRoWzRdKSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gWydDJ11bY29uY2F0XShsMmMoZC54LCBkLnksIHBhdGhbMV0sIHBhdGhbMl0pKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAgICAgIHBhdGggPSBbJ0MnXVtjb25jYXRdKGwyYyhkLngsIGQueSwgcGF0aFsxXSwgZC55KSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgICAgICAgICAgICBwYXRoID0gWydDJ11bY29uY2F0XShsMmMoZC54LCBkLnksIGQueCwgcGF0aFsxXSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdaJzpcbiAgICAgICAgICAgICAgICAgICAgcGF0aCA9IFsnQyddW2NvbmNhdF0obDJjKGQueCwgZC55LCBkLlgsIGQuWSkpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBwYXRoO1xuICAgICAgICB9LFxuICAgICAgICBmaXhBcmMgPSBmdW5jdGlvbiAocHAsIGkpIHtcbiAgICAgICAgICAgIGlmIChwcFtpXS5sZW5ndGggPiA3KSB7XG4gICAgICAgICAgICAgICAgcHBbaV0uc2hpZnQoKTtcbiAgICAgICAgICAgICAgICB2YXIgcGkgPSBwcFtpXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAocGkubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHBjb21zMVtpXT0nQSc7IC8vIGlmIGNyZWF0ZWQgbXVsdGlwbGUgQzpzLCB0aGVpciBvcmlnaW5hbCBzZWcgaXMgc2F2ZWRcbiAgICAgICAgICAgICAgICAgICAgcDIgJiYgKHBjb21zMltpXT0nQScpOyAvLyB0aGUgc2FtZSBhcyBhYm92ZVxuICAgICAgICAgICAgICAgICAgICBwcC5zcGxpY2UoaSsrLCAwLCBbJ0MnXVtjb25jYXRdKHBpLnNwbGljZSgwLCA2KSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcC5zcGxpY2UoaSwgMSk7XG4gICAgICAgICAgICAgICAgaWkgPSBtbWF4KHAubGVuZ3RoLCBwMiAmJiBwMi5sZW5ndGggfHwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIGZpeE0gPSBmdW5jdGlvbiAocGF0aDEsIHBhdGgyLCBhMSwgYTIsIGkpIHtcbiAgICAgICAgICAgIGlmIChwYXRoMSAmJiBwYXRoMiAmJiBwYXRoMVtpXVswXSA9PSAnTScgJiYgcGF0aDJbaV1bMF0gIT0gJ00nKSB7XG4gICAgICAgICAgICAgICAgcGF0aDIuc3BsaWNlKGksIDAsIFsnTScsIGEyLngsIGEyLnldKTtcbiAgICAgICAgICAgICAgICBhMS5ieCA9IDA7XG4gICAgICAgICAgICAgICAgYTEuYnkgPSAwO1xuICAgICAgICAgICAgICAgIGExLnggPSBwYXRoMVtpXVsxXTtcbiAgICAgICAgICAgICAgICBhMS55ID0gcGF0aDFbaV1bMl07XG4gICAgICAgICAgICAgICAgaWkgPSBtbWF4KHAubGVuZ3RoLCBwMiAmJiBwMi5sZW5ndGggfHwgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIHBjb21zMSA9IFtdLCAvLyBwYXRoIGNvbW1hbmRzIG9mIG9yaWdpbmFsIHBhdGggcFxuICAgICAgICBwY29tczIgPSBbXSwgLy8gcGF0aCBjb21tYW5kcyBvZiBvcmlnaW5hbCBwYXRoIHAyXG4gICAgICAgIHBmaXJzdCA9ICcnLCAvLyB0ZW1wb3JhcnkgaG9sZGVyIGZvciBvcmlnaW5hbCBwYXRoIGNvbW1hbmRcbiAgICAgICAgcGNvbSA9ICcnOyAvLyBob2xkZXIgZm9yIHByZXZpb3VzIHBhdGggY29tbWFuZCBvZiBvcmlnaW5hbCBwYXRoXG4gICAgZm9yICh2YXIgaSA9IDAsIGlpID0gbW1heChwLmxlbmd0aCwgcDIgJiYgcDIubGVuZ3RoIHx8IDApOyBpIDwgaWk7IGkrKykge1xuICAgICAgICBwW2ldICYmIChwZmlyc3QgPSBwW2ldWzBdKTsgLy8gc2F2ZSBjdXJyZW50IHBhdGggY29tbWFuZFxuXG4gICAgICAgIGlmIChwZmlyc3QgIT0gJ0MnKSAvLyBDIGlzIG5vdCBzYXZlZCB5ZXQsIGJlY2F1c2UgaXQgbWF5IGJlIHJlc3VsdCBvZiBjb252ZXJzaW9uXG4gICAgICAgIHtcbiAgICAgICAgICAgIHBjb21zMVtpXSA9IHBmaXJzdDsgLy8gU2F2ZSBjdXJyZW50IHBhdGggY29tbWFuZFxuICAgICAgICAgICAgaSAmJiAoIHBjb20gPSBwY29tczFbaS0xXSk7IC8vIEdldCBwcmV2aW91cyBwYXRoIGNvbW1hbmQgcGNvbVxuICAgICAgICB9XG4gICAgICAgIHBbaV0gPSBwcm9jZXNzUGF0aChwW2ldLCBhdHRycywgcGNvbSk7IC8vIFByZXZpb3VzIHBhdGggY29tbWFuZCBpcyBpbnB1dHRlZCB0byBwcm9jZXNzUGF0aFxuXG4gICAgICAgIGlmIChwY29tczFbaV0gIT0gJ0EnICYmIHBmaXJzdCA9PSAnQycpIHBjb21zMVtpXSA9ICdDJzsgLy8gQSBpcyB0aGUgb25seSBjb21tYW5kXG4gICAgICAgIC8vIHdoaWNoIG1heSBwcm9kdWNlIG11bHRpcGxlIEM6c1xuICAgICAgICAvLyBzbyB3ZSBoYXZlIHRvIG1ha2Ugc3VyZSB0aGF0IEMgaXMgYWxzbyBDIGluIG9yaWdpbmFsIHBhdGhcblxuICAgICAgICBmaXhBcmMocCwgaSk7IC8vIGZpeEFyYyBhZGRzIGFsc28gdGhlIHJpZ2h0IGFtb3VudCBvZiBBOnMgdG8gcGNvbXMxXG5cbiAgICAgICAgaWYgKHAyKSB7IC8vIHRoZSBzYW1lIHByb2NlZHVyZXMgaXMgZG9uZSB0byBwMlxuICAgICAgICAgICAgcDJbaV0gJiYgKHBmaXJzdCA9IHAyW2ldWzBdKTtcbiAgICAgICAgICAgIGlmIChwZmlyc3QgIT0gJ0MnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHBjb21zMltpXSA9IHBmaXJzdDtcbiAgICAgICAgICAgICAgICBpICYmIChwY29tID0gcGNvbXMyW2ktMV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcDJbaV0gPSBwcm9jZXNzUGF0aChwMltpXSwgYXR0cnMyLCBwY29tKTtcblxuICAgICAgICAgICAgaWYgKHBjb21zMltpXSE9J0EnICYmIHBmaXJzdD09J0MnKSBwY29tczJbaV09J0MnO1xuXG4gICAgICAgICAgICBmaXhBcmMocDIsIGkpO1xuICAgICAgICB9XG4gICAgICAgIGZpeE0ocCwgcDIsIGF0dHJzLCBhdHRyczIsIGkpO1xuICAgICAgICBmaXhNKHAyLCBwLCBhdHRyczIsIGF0dHJzLCBpKTtcbiAgICAgICAgdmFyIHNlZyA9IHBbaV0sXG4gICAgICAgICAgICBzZWcyID0gcDIgJiYgcDJbaV0sXG4gICAgICAgICAgICBzZWdsZW4gPSBzZWcubGVuZ3RoLFxuICAgICAgICAgICAgc2VnMmxlbiA9IHAyICYmIHNlZzIubGVuZ3RoO1xuICAgICAgICBhdHRycy54ID0gc2VnW3NlZ2xlbiAtIDJdO1xuICAgICAgICBhdHRycy55ID0gc2VnW3NlZ2xlbiAtIDFdO1xuICAgICAgICBhdHRycy5ieCA9IHRvRmxvYXQoc2VnW3NlZ2xlbiAtIDRdKSB8fCBhdHRycy54O1xuICAgICAgICBhdHRycy5ieSA9IHRvRmxvYXQoc2VnW3NlZ2xlbiAtIDNdKSB8fCBhdHRycy55O1xuICAgICAgICBhdHRyczIuYnggPSBwMiAmJiAodG9GbG9hdChzZWcyW3NlZzJsZW4gLSA0XSkgfHwgYXR0cnMyLngpO1xuICAgICAgICBhdHRyczIuYnkgPSBwMiAmJiAodG9GbG9hdChzZWcyW3NlZzJsZW4gLSAzXSkgfHwgYXR0cnMyLnkpO1xuICAgICAgICBhdHRyczIueCA9IHAyICYmIHNlZzJbc2VnMmxlbiAtIDJdO1xuICAgICAgICBhdHRyczIueSA9IHAyICYmIHNlZzJbc2VnMmxlbiAtIDFdO1xuICAgIH1cblxuICAgIGlmICggdHlwZW9mIHBhdGhTdHJpbmcgPT09ICdzdHJpbmcnICYmICFwYXRoU3RyaW5nMiApIHtcbiAgICAgICAgY2FjaGUuc3RyaW5nMmN1cnZlW3BhdGhTdHJpbmddID0gY2xvbmUocCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHAyID8gW3AsIHAyXSA6IHA7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgICBwYXRoMmFic29sdXRlOiBwYXRoMmFic29sdXRlLFxuICAgIHBhdGgyY3VydmU6IHBhdGgyY3VydmVcbn07XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/miniGame/writeNumber/WriteNumber.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '92a78B5itNE1ZCRl44Gx4/b', 'WriteNumber');
// scripts/miniGame/writeNumber/WriteNumber.ts

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
var WriteNumber = /** @class */ (function (_super) {
    __extends(WriteNumber, _super);
    function WriteNumber() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.label = null;
        _this.listButton = [];
        _this.backSplash = null;
        _this.nodeAddChild = null;
        _this.nodeWrite = null;
        return _this;
    }
    WriteNumber.prototype.onLoad = function () {
        this.nodeAddChild.removeAllChildren();
    };
    WriteNumber.prototype.start = function () {
        this.setAction();
        this.node.setContentSize(cc.winSize.width, cc.winSize.height);
    };
    WriteNumber.prototype.setAction = function () {
        for (var i = 0; i < this.listButton.length; i++) {
            var clickEventHandler = new cc.Component.EventHandler();
            clickEventHandler.target = this.node; // This node is the node to which your event handler code component belongs
            clickEventHandler.component = "WriteNumber"; // This is the code file name
            clickEventHandler.handler = "onClickChoose";
            clickEventHandler.customEventData = "" + (i + 1);
            this.listButton[i].clickEvents = [];
            this.listButton[i].clickEvents.push(clickEventHandler);
        }
    };
    WriteNumber.prototype.onClickChoose = function (event, value) {
        var nodeWrite = cc.instantiate(this.nodeWrite);
        nodeWrite.getChildByName("number").getComponent(cc.Label).string = value;
        nodeWrite.setContentSize(cc.winSize.width, cc.winSize.height);
        this.nodeAddChild.addChild(nodeWrite);
    };
    WriteNumber.prototype.onBackWrite = function () {
        this.nodeAddChild.removeAllChildren();
    };
    WriteNumber.prototype.onBack = function () {
        this.node.destroy();
    };
    __decorate([
        property(cc.Label)
    ], WriteNumber.prototype, "label", void 0);
    __decorate([
        property([cc.Button])
    ], WriteNumber.prototype, "listButton", void 0);
    __decorate([
        property(cc.Node)
    ], WriteNumber.prototype, "backSplash", void 0);
    __decorate([
        property(cc.Node)
    ], WriteNumber.prototype, "nodeAddChild", void 0);
    __decorate([
        property(cc.Prefab)
    ], WriteNumber.prototype, "nodeWrite", void 0);
    WriteNumber = __decorate([
        ccclass
    ], WriteNumber);
    return WriteNumber;
}(cc.Component));
exports.default = WriteNumber;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcbWluaUdhbWVcXHdyaXRlTnVtYmVyXFxXcml0ZU51bWJlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUF5QywrQkFBWTtJQUFyRDtRQUFBLHFFQW1EQztRQWhERyxXQUFLLEdBQWEsSUFBSSxDQUFDO1FBR3ZCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUc3QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQWMsSUFBSSxDQUFDOztJQW9DaEMsQ0FBQztJQWxDRyw0QkFBTSxHQUFOO1FBQ0ksSUFBSSxDQUFDLFlBQVksQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFDRCwyQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUNELCtCQUFTLEdBQVQ7UUFDSSxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDdEQsSUFBSSxpQkFBaUIsR0FBRyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDeEQsaUJBQWlCLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQywyRUFBMkU7WUFDakgsaUJBQWlCLENBQUMsU0FBUyxHQUFHLGFBQWEsQ0FBQyxDQUFDLDZCQUE2QjtZQUMxRSxpQkFBaUIsQ0FBQyxPQUFPLEdBQUcsZUFBZSxDQUFDO1lBQ25DLGlCQUFpQixDQUFDLGVBQWUsR0FBRyxFQUFFLEdBQUksQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekQsSUFBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDO1lBQ3BDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1NBQ3ZEO0lBRUMsQ0FBQztJQUNELG1DQUFhLEdBQWIsVUFBYyxLQUFVLEVBQUUsS0FBYTtRQUNuQyxJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUMvQyxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6RSxTQUFTLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGlDQUFXLEdBQVg7UUFDSSxJQUFJLENBQUMsWUFBWSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELDRCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUE5Q0Q7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBRSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUMsQ0FBQzttREFDTTtJQUc3QjtRQURDLFFBQVEsQ0FBRSxFQUFFLENBQUMsSUFBSSxDQUFDO21EQUNRO0lBRzNCO1FBREMsUUFBUSxDQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ1U7SUFHN0I7UUFEQyxRQUFRLENBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDTztJQWZYLFdBQVc7UUFEL0IsT0FBTztPQUNhLFdBQVcsQ0FtRC9CO0lBQUQsa0JBQUM7Q0FuREQsQUFtREMsQ0FuRHdDLEVBQUUsQ0FBQyxTQUFTLEdBbURwRDtrQkFuRG9CLFdBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFdyaXRlTnVtYmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXHJcbiAgICBsYWJlbDogY2MuTGFiZWwgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoW2NjLkJ1dHRvbl0pXHJcbiAgICBsaXN0QnV0dG9uOiBjYy5CdXR0b25bXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIGJhY2tTcGxhc2g6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIG5vZGVBZGRDaGlsZDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5QcmVmYWIpXHJcbiAgICBub2RlV3JpdGU6IGNjLlByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgb25Mb2FkKCl7XHJcbiAgICAgICAgdGhpcy5ub2RlQWRkQ2hpbGQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcclxuICAgIH1cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLnNldEFjdGlvbigpO1xyXG4gICAgICAgIHRoaXMubm9kZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICB9XHJcbiAgICBzZXRBY3Rpb24oKXtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGlzdEJ1dHRvbi5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgY2xpY2tFdmVudEhhbmRsZXIgPSBuZXcgY2MuQ29tcG9uZW50LkV2ZW50SGFuZGxlcigpO1xyXG5cdFx0XHRjbGlja0V2ZW50SGFuZGxlci50YXJnZXQgPSB0aGlzLm5vZGU7IC8vIFRoaXMgbm9kZSBpcyB0aGUgbm9kZSB0byB3aGljaCB5b3VyIGV2ZW50IGhhbmRsZXIgY29kZSBjb21wb25lbnQgYmVsb25nc1xyXG5cdFx0XHRjbGlja0V2ZW50SGFuZGxlci5jb21wb25lbnQgPSBcIldyaXRlTnVtYmVyXCI7IC8vIFRoaXMgaXMgdGhlIGNvZGUgZmlsZSBuYW1lXHJcblx0XHRcdGNsaWNrRXZlbnRIYW5kbGVyLmhhbmRsZXIgPSBcIm9uQ2xpY2tDaG9vc2VcIjtcclxuICAgICAgICAgICAgY2xpY2tFdmVudEhhbmRsZXIuY3VzdG9tRXZlbnREYXRhID0gXCJcIiArICAoaSsxKTtcclxuXHRcdFx0dGhpcy5saXN0QnV0dG9uW2ldLmNsaWNrRXZlbnRzID0gW107XHJcblx0XHRcdHRoaXMubGlzdEJ1dHRvbltpXS5jbGlja0V2ZW50cy5wdXNoKGNsaWNrRXZlbnRIYW5kbGVyKTtcclxuXHRcdH1cclxuXHJcbiAgICB9XHJcbiAgICBvbkNsaWNrQ2hvb3NlKGV2ZW50OiBhbnksIHZhbHVlOiBzdHJpbmcgKXtcclxuICAgICAgICBsZXQgbm9kZVdyaXRlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ub2RlV3JpdGUpO1xyXG4gICAgICAgIG5vZGVXcml0ZS5nZXRDaGlsZEJ5TmFtZShcIm51bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHZhbHVlO1xyXG4gICAgICAgIG5vZGVXcml0ZS5zZXRDb250ZW50U2l6ZShjYy53aW5TaXplLndpZHRoLCBjYy53aW5TaXplLmhlaWdodCk7XHJcbiAgICAgICAgdGhpcy5ub2RlQWRkQ2hpbGQuYWRkQ2hpbGQobm9kZVdyaXRlKTtcclxuICAgIH1cclxuXHJcbiAgICBvbkJhY2tXcml0ZSgpIHtcclxuICAgICAgICB0aGlzLm5vZGVBZGRDaGlsZC5yZW1vdmVBbGxDaGlsZHJlbigpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uQmFjaygpIHtcclxuICAgICAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gICAgfVxyXG5cclxufVxyXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/tutorial/TutorialManager.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '82751v2p3tNfZs9Oe0JoPOt', 'TutorialManager');
// scripts/tutorial/TutorialManager.ts

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
var Global_1 = require("../Global");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var TutorialManager = /** @class */ (function (_super) {
    __extends(TutorialManager, _super);
    function TutorialManager() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loadingScreen = null;
        _this.abacus = null;
        _this.mainTutorial = null;
        _this.arrowNode = null;
        _this.backSplash = null;
        _this.tutorialParts = null;
        _this.currentPartIndex = null;
        _this.completeValue = null;
        return _this;
    }
    TutorialManager.prototype.onLoad = function () {
        var _this = this;
        this.loadingScreen.active = true;
        cc.resources.load("prefabs/tutorial/" + Global_1.Global.currentTutorial, cc.Prefab, function (error, asset) {
            if (error) {
                console.error(error);
            }
            else {
                var node = cc.instantiate(asset);
                while (node.children.length > 0) {
                    var value = node.children[0];
                    value.removeFromParent();
                    _this.mainTutorial.addChild(value);
                    console.log("Added!");
                }
                node.destroy();
                _this.abacus.getComponent("Abacus").initialize().then(function () {
                    _this.node.on(cc.Node.EventType.TOUCH_START, _this.onTouchStart, _this);
                    if (Global_1.Global.firstTime)
                        _this.node.parent.getChildByName("Back").active = false;
                    _this.startTutorial();
                    _this.loadingScreen.active = false;
                }).catch(function (error) { return console.error(error); });
            }
        });
    };
    TutorialManager.prototype.update = function (dt) {
        if (this.completeValue != null) {
            if (this.abacus.getComponent("Abacus").score == this.completeValue) {
                this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
                this.completeValue = null;
                this.onTouchStart(null);
            }
        }
    };
    TutorialManager.prototype.loadMenu = function () {
        if (Global_1.Global.firstTime)
            Global_1.Global.firstTime = false;
        cc.director.loadScene("scenes/menu");
    };
    TutorialManager.prototype.startTutorial = function () {
        this.tutorialParts = this.mainTutorial.children;
        this.changeTutorialPart(0);
    };
    TutorialManager.prototype.changeTutorialPart = function (value) {
        if (value < 0) {
            console.error("Invalid index of tutorial part!");
            return;
        }
        else if (value == this.tutorialParts.length) {
            this.backSplash.active = true;
            this.arrowNode.active = false;
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            return;
        }
        if (this.currentPartIndex != null) {
            this.tutorialParts[this.currentPartIndex].active = false;
        }
        this.currentPartIndex = value;
        var node = this.tutorialParts[this.currentPartIndex];
        var script = node.getComponent("TutorialNode");
        node.active = true;
        // reset abacus to normal state (everything on 0 and not interactive)
        this.abacus.getComponent("Abacus").reset();
        this.abacus.getComponent("Abacus").setInteractive(false);
        if (script.predefinedRows.length > 0) {
            for (var i = 0; i < script.predefinedRows.length; ++i) {
                this.abacus.getComponent("Abacus").setRowValue(i, script.predefinedRows[i]);
            }
        }
        if (script.interactiveRows.length > 0 && script.completeValue >= 0) {
            this.node.off(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
            for (var i = 0; i < script.interactiveRows.length; ++i) {
                this.abacus.getComponent("Abacus").setRowInteractive(i, script.interactiveRows[i]);
            }
            this.completeValue = script.completeValue;
            console.log("Complete value: " + this.completeValue);
            this.arrowNode.active = false;
        }
        else {
            this.arrowNode.active = true;
        }
        console.log("Node name: " + node.name);
    };
    TutorialManager.prototype.onTouchStart = function (event) {
        this.changeTutorialPart(this.currentPartIndex + 1);
    };
    __decorate([
        property(cc.Node)
    ], TutorialManager.prototype, "loadingScreen", void 0);
    __decorate([
        property(cc.Node)
    ], TutorialManager.prototype, "abacus", void 0);
    __decorate([
        property(cc.Node)
    ], TutorialManager.prototype, "mainTutorial", void 0);
    __decorate([
        property(cc.Node)
    ], TutorialManager.prototype, "arrowNode", void 0);
    __decorate([
        property(cc.Node)
    ], TutorialManager.prototype, "backSplash", void 0);
    TutorialManager = __decorate([
        ccclass
    ], TutorialManager);
    return TutorialManager;
}(cc.Component));
exports.default = TutorialManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdHV0b3JpYWxcXFR1dG9yaWFsTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvQ0FBbUM7QUFFN0IsSUFBQSxLQUFzQixFQUFFLENBQUMsVUFBVSxFQUFsQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWlCLENBQUM7QUFHMUM7SUFBNkMsbUNBQVk7SUFBekQ7UUFBQSxxRUFtSUM7UUFqSUcsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFHOUIsWUFBTSxHQUFZLElBQUksQ0FBQztRQUd2QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUc3QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRzFCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQWMsSUFBSSxDQUFDO1FBQ2hDLHNCQUFnQixHQUFXLElBQUksQ0FBQztRQUVoQyxtQkFBYSxHQUFXLElBQUksQ0FBQzs7SUFnSGpDLENBQUM7SUE5R0csZ0NBQU0sR0FBTjtRQUFBLGlCQWdDQztRQS9CRyxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFakMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsZUFBTSxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsTUFBTSxFQUFFLFVBQUMsS0FBWSxFQUFFLEtBQWdCO1lBQ3RHLElBQUcsS0FBSyxFQUFFO2dCQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDeEI7aUJBQU07Z0JBQ0gsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFFakMsT0FBTSxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQzVCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7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bnRlbnQiOlsiaW1wb3J0IHsgR2xvYmFsIH0gZnJvbSBcIi4uL0dsb2JhbFwiO1xyXG5cclxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzc1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUdXRvcmlhbE1hbmFnZXIgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgbG9hZGluZ1NjcmVlbjogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgYWJhY3VzOiBjYy5Ob2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkgKGNjLk5vZGUpXHJcbiAgICBtYWluVHV0b3JpYWw6IGNjLk5vZGUgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSAoY2MuTm9kZSlcclxuICAgIGFycm93Tm9kZTogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5IChjYy5Ob2RlKVxyXG4gICAgYmFja1NwbGFzaDogY2MuTm9kZSA9IG51bGw7XHJcblxyXG4gICAgdHV0b3JpYWxQYXJ0czogY2MuTm9kZVtdID0gbnVsbDtcclxuICAgIGN1cnJlbnRQYXJ0SW5kZXg6IG51bWJlciA9IG51bGw7XHJcblxyXG4gICAgY29tcGxldGVWYWx1ZTogbnVtYmVyID0gbnVsbDtcclxuXHJcbiAgICBvbkxvYWQoKSB7XHJcbiAgICAgICAgdGhpcy5sb2FkaW5nU2NyZWVuLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIGNjLnJlc291cmNlcy5sb2FkKFwicHJlZmFicy90dXRvcmlhbC9cIiArIEdsb2JhbC5jdXJyZW50VHV0b3JpYWwsIGNjLlByZWZhYiwgKGVycm9yOiBFcnJvciwgYXNzZXQ6IGNjLlByZWZhYikgPT4ge1xyXG4gICAgICAgICAgICBpZihlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKGFzc2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICB3aGlsZShub2RlLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBub2RlLmNoaWxkcmVuWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZS5yZW1vdmVGcm9tUGFyZW50KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tYWluVHV0b3JpYWwuYWRkQ2hpbGQodmFsdWUpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkFkZGVkIVwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBub2RlLmRlc3Ryb3koKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFiYWN1cy5nZXRDb21wb25lbnQoXCJBYmFjdXNcIikuaW5pdGlhbGl6ZSgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZihHbG9iYWwuZmlyc3RUaW1lKSB0aGlzLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiQmFja1wiKS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXJ0VHV0b3JpYWwoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmdTY3JlZW4uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaChlcnJvciA9PiBjb25zb2xlLmVycm9yKGVycm9yKSk7XHJcbiAgICAgICAgICAgIH0gICAgICAgICAgXHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSAoZHQpIHtcclxuICAgICAgICBpZih0aGlzLmNvbXBsZXRlVmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZih0aGlzLmFiYWN1cy5nZXRDb21wb25lbnQoXCJBYmFjdXNcIikuc2NvcmUgPT0gdGhpcy5jb21wbGV0ZVZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMub25Ub3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVWYWx1ZSA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5vblRvdWNoU3RhcnQobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgbG9hZE1lbnUoKSB7XHJcbiAgICAgICAgaWYoR2xvYmFsLmZpcnN0VGltZSkgR2xvYmFsLmZpcnN0VGltZSA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJzY2VuZXMvbWVudVwiKTtcclxuICAgIH1cclxuXHJcbiAgICBzdGFydFR1dG9yaWFsKCkge1xyXG4gICAgICAgIHRoaXMudHV0b3JpYWxQYXJ0cyA9IHRoaXMubWFpblR1dG9yaWFsLmNoaWxkcmVuO1xyXG5cclxuICAgICAgICB0aGlzLmNoYW5nZVR1dG9yaWFsUGFydCgwKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VUdXRvcmlhbFBhcnQodmFsdWU6IG51bWJlcikge1xyXG4gICAgICAgIGlmKHZhbHVlIDwgMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBpbmRleCBvZiB0dXRvcmlhbCBwYXJ0IVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH0gZWxzZSBpZih2YWx1ZSA9PSB0aGlzLnR1dG9yaWFsUGFydHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYmFja1NwbGFzaC5hY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmFycm93Tm9kZS5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50UGFydEluZGV4ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy50dXRvcmlhbFBhcnRzW3RoaXMuY3VycmVudFBhcnRJbmRleF0uYWN0aXZlID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmN1cnJlbnRQYXJ0SW5kZXggPSB2YWx1ZTtcclxuXHJcbiAgICAgICAgbGV0IG5vZGUgPSB0aGlzLnR1dG9yaWFsUGFydHNbdGhpcy5jdXJyZW50UGFydEluZGV4XTtcclxuICAgICAgICBsZXQgc2NyaXB0ID0gbm9kZS5nZXRDb21wb25lbnQoXCJUdXRvcmlhbE5vZGVcIik7XHJcbiAgICAgICAgbm9kZS5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyByZXNldCBhYmFjdXMgdG8gbm9ybWFsIHN0YXRlIChldmVyeXRoaW5nIG9uIDAgYW5kIG5vdCBpbnRlcmFjdGl2ZSlcclxuICAgICAgICB0aGlzLmFiYWN1cy5nZXRDb21wb25lbnQoXCJBYmFjdXNcIikucmVzZXQoKTtcclxuICAgICAgICB0aGlzLmFiYWN1cy5nZXRDb21wb25lbnQoXCJBYmFjdXNcIikuc2V0SW50ZXJhY3RpdmUoZmFsc2UpO1xyXG5cclxuICAgICAgICBpZihzY3JpcHQucHJlZGVmaW5lZFJvd3MubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2NyaXB0LnByZWRlZmluZWRSb3dzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmFiYWN1cy5nZXRDb21wb25lbnQoXCJBYmFjdXNcIikuc2V0Um93VmFsdWUoaSwgc2NyaXB0LnByZWRlZmluZWRSb3dzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoc2NyaXB0LmludGVyYWN0aXZlUm93cy5sZW5ndGggPiAwICYmIHNjcmlwdC5jb21wbGV0ZVZhbHVlID49IDApIHtcclxuICAgICAgICAgICAgdGhpcy5ub2RlLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vblRvdWNoU3RhcnQsIHRoaXMpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHNjcmlwdC5pbnRlcmFjdGl2ZVJvd3MubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWJhY3VzLmdldENvbXBvbmVudChcIkFiYWN1c1wiKS5zZXRSb3dJbnRlcmFjdGl2ZShpLCBzY3JpcHQuaW50ZXJhY3RpdmVSb3dzW2ldKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZVZhbHVlID0gc2NyaXB0LmNvbXBsZXRlVmFsdWU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ29tcGxldGUgdmFsdWU6IFwiICsgdGhpcy5jb21wbGV0ZVZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3dOb2RlLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuYXJyb3dOb2RlLmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhcIk5vZGUgbmFtZTogXCIgKyBub2RlLm5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIG9uVG91Y2hTdGFydChldmVudDogYW55KSB7XHJcbiAgICAgICAgdGhpcy5jaGFuZ2VUdXRvcmlhbFBhcnQodGhpcy5jdXJyZW50UGFydEluZGV4ICsgMSk7XHJcbiAgICB9XHJcbn1cclxuIl19
//------QC-SOURCE-SPLIT------
