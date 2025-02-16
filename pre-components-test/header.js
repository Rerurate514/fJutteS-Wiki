import { View } from "fjuttes";

export class Header extends View {
    constructor({
        child,
        isStickyHeader = false
    }){
        super({
            child: child,
            isStickyHeader: isStickyHeader
        })
    }

    createWrapView(){
        return document.createElement("div");
    }

    styledView(element){
        if(this.props.isStickyHeader) element.style.position = "sticky";
        element.style.top = "0";

        return element;
    }

    build(){
        return this.props.child;
    }
}
