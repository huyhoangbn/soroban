
const {ccclass, property} = cc._decorator;

@ccclass
export default class Node2_3 extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property (cc.Node)
    nodeHand: cc.Node = null;

    count: number = 1;
    onLoad(){
        this.nodeHand.setPosition(-872,-200);
    }

    start () {
        this.setAction();
    }
    setAction(){
        let action1= cc.callFunc(()=>{
            this.label.string = "Các hạt dưới chúng mình gẩy lên bằng ngón tay cái";
            this.nodeHand.setPosition(-1625,-200);
        })
        let action2= cc.callFunc(()=>{
            this.label.string = "Và gẩy hạt xuống bằng ngón tay trỏ";
            this.nodeHand.setPosition(-105,-200);
        })
        this.node.runAction(cc.sequence(cc.delayTime(2.0),action1,cc.delayTime(2.0),action2));
    }

}
