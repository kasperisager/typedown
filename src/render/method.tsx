/// <reference path="../types/jsx.d.ts"/>

import * as TypeDoc from "typedoc";
import { jsx } from "../jsx";

import { renderSignature } from "./signature";

export function renderMethod(reflection: TypeDoc.DeclarationReflection) {
  const { name, signatures } = reflection;

  return [
    <heading depth={3}>{name}</heading>,

    signatures.map(reflection => renderSignature(reflection))
  ];
}
