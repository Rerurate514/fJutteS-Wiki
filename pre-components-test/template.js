import { View } from "fjuttes";

export class A extends View {
    constructor(){
        super();
    }

    createWrapView(){
        return document.createElement("div");
    }
}
