import { View, Scaffold, Header } from "fjuttes";
import { MyHeader } from "../widget/mHeader.js";
import { MyFooter } from "../widget/mFooter.js";

export class DeveloppersPage extends View {
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
            child: new _DeveloppersPage(),
            footer: new MyFooter()
        })
    }
}

class _DeveloppersPage extends View {
    constructor(){
        super();
    }

    createWrapView(){
        return document.createElement("div");
    }

    build(){

    }
}
