/// <reference path="../types/jsx.d.ts"/>

import * as TypeDoc from "typedoc";
import { jsx } from "../jsx";

import { renderSignature } from "./signature";

export function renderConstructor(reflection: TypeDoc.DeclarationReflection) {
  const { signatures } = reflection;

  return signatures.map(reflection => renderSignature(reflection, 2));
}
