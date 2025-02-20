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
        element.style.marginLeft = "12%";
        element.style.marginRight = "12%";

        return element;
    }

    build(){
        return new Center(
            this.props.child
        );
    }
}
