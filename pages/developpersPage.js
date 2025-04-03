import { View, Scaffold, Header, Text, Margin, Link, Card, ShadowLevel, BaseCSS, Row, Clip, Image, Column, TextCSS, FontCSS, Center } from "fjuttes";
import { MyHeader } from "../widget/mHeader.js";
import { MyFooter } from "../widget/mFooter.js";
import { PageMargin } from "../widget/pageMargin.js";

export class DeveloppersPage extends View {
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
            child: new _DeveloppersPage(),
            footer: new MyFooter()
        })
    }
}

class _DeveloppersPage extends View {
    constructor(){
        super();
    }

    build() {
        return new PageMargin(
            new Margin({
                top: "64px",
                bottom: "64px",
                child: new Card({
                    elevation: ShadowLevel.LVL4,
                    radius: "16px",
                    baseCSS: new BaseCSS({
                        padding: "32px",
                    }),
                    child: new Row({
                        baseCSS: new BaseCSS({
                            alignItems: "center"
                        }),
                        children: [
                            new Clip({
                                child: new Image({
                                    src: "../src/skadi_ico.png",
                                    baseCSS: new BaseCSS({
                                        width: "256px",
                                        height: "256px",
                                    })
                                }),
                                baseCSS: new BaseCSS({
                                    borderRadius: "50%",
                                    overflow: "hidden",
                                })
                            }),
                            new Margin({
                                left: "32px",
                                child: new Center(
                                    new Column({
                                        children: [
                                            new Text(
                                                "fJutteS Developper - FJD",
                                                new TextCSS({
                                                    textAlign: "left",
                                                    fontCSS: new FontCSS({
                                                        fontSize: "25px"
                                                    })
                                                })
                                            ),
                                            new Margin({ top: "8px" }),
                                            new Text("I'm a fJutteS Components lib developper."),
                                            new Margin({ top: "32px" }),
                                            new Link({
                                                href: "https://rerurate514.github.io/portfolirate/",
                                                child: new Text(
                                                    "This is My portfolio.",
                                                    new TextCSS({
                                                        textAlign: "left"
                                                    })
                                                )
                                            })
                                        ]
                                    })
                                )
                            })
                        ],
                    })
                })
            })
        );
    }
}
