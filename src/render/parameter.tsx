/// <reference path="../types/jsx.d.ts"/>

import * as TypeDoc from "typedoc";
import { jsx } from "../jsx";

import { renderType } from "./type";

export function renderParameter(reflection: TypeDoc.ParameterReflection) {
  const { name, type } = reflection;

  return [name, ": ", renderType(type)];
}
