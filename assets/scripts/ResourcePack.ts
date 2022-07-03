const {ccclass, property} = cc._decorator;

export class ResourcePack {
    bead_active: cc.SpriteFrame = null;
    bead_focused: cc.SpriteFrame = null;
    bead_inactive: cc.SpriteFrame = null;
    
    hbar: cc.SpriteFrame = null;
    vbar: cc.SpriteFrame = null;
    mbar: cc.SpriteFrame = null;
    vborder: cc.SpriteFrame = null;

    loadTheme(name: string) {
        return new Promise((resolve, reject) => {
            const TOTAL = 7;
            let CURRENT = 0;

            let callback = () => {
                CURRENT++;

                if(CURRENT == TOTAL) resolve("");
            }

            cc.resources.load("themes/" + name + "/bead_active", cc.SpriteFrame, (error: Error, asset: cc.SpriteFrame) => {
                if(error) reject(error.message);
                this.bead_active = asset;
                callback();
            });

            cc.resources.load("themes/" + name + "/bead_focused", cc.SpriteFrame, (error: Error, asset: cc.SpriteFrame) => {
                if(error) reject(error.message);
                this.bead_focused = asset;
                callback();
            });

            cc.resources.load("themes/" + name + "/bead_inactive", cc.SpriteFrame, (error: Error, asset: cc.SpriteFrame) => {
                if(error) reject(error.message);
                this.bead_inactive = asset;
                callback();
            });

            cc.resources.load("themes/" + name + "/hbar", cc.SpriteFrame, (error: Error, asset: cc.SpriteFrame) => {
                if(error) reject(error.message);
                this.hbar = asset;
                callback();
            });

            cc.resources.load("themes/" + name + "/vbar", cc.SpriteFrame, (error: Error, asset: cc.SpriteFrame) => {
                if(error) reject(error.message);
                this.vbar = asset;
                callback();
            });

            cc.resources.load("themes/" + name + "/vborder", cc.SpriteFrame, (error: Error, asset: cc.SpriteFrame) => {
                if(error) reject(error.message);
                this.vborder = asset;
                callback();
            });

            cc.resources.load("themes/" + name + "/mbar", cc.SpriteFrame, (error: Error, asset: cc.SpriteFrame) => {
                if(error) reject(error.message);
                this.mbar = asset;
                callback();
            });
        });
    }
}
