import { View, Scaffold, Header, Column, Box, Row, ElevatedButton, Text, BorderCSS, Center, Margin, BaseCSS, Card, SpaceBox } from "fjuttes";
import { MyHeader } from "../widget/mHeader.js";
import { MyFooter } from "../widget/mFooter.js";
import { ColoredText } from "../widget/coloredText.js";
import { PageMargin } from "../widget/pageMargin.js";

export class LibrariesPage extends View {
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
            child: new _LibrariesPage(),
            footer: new MyFooter()
        })
    }
}

class _LibrariesPage extends View {
    constructor(){
        super();
    }

    createWrapView(){
        return document.createElement("div");
    }

    build() {
        return new PageMargin(
            new Column({
                children: [
                    this.buildLibCard(
                        "Core",
                        "This library contains the foundational code needed to create components and widgets.",
                        "/core"
                    ),
                    new SpaceBox({
                        height: "16px"
                    }),
                    this.buildLibCard(
                        "Jaterials",
                        "This library houses a collection of basic components.",
                        "/jaterials"
                    ),
                    new SpaceBox({
                        height: "16px"
                    }),
                    this.buildLibCard(
                        "CSSKit",
                        "This library provides a simplified way to apply CSS styles to components defined in Jaterials.",
                        "/csskit"
                    ),
                    new SpaceBox({
                        height: "16px"
                    }),
                    this.buildLibCard(
                        "Jiperes",
                        "This library provides state management using providers, along with components that utilize this state management system.",
                        "/jiperes"
                    ),
                    new SpaceBox({
                        height: "16px"
                    }),
                    this.buildLibCard(
                        "Jexts",
                        "This library enables page routing using AppRouter and hash-based navigation.",
                        "/jexts"
                    ),
                ]
            })
        );
    }

    buildLibCard(libTitle, bio, link){
        return new Row({
            children: [
                new Box({
                    width: "170px",
                    height: "100px",
                    child: new ColoredText({
                        text: libTitle,
                        fontSize: "64px"
                    })
                }),
                new Box({
                    width: "550px",
                    height: "100px",
                    child: new Center(
                        new Text(bio)
                    )
                }),
                new ElevatedButton({
                    baseCSS: new BaseCSS({
                        padding: "16px",
                    }),
                    child: new Text(">")
                })
            ]
        })
    }
}
