import { Global } from "./Global";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Task extends cc.Component {
    @property (cc.Node)
    abacus: cc.Node = null;

    numbers: number[] = [];
    result: number = 0;

    initialized: boolean = false;

    initialize() {
        this.randomizeTask(Global.currentChallenge);

        this.initialized = true;
    }

    randomizeTask(type: string) {
        if(!this.initialized) return;

        this.result = 0;
        
        if(type == "addition") {
            this.randomizeNumbers(3, 90 , 10);
        } else if(type == "subtraction") {
            while(true) {
                this.randomizeNumbers(3, 90, 10);

                // prevent subtraction result from being negative
                let total = this.numbers[0];
                for(let i = 1; i < this.numbers.length; ++i) total -= this.numbers[i];
                if(total >= 0) break;
            }
        } else if(type == "multiplication") {
            this.randomizeNumbers(2, 2, 10);
        } else if(type == "division") {
            while(true) {
                this.numbers = [];
                this.numbers.push(Math.round(Math.random() * 1000 + 1000));
                this.numbers.push(Math.round(Math.random() * 3 + 2));

                if(Number.isInteger(this.numbers[0] / this.numbers[1])) break;
            }
        } 

        let label = this.node.getComponent(cc.Label)
        label.string = "";

        // set up label and calculate result
        this.numbers.forEach((value: number, index: number) => {
            label.string += value.toString();

            if(index < this.numbers.length - 1) {
                switch(type) {
                    case "addition": label.string += " + "; break;
                    case "subtraction": label.string += " - "; break;
                    case "multiplication": label.string += " * "; break;
                    case "division": label.string += " / "; break;
                    default: break;
                }
            }
            else label.string += " = ";

            switch(type) {
                case "addition": 
                    this.result += value;
                    break;
                case "subtraction":
                    if(index == 0) this.result = value;
                    else this.result -= value;
                    break;
                case "multiplication":
                    if(index == 0) this.result = 1;
                    this.result *= value;
                    break;
                case "division":
                    if(index == 0) this.result = value;
                    else this.result /= value;
                    break;
            }
        });

        console.log("Result: " + this.result);
    }

    private randomizeNumbers(amount: number, lowRange: number, highRange: number) {
        this.numbers = [];
        for(let i = 0; i < amount; ++i)
            this.numbers.push(Math.round(Math.random() * (highRange - lowRange) + lowRange));
    }

    update(dt) {
        if(this.abacus.getComponent("Abacus").score == this.result) {
            this.abacus.getComponent("Abacus").reset();
            this.randomizeTask(Global.currentChallenge);
        }
    }
}
