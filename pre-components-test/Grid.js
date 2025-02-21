import { View } from "fjuttes";

export class Grid extends View {
    constructor({
        children
    }){
        super({
            children: children
        });
    }

    createWrapView(){
        return document.createElement("div");
    }

    styledView(element){
        element.style.display = "grid";
        element.style.gridTemplateColumns = "repeat(auto-fit, minmax(100px, 12fr))";
        element.style.gap = "20px";

        return element;
    }

    build(){
        return this.props.children;
    }
}
