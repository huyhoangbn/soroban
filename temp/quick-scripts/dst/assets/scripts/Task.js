
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