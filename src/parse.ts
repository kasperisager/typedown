/// <reference path="./types/jsx.d.ts"/>

const vfile = require("vfile");
const { Parser } = require("remark-parse");

export function parse(markdown: string): JSX.Element {
  return new Parser(null, vfile(markdown)).parse();
}
