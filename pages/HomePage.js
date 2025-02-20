import { BaseCSS, Card, Column, FontCSS, Image, SpaceBox, Text, TextCSS, WebkitCSS, View } from "fjuttes";
import { Scaffold } from "../pre-components-test/scaffold.js";
import { Header } from "../pre-components-test/header.js";
import { MyHeader } from "../widget/mHeader.js";
import { PageMargin } from "../widget/pageMargin.js";
import { LOGO_URL } from "../const/LOGO_URL.js";

export class HomePage extends View {
    constructor(){
        super();
    }

    createWrapView(){
        return document.createElement("div");
    }

    build(){
        return new Scaffold({
            header: new Header({
                isStickyHeader: true,
                child: new MyHeader()
            }),
            child: new PageMargin(
                new _HomeContent()
            ),
        })
    }
}

class _HomeContent extends View {
    constructor(){
        super();
    }

    createWrapView(){
        return document.createElement("div");
    }

    build(){
        return new Column({
            isHorizontalCenter: true,
            children: [
                new SpaceBox({
                    height: "64px"
                }),
                new Image({
                    src: LOGO_URL,
                    baseCSS: new BaseCSS({
                        width: "256px"
                    })
                }),
                new SpaceBox({
                    height: "16px"
                }),
                new Card({
                    background: "linear-gradient(135deg, #EDD51C, #29C5F8)",
                    webkitCSS: new WebkitCSS({
                        webkitBackgroundClip: "text",
                    }),
                    child: new Text(
                        "fJutteS is Pure JavaScript Components base Lib.",
                        new TextCSS({
                            fontCSS: new FontCSS({
                                fontWeight: "bold",
                                color: "#3B3B3B",
                                fontSize: "50px"
                            }),
                            webkitCSS: new WebkitCSS({
                                webkitTextFillColor: "transparent"
                            })
                        })
                    )
                })
            ]
        })
    }
}
