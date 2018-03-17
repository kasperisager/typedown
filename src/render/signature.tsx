/// <reference path="../types/jsx.d.ts"/>

import * as TypeDoc from "typedoc";
import { jsx } from "../jsx";
import { parse } from "../parse";

import { renderParameter } from "./parameter";
import { renderTypeParameter } from "./type-parameter";
import { renderType } from "./type";
import { renderDefinedIn } from "./defined-in";

export function renderSignature(reflection: TypeDoc.SignatureReflection) {
  const {
    sources,
    name,
    type,
    typeParameters,
    parameters,
    comment
  } = reflection;
  const [source] = sources;

  return [
    <paragraph>
      <strong>{name}</strong>
      {typeParameters && typeParameters.length
        ? [
            "<",
            typeParameters.map((reflection, i) => [
              i === 0 ? "" : ", ",
              renderTypeParameter(reflection)
            ]),
            ">"
          ]
        : null}
      (
      {parameters &&
        parameters.map((reflection, i) => [
          i === 0 ? "" : ", ",
          renderParameter(reflection)
        ])}
      ): {renderType(type)}
    </paragraph>,

    renderDefinedIn(source),

    comment ? parse(comment.shortText + "\n\n" + comment.text).children : null,

    comment && comment.tags && comment.tags.length
      ? [
          <paragraph>
            <strong>Examples</strong>
          </paragraph>,
          comment.tags.filter(tag => tag.tagName === "example").map(tag => (
            <paragraph>
              <code lang="tsx" value={tag.text.trim()} />
            </paragraph>
          ))
        ]
      : null
  ];
}
