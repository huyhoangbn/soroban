// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class NumberSeed extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property (cc.Node)
    nodeBead: cc.Node = null;

    @property (cc.Layout)
    nodeLayout: cc.Layout = null;

    @property ([cc.Button])
    listButton: cc.Button[] = [];

    @property ([cc.Label])
    listResultLb: cc.Label[] = [];
    result: number = 0;
    listResult: number[] = [];
    onLoad(){
        
    }
    start () {
        this.setAction();
        this.node.setContentSize(cc.winSize.width, cc.winSize.height);
    }
    setAction(){
        this.result = this.getRanNum(1,6);
        let randomBox = this.getRanNum(0,4);
        this.listResult = [];
        this.listResult.push(this.result);
        for (let i = 0; i < this.listButton.length; i++) {
			var clickEventHandler = new cc.Component.EventHandler();
			clickEventHandler.target = this.node; // This node is the node to which your event handler code component belongs
			clickEventHandler.component = "NumberSeed"; // This is the code file name
			clickEventHandler.handler = "onClickChoose";
            if(i == randomBox){
                clickEventHandler.customEventData = "" + this.result;
            }else{
                let random = this.getRanNum(1,10);
                clickEventHandler.customEventData = "" + random;
                this.listResult.push(random);
            }
            console.error(this.listResult);
            this.listResultLb[i].string = clickEventHandler.customEventData;
			this.listButton[i].clickEvents = [];
			this.listButton[i].clickEvents.push(clickEventHandler);
		}
        // create node 
        this.nodeLayout.node.removeAllChildren();
        for(let i = 0; i < this.result; i++){
            let nodeNew = cc.instantiate(this.nodeBead);
            this.nodeLayout.node.addChild(nodeNew);
        }
    }
    onClickChoose(event: any, value: string){
        if(value == this.result.toString()){
            this.label.string = "Chính xác";
            this.setAction();
        }else{
            this.label.string = "Sai rồi";
        }
    }

    onBackMenu() {
        this.node.destroy();
    }
    
    getRanNum(min_value, max_value) {
		let random_number = Math.random() * (max_value - min_value) + min_value;
        if(this.listResult.includes(Math.floor(random_number))){
            return this.getRanNum(min_value, max_value);
        }
		return Math.floor(random_number);
	}

}
