import { BaseCSS, Border, Box, Center, FontCSS, Image, Link, Margin, SpaceBox, Text, TextCSS, View } from "fjuttes";
import { Row } from "../pre-components-test/row.js";

export class MyHeader extends View {
    constructor(){
        super();
    }

    createWrapView(){
        return document.createElement("div");
    }

    build(){
        return new Margin({
            all: "16px",
            child: new Row({
                isVerticalCenter: true,
                children: [
                    new Image({
                        src: "../src/fjuttes-official-logo.svg",
                        baseCSS: new BaseCSS({
                            width: "64px"
                        })
                    }),
                    new SpaceBox({width: "128px"}),
                    new Text(
                        "fJutteS",
                        new TextCSS({
                            fontCSS: new FontCSS({
                                fontWeight: "bold",
                                fontSize: "25px"
                            })
                        })
                    ),
                    new SpaceBox({width: "128px"}),
                    this.buildHeaderLink("TOP"),
                    this.buildHeaderLink("ABOUT"),
                    this.buildHeaderLink("COMPONENTS"),
                    this.buildHeaderLink("JIPERES"),
                    this.buildHeaderLink("DEVELOPPER"),
                ]
            })            
        })
    }

    buildHeaderLink(text){
        return new Box({
            width: "100%",
            height: "100%",
            border: new Border({
                borderSize: "2px",
                color: "#29C5F8",
                isTop: false,
                isBottom: false,
                isRight: false
            }),
            child: new Center(
                new Link({
                    child: new Margin({
                        all: "4px",
                        child: new Text(text)
                    })
                })
            )
        })
    }
}
