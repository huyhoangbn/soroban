const {ccclass, property} = cc._decorator;

@ccclass
export default class WriteNumber extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property ([cc.Button])
    listButton: cc.Button[] = [];

    @property (cc.Node)
    backSplash: cc.Node = null;

    @property (cc.Node)
    nodeAddChild: cc.Node = null;

    @property (cc.Prefab)
    nodeWrite: cc.Prefab = null;

    onLoad(){
        this.nodeAddChild.removeAllChildren();
    }
    start () {
        this.setAction();
        this.node.setContentSize(cc.winSize.width, cc.winSize.height);
    }
    setAction(){
        for (let i = 0; i < this.listButton.length; i++) {
			var clickEventHandler = new cc.Component.EventHandler();
			clickEventHandler.target = this.node; // This node is the node to which your event handler code component belongs
			clickEventHandler.component = "WriteNumber"; // This is the code file name
			clickEventHandler.handler = "onClickChoose";
            clickEventHandler.customEventData = "" +  (i+1);
			this.listButton[i].clickEvents = [];
			this.listButton[i].clickEvents.push(clickEventHandler);
		}

    }
    onClickChoose(event: any, value: string ){
        let nodeWrite = cc.instantiate(this.nodeWrite);
        nodeWrite.getChildByName("number").getComponent(cc.Label).string = value;
        nodeWrite.setContentSize(cc.winSize.width, cc.winSize.height);
        this.nodeAddChild.addChild(nodeWrite);
    }

    onBackWrite() {
        this.nodeAddChild.removeAllChildren();
    }

    onBack() {
        this.node.destroy();
    }

}
