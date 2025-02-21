import { BaseCSS, Card, Column, FontCSS, Image, Margin, Grid, Text, TextCSS, WebkitCSS, View, Hover, ElevatedButton, Link, SpaceBox, Padding } from "fjuttes";
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
            children: [
                this._buildIntro(),
            ]
        })
    }

    _buildIntro(){
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
                                fontSize: "64px",
                                fontFamily: "zap",
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
                    child: new Grid({
                        minmaxPX:300,
                        gap: "20px",
                        children: [
                            new Link({
                                href: "",
                                isShownUnderline: false,
                                child: new Hover({
                                    radius: "128px",
                                    child: new Card({
                                        background: "linear-gradient(135deg, #EDD51C, #29C5F8)",
                                        child: new Padding({
                                            all: "16px",
                                            child: new Text(
                                                "Open Components Reference",
                                                new TextCSS({
                                                    fontCSS: new FontCSS({
                                                        color: "black"
                                                    })
                                                })
                                            )
                                        }),
                                    }),
                                })
                            }),
                            new Link({
                                href: "https://github.com/Rerurate514/fJutteS",
                                isShownUnderline: false,
                                child: new Hover({
                                    radius: "128px",
                                    child: new Card({
                                        background: " #3B3B3B",
                                        child: new Padding({
                                            all: "16px",
                                            child: new Text(
                                                "Let's watch the github source!",
                                                new TextCSS({
                                                    fontCSS: new FontCSS({
                                                        color: "white"
                                                    })
                                                })
                                            )
                                        })
                                    }),
                                })
                            })
                        ]
                    })
                }),
            ]
        });
    }
}

