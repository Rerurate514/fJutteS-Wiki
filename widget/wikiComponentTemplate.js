import { Text, View, Column, BaseCSS, TextCSS, FontCSS, SpaceBox, Card, CodeBlock, ShadowLevel } from "fjuttes";
import { ComponentPropertiesViewer } from "./componentPropertiesViewer.js";

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
                    radius: "16px",
                    elevation: ShadowLevel.LVL1,
                    baseCSS: new BaseCSS({
                        margin: "32px",
                        padding: "64px"
                    }),
                    child: this.props.example
                }),
                new SpaceBox({
                    height: "32px"
                }),
                new Text(
                    this.props.summary
                ),
                new SpaceBox({
                    height: "64px"
                }),
                new Text(
                    "Code Example",
                    new TextCSS({
                        fontCSS: new FontCSS({
                            fontWeight: "bold",
                            fontSize: "32px"
                        })
                    })
                ),
                new Card({
                    radius: "16px",
                    elevation: ShadowLevel.LVL1,
                    baseCSS: new BaseCSS({
                        margin: "8px",
                        padding: "16px"
                    }),
                    child: new CodeBlock({
                        code: this.props.exampleCode,
                    })
                }),
                new SpaceBox({
                    height: "32px"
                }),
                new Text(
                    "Component Properties",
                    new TextCSS({
                        fontCSS: new FontCSS({
                            fontWeight: "bold",
                            fontSize: "32px"
                        })
                    })
                ),
                new Card({
                    radius: "16px",
                    elevation: ShadowLevel.LVL1,
                    baseCSS: new BaseCSS({
                        margin: "8px",
                        padding: "16px"
                    }),
                    child: new ComponentPropertiesViewer({
                        componentName: this.props.name,
                        properties: this.props.properties
                    })
                }),
            ]
        })
    }
}
