import { Accordion, Box, Card, Center, Chips, Clip, Column, DropDownMenu, ElevatedButton, ExpandsPanel, FloatingActionButton, Grid, Header, Hover, Image, LimitedProviderScope, Link, Margin, Padding, PageRouter, Paginations, Position, RadioButton, RelativePosition, Row, Scaffold, Shrink, SimpleDialog, Slider, SpaceBox, Stack, Text, TextArea, TextForm, ShadowLevel, TextCSS, FontCSS, BaseCSS } from './your-components-file'; // 各コンポーネントのパス

// 擬似的なプロバイダーとページコンポーネント
const myProvider = { read: () => "Provider Value" };
const HomePage = () => new Text("Home Page");
const AboutPage = () => new Text("About Page");

export const COMPONENTS_USAGE_EXAMPLES_INSTANCES = {
    "Accordion": new Accordion({ sections: [{ header: "Section 1", content: new Text("Content of section 1") }, { header: "Section 2", content: new Text("Content of section 2") }] }),
    "Box": new Box({ width: "200px", height: "100px", background: "lightgray", child: new Text("This is a box") }),
    "Card": new Card({ child: new Text("This is a card"), elevation: ShadowLevel.LVL2, radius: "8px" }),
    "Center": new Center(new Text("Centered Text")),
    "Chips": new Chips({ labels: ["Tag 1", "Tag 2", "Tag 3"] }),
    "Clip": new Clip({ shape: "circle", child: new Image({ src: "image.jpg" }) }),
    "Column": new Column({ children: [new Text("Item 1"), new Text("Item 2"), new Text("Item 3")] }),
    "DropDownMenu": new DropDownMenu({ options: ["Option 1", "Option 2", "Option 3"], onSelect: (option) => console.log(option) }),
    "ElevatedButton": new ElevatedButton({ text: "Click Me", onClick: () => console.log("Button clicked") }),
    "ExpandsPanel": new ExpandsPanel({ header: "Details", content: new Text("Detailed information here") }),
    "FloatingActionButton": new FloatingActionButton({ icon: "add", onClick: () => console.log("FAB clicked") }),
    "Grid": new Grid({ children: [new Box({ width: "50px", height: "50px", background: "lightblue" }), new Box({ width: "50px", height: "50px", background: "lightgreen" })], columns: 2 }),
    "Header": new Header({ title: "Page Title", navigation: [new Link({ href: "/home", child: new Text("Home") }), new Link({ href: "/about", child: new Text("About") })] }),
    "Hover": new Hover({ child: new Text("Hover Me"), hoverStyle: { color: "red" } }),
    "Image": new Image({ src: "image.jpg", alt: "Example Image" }),
    "LimitedProviderScope": new LimitedProviderScope({ providers: [myProvider], child: new Text(myProvider.read()) }),
    "Link": new Link({ href: "https://example.com", child: new Text("Visit Example") }),
    "Margin": new Margin({ child: new Text("Margin Applied"), margin: "10px" }),
    "Padding": new Padding({ child: new Text("Padding Applied"), padding: "20px" }),
    "PageRouter": new PageRouter({ routes: { "/home": HomePage(), "/about": AboutPage() } }),
    "Paginations": new Paginations({ currentPage: 1, totalPages: 10, onPageChange: (page) => console.log(page) }),
    "Position": new Position({ child: new Text("Positioned Text"), top: 50, left: 50 }),
    "RadioButton": new RadioButton({ options: ["Option A", "Option B", "Option C"], onChange: (option) => console.log(option) }),
    "RelativePosition": new RelativePosition({ child: new Text("Relative Text"), top: "10px", left: "10px" }),
    "Row": new Row({ children: [new Text("Item A"), new Text("Item B"), new Text("Item C")] }),
    "Scaffold": new Scaffold({ header: new Header({ title: "App" }), body: new Text("Main Content"), footer: new Text("Footer") }),
    "Shrink": new Shrink({ child: new Text("Long Text That Shrinks") }),
    "SimpleDialog": new SimpleDialog({ title: "Alert", message: "Are you sure?", buttons: [{ text: "Yes", onClick: () => console.log("Yes") }, { text: "No", onClick: () => console.log("No") }] }),
    "Slider": new Slider({ min: 0, max: 100, value: 50, onChange: (value) => console.log(value) }),
    "SpaceBox": new SpaceBox({ width: "20px", height: "20px" }),
    "Stack": new Stack({ children: [new Box({ width: "100px", height: "100px", background: "red" }), new Text("Stacked Text")] }),
    "Text": new Text("Example Text", new TextCSS({ fontCSS: new FontCSS({ color: "blue" }) })),
    "TextArea": new TextArea({ placeholder: "Enter text here", onChange: (text) => console.log(text) }),
    "TextForm": new TextForm({ label: "Name", placeholder: "Your Name", onChange: (name) => console.log(name) })
};
