import { assembleView } from "fjuttes";
import { pageIndexProvider, routerProvider } from "./providers/routerProvider.js";
import { Scaffold } from "./pre-components-test/scaffold.js";
import { Header } from "./pre-components-test/header.js";
import { MyHeader } from "./widget/mHeader.js";
import { PageMargin } from "./widget/pageMargin.js";
import { MyFooter } from "./widget/mFooter.js";

assembleView(
    new Scaffold({
        header: new Header({
            isStickyHeader: true,
            child: new MyHeader()
        }),
        child: new PageMargin(
            routerProvider.read()
        ),
        footer: new MyFooter()
    })
);
