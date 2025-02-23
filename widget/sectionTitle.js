import { Margin, View } from "fjuttes";
import { ColoredText } from "./coloredText.js";

export class SectionTitle extends View {
    constructor(text, px){
        if(!px) px = "32px"
        super({
            text: text,
            px: px
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
                fontSize: this.props.px
            })
        })
    }
}
