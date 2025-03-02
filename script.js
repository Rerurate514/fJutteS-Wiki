import { assembleView } from "fjuttes";
import { routerProvider } from "./providers/routerProvider.js";
import { Scaffold } from "./pre-components-test/scaffold.js";
import { Header } from "./pre-components-test/header.js";
import { MyHeader } from "./widget/mHeader.js";
import { MyFooter } from "./widget/mFooter.js";

assembleView(
    new Scaffold({
        header: new Header({
            isStickyHeader: true,
            child: new MyHeader()
        }),
        child: routerProvider.read(),
        footer: new MyFooter()
    })
);
