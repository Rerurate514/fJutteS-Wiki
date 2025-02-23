import { BaseCSS, Card, Column, FontCSS, Image, Margin, Grid, Text, TextCSS, BorderCSS, WebkitCSS, View, Hover, Stack, Link, SpaceBox, Padding, Center, Row, ShadowLevel, Box, Position } from "fjuttes";
import { Scaffold } from "../pre-components-test/scaffold.js";
import { Header } from "../pre-components-test/header.js";
import { MyHeader } from "../widget/mHeader.js";
import { PageMargin } from "../widget/pageMargin.js";
import { LOGO_URL } from "../const/LOGO_URL.js";
import { SectionTitle } from "../widget/sectionTitle.js";
import { ColoredText } from "../widget/coloredText.js";
import { SUMMARY_TEXT_CSS_BLACk, SUMMARY_TEXT_CSS_WHITE } from "../setting/myTextCSS.js";

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
                new SpaceBox({height: "64px"}),
                this._buildSummary(),
                new SpaceBox({height: "64px"}),
                this._buildJiperesSummary(),
                new SpaceBox({height: "64px"}),
                this._buildWithoutNpmSummary(),
                new SpaceBox({height: "64px"}),
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
                new ColoredText({
                    text: "fJutteS is Pure JavaScript Components base Lib.",
                    fontSize: "64px"
                }),
                new Card({
                    baseCSS: new BaseCSS({
                        margin: "64px",
                        width: "100%"
                    }),
                    child: new Grid({
                        minmaxPX: 300,
                        gap: "20px",
                        children: [
                            new Center(
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
                            ),
                            new Center(
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
                            )
                        ]
                    })
                }),
            ]
        });
    }

    _buildSummary(){
        return new Column({
            children: [
                new Card({
                    elevation: ShadowLevel.LVL5,
                    radius: "16px",
                    baseCSS: new BaseCSS({
                        padding: "16px"
                    }),
                    child: new Grid({
                        minmaxPX: 279,
                        children: [
                            new Center(
                                new Column({
                                    children: [
                                        new SectionTitle("SIMULAR EXPERIENCE"),
                                        new Text(
                                            "fJutteS is a library that provides a Flutter-like writing experience in web development.",
                                            SUMMARY_TEXT_CSS_BLACk
                                        ),
                                    ]
                                })
                            ),
                            new Card({
                                baseCSS: new BaseCSS({
                                    margin: "16px"
                                }),
                                child: new Stack({
                                    baseCSS: new BaseCSS({
                                        width: "100%",
                                        height: "256px"
                                    }),
                                    children: [
                                        new Position({
                                            top: 0,
                                            left: 0,
                                            child: new Box({
                                                width: "100%",
                                                height: "100%",
                                                borderCSS: new BorderCSS({
                                                    radius: "32px"
                                                }),
                                                child: new Image({
                                                    src: "https://raw.githubusercontent.com/Rerurate514/fJutteS-Wiki/refs/heads/main/src/flike.png",
                                                    baseCSS: new BaseCSS({
                                                        height: "100%",
                                                        borderCSS: new BorderCSS({
                                                            radius: "16px"
                                                        })
                                                    })
                                                }),
                                            })
                                        }),
                                        new Position({
                                            top: 0,
                                            left: 0,
                                            child: new Box({
                                                width: "100%",
                                                height: "100%",
                                                background: "linear-gradient(to right, white 10%, transparent 70%)",
                                            })
                                        }),
                                    ]
                                })
                            }),
                        ]
                    })
                })
            ]
        })
    }

    _buildJiperesSummary(){
        return new Column({
            children: [
                new Card({
                    elevation: ShadowLevel.LVL5,
                    radius: "16px",
                    background: "#3B3B3B",
                    baseCSS: new BaseCSS({
                        padding: "16px"
                    }),
                    child: new Grid({
                        minmaxPX: 279,
                        children: [
                            new Card({
                                baseCSS: new BaseCSS({
                                    margin: "16px",
                                    width: "100%",
                                    height: "256px"
                                }),
                                child: new Image({
                                    src: "https://raw.githubusercontent.com/Rerurate514/fJutteS-Wiki/refs/heads/main/src/jiperes_logo.jpg",
                                    baseCSS: new BaseCSS({
                                        height: "100%",
                                        borderCSS: new BorderCSS({
                                            radius: "16px"
                                        })
                                    })
                                }),
                            }),
                            new Center(
                                new Column({
                                    children: [
                                        new SectionTitle("AUTO MANAGE STATE"),
                                        new Text(
                                            "The built-in state management library Jiperes makes it easy to manage widget state.",
                                            SUMMARY_TEXT_CSS_WHITE
                                        ),
                                    ]
                                })
                            ),
                        ]
                    })
                })
            ]
        })
    }

    _buildWithoutNpmSummary(){
        return new Column({
            children: [
                new SectionTitle("MAKE WITHOUT NPM", "64px"),
                new Text(
                    "fJutteS can build a UI using only index.html if you use a CDN. npm installation is possible, but in that case, we recommend that you consider using other libraries.",
                    SUMMARY_TEXT_CSS_BLACk
                ),
                new SpaceBox({
                    height: "32px",
                }), 
                new Row({
                    children: [
                        new Image({
                            baseCSS: new BaseCSS({
                                width: "256px"
                            }),
                            src: "https://raw.githubusercontent.com/Rerurate514/fJutteS-Wiki/a94fea640a04db0316f048bb35c768b2cc2dc16f/src/npm-logo-red.svg"
                        }),
                        
                    ]
                })
            ]
        })
    }
}

