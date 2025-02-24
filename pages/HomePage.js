import { BaseCSS, Card, Column, FontCSS, Image, Margin, Grid, Text, TextCSS, BorderCSS, View, Hover, Stack, Link, SpaceBox, Padding, Center, Row, ShadowLevel, Box, Position, RelativePositions, RelativePosition } from "fjuttes";
import { Scaffold } from "../pre-components-test/scaffold.js";
import { Header } from "../pre-components-test/header.js";
import { MyHeader } from "../widget/mHeader.js";
import { PageMargin } from "../widget/pageMargin.js";
import { LOGO_URL } from "../const/LOGO_URL.js";
import { SectionTitle } from "../widget/sectionTitle.js";
import { ColoredText } from "../widget/coloredText.js";
import { SUMMARY_TEXT_CSS_BLACK, SUMMARY_TEXT_CSS_WHITE } from "../setting/myTextCSS.js";
import { BorderButton } from "../widget/borderButton.js";
import { MyFooter } from "../widget/mFooter.js";
import { ComponentSectionCard } from "../widget/componentSectionCard.js";

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
            footer: new MyFooter()
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
                this._buildComponentSummary(),
                new SpaceBox({height: "64px"}),
                this._buildStudyText(),
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
                                        new SectionTitle("FAMILIAR EXPERIENCE"),
                                        new Text(
                                            "fJutteS is a library that provides a Flutter-like writing experience in web development.",
                                            SUMMARY_TEXT_CSS_BLACK
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
        });
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
        });
    }

    _buildWithoutNpmSummary(){
        return new Column({
            children: [
                new SectionTitle("Create Widgets Without npm", "64px"),
                new Text(
                    "fJutteS can build a UI using only index.html if you use a CDN. npm installation is possible, but in that case, we recommend that you consider using other libraries.",
                    SUMMARY_TEXT_CSS_BLACK
                ),
                new SpaceBox({
                    height: "32px",
                }), 
                new Grid({
                    children: [
                        new Center(
                            new Image({
                                baseCSS: new BaseCSS({
                                    width: "200px"
                                }),
                                src: "https://raw.githubusercontent.com/Rerurate514/fJutteS-Wiki/a94fea640a04db0316f048bb35c768b2cc2dc16f/src/npm-logo-red.svg"
                            }),
                        ),
                        new SpaceBox({
                            height: "16px"
                        }),
                        new Text(
                            "able to use \"fjuttes\": \"https://unpkg.com/fjuttes@latest/dist/index.mjs\"",
                            new TextCSS({
                                fontCSS: new FontCSS({
                                    fontWeight: "bold"
                                })
                            })
                        ),
                    ]
                }),
                new SpaceBox({
                    height: "32px",
                }), 
                new Link({
                    href: "",
                    isShownUnderline: false,
                    child: new Center(
                        new Hover({
                            radius: "128px",
                            child: new Card({
                                background: "linear-gradient(135deg, #EDD51C, #29C5F8)",
                                child: new Padding({
                                    all: "16px",
                                    child: new Text(
                                        "Let's watch the usage!",
                                        new TextCSS({
                                            fontCSS: new FontCSS({
                                                color: "black"
                                            })
                                        })
                                    )
                                }),
                            }),
                        })
                    )
                }),
            ]
        });
    }

    _buildComponentSummary(){
        return new Column({
            children: [
                new SectionTitle("Build Widgets", "64px"),
                new Text("There are ready-to-use UI components included in fJutteS. (Column, Stack, Card, etc.) And, those components are created by me with fJutteS.", SUMMARY_TEXT_CSS_BLACK),
                new SpaceBox({
                    height: "16px",
                }), 
                new Grid({
                    minmaxPX: 323,
                    children: [
                        new ComponentSectionCard(
                            this._buildColumn(),
                            "Column",
                            "Column component is most basic vertical align component.",
                            "https://"
                        ),
                        new ComponentSectionCard(
                            this._buildStack(),
                            "Stack",
                            "Stack component is that overlays views.",
                            "https://"
                        ),
                        new ComponentSectionCard(
                            this._buildCenter(),
                            "Center",
                            "Center component is that aligns view to the center.",
                            "https://"
                        ),
                        new ComponentSectionCard(
                            this._buildHover(),
                            "Hover",
                            "Hover component provides hover effect and tap animation.",
                            "https://"
                        ),
                    ]
                })
            ]
        });
    }

    _buildColumn(){
        return new Column({
            baseCSS: new BaseCSS({
                height: "fit-content"
            }),
            isHorizontalCenter: true,
            children: [
                new Box({
                    width: "40%",
                    height: "30px",
                    background: "linear-gradient(135deg, #EDD51C, #29C5F8)"
                }),
                new SpaceBox({
                    height: "8px",
                }),
                new Box({
                    width: "40%",
                    height: "30px",
                    background: "linear-gradient(135deg, #EDD51C, #29C5F8)"
                }),
                new SpaceBox({
                    height: "8px",
                }), 
                new Box({
                    width: "40%",
                    height: "30px",
                    background: "linear-gradient(135deg, #EDD51C, #29C5F8)"
                }),
            ]
        })
    }

    _buildStack(){
        return new Center(
            new Stack({
                baseCSS: new BaseCSS({
                    width: "106px",
                    height: "106px"
                }),
                children: [
                    new Box({
                        width: "106px",
                        height: "106px",
                        background: "linear-gradient(135deg, #EDD51C, #29C5F8)"
                    }),
                    new Margin({
                        all: "8px",
                        child: new Box({
                            width: "50px",
                            height: "50px",
                            background: "white",
                        }),
                    })
                ]
            })
        );
    }

    _buildCenter(){
        return new Center(
            new Stack({
                baseCSS: new BaseCSS({
                    width: "106px",
                    height: "106px"
                }),
                children: [
                    new Box({
                        width: "106px",
                        height: "106px",
                        background: "linear-gradient(135deg, #EDD51C, #29C5F8)"
                    }),
                    new Center(
                        new Box({
                            width: "40px",
                            height: "40px",
                            background: "white",
                        }),
                    )
                ]
            })
        );
    }

    _buildHover(){
        return new Center(
            new Hover({
                onClickEffect: true,
                child: new Box({
                    width: "106px",
                    height: "106px",
                    background: "linear-gradient(135deg, #EDD51C, #29C5F8)",
                    child: new Center(
                        new Text("Click Here")
                    )
                }),
            })
        );
    }

    _buildStudyText(){
        return  new Card({
            elevation: ShadowLevel.LVL5,
            radius: "32px",
            background: "linear-gradient(135deg, #EDD51C, #29C5F8)",
            baseCSS: new BaseCSS({
                padding: "16px"
            }),
            child: new Card({
                background: "#3B3B3B",
                baseCSS: new BaseCSS({
                    padding: "16px"
                }),
                child: new Column({
                    children: [
                        new SectionTitle("Easy Learning", "64px"),
                        new Text(
                            "It is easy to learn because it does not deviate greatly from the basic DOM operations of JS. However, some knowledge of state management with Provider is required.",
                            new TextCSS({
                                fontCSS: new FontCSS({
                                    fontWeight: "bold",
                                    color: "white",
                                    fontSize: "25px",
                                    fontWeight: "bold"
                                }),
                            })
                        ),
                        new SpaceBox({
                            height: "16px",
                        }), 
                        new Grid({
                            minmaxPX: 322,
                            isJustifySpaceBetween: true,
                            children: [
                                new RelativePosition({
                                    relativePositions: RelativePositions.CENTER,
                                    child: this._buildElementJSCodeEx(),
                                }),
                                new Margin({
                                    all: "16px",
                                    child: new RelativePosition({
                                        relativePositions: RelativePositions.RIGHT,
                                        child: new BorderButton("See Details")
                                    }),
                                })
                            ]
                        }),
                    ]
                })
            })
        });
    }

    _buildElementJSCodeEx(){
        return new Row({
            children:[
                new Card({
                    background: "#1F1F1F",
                    radius: "8px",
                    baseCSS: new BaseCSS({
                        padding: "16px",
                    }),
                    elevation: ShadowLevel.LVL5,
                    child: new Row({
                        isVerticalCenter: true,
                        children: [
                            new Text(
                                "18 | ",
                                new TextCSS({
                                    fontCSS: new FontCSS({
                                        color: "#6E7681"
                                    })
                                })
                            ),
                            new SpaceBox({
                                width: "6px"
                            }),
                            new Text(
                                "document",
                                new TextCSS({
                                    fontCSS: new FontCSS({
                                        color: "#7CDCF0"
                                    })
                                })
                            ),
                            new Text(
                                ".",
                                new TextCSS({
                                    fontCSS: new FontCSS({
                                        color: "#C1CCCC"
                                    })
                                })
                            ),
                            new Text(
                                "createElement",
                                new TextCSS({
                                    fontCSS: new FontCSS({
                                        color: "#DCDCAA"
                                    })
                                })
                            ),
                            new Text(
                                "(",
                                new TextCSS({
                                    fontCSS: new FontCSS({
                                        color: "#1B9FF1"
                                    })
                                })
                            ),
                            new Text(
                                "\"div\"",
                                new TextCSS({
                                    fontCSS: new FontCSS({
                                        color: "#CE834A"
                                    })
                                })
                            ),
                            new Text(
                                ")",
                                new TextCSS({
                                    fontCSS: new FontCSS({
                                        color: "#1B9FF1"
                                    })
                                })
                            ),
                        ]
                    })
                })
            ]
        });
    }
}
