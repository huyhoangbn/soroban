"use strict";
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