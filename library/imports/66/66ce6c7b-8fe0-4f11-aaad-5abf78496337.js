"use strict";
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