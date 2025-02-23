import { Text, View, Column, Grid, TextCSS, FontCSS, BaseCSS, Image, RelativePosition, RelativePositions, SpaceBox, Link, Row } from "fjuttes";
import { LOGO_URL } from "../const/LOGO_URL.js";
import { ColoredText } from "./coloredText.js";

export class MyFooter extends View {
    constructor(){
        super();
    }

    createWrapView(){
        return document.createElement("div");
    }

    styledView(element){
        element.style.background = "#1F1F1F";

        element.style.padding = "32px";

        return element;
    }

    build(){
        return new Grid({
            minmaxPX: 400,
            children: [
                this._buildNav(),
                new Column({
                    children: [
                        new Row({
                            children: [
                                new Image({
                                    src: LOGO_URL,
                                    baseCSS: new BaseCSS({
                                        width: "64px",
                                        margin: "4px"
                                    })
                                }),
                                new RelativePosition({
                                    relativePositions: RelativePositions.CENTER,
                                    child: new ColoredText({
                                        text: "fJutteS",
                                        fontSize: "64px",
                                        isZap: false
                                    }),
                                }),
                            ]
                        }),
                        new SpaceBox({
                            height: "8px"
                        }),
                        new Text(
                            "Created by Rerurate_514",
                            new TextCSS({
                                fontCSS: new FontCSS({
                                    color: "white"
                                })
                            })
                        ),
                        new Text(
                            "Copyright (c) 2025 Rerurate_514",
                            new TextCSS({
                                fontCSS: new FontCSS({
                                    color: "white"
                                })
                            })
                        ),
                        new Link({
                            href: "https://github.com/Rerurate514/fJutteS/blob/2.5.0/LICENSE",
                            isShownUnderline: false,
                            child: new Text(
                                "LICENCE",
                                new TextCSS({
                                    fontCSS: new FontCSS({
                                        color: "white"
                                    })
                                })
                            )
                        })
                    ]
                })
            ]
        });
    }

    _buildNav(){
        return new Column({
            children: [
                new Text(
                    "Navigation",
                    new TextCSS({
                        fontCSS: new FontCSS({
                            color: "white",
                            fontSize: "32px"
                        })
                    })
                ),
                new Text(
                    "npm",
                    new TextCSS({
                        fontCSS: new FontCSS({
                            color: "white",
                            fontSize: "16px"
                        })
                    })
                ),
                new Text(
                    "github",
                    new TextCSS({
                        fontCSS: new FontCSS({
                            color: "white",
                            fontSize: "16px"
                        })
                    })
                ),
                new Text(
                    "Jiperes Wiki",
                    new TextCSS({
                        fontCSS: new FontCSS({
                            color: "white",
                            fontSize: "16px"
                        })
                    })
                ),
                new Text(
                    "About Developpers",
                    new TextCSS({
                        fontCSS: new FontCSS({
                            color: "white",
                            fontSize: "16px"
                        })
                    })
                ),
            ]
        });
    }
}
