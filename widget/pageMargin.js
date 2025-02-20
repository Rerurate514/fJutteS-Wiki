import { Center, View } from "fjuttes";

export class PageMargin extends View {
    constructor(child){
        super({
            child: child
        });
    }

    createWrapView(){
        return document.createElement("div");
    }

    styledView(element){
        element.style.marginLeft = "25%";
        element.style.marginRight = "25%";

        return element;
    }

    build(){
        return new Center(
            this.props.child
        );
    }
}
