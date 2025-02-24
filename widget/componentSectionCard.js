import { BaseCSS, Card, Column, Text, ShadowLevel, RelativePosition, RelativePositions, View, SpaceBox, Stack } from "fjuttes";
import { SectionTitle } from "./sectionTitle.js";
import { BorderButton } from "./borderButton.js";
import { SUMMARY_TEXT_CSS_WHITE } from "../setting/myTextCSS.js";

export class ComponentSectionCard extends View {
    constructor(
        componentItem,
        title,
        text,
        url
    ){
        super({
            componentItem: componentItem,
            title: title,
            text: text,
            url: url
        });
    }

    createWrapView(){
        return document.createElement("div");
    }

    build(){
        return new Card({
            background: "#393939",
            baseCSS: new BaseCSS({
                height: "440px",
                margin: "16px",
                padding: "16px",
            }),
            radius: "16px",
            elevation: ShadowLevel.LVL5,
            child: new Stack({
                baseCSS: new BaseCSS({
                    width: "100%",
                    height: "100%"
                }),
                children: [
                    new Column({
                        children: [
                            new SectionTitle(this.props.title, "50px"),
                            this.props.componentItem,
                            new SpaceBox({
                                height: "32px"
                            }),
                            new Text(
                                this.props.text,
                                SUMMARY_TEXT_CSS_WHITE
                            ),
                            new SpaceBox({
                                height: "16px"
                            }),
                        ]
                    }),
                    new RelativePosition({
                        relativePositions: RelativePositions.BOTTOM_RIGHT,
                        child: new BorderButton("See Details")
                    }),
                ]
            })
        });
    }
}
