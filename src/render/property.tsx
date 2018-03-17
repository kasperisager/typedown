/// <reference path="../types/jsx.d.ts"/>

import * as TypeDoc from "typedoc";
import { jsx } from "../jsx";
import { parse } from "../parse";

import { renderType } from "./type";
import { renderDefinedIn } from "./defined-in";

export function renderProperty(reflection: TypeDoc.DeclarationReflection) {
  const { name, signatures, sources, type, comment } = reflection;
  const [source] = sources;

  return [
    <heading depth={3}>{name}</heading>,

    <paragraph>
      <strong>{name}:</strong>{" "}
      {type instanceof TypeDoc.ReferenceType ? (
        renderType(type)
      ) : (
        <strong>{type.toString()}</strong>
      )}
      {"defaultValue" in reflection ? " = " + reflection.defaultValue : null}
    </paragraph>,

    renderDefinedIn(source),

    comment ? parse(comment.shortText + "\n\n" + comment.text).children : null
  ];
}
