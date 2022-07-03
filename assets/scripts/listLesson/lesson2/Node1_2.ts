// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Node1_2 extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property (cc.Node)
    nodeBead: cc.Node = null;

    @property (cc.Layout)
    nodeLayout: cc.Layout = null;
    count: number = 1;
    onLoad(){
        
    }

    start () {
        this.setAction();
    }
    setAction(){
        let action = cc.callFunc(()=>{
            let newBead = cc.instantiate(this.nodeBead);
            this.count++;
            this.nodeLayout.node.addChild(newBead);
            this.label.string = this.count + " đơn vị";
        })
        this.node.runAction(cc.repeat(cc.sequence(cc.delayTime(1),action,cc.delayTime(1)),4));
    }

}
