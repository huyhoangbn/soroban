
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