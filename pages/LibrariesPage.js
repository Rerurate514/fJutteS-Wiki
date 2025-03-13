import { View, Scaffold, Header } from "fjuttes";
import { MyHeader } from "../widget/mHeader.js";
import { MyFooter } from "../widget/mFooter.js";

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

    build(){

    }
}
