import { Provider, PageRouter } from "fjuttes";
import { HomePage } from "../pages/HomePage.js";
import { ComponentWikiPage } from "../pages/ComponentWikiPage.js";

export const pageIndexProvider = Provider.createProvider(() => 0, "pageIndexProvider");

export const routerProvider = Provider.createProvider((ref) => {
    const page = new PageRouter({
        pages: [
            new HomePage(),
            new ComponentWikiPage()
        ]
    });

    ref.watch(pageIndexProvider, (index) => {
        page.replacePage(index);
    });

    return page;
}, "routerProvider");
