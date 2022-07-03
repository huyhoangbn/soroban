const {ccclass, property} = cc._decorator;

@ccclass
export default class Lesson0 extends cc.Component {
    @property (cc.Label)
    labelText: cc.Label = null;
    // onLoad () {}
    @property ([cc.Node])
    listReference: cc.Node[] = [];

    @property (cc.Node)
    arrow: cc.Node = null;

    @property (cc.Node)
    animHand: cc.Node = null;


    start () {
        this.setAction();
    }

    setAction(){
        let action1 = cc.callFunc(()=>{
            this.arrow.active = false;
            this.listReference[0].active = true;
            this.listReference[1].active = false;
            this.listReference[2].active = false;
        })
        let action2 = cc.callFunc(()=>{
            this.animHand.setPosition(-120,-200);
            this.listReference[0].active = false;
            this.listReference[1].active = true;
            this.listReference[2].active = false;
        })
        let action3 = cc.callFunc(()=>{
            this.animHand.runAction(cc.moveTo(0.1,cc.v2(-940,-200)));
        })
        let action4 = cc.callFunc(()=>{
            this.listReference[0].active = false;
            this.listReference[1].active = false;
            this.listReference[2].active = true;
            this.arrow.active = true;
        })
        this.node.runAction(
            cc.sequence(
                        action1,
                        cc.delayTime(2.5),
                        action2,
                        cc.delayTime(2.0),
                        action3,
                        cc.delayTime(3.0),
                        action4)
        )
    }

    // runAction(action){
    //     this.node.stopAllActions();
    //     this.node.runAction(action);
    // }
}
