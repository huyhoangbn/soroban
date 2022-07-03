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

    @property ([cc.Node])
    nodeBead: cc.Node[] = [];

    count: number = 0;
    onLoad(){
        
    }

    start () {
        this.setAction();
    }
    setAction(){
        let action1 = cc.callFunc(()=>{
            this.nodeBead[0].runAction(cc.moveTo(0.5,cc.v2(0,55.5)));
            this.count++;
            this.label.string = this.count + " hạt dưới là số: " + this.count;
            this.label.node.active = true;

        })
        let action2 = cc.callFunc(()=>{
            this.nodeBead[1].runAction(cc.moveTo(0.5,cc.v2(0,-30)));
            this.count++;
            this.label.string = this.count + " hạt dưới là số: " + this.count;
        })
        let action3 = cc.callFunc(()=>{
            this.nodeBead[2].runAction(cc.moveTo(0.5,cc.v2(0,-115.5)));
            this.count++;
            this.label.string = this.count + " hạt dưới là số: " + this.count;
        })
        let action4 = cc.callFunc(()=>{
            this.nodeBead[3].runAction(cc.moveTo(0.5,cc.v2(0,-201)));
            this.count++;
            this.label.string = this.count + " hạt dưới là số: " + this.count;
        })
        let action5 = cc.callFunc(()=>{
            this.nodeBead[0].runAction(cc.moveTo(0.5,cc.v2(0,-30)));
            this.nodeBead[1].runAction(cc.moveTo(0.5,cc.v2(0,-115.5)));
            this.nodeBead[2].runAction(cc.moveTo(0.5,cc.v2(0,-201)));
            this.nodeBead[3].runAction(cc.moveTo(0.5,cc.v2(0,-286.5)));
        })
        let action6 = cc.callFunc(()=>{
            this.nodeBead[4].runAction(cc.moveTo(0.5,cc.v2(0,195)));
            this.count++;
            this.label.string = "Hạt trên là số: " + this.count;
        })
        this.node.runAction(
            cc.sequence(
                cc.delayTime(1.5),
                action1,
                cc.delayTime(1.5),
                action2,
                cc.delayTime(1.5),
                action3,
                cc.delayTime(1.5),
                action4,
                cc.delayTime(1.5),
                action5,
                cc.delayTime(1.0),
                action6
            ));
    }

}
