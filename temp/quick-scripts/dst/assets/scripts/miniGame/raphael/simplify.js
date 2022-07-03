
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