import { assembleView, ProviderObserver, route, Scaffold, Header, Text, AppRouter } from "fjuttes"
import { MyHeader } from "./widget/mHeader.js";
import { MyFooter } from "./widget/mFooter.js";
import { HomePage } from "./pages/HomePage.js";
import { ComponentWikiPage } from "./pages/ComponentWikiPage.js";
import { LibrariesPage } from "./pages/LibrariesPage.js";
import { DeveloppersPage } from "./pages/developpersPage.js";

new ProviderObserver().outLogs();

const routes = {
    "/": HomePage,
    "wiki": ComponentWikiPage,
    "lib": LibrariesPage,
    "dev": DeveloppersPage
}

assembleView(
    new AppRouter({
        routes: routes,
        page404: Text,
        homePage: HomePage,
        startPageRoute: "/"
    })
);

