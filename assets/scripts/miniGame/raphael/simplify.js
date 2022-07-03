cc.Class({
    extends: cc.Component,

    // use this for initialization
    onLoad: function () {
        this.path = this.addComponent('R.path');
        this.path.fillColor = 'none';
        this.path.lineWidth = 30;
        this.path.showHandles = false;
        this.node.on(cc.Node.EventType.TOUCH_START, this.onTouchBegan, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this.onTouchEnded, this);
    },

    onTouchBegan: function (touch, event) {
        var touchLoc = touch.getLocation();
        touchLoc = this.node.parent.convertToNodeSpaceAR(touchLoc);

        this.points = [touchLoc];
     
        return true;
    },

    onTouchMoved: function (touch, event) {
        var touchLoc = touch.getLocation();
        touchLoc = this.node.parent.convertToNodeSpaceAR(touchLoc);
        console.log(touchLoc);
        this.points.push(touchLoc);
        this.path.points(this.points);
    },

    onTouchEnded: function (touch, event) {
        this.path.points(this.points);
        this.path.simplify();
    },

    // called every frame, uncomment this function to activate update callback
    update: function (dt) {
    },

    onBack() {
        this.node.parent.destroy();
    }
});
