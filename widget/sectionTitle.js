import { Margin, View } from "fjuttes";
import { ColoredText } from "./coloredText.js";

export class SectionTitle extends View {
    constructor(text){
        super({
            text: text
        });
    }

    createWrapView(){
        return document.createElement("div");
    }

    build(){
        return new Margin({
            all: "16px",
            child: new ColoredText({
                text: this.props.text,
                fontSize: "32px"
            })
        })
    }
}
