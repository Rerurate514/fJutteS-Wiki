import { Text, View, Column, BaseCSS, TextCSS, FontCSS, SpaceBox, Card } from "fjuttes";

export class WikiComponentTemplate extends View {
    constructor({
        name,
        summary,
        example,
        exampleCode,
        actualCode,
        properties
    }){
        super({
            name,
            summary,
            example,
            exampleCode,
            actualCode,
            properties
        });
    }

    createWrapView(){
        return document.createElement("div");
    }

    build(){
        return new Column({
            baseCSS: new BaseCSS({
                margin: "32px",
            }),
            isHorizontalCenter: true,
            children: [
                new Text(
                    this.props.name,
                    new TextCSS({
                        fontCSS: new FontCSS({
                            fontFamily: "zap",
                            fontWeight: "bold",
                            fontSize: "80px"
                        })
                    })
                ),
                new Card({
                    baseCSS: new BaseCSS({
                        margin: "32px"
                    }),
                    child: this.props.example
                }),
                new SpaceBox({
                    height: "32px"
                }),
                new Text(
                    this.props.summary
                ),
            ]
        })
    }
}
