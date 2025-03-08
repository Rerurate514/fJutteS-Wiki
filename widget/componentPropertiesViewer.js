import { View, Text, Column, Card, SpaceBox, FontCSS, TextCSS, BaseCSS } from "fjuttes";

export class ComponentPropertiesViewer extends View {
    constructor({ componentName, properties }) {
        super({ componentName, properties });
    }

    createWrapView() {
        return document.createElement("div");
    }

    build() {
        const propertiesList = Object.entries(this.props.properties).map(
            ([propertyName, propertyDetails]) => {
                return new Card({
                    child: new Column({
                        children: [
                            new Text(
                                `${propertyName}: ${propertyDetails.type}`,
                                new TextCSS({ 
                                    fontCSS: new FontCSS({
                                        fontWeight: "bold"
                                    })
                                })
                            ),
                            new SpaceBox({ height: "4px" }),
                            new Text(propertyDetails.description),
                        ],
                    }),
                    baseCSS: new BaseCSS({
                        margin: "4px"
                    }),
                });
            }
        );

        return new Column({ 
            children: propertiesList
        });
    }
}
