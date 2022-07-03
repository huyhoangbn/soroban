"use strict";
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