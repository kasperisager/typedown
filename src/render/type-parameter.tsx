/// <reference path="../types/jsx.d.ts"/>

import * as TypeDoc from "typedoc";
import { jsx } from "../jsx";

import { renderType } from "./type";

export function renderTypeParameter(
  reflection: TypeDoc.TypeParameterReflection
) {
  const { name, type } = reflection;
  return [<strong>{name}</strong>, type && [" extends ", renderType(type)]];
}
