const {ccclass, property} = cc._decorator;

@ccclass
export default class Blink extends cc.Component {
    @property (cc.Node)
    nodeKhung: cc.Node = null;

    @property (cc.Node)
    listVbar: cc.Node = null;

    @property (cc.Node)
    middleBar: cc.Node = null;

    @property (cc.Node)
    listBear: cc.Node = null;

    @property (cc.Label)
    labelText: cc.Label = null;
    // onLoad () {}

    start () {
       this.setAction();
    }

    setAction(){
        let blinkAction = cc.repeat(cc.sequence(cc.blink(0.1, 1),cc.delayTime(0.1)),10);
        let action1 = cc.callFunc(()=>{
            this.nodeKhung.runAction(blinkAction);
            this.labelText.string = "Khung ngoài";
        })
        let action2 = cc.callFunc(()=>{
            this.listVbar.runAction(blinkAction);
            this.labelText.string = "Cột dọc";
        })
        let action3 = cc.callFunc(()=>{
            this.middleBar.runAction(blinkAction);
            this.labelText.string = "Thanh giá trị ngang";
        })
        let action4 = cc.callFunc(()=>{
            this.listBear.runAction(blinkAction);
            this.labelText.string = "Hạt giá trị";
        })
        this.node.runAction(cc.sequence(action1,cc.delayTime(3),action2,cc.delayTime(3),action3,cc.delayTime(3),action4));
    }
}
