/// <reference path="../types/jsx.d.ts"/>

import * as TypeDoc from "typedoc";
import { jsx } from "../jsx";

import { renderSignature } from "./signature";

export function renderFunction(reflection: TypeDoc.DeclarationReflection) {
  const { name, signatures } = reflection;

  return (
    <root>
      <heading depth={1}>Function: {name}</heading>

      {signatures.map(
        (reflection, i) =>
          i === 0
            ? renderSignature(reflection)
            : [<thematicBreak />, renderSignature(reflection)]
      )}
    </root>
  );
}
