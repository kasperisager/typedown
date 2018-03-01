/// <reference path="./types/jsx.d.ts"/>

import * as TypeDoc from "typedoc";
import { jsx } from "./jsx";
import { compile } from "./compile";
import { parse } from "./parse";

export type Documentation = { [path: string]: string };

export function render(
  reflection: TypeDoc.Reflection,
  documentation: Documentation = {}
): Documentation {
  if (reflection instanceof TypeDoc.ProjectReflection) {
    documentation["README.md"] = compile(renderProject(reflection));

    const functions = reflection.getReflectionsByKind(
      TypeDoc.ReflectionKind.Function
    );

    for (const reflection of functions) {
      documentation[`functions/${reflection.name}.md`] = compile(
        renderFunction(reflection as TypeDoc.DeclarationReflection)
      );
    }
  }

  return documentation;
}

export function renderProject(
  reflection: TypeDoc.ProjectReflection
): JSX.Element {
  const functions = reflection.getReflectionsByKind(
    TypeDoc.ReflectionKind.Function
  );

  return (
    <root>
      <heading depth={1}>{reflection.name}</heading>

      {functions.length && <heading depth={2}>Functions</heading>}

      {functions.length && (
        <list ordered={false}>
          {functions.map(({ name }) => (
            <listItem>
              <link url={`functions/${name}.md`}>{name}</link>
            </listItem>
          ))}
        </list>
      )}
    </root>
  );
}

export function renderFunction(reflection: TypeDoc.DeclarationReflection) {
  const [source] = reflection.sources;

  return (
    <root>
      <heading depth={1}>Function: {reflection.name}</heading>

      <paragraph>
        {"Defined in "}
        <link url={source.fileName}>
          {source.fileName}:{source.line}
        </link>
      </paragraph>

      {reflection.signatures.map(renderSignature)}
    </root>
  );
}

export function renderSignature(reflection: TypeDoc.SignatureReflection) {
  const { name, typeParameters, comment } = reflection;

  return [
    <paragraph>
      <strong>{name}</strong>
      {typeParameters.length && [
        "<",
        typeParameters.map((reflection, i) => [
          i === 0 ? "" : ", ",
          renderTypeParameter(reflection)
        ]),
        ">"
      ]}
      ( )
    </paragraph>,

    comment ? parse(comment.shortText + "\n\n" + comment.text).children : null,

    comment && comment.tags.length
      ? [
          <heading depth={2}>Examples</heading>,
          comment.tags.filter(tag => tag.tagName === "example").map(tag => (
            <paragraph>
              <code lang="tsx" value={tag.text.trim()} />
            </paragraph>
          ))
        ]
      : null
  ];
}

export function renderTypeParameter(
  reflection: TypeDoc.TypeParameterReflection
) {
  const { name, type } = reflection;

  if (type instanceof TypeDoc.ReferenceType) {
    return [<strong>{name}</strong>, " extends ", renderType(type.reflection)];
  }

  return <strong>{name}</strong>;
}

export function renderType(reflection: TypeDoc.Reflection) {
  const [source] = reflection.sources;
  return (
    <link url={`${source.fileName}`}>
      <strong>{reflection.name}</strong>
    </link>
  );
}

export function renderParameter(reflection: TypeDoc.ParameterReflection) {
  console.log(reflection);
}
