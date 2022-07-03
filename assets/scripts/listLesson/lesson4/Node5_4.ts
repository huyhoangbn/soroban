const {ccclass, property} = cc._decorator;

@ccclass
export default class Node5_4 extends cc.Component {

    @property(cc.Label)
    label_refer: cc.Label = null;

    @property(cc.Label)
    label_result: cc.Label = null;

    @property (cc.Node)
    nodeHand: cc.Node = null;

    @property ([cc.Node])
    nodeBead: cc.Node[] = [];

    start () {
        this.setAction();
        this.label_result.node.active = false;
    }
    setAction(){
        let txt = this.node.getChildByName("text");

        let action1 = cc.callFunc(()=>{
           txt.children[0].color = cc.Color.YELLOW;
           this.nodeBead[0].runAction(cc.moveTo(0.5,cc.v2(0,55.5)));
           this.nodeHand.parent.active = true;
           this.nodeHand.getComponent(sp.Skeleton).setAnimation(0,"animation",false);
           this.label_refer.string = "1 ";
        })

        let action2 = cc.callFunc(()=>{
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.YELLOW;
            this.nodeBead[1].runAction(cc.moveTo(0.5,cc.v2(0,-30)));
            this.nodeBead[2].runAction(cc.moveTo(0.5,cc.v2(0,-115.5)));
            this.nodeBead[3].runAction(cc.moveTo(0.5,cc.v2(0,-201)));
            this.nodeHand.parent.active = true;
            this.nodeHand.getComponent(sp.Skeleton).setAnimation(0,"animation",false);
            this.label_refer.string = "1 + 3";
        })

        let action3 = cc.callFunc(()=>{
            txt.children[0].color = cc.Color.WHITE;
            txt.children[1].color = cc.Color.WHITE;
            this.nodeHand.getComponent(sp.Skeleton).setAnimation(0,"animation",false);
            this.label_refer.string = "1 + 3 = 4";
            this.label_result.string = "4";
            this.label_result.node.active = true;
            this.label_result.node.color = cc.Color.YELLOW;
        })

        let hideAnim = cc.callFunc(()=>{
            this.nodeHand.parent.active = false;
        })

        this.node.runAction(
            cc.sequence(
                cc.delayTime(2.0),
                action1,
                cc.delayTime(1.0),
                hideAnim,
                cc.delayTime(2.0),
                action2,
                cc.delayTime(1.0),
                hideAnim,
                cc.delayTime(2.0),
                action3,
                cc.delayTime(1.0),
                hideAnim,
            )
        );
    }


}
