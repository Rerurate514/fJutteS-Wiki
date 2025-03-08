export const COMPONENTS_USAGE_EXAMPLES_INSTANCES_STRING = {
    "Accordion": `
new Accordion({
    items: [{
        title: "Section 1",
        content: new Text("Content of section 1")
    }, {
        title: "Section 2",
        content: new Text("Content of section 2")
    }]
})`,
    "Box": `
new Box({
    width: "200px",
    height: "100px",
    background: "lightgray",
    child: new Text("This is a box")
})`,
    "Card": `
new Card({
    child: new Text("This is a card"),
    elevation: ShadowLevel.LVL2,
    baseCSS: new BaseCSS({
        padding: "16px"
    }),
    radius: "8px"
})`,
    "Center": `
new Box({
    width: "200px",
    height: "100px",
    background: "lightgray",
    child: new Center(
        new Text("Centered Text")
    )
})`,
    "Chips": `
new Chips({
    text: "Chiped Text"
})`,
    "Clip": `
new Clip({
    child: new Image({
        src: LOGO_URL,
        baseCSS: new BaseCSS({
            width: "64px"
        })
    }),
})`,
    "CodeBlock": `
new CodeBlock({
    code: codeExampleString,
})`,
    "Column": `
new Column({
    children: [new Text("Item 1"), new Text("Item 2"), new Text("Item 3")]
})`,
    "DropDownMenu": `
const myProvider = Provider.createProvider(() => "undefined");

new Column({
    children: [
        new DropDownMenu({
            item: [
                new DropDownMenuItem({ text: "Option 1", value: "1" }),
                new DropDownMenuItem({ text: "Option 2", value: "2" }),
                new DropDownMenuItem({ text: "Option 3", value: "3" })
            ],
            provider: myProvider
        }),
        new SpaceBox({ height: "8px" }),
        new LimitedProviderScope({
            watchingProviders: [ myProvider ],
            build: (current) => new Text(\`current Value is \${current}\`)
        })
    ]
})`,
    "ElevatedButton": `
new ElevatedButton({
    baseCSS: new BaseCSS({
        padding: "16px"
    }),
    child: new Text("Click Me"),
    onClick: () => console.log("Button clicked")
})`,
    "ExpandsPanel": `
new ExpandsPanel({
    titleItem: new Text("Details"),
    child: new Text("Detailed information here")
})`,
    "FloatingActionButton": `
new FloatingActionButton({
    onClick: () => console.log("FAB clicked")
})`,
    "Grid": `
const myProvider = Provider.createProvider(() => "undefined");

new Column({
    baseCSS: new BaseCSS({
        width: "200px",
    }),
    children: [
        new LimitedProviderScope({
            watchingProviders: [ myProvider ],
            build: (value) => {
                return new Box({
                    width: \`\${value * 2}px\`,
                    height: "200px",
                    background: "#BBBBBB",
                    child: new Grid({
                        minmaxPX: 50,
                        children: [
                            new Box({
                                width: "50px",
                                height: "50px",
                                background: "green"
                            }),
                            new Box({
                                width: "50px",
                                height: "50px",
                                background: "lightgreen"
                            }),
                            new Box({
                                width: "50px",
                                height: "50px",
                                background: "lightblue"
                            }),
                            new Box({
                                width: "50px",
                                height: "50px",
                                background: "blue"
                            }),
                        ],
                    })
                });
            }
        }),
        new SpaceBox({
            height: "32px"
        }),
        new Slider({
            value: 50,
            provider: myProvider
        }),
        new Text("Control Slider to resize")
    ]
})`,
    "Header": `
new Header({
    title: "Page Title",
    navigation: [new Link({
        href: "/home",
        child: new Text("Home")
    }), new Link({
        href: "/about",
        child: new Text("About")
    })]
})`,
    "Hover": `
new Hover({
    child: new Text("Hover Me")
})`,
    "Image": `
new Image({
    src: "image.jpg",
    alt: "Example Image"
})`,
    "LimitedProviderScope": `
const myProvider = Provider.createProvider(() => "undefined");

new Column({
    children: [
        new LimitedProviderScope({
            watchingProviders: [myProvider],
            build: (value) => new Text(value)
        }),
        new SpaceBox({ height: "8px" }),
        providerText("LimitedProviderScope")
    ]
})`,
    "Link": `
new Link({
    href: "https://example.com",
    child: new Text("Visit Example")
})`,
    "Margin": `
new Margin({
    child: new Text("Margin Applied"),
    all: "10px"
})`,
    "Padding": `
new Padding({
    child: new Text("Padding Applied"),
    all: "20px"
})`,
    "PageRouter": `
new PageRouter({
    pages: [HomePage, AboutPage]
})`,
    "Paginations": `
new Paginations({
    currentPage: 1,
    totalPages: 10,
    onPageChange: (page) => console.log(page)
})`,
    "Position": `
new Position({
    child: new Text("Positioned Text"),
    top: 50,
    left: 50
})`,
    "RadioButton": `
new RadioButton({
    labelText: "Option A",
    name: "radio-group",
    checkedRadioButton: (e, r) => { console.log(e, r) }
})`,
    "RelativePosition": `
new RelativePosition({
    child: new Text("Relative Text"),
    relativePositions: RelativePositions.RIGHT
})`,
    "Row": `
new Row({
    children: [new Text("Item A"), new Text("Item B"), new Text("Item C")]
})`,
    "Scaffold": `
new Scaffold({
    header: new Header({
        title: "App"
    }),
    body: new Text("Main Content"),
    footer: new Text("Footer")
})`,
    "Shrink": `
new Shrink({
    child: new Text("Long Text That Shrinks")
})`,
    "SimpleDialog": `
new ElevatedButton({
    baseCSS: new BaseCSS({
        padding: "16px"
    }),
    child: new Text("Click Me"),
    onClick: () => {
        new SimpleDialog({
            child: new Text("Are you sure?"),
            onOkClickedFn: () => console.log("Yes"),
            onCancelClickedFn: () => console.log("No")
        }).openModal();
    }
})`,
    "Slider": `
const myProvider = Provider.createProvider(() => "undefined");

new Column({
    children: [
        new Slider({
            value: 50,
            provider: myProvider
        }),
        new SpaceBox({ height: "8px" }),
        providerText("50")
    ]
})`,
    "SpaceBox": `
new SpaceBox({
    width: "20px",
    height: "20px"
})`,
    "Stack": `
new Stack({
    baseCSS: new BaseCSS({
        width: "100px",
        height: "100px"
    }),
    children: [new Box({
        width: "100px",
        height: "100px",
        background: "red"
    }), new Text("Stacked Text")]
})`,
    "Text": `
new Text(
    "Example Text", 
    new TextCSS({
        fontCSS: new FontCSS({
            color: "blue"
        })
    }
))`,
    "TextArea": `
const myProvider = Provider.createProvider(() => "undefined");

new Column({
    children: [
        new TextArea({
            placeholder: "Enter text here",
            rows: 2,
            cols: 2,
            provider: myProvider
        }),
        new SpaceBox({ height: "8px" }),
        new LimitedProviderScope({
            watchingProviders: [ myProvider ],
            build: (current) => new Text(\`current Value is \${current}\`)
        })
    ]
})`,
    "TextForm": `
const myProvider = Provider.createProvider(() => "undefined");

new Column({
    children: [
        new TextForm({
            placeholder:"Your Name",
            maxLength: 50,
            provider: myProvider
        }),
        new SpaceBox({ height: "8px" }),
        new LimitedProviderScope({
            watchingProviders: [ myProvider ],
            build: (current) => new Text(\`current Value is \${current}\`)
        })
    ]
})`,
}
