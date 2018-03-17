/// <reference path="../types/jsx.d.ts"/>

import * as TypeDoc from "typedoc";
import { jsx } from "../jsx";

import { renderGroup } from "./group";

export function renderClass(reflection: TypeDoc.DeclarationReflection) {
  return (
    <root>
      <heading depth={1}>Class: {reflection.name}</heading>

      {reflection.groups && reflection.groups.map(renderGroup)}
    </root>
  );
}
