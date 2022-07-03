const {ccclass, property} = cc._decorator;

@ccclass
export default class ChooseNumber extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property ([cc.Button])
    listButton: cc.Button[] = [];

    @property (cc.Node)
    backSplash: cc.Node = null;

    @property ([cc.Label])
    listResultLb: cc.Label[] = [];

    result: number = 0;

    listResult: number[] = [];

    countResult: number = 0;

    onLoad(){
        this.countResult = 0;
    }
    start () {
        this.setAction();
        this.node.setContentSize(cc.winSize.width, cc.winSize.height);
    }
    setAction(){
        this.result = this.getRanNum(0,10);
        this.label.string = "Choose Number : " + this.result;
        this.listResult = [];
        for (let i = 0; i < 10; i++) {
            if(this.getRanNum(0,10) % 2 == 0){
                this.listResult.push(this.result);
            }else{
                this.listResult.push(this.getRanNum(0,10));
            }
		}
        for (let i = 0; i < this.listButton.length; i++) {
			var clickEventHandler = new cc.Component.EventHandler();
			clickEventHandler.target = this.node; // This node is the node to which your event handler code component belongs
			clickEventHandler.component = "ChooseNumber"; // This is the code file name
			clickEventHandler.handler = "onClickChoose";
            clickEventHandler.customEventData = "" +  this.listResult[i];
            this.listResultLb[i].string = clickEventHandler.customEventData;
			this.listButton[i].clickEvents = [];
			this.listButton[i].clickEvents.push(clickEventHandler);
		}
        for (let i = 0; i < 10; i++) {
            if(this.listResult[i] == this.result)
                this.countResult++;
		}
        console.error(this.listResult);
        console.error(this.countResult);
    }
    onClickChoose(event: any, value: string ){
        if(value == this.result.toString()){
            event.target.active = false;
            this.countResult--;
            if(this.countResult == 0){
                this.label.string = "Finished!";
                this.backSplash.active = true;
            }
        }
    }
    checkLeftResult(){
        for (let i = 0; i < 10; i++) {
            if(this.getRanNum(0,10) % 2 == 0){
                this.listResult.push(this.result);
            }else{
                this.listResult.push(this.getRanNum(0,10));
            }
		}
    }

    onBack() {
        this.node.destroy();
    }
    
    getRanNum(min_value, max_value) {
		let random_number = Math.random() * (max_value - min_value) + min_value;
		return Math.floor(random_number);
	}

}
