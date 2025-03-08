import { COMPONENTS } from "../const/COMPONENTS_COL.js";
import { COMPONENTS_USAGE_EXAMPLES_INSTANCES } from "../const/COMPONENTS_EXAMPLE.js";
import { COMPONENTS_USAGE_EXAMPLES_INSTANCES_STRING } from "../const/COMPONENTS_EXAMPLE_CODE.js";
import { COMPONENTS_SUMMARY_EN } from "../const/COMPONENTS_SUMMARY.js";
import { WikiComponentTemplate } from "../widget/wikiComponentTemplate.js";

export function generateComponentsWiki(){
    return COMPONENTS.map((component, index) => {
        return new WikiComponentTemplate({
            name: component,
            summary: COMPONENTS_SUMMARY_EN[component],
            example: COMPONENTS_USAGE_EXAMPLES_INSTANCES[component],
            exampleCode: COMPONENTS_USAGE_EXAMPLES_INSTANCES_STRING[component]
        })
    });
}
