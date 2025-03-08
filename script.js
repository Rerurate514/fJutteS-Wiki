import { assembleView, ProviderObserver, Scaffold, Header } from "fjuttes";
import { routerProvider } from "./providers/routerProvider.js";
import { MyHeader } from "./widget/mHeader.js";
import { MyFooter } from "./widget/mFooter.js";

new ProviderObserver().outLogs();

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
