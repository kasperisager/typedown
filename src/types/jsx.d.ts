declare namespace JSX {
  interface IntrinsicElements {
    /**
     * @see https://github.com/syntax-tree/mdast#heading
     */
    root: {};

    /**
     * @see https://github.com/syntax-tree/mdast#paragraph
     */
    paragraph: {};

    /**
     * @see https://github.com/syntax-tree/mdast#blockquote
     */
    blockquote: {};

    /**
     * @see https://github.com/syntax-tree/mdast#heading
     */
    heading: {
      depth: 1 | 2 | 3 | 4 | 5 | 6;
    };

    /**
     * @see https://github.com/syntax-tree/mdast#code
     */
    code: {
      value: string;
      lang?: string;
    };

    /**
     * @see https://github.com/syntax-tree/mdast#list
     */
    list: {
      ordered: boolean;
      start?: number;
      loose?: boolean;
    };

    /**
     * @see https://github.com/syntax-tree/mdast#listitem
     */
    listItem:
      | {}
      | {
          loose?: boolean;
          checked?: boolean;
        };

    /**
     * @see https://github.com/syntax-tree/mdast#thematicbreak
     */
    thematicBreak: {};

    /**
     * @see https://github.com/syntax-tree/mdast#emphasis
     */
    emphasis: {};

    /**
     * @see https://github.com/syntax-tree/mdast#strong
     */
    strong: {};

    /**
     * @see https://github.com/syntax-tree/mdast#link
     */
    link: {
      title?: string;
      url: string;
    };
  }

  interface Element {
    children?: Array<Element>;
  }

  interface ElementChildrenAttribute {
    children: {};
  }
}
