// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Node1_3 extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property (cc.Node)
    nodeHandLeft: cc.Node = null;

    @property (cc.Node)
    nodeHandRight: cc.Node = null;

    count: number = 1;
    onLoad(){
        this.nodeHandLeft.setPosition(-2700,-50);
        this.nodeHandRight.setPosition(2700,-50);
    }

    start () {
        this.setAction();
    }
    setAction(){
        let actionHand = cc.callFunc(()=>{
            this.nodeHandLeft.runAction(cc.moveTo(0.8,cc.v2(-380,-50)));
            this.nodeHandRight.runAction(cc.moveTo(0.8,cc.v2(380,-50)));
        })
        this.node.runAction(cc.sequence(cc.delayTime(1.0),actionHand));
    }

}
