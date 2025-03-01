import { BaseCSS, Card, Column, Provider, Row, Text, View, RelativePosition, RelativePositions, TextCSS, FontCSS, ElevatedButton } from "fjuttes";
import { COMPONENTS } from "../const/COMPONENTS_COL.js";

export class ComponentWikiPage extends View {
    constructor(){
        const pageIndexProvider = Provider.createProvider(() => 0, "pageIndexProvider");

        const wikiRouterProvider = Provider.createProvider((ref) => {
            const page = new PageRouter({
                pages: [
                    new Text("ewq")
                ]
            });

            ref.watch(pageIndexProvider, (index) => {
                page.replacePage(index);
            });

            return page;
        }, "routerProvider");

        super({
            pageIndexProvider,
            wikiRouterProvider
        });
    }

    createWrapView(){
        return document.createElement("div");
    }

    build(){
        return new Row({
            children: [
                this._buildComColumn(),
            ]
        })
    }

    _buildComColumn(){
        const comItems = COMPONENTS.map((component, index) => {
            return new RelativePosition({
                relativePositions: RelativePositions.LEFT,
                child: new ElevatedButton({
                    onClick: () => {
                        console.log(index)
                    },
                    child: new Card({
                        baseCSS: new BaseCSS({
                            padding: "2px",
                        }),
                        child: new Text(
                            component,
                            new TextCSS({
                                fontCSS: new FontCSS({
                                    fontWeight: "bold"
                                })
                            })
                        )
                    })
                })
            })
        });

        return new Column({
            baseCSS: new BaseCSS({
                margin: "8px"
            }),
            children: comItems
        })
    }
}
