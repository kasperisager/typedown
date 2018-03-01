/// <reference path="./types/jsx.d.ts"/>

const vfile = require("vfile");
const { Compiler } = require("remark-stringify");

export function compile(element: JSX.Element): string {
  return new Compiler(element, vfile()).compile();
}
