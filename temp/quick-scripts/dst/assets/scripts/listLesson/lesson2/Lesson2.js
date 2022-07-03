
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