import { Link, View, Hover, Card, Padding, Text, TextCSS, FontCSS, ElevatedButton } from "fjuttes";

export class BorderButton extends View {
    constructor(text, onClick){
        super({
            text, onClick
        });
    }

    createWrapView(){
        return document.createElement("div");
    }

    styledView(element){
        element.style.width = "fit-content";
        element.style.height = "fit-content";

        element.style.padding = "3px";

        element.style.background = "linear-gradient(135deg, #EDD51C, #29C5F8)";
        element.style.backgroundClip = "padding-box, border-box";
        element.style.backgroundOrigin = "border-box";

        element.style.borderRadius = "32px"

        return element;
    }

    build(){
        return new Card({
            background: "white",
            child: new ElevatedButton({
                onClick: this.props.onClick,
                radius: "128px",
                child: new Card({
                    child: new Padding({
                        all: "16px",
                        child: new Text(
                            this.props.text,
                            new TextCSS({
                                fontCSS: new FontCSS({
                                    color: "black"
                                })
                            })
                        )
                    }),
                }),
            })
        })
    }
}
