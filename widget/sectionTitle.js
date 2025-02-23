import { FontCSS, Margin, Text, TextCSS, View } from "fjuttes";

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
            child: new Text(
                this.props.text,
                new TextCSS({
                    fontCSS: new FontCSS({
                        fontFamily: "zap",
                        fontSize: "32px"
                    })
                })
            )
        })
    }
}
