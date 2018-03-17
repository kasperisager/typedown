/// <reference path="../types/jsx.d.ts"/>

import * as TypeDoc from "typedoc";
import { jsx } from "../jsx";

import { renderParameter } from "./parameter";

export function renderType(
  type: TypeDoc.Type,
  options: { constraints?: boolean } = {}
) {
  const { name } = type;

  if (type instanceof TypeDoc.IntrinsicType) {
    return <strong>{name}</strong>;
  }

  if (type instanceof TypeDoc.ReferenceType) {
    const { reflection, typeArguments } = type;

    let title = <strong>{name}</strong>;

    if (reflection) {
      const { name, sources } = reflection;
      const [source] = sources;
      const { fileName } = source;

      title = (
        <link url={`${fileName}`}>
          <strong>{name}</strong>
        </link>
      );
    }

    return [
      title,
      typeArguments
        ? [
            "<",
            typeArguments.map(type => renderType(type, { constraints: false })),
            ">"
          ]
        : null
    ];
  }

  if (type instanceof TypeDoc.ReflectionType) {
    const { declaration } = type;
    const { signatures } = declaration;

    return signatures.map(signature => {
      const { parameters, type } = signature;
      return [
        "(",
        parameters
          ? parameters.map((reflection, i) => [
              i === 0 ? "" : ", ",
              renderParameter(reflection)
            ])
          : null,
        ") => ",
        renderType(type, { constraints: false })
      ];
    });
  }

  if (type instanceof TypeDoc.TypeParameterType) {
    const { constraint } = type;
    return [
      <strong>{name}</strong>,
      constraint && options.constraints !== false
        ? [" extends ", renderType(constraint, { constraints: false })]
        : null
    ];
  }

  return <strong>{type.toString()}</strong>;
}
