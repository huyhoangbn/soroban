cc.Class({
    extends: cc.Component,

    properties: {
    },
    onLoad () {
        this.drawing = this.node.getChildByName('drawing').getComponent(cc.Graphics);
        this.demoNode = this.node.getChildByName('demoNode');
        // this.polygonSprite = this.node.getChildByName('polygonSprite').getComponent(cc.PhysicsPolygonCollider);
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

    start () {

    },

    // update (dt) {},
});
