import { Card, FontCSS, Text, TextCSS, View, WebkitCSS } from "fjuttes";

export class ColoredText extends View {
    constructor({
        text,
        fontSize = "16px",
        isZap = true
    }){
        super({
            text: text,
            fontSize: fontSize,
            isZap: isZap
        });
    }

    createWrapView(){
        return document.createElement("div");
    }

    build(){
        return new Card({
            background: "linear-gradient(135deg, #EDD51C, #29C5F8)",
            webkitCSS: new WebkitCSS({
                webkitBackgroundClip: "text",
            }),
            child: new Text(
                this.props.text,
                new TextCSS({
                    fontCSS: new FontCSS({
                        fontWeight: "bold",
                        color: "#3B3B3B",
                        fontSize: this.props.fontSize,
                        fontFamily: this.props.isZap ? "zap" : "",
                        fontWeight: "bold"
                    }),
                    webkitCSS: new WebkitCSS({
                        webkitTextFillColor: "transparent"
                    })
                })
            )
        });
    }
}
