/// <reference path="../types/jsx.d.ts"/>

import * as TypeDoc from "typedoc";
import { jsx } from "../jsx";

import { renderConstructor } from "./constructor";
import { renderProperty } from "./property";
import { renderMethod } from "./method";

export function renderGroup(group: TypeDoc.ReflectionGroup) {
  const { title, children } = group;

  return [
    <heading depth={2}>{title}</heading>,

    children.map(reflection => {
      const { kind } = reflection;

      switch (kind) {
        case TypeDoc.ReflectionKind.Constructor:
          return renderConstructor(reflection);
        case TypeDoc.ReflectionKind.Property:
          return renderProperty(reflection);
        case TypeDoc.ReflectionKind.Method:
          return renderMethod(reflection);
      }
    })
  ];
}
