"use strict";
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