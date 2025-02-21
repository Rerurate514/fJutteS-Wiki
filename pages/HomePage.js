import { BaseCSS, Card, Column, FontCSS, Image, Margin, Text, TextCSS, WebkitCSS, View, Row, ElevatedButton } from "fjuttes";
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
                new Margin({
                    all: "64px",
                    child: new Image({
                        src: LOGO_URL,
                        baseCSS: new BaseCSS({
                            width: "256px"
                        })
                    }),
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
                                fontSize: "32px",
                                fontFamily: "fantasy",
                                fontWeight: "bold"
                            }),
                            webkitCSS: new WebkitCSS({
                                webkitTextFillColor: "transparent"
                            })
                        })
                    )
                }),
                new Card({
                    baseCSS: new BaseCSS({
                        margin: "64px",
                        width: "100%"
                    }),
                    child: new Row({
                        isJustifySpaceAround: true,
                        children: [
                            new Card({
                                radius: "128px",
                                background: "linear-gradient(135deg, #EDD51C, #29C5F8)",
                                child: new ElevatedButton({
                                    baseCSS: new BaseCSS({
                                        padding: "16px"
                                    }),
                                    child: new Text("Open Components Reference")
                                }),
                            }),
                            new Card({
                                radius: "128px",
                                background: " #3B3B3B",
                                child: new ElevatedButton({
                                    baseCSS: new BaseCSS({
                                        padding: "16px"
                                    }),
                                    child: new Text(
                                        "Let's watch the github source!",
                                        new TextCSS({
                                            fontCSS: new FontCSS({
                                                color: "white"
                                            })
                                        })
                                    )
                                }),
                            }),
                        ]
                    })
                }),
            ]
        })
    }
}

