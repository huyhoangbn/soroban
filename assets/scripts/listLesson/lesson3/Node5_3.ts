
const {ccclass, property} = cc._decorator;

@ccclass
export default class Node5_3 extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property (cc.Node)
    nodeHand: cc.Node = null;

    @property ([cc.Node])
    nodeBead: cc.Node[] = [];

    onLoad(){
    }

    start () {
        this.setAction();
    }
    setAction(){
        let action1 = cc.callFunc(()=>{
            this.nodeBead[0].runAction(cc.moveTo(0.5,cc.v2(0,55.5)));
            this.nodeBead[1].runAction(cc.moveTo(0.5,cc.v2(0,-30)));
            this.label.string = "2"
            this.label.node.active = true;
            this.nodeHand.parent.active = true;
        })

        let action2 = cc.callFunc(()=>{
            this.nodeHand.parent.active = false;
        })
        this.node.runAction(cc.sequence(cc.delayTime(1.0),action1,cc.delayTime(1.0),action2));
    }

}
