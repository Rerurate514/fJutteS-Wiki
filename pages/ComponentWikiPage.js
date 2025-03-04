import { PageRouter, BaseCSS, Card, Column, Provider, Row, Text, View, TextCSS, FontCSS, ElevatedButton, LimitedProviderScope, ShadowLevel, Box } from "fjuttes";
import { COMPONENTS } from "../const/COMPONENTS_COL.js";
import { generateComponentsWiki } from "../logic/generateComponentsWiki.js";

export class ComponentWikiPage extends View {
    constructor(index){
        const pageIndexProvider = Provider.createProvider(() => index ?? 0, "pageIndexProvider");

        const wikiRouterProvider = Provider.createProvider((ref) => {
            const page = new PageRouter({
                pages: generateComponentsWiki()
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
                new Box({
                    width: "100%",
                    height: "100%",
                    child: this.props.wikiRouterProvider.read()
                })
            ]
        })
    }

    _buildComColumn(){
        const comItems = COMPONENTS.map((component, index) => {
            return new LimitedProviderScope({
                watchingProviders: [ this.props.pageIndexProvider ],
                build: (currenetPageIndex) => {
                    return new Card({
                        background: currenetPageIndex == index 
                        ? "linear-gradient(135deg, #EDD51C, #29C5F8)"
                        : "transparent",
                        radius: "4px",
                        baseCSS: new BaseCSS({
                            margin: "2px"
                        }),
                        elevation: ShadowLevel.LVL3,
                        child: new ElevatedButton({
                            baseCSS: new BaseCSS({
                                padding: "4px",
                                width: "200px"
                            }),
                            onClick: () => {
                                this.props.pageIndexProvider.update(() => index);
                            },
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
                }
            })
        });

        return new Box({
            width: "fit-content",
            height: "100%",
            child: new Column({
                baseCSS: new BaseCSS({
                    margin: "8px"
                }),
                children: comItems
            })
        })
    }
}
