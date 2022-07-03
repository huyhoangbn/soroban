
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