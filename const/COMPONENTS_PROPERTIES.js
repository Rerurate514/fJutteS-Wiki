export const COMPONENTS_PROPERTIES_EN = {
    "Accordion": {
        properties: {
            items: {
                type: "Array<{title: string, content: Component}>",
                description: "An array of accordion items, each with a title and content."
            },
            radius: { type: "string", description: "The border radius of the accordion (e.g., '8px')." },
            shadowLevel: { type: "ShadowLevel", description: "The shadow level of the accordion." },
            baseCSS: { type: "BaseCSS", description: "The base CSS styles for the accordion." },
        }
    },
    "AccordionItem": {
        properties: {
            title: { type: "string", description: "The title of the accordion item." },
            content: { type: "Component", description: "The content of the accordion item." },
            radius: { type: "string", description: "The border radius of the accordion item (e.g., '8px')." },
            shadowLevel: { type: "ShadowLevel", description: "The shadow level of the accordion item." },
            baseCSS: { type: "BaseCSS", description: "The base CSS styles for the accordion item." },
        }
    },
    "Box": {
        properties: {
            width: { type: "string", description: "The width of the box (e.g., '200px')." },
            height: { type: "string", description: "The height of the box (e.g., '100px')." },
            background: { type: "string", description: "The background color of the box (e.g., 'lightgray')." },
            borderCSS: { type: "BorderCSS", description: "The border styles for the box." },
            webkitCSS: { type: "WebkitCSS", description: "The webkit vendor prefix styles for the box." },
            child: { type: "Component", description: "The child component inside the box." },
        }
    },
    "Card": {
        properties: {
            child: { type: "Component", description: "The child component inside the card." },
            elevation: { type: "ShadowLevel", description: "The shadow level of the card." },
            baseCSS: { type: "BaseCSS", description: "The base CSS styles for the card." },
            radius: { type: "string", description: "The border radius of the card (e.g., '8px')." },
            background: { type: "string", description: "The background color of the card (e.g., 'white')." },
            webkitCSS: { type: "WebkitCSS", description: "The webkit vendor prefix styles for the card." },
        }
    },
    "Center": {
        properties: {
            width: { type: "string", description: "The width of the center container (e.g., '200px')." },
            height: { type: "string", description: "The height of the center container (e.g., '100px')." },
            background: { type: "string", description: "The background color of the center container (e.g., 'lightgray')." },
            child: { type: "Component", description: "The component to be placed in the center." }
        }
    },
    "Chips": {
        properties: {
            text: { type: "string", description: "The text displayed within the chip." },
            background: { type: "string", description: "The background color of the chip (e.g., 'white')." },
            borderCSS: { type: "BorderCSS", description: "The border styles for the chip." },
        }
    },
    "Clip": {
        properties: {
            child: { type: "Component", description: "The child component to be clipped." },
            baseCSS: { type: "BaseCSS", description: "The base CSS styles for the clip." },
        }
    },
    "CodeBlock": {
        properties: {
            code: { type: "string", description: "The code string to be displayed." },
            language: { type: "string", description: "The programming language of the code (e.g., 'js')." },
            showLineNumbers: { type: "boolean", description: "Whether to show line numbers." }
        }
    },
    "Column": {
        properties: {
            children: { type: "Array<Component>", description: "An array of child components arranged vertically." },
            baseCSS: { type: "BaseCSS", description: "The base CSS styles for the column." },
            isHorizontalCenter: { type: "boolean", description: "Whether to horizontally center the column's children." },
        }
    },
    "DropDownMenu": {
        properties: {
            item: { type: "Array<DropDownMenuItem>", description: "An array of items for the dropdown menu." },
            provider: { type: "Provider", description: "The provider to manage the state of the dropdown menu." },
            baseCSS: { type: "BaseCSS", description: "The base CSS styles for the dropdown menu." },
        }
    },
    "DropDownMenuItem": {
        properties: {
            text: { type: "string", description: "The text of the dropdown menu item." },
            value: { type: "any", description: "The value of the dropdown menu item." },
        }
    },
    "ElevatedButton": {
        properties: {
            baseCSS: { type: "BaseCSS", description: "The base CSS styles for the button." },
            child: { type: "Component", description: "The child component inside the button (e.g., Text)." },
            onClick: { type: "Function", description: "The function to be executed when the button is clicked." },
            radius: { type: "string", description: "The border radius of the button (e.g., '8px')." },
        }
    },
    "ExpandsPanel": {
        properties: {
            titleItem: { type: "Component", description: "The title component for the expandable panel." },
            child: { type: "Component", description: "The content component for the expandable panel." },
            radius: { type: "string", description: "The border radius of the ExpandsPanel (e.g., '8px')." },
            buttonShadowLevel: { type: "ShadowLevel", description: "The shadow level of the expand button." },
            panelItemBackGround: { type: "string", description: "The background color of the expanded content." },
        }
    },
    "FloatingActionButton": {
        properties: {
            onClick: { type: "Function", description: "The function to be executed when the FAB is clicked." }
        }
    },
    "Grid": {
        properties: {
            minmaxPX: { type: "number", description: "The minimum and maximum size of the grid items in pixels." },
            children: { type: "Array<Component>", description: "An array of child components inside the grid." },
            baseCSS: { type: "BaseCSS", description: "The base CSS styles for the grid." },
            fraction: { type: "number", description: "The amount of fraction (fr) each column can use." },
            gap: { type: "string", description: "The gap between grid items (e.g., '10px')." },
        }
    },
    "Header": {
        properties: {
            child: { type: "Component", description: "The component displayed inside the header." },
            isStickyHeader: { type: "boolean", description: "Whether the header should be fixed on scroll." },
        }
    },
    "Hover": {
        properties: {
            child: { type: "Component", description: "The child component that triggers the hover effect." },
            radius: { type: "string", description: "The border radius of the hover component (e.g., '8px')." },
            shadow: { type: "ShadowLevel", description: "The shadow level on hover." },
            onClickEffect: { type: "boolean", description: "Whether to enable the ripple effect on click." },
        }
    },
    "Image": {
        properties: {
            src: { type: "string", description: "The source URL of the image." },
            alt: { type: "string", description: "The alternative text for the image." },
            title: { type: "string", description: "The title attribute of the image." },
            baseCSS: {
                type: "BaseCSS", description: "The base CSS styles for the image.",
                webkitCSS: { type: "WebkitCSS", description: "The webkit vendor prefix styles for the image." },
            }
        },
    },
    "LimitedProviderScope": {
        properties: {
            watchingProviders: { type: "Array<Provider>", description: "An array of providers to watch for changes." },
            build: { type: "Function", description: "A function that returns a component based on provider values." }
        }
    },
    "Link": {
        properties: {
            href: { type: "string", description: "The URL that the link points to." },
            child: { type: "Component", description: "The child component inside the link (e.g., Text)." },
            rel: { type: "string", description: "The relationship between the current document and the linked URL." },
            target: { type: "string", description: "Specifies where to display the linked URL." },
            isDownload: { type: "boolean", description: "Whether to force the resource to be downloaded." },
            isShownUnderline: { type: "boolean", description: "Whether to display the underline for the text." },
        }
    },
    "Margin": {
        properties: {
            child: { type: "Component", description: "The child component to apply the margin to." },
            all: { type: "string", description: "The margin applied to all sides (e.g., '10px')." },
            top: { type: "string", description: "The top margin." },
            bottom: { type: "string", description: "The bottom margin." },
            left: { type: "string", description: "The left margin." },
            right: { type: "string", description: "The right margin." },
        }
    },
    "Padding": {
        properties: {
            child: { type: "Component", description: "The child component to apply the padding to." },
            all: { type: "string", description: "The padding applied to all sides (e.g., '20px')." },
            top: { type: "string", description: "The top padding." },
            bottom: { type: "string", description: "The bottom padding." },
            left: { type: "string", description: "The left padding." },
            right: { type: "string", description: "The right padding." },
        }
    },
    "PageRouter": {
        properties: {
            pages: { type: "Array<Component>", description: "An array of page components used by the router." }
        }
    },
    "Paginations": {
        properties: {
            currentPage: { type: "number", description: "The currently active page." },
            totalPages: { type: "number", description: "The total number of pages." },
            onPageChange: { type: "Function", description: "The function to be executed when the page changes." },
            itemStyle: { type: "BaseCSS", description: "The style for pagination items." },
        }
    },
    "Position": {
        properties: {
            child: { type: "Component", description: "The child component to position." },
            top: { type: "number", description: "The distance from the top." },
            left: { type: "number", description: "The distance from the left." },
            bottom: { type: "number", description: "The distance from the bottom." },
            right: { type: "number", description: "The distance from the right." },
        }
    },
    "RadioButton": {
        properties: {
            labelText: { type: "string", description: "The label text for the radio button." },
            name: { type: "string", description: "The name of the radio button group." },
            checkedRadioButton: { type: "Function", description: "The function to be executed when the radio button is checked." },
            providers: { type: "Array<Provider>", description: "An array of providers the radio button watches." },
            isDisplay: { type: "boolean", description: "Whether to display the radio button." },
            isChecked: { type: "boolean", description: "Whether the radio button is initially checked." },
        }
    },
    "RelativePosition": {
        properties: {
            child: { type: "Component", description: "The child component to be positioned relatively." },
            relativePositions: { type: "RelativePositions", description: "The relative position (e.g., RelativePositions.RIGHT)." }
        }
    },
    "Row": {
        properties: {
            children: { type: "Array<Component>", description: "An array of child components (arranged horizontally)." },
            baseCSS: { type: "BaseCSS", description: "The base CSS styles." },
            isAlignCenter: { type: "boolean", description: "Whether to center the child elements." },
            isJustifySpaceAround: { type: "boolean", description: "Whether to distribute child elements evenly with space around them." },
            isJustifySpaceBetween: { type: "boolean", description: "Whether to distribute child elements evenly with space between them." },
            isVerticalCenter: { type: "boolean", description: "Whether to vertically center the child elements." },
        }
    },
    "Scaffold": {
        properties: {
            header: { type: "Component", description: "The header component of the scaffold." },
            body: { type: "Component", description: "The main body component of the scaffold." },
            footer: { type: "Component", description: "The footer component of the scaffold." },
            drawer: { type: "Component", description: "The drawer component of the scaffold." },
            floatingActionButton: { type: "Component", description: "The floating action button component of the scaffold." },
        }
    },
    "Shrink": {
        properties: {
            child: { type: "Component", description: "The child component that shrinks when content overflows." }
        }
    },
    "SimpleDialog": {
        properties: {
            child: { type: "Component", description: "The child component to display inside the dialog." },
            cancelText: { type: "Component", description: "The text for the cancel button." },
            okText: { type: "Component", description: "The text for the OK button." },
            onCancelClickedFn: { type: "Function", description: "The function to be executed when the cancel button is clicked." },
            onOkClickedFn: { type: "Function", description: "The function to be executed when the OK button is clicked." },
        }
    },
    "Slider": {
        properties: {
            provider: { type: "Provider", description: "The provider to manage the value of the slider." },
            min: { type: "number", description: "The minimum value." },
            max: { type: "number", description: "The maximum value." },
            value: { type: "number", description: "The initial value." },
            step: { type: "number", description: "The step value." },
            name: { type: "string", description: "The name of the slider." },
            onChange: { type: "Function", description: "The function to be executed when the value changes." },
            isDisplay: { type: "boolean", description: "Whether to display the slider." },
            baseCSS: { type: "BaseCSS", description: "The base CSS styles." },
        }
    },
    "SpaceBox": {
        properties: {
            width: { type: "string", description: "The width of the space box (e.g., '20px')." },
            height: { type: "string", description: "The height of the space box (e.g., '20px')." }
        }
    },
    "Stack": {
        properties: {
            baseCSS: { type: "BaseCSS", description: "The base CSS styles for the stack container." },
            children: { type: "Array<Component>", description: "An array of child components that are stacked on top of each other." }
        }
    },
    "Text": {
        properties: {
            value: { type: "string", description: "The text content to display." },
            textCSS: { type: "TextCSS", description: "The CSS styles for the text." }
        }
    },
    "TextArea": {
        properties: {
            provider: { type: "Provider", description: "The provider to manage the value of the text area." },
            value: { type: "string", description: "The initial value." },
            placeholder: { type: "string", description: "The placeholder text." },
            maxLength: { type: "number", description: "The maximum number of characters." },
            rows: { type: "number", description: "The number of rows." },
            cols: { type: "number", description: "The number of columns." },
            wrap: { type: "string", description: "How the text should be wrapped ('hard', 'soft', 'off')." },
            spellcheck: { type: "boolean", description: "Whether spell checking is enabled." },
            readonly: { type: "boolean", description: "Whether the text area is read-only." },
            disabled: { type: "boolean", description: "Whether the text area is disabled." },
            baseCSS: { type: "BaseCSS", description: "The base CSS styles." },
        }
    },
    "TextForm": {
        properties: {
            provider: { type: "Provider", description: "The provider to manage the value of the text form." },
            minLength: { type: "number", description: "The minimum number of characters." },
            maxLength: { type: "number", description: "The maximum number of characters." },
            value: { type: "string", description: "The initial value." },
            placeholder: { type: "string", description: "The placeholder text." },
            required: { type: "string", description: "The message for required input." },
            pattern: { type: "string", description: "The pattern (regular expression) for input value." },
            baseCSS: { type: "BaseCSS", description: "The base CSS styles." },
        }
    },
    "Transform": {
        properties: {
            child: { type: "Component", description: "The child component to apply the transformation to." },
            translateX: { type: "number", description: "The distance to move along the X-axis (px)." },
            translateY: { type: "number", description: "The distance to move along the Y-axis (px)." },
            translateZ: { type: "number", description: "The distance to move along the Z-axis (px)." },
            rotateX: { type: "number", description: "The rotation angle around the X-axis (deg)." },
            rotateY: { type: "number", description: "The rotation angle around the Y-axis (deg)." },
            rotateZ: { type: "number", description: "The rotation angle around the Z-axis (deg)." },
            scaleX: { type: "number", description: "The scaling factor along the X-axis." },
            scaleY: { type: "number", description: "The scaling factor along the Y-axis." },
            scaleZ: { type: "number", description: "The scaling factor along the Z-axis." },
            skewX: { type: "number", description: "The skew angle along the X-axis (deg)." },
            skewY: { type: "number", description: "The skew angle along the Y-axis (deg)." },
            baseCSS: { type: "BaseCSS", description: "The base CSS styles." },
        }
    },
    "RelativePositionAnimateSwitcher": {
        properties: {
            child: {
                type: "Component",
                description: "Child component to apply the animation to."
            },
            beginPosition: {
                type: "RelativePositions",
                description: "Relative position at the start of the animation."
            },
            endPosition: {
                type: "RelativePositions",
                description: "Relative position at the end of the animation."
            },
            duration: {
                type: "number",
                description: "Duration of the animation in milliseconds. Default is 600ms."
            }
        }
    },
    "LangSwitcher": {
        properties: {
            build: {
                type: "function",
                description: "Function to return the component to be rebuilt when switching languages. The current language code is passed as an argument."
            }
        }
    }
};

export const COMPONENTS_PROPERTIES_JA = {
    "Accordion": {
        properties: {
            items: {
                type: "Array<{title: string, content: Component}>",
                description: "各アイテムがタイトルとコンテンツを持つアコーディオンアイテムの配列。"
            },
            radius: { type: "string", description: "アコーディオンの角丸の半径（例：'8px'）" },
            shadowLevel: { type: "ShadowLevel", description: "アコーディオンの影のレベル" },
            baseCSS: { type: "BaseCSS", description: "アコーディオンの基本CSSスタイル" },
        }
    },
    "AccordionItem": {
        properties: {
            title: { type: "string", description: "アコーディオンアイテムのタイトル" },
            content: { type: "Component", description: "アコーディオンアイテムのコンテンツ" },
            radius: { type: "string", description: "アコーディオンアイテムの角丸の半径（例：'8px'）" },
            shadowLevel: { type: "ShadowLevel", description: "アコーディオンアイテムの影のレベル" },
            baseCSS: { type: "BaseCSS", description: "アコーディオンアイテムの基本CSSスタイル" },
        }
    },
    "Box": {
        properties: {
            width: { type: "string", description: "ボックスの幅（例：'200px'）" },
            height: { type: "string", description: "ボックスの高さ（例：'100px'）" },
            background: { type: "string", description: "ボックスの背景色（例：'lightgray'）" },
            borderCSS: { type: "BorderCSS", description: "ボックスのボーダースタイル" },
            webkitCSS: { type: "WebkitCSS", description: "ボックスのwebkitベンダープレフィックススタイル" },
            child: { type: "Component", description: "ボックス内の子コンポーネント" },
        }
    },
    "Card": {
        properties: {
            child: { type: "Component", description: "カード内の子コンポーネント" },
            elevation: { type: "ShadowLevel", description: "カードの影のレベル" },
            baseCSS: { type: "BaseCSS", description: "カードの基本CSSスタイル" },
            radius: { type: "string", description: "カードの角丸の半径（例：'8px'）" },
            background: { type: "string", description: "カードの背景色（例：'white'）" },
            webkitCSS: { type: "WebkitCSS", description: "カードのwebkitベンダープレフィックススタイル" },
        }
    },
    "Center": {
        properties: {
            width: { type: "string", description: "中央コンテナの幅（例：'200px'）" },
            height: { type: "string", description: "中央コンテナの高さ（例：'100px'）" },
            background: { type: "string", description: "中央コンテナの背景色（例：'lightgray'）" },
            child: { type: "Component", description: "中央に配置するコンポーネント" }
        }
    },
    "Chips": {
        properties: {
            text: { type: "string", description: "チップ内に表示されるテキスト。" },
            background: { type: "string", description: "チップの背景色。（例:'white'）" },
            borderCSS: { type: "BorderCSS", description: "チップのボーダースタイル" },
        }
    },
    "Clip": {
        properties: {
            child: { type: "Component", description: "クリップする子コンポーネント。" },
            baseCSS: { type: "BaseCSS", description: "クリップの基本CSSスタイル" },
        }
    },
    "CodeBlock": {
        properties: {
            code: { type: "string", description: "表示するコード文字列。" },
            language: { type: "string", description: "コードのプログラミング言語（例：'js'）。" },
            showLineNumbers: { type: "boolean", description: "行番号を表示するかどうか。" }
        }
    },
    "Column": {
        properties: {
            children: { type: "Array<Component>", description: "垂直方向に配置される子コンポーネントの配列。" },
            baseCSS: { type: "BaseCSS", description: "列の基本CSSスタイル。" },
            isHorizontalCenter: { type: "boolean", description: "列の子要素を水平方向に中央揃えにするかどうか。" },
        }
    },
    "DropDownMenu": {
        properties: {
            item: { type: "Array<DropDownMenuItem>", description: "ドロップダウンメニューのアイテムの配列。" },
            provider: { type: "Provider", description: "ドロップダウンメニューの状態を管理するためのプロバイダ。" },
            baseCSS: { type: "BaseCSS", description: "ドロップダウンメニューの基本CSSスタイル。" },
        }
    },
    "DropDownMenuItem": {
        properties: {
            text: { type: "string", description: "ドロップダウンメニュー項目のテキスト。" },
            value: { type: "any", description: "ドロップダウンメニュー項目の値。" },
        }
    },
    "ElevatedButton": {
        properties: {
            baseCSS: { type: "BaseCSS", description: "ボタンの基本CSSスタイル。" },
            child: { type: "Component", description: "ボタン内の子コンポーネント（例：Text）。" },
            onClick: { type: "Function", description: "ボタンがクリックされたときに実行される関数。" },
            radius: { type: "string", description: "ボタンの角丸の半径（例：'8px'）" },
        }
    },
    "ExpandsPanel": {
        properties: {
            titleItem: { type: "Component", description: "展開可能なパネルのタイトルコンポーネント。" },
            child: { type: "Component", description: "展開可能なパネルのコンテンツコンポーネント。" },
            radius: { type: "string", description: "ExpandsPanelの角丸の半径（例：'8px'）" },
            buttonShadowLevel: { type: "ShadowLevel", description: "展開ボタンの影のレベル" },
            panelItemBackGround: { type: "string", description: "展開されたコンテンツの背景色" },
        }
    },
    "FloatingActionButton": {
        properties: {
            onClick: { type: "Function", description: "FABがクリックされたときに実行される関数。" }
        }
    },
    "Grid": {
        properties: {
            minmaxPX: { type: "number", description: "グリッドアイテムの最小および最大サイズ（ピクセル単位）。" },
            children: { type: "Array<Component>", description: "グリッド内の子コンポーネントの配列。" },
            baseCSS: { type: "BaseCSS", description: "グリッドの基本CSSスタイル。" },
            fraction: { type: "number", description: "各列が利用できるフレクション（fr）の量。" },
            gap: { type: "string", description: "グリッドアイテム間のギャップ（例：'10px'）。" },
        }
    },
    "Header": {
        properties: {
            child: { type: "Component", description: "ヘッダー内に表示されるコンポーネント。" },
            isStickyHeader: { type: "boolean", description: "ヘッダーをスクロール時に固定するかどうか。" },
        }
    },
    "Hover": {
        properties: {
            child: { type: "Component", description: "ホバー効果をトリガーする子コンポーネント。" },
            radius: { type: "string", description: "ホバーコンポーネントの角丸の半径（例：'8px'）" },
            shadow: { type: "ShadowLevel", description: "ホバー時の影のレベル" },
            onClickEffect: { type: "boolean", description: "クリック時のリップル効果を有効にするかどうか" },
        }
    },
    "Image": {
        properties: {
            src: { type: "string", description: "画像のソースURL。" },
            alt: { type: "string", description: "画像の代替テキスト。" },
            title: { type: "string", description: "画像のタイトル属性。" },
            baseCSS: { type: "BaseCSS", description: "画像の基本CSSスタイル。" },
            webkitCSS: { type: "WebkitCSS", description: "画像のwebkitベンダープレフィックススタイル。" },
        }
    },
    "LimitedProviderScope": {
        properties: {
            watchingProviders: { type: "Array<Provider>", description: "変更を監視するプロバイダの配列。" },
            build: { type: "Function", description: "プロバイダの値に基づいてコンポーネントを返す関数。" }
        }
    },
    "Link": {
        properties: {
            href: { type: "string", description: "リンクが指すURL。" },
            child: { type: "Component", description: "リンク内の子コンポーネント（例：Text）。" },
            rel: { type: "string", description: "現在のドキュメントとリンクされたドキュメントとの関係。" },
            target: { type: "string", description: "属性は、リンクされたURLの表示場所を指定します。" },
            isDownload: { type: "boolean", description: "リソースをダウンロードさせるかどうか。" },
            isShownUnderline: { type: "boolean", description: "テキストの下線を表示するかどうか。" },
        }
    },
    "Margin": {
        properties: {
            child: { type: "Component", description: "マージンを適用する子コンポーネント。" },
            all: { type: "string", description: "すべての辺に適用されるマージン（例：'10px'）。" },
            top: { type: "string", description: "上側のマージン。" },
            bottom: { type: "string", description: "下側のマージン。" },
            left: { type: "string", description: "左側のマージン。" },
            right: { type: "string", description: "右側のマージン。" },
        }
    },
    "Padding": {
        properties: {
            child: { type: "Component", description: "パディングを適用する子コンポーネント。" },
            all: { type: "string", description: "すべての辺に適用されるパディング（例：'20px'）。" },
            top: { type: "string", description: "上側のパディング。" },
            bottom: { type: "string", description: "下側のパディング。" },
            left: { type: "string", description: "左側のパディング。" },
            right: { type: "string", description: "右側のパディング。" },
        }
    },
    "PageRouter": {
        properties: {
            pages: { type: "Array<Component>", description: "ルーターで使用されるページコンポーネントの配列。" }
        }
    },
    "Paginations": {
        properties: {
            currentPage: { type: "number", description: "現在のアクティブなページ。" },
            totalPages: { type: "number", description: "総ページ数。" },
            onPageChange: { type: "Function", description: "ページが変更されたときに実行される関数。" },
            itemStyle: { type: "BaseCSS", description: "ページネーションアイテムのスタイル。" },
        }
    },
    "Position": {
        properties: {
            child: { type: "Component", description: "配置する子コンポーネント。" },
            top: { type: "number", description: "上端からの距離。" },
            left: { type: "number", description: "左端からの距離。" },
            bottom: { type: "number", description: "下端からの距離。" },
            right: { type: "number", description: "右端からの距離。" },
        }
    },
    "RadioButton": {
        properties: {
            labelText: { type: "string", description: "ラジオボタンのラベルテキスト。" },
            name: { type: "string", description: "ラジオボタングループの名前。" },
            checkedRadioButton: { type: "Function", description: "ラジオボタンがチェックされたときに実行される関数。" },
            providers: { type: "Array<Provider>", description: "ラジオボタンが監視するプロバイダの配列。" },
            isDisplay: { type: "boolean", description: "ラジオボタンを表示するかどうか。" },
            isChecked: { type: "boolean", description: "ラジオボタンが初期状態でチェックされているかどうか。" },
        }
    },
    "RelativePosition": {
        properties: {
            child: { type: "Component", description: "相対的に配置される子コンポーネント。" },
            relativePositions: { type: "RelativePositions", description: "相対位置（例：RelativePositions.RIGHT）。" }
        }
    },
    "Row": {
        properties: {
            children: { type: "Array<Component>", description: "子コンポーネントの配列（水平方向に配置）" },
            baseCSS: { type: "BaseCSS", description: "基本CSSスタイル" },
            isAlignCenter: { type: "boolean", description: "子要素を中央揃えにするかどうか" },
            isJustifySpaceAround: { type: "boolean", description: "子要素を均等に配置し、両端にスペースを設けるかどうか" },
            isJustifySpaceBetween: { type: "boolean", description: "子要素を均等に配置し、両端を詰めるかどうか" },
            isVerticalCenter: { type: "boolean", description: "子要素を垂直方向中央揃えにするかどうか" },
        }
    },
    "Scaffold": {
        properties: {
            header: { type: "Component", description: "スキャフォールドのヘッダーコンポーネント。" },
            body: { type: "Component", description: "スキャフォールドのメインボディコンポーネント。" },
            footer: { type: "Component", description: "スキャフォールドのフッターコンポーネント。" },
            drawer: { type: "Component", description: "スキャフォールドのドロワーコンポーネント。" },
            floatingActionButton: { type: "Component", description: "スキャフォールドのフローティングアクションボタンコンポーネント。" },
        }
    },
    "Shrink": {
        properties: {
            child: { type: "Component", description: "コンテンツがオーバーフローした場合に縮小される子コンポーネント。" }
        }
    },
    "SimpleDialog": {
        properties: {
            child: { type: "Component", description: "ダイアログ内に表示する子コンポーネント。" },
            cancelText: { type: "Component", description: "キャンセルボタンのテキスト。" },
            okText: { type: "Component", description: "OKボタンのテキスト。" },
            onCancelClickedFn: { type: "Function", description: "キャンセルボタンがクリックされたときに実行される関数。" },
            onOkClickedFn: { type: "Function", description: "OKボタンがクリックされたときに実行される関数。" },
        }
    },
    "Slider": {
        properties: {
            provider: { type: "Provider", description: "スライダーの値を管理するプロバイダ。" },
            min: { type: "number", description: "最小値。" },
            max: { type: "number", description: "最大値。" },
            value: { type: "number", description: "初期値。" },
            step: { type: "number", description: "ステップ値。" },
            name: { type: "string", description: "スライダーの名前。" },
            onChange: { type: "Function", description: "値が変更されたときに実行される関数。" },
            isDisplay: { type: "boolean", description: "スライダーの表示/非表示。" },
            baseCSS: { type: "BaseCSS", description: "基本CSSスタイル。" },
        }
    },
    "SpaceBox": {
        properties: {
            width: { type: "string", description: "スペースボックスの幅（例：'20px'）。" },
            height: { type: "string", description: "スペースボックスの高さ（例：'20px'）。" }
        }
    },
    "Stack": {
        properties: {
            baseCSS: { type: "BaseCSS", description: "スタックコンテナの基本CSSスタイル。" },
            children: { type: "Array<Component>", description: "互いに重ねて配置される子コンポーネントの配列。" }
        }
    },
    "Text": {
        properties: {
            value: { type: "string", description: "表示するテキストコンテンツ。" },
            textCSS: { type: "TextCSS", description: "テキストのCSSスタイル。" }
        }
    },
    "TextArea": {
        properties: {
            provider: { type: "Provider", description: "テキストエリアの値を管理するプロバイダ。" },
            value: { type: "string", description: "初期値。" },
            placeholder: { type: "string", description: "プレースホルダー。" },
            maxLength: { type: "number", description: "最大文字数。" },
            rows: { type: "number", description: "行数。" },
            cols: { type: "number", description: "列数。" },
            wrap: { type: "string", description: "テキストの折り返し方法 ('hard', 'soft', 'off')。" },
            spellcheck: { type: "boolean", description: "スペルチェックの有効/無効。" },
            readonly: { type: "boolean", description: "読み取り専用の有効/無効。" },
            disabled: { type: "boolean", description: "無効の有効/無効。" },
            baseCSS: { type: "BaseCSS", description: "基本CSSスタイル。" },
        }
    },
    "TextForm": {
        properties: {
            provider: { type: "Provider", description: "テキストフォームの値を管理するプロバイダ。" },
            minLength: { type: "number", description: "最小文字数。" },
            maxLength: { type: "number", description: "最大文字数。" },
            value: { type: "string", description: "初期値。" },
            placeholder: { type: "string", description: "プレースホルダー。" },
            required: { type: "string", description: "必須入力のメッセージ。" },
            pattern: { type: "string", description: "入力値のパターン（正規表現）。" },
            baseCSS: { type: "BaseCSS", description: "基本CSSスタイル。" },
        }
    },
    "Transform": {
        properties: {
            child: { type: "Component", description: "変換を適用する子コンポーネント。" },
            translateX: { type: "number", description: "X軸方向への移動距離 (px)。" },
            translateY: { type: "number", description: "Y軸方向への移動距離 (px)。" },
            translateZ: { type: "number", description: "Z軸方向への移動距離 (px)。" },
            rotateX: { type: "number", description: "X軸を中心とした回転角度 (deg)。" },
            rotateY: { type: "number", description: "Y軸を中心とした回転角度 (deg)。" },
            rotateZ: { type: "number", description: "Z軸を中心とした回転角度 (deg)。" },
            scaleX: { type: "number", description: "X軸方向への拡大縮小率。" },
            scaleY: { type: "number", description: "Y軸方向への拡大縮小率。" },
            scaleZ: { type: "number", description: "Z軸方向への拡大縮小率。" },
            skewX: { type: "number", description: "X軸方向への歪み角度 (deg)。" },
            skewY: { type: "number", description: "Y軸方向への歪み角度 (deg)。" },
            baseCSS: { type: "BaseCSS", description: "基本CSSスタイル。" },
        }
    },
    "RelativePositionAnimateSwitcher": {
        properties: {
            child: {
                type: "Component",
                description: "アニメーションを適用する子コンポーネント。"
            },
            beginPosition: {
                type: "RelativePositions",
                description: "アニメーション開始時の相対位置。"
            },
            endPosition: {
                type: "RelativePositions",
                description: "アニメーション終了時の相対位置。"
            },
            duration: {
                type: "number",
                description: "アニメーションの実行時間（ミリ秒）。デフォルトは600ミリ秒。"
            }
        }
    },
    "LangSwitcher": {
        properties: {
            build: {
                type: "function",
                description: "言語切り替え時に再構築されるコンポーネントを返す関数。引数として現在の言語コードが渡されます。"
            }
        }
    }
};
