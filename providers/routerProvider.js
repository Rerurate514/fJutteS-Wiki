import { Provider, PageRouter, Text } from "fjuttes";
import { HomePage } from "../pages/HomePage.js";

export const pageIndexProvider = Provider.createProvider(() => 0, "pageIndexProvider");

export const routerProvider = Provider.createProvider((ref) => {
    const page = new PageRouter({
        pages: [
            new HomePage(),
            new Text("hello")
        ]
    });

    ref.watch(pageIndexProvider, (index) => {
        page.replacePage(index);
    });

    return page;
}, "routerProvider");
