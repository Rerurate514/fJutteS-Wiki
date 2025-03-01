import { BaseCSS, BorderCSS, Box, Center, FontCSS, Image, Link, Margin, Padding, Row, SpaceBox, Text, Hover, TextCSS, View } from "fjuttes";
import { LOGO_URL } from "../const/LOGO_URL.js";
export class MyHeader extends View {
    constructor(){
        super();
    }

    createWrapView(){
        return document.createElement("div");
    }

    styledView(element){
        element.style.background = "#1F1F1F";
        return element;
    }

    build(){
        return new Padding({
            all: "16px",
            child: new Row({
                isVerticalCenter: true,
                children: [
                    new Image({
                        src: LOGO_URL,
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
                                fontSize: "25px",
                                color: "white"
                            })
                        })
                    ),
                    new SpaceBox({width: "128px"}),
                    this.buildHeaderLink("HOME"),
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
            borderCSS: new BorderCSS({
                borderSize: "2px",
                color: "#8BCD8A",
                isTop: false,
                isBottom: false,
                isRight: false
            }),
            child: new Center(
                new Link({
                    isShownUnderline: false,
                    child: new Margin({
                        all: "4px",
                        child: new Text(
                            text,
                            new TextCSS({
                                fontCSS: new FontCSS({
                                    fontWeight: "bold",
                                    color: "white",
                                })
                            })
                        )
                    })
                })
            )
        });
    }
}
