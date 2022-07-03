
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