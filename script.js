import { assembleView, ProviderObserver, route, Scaffold, Header, Text, AppRouter } from "fjuttes";
import { routerProvider } from "./providers/routerProvider.js";
import { MyHeader } from "./widget/mHeader.js";
import { MyFooter } from "./widget/mFooter.js";
import { HomePage } from "./pages/HomePage.js";
import { ComponentWikiPage } from "./pages/ComponentWikiPage.js";

new ProviderObserver().outLogs();

const routes = {
    "/": HomePage,
    "wiki": ComponentWikiPage
}

assembleView(
    new AppRouter({
        routes: routes,
        page404: Text,
        homePage: HomePage,
        startPageRoute: "/"
    })
);

