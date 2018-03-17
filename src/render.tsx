/// <reference path="./types/jsx.d.ts"/>

import * as TypeDoc from "typedoc";
import { jsx } from "./jsx";
import { compile } from "./compile";
import { parse } from "./parse";

import { renderClass } from "./render/class";
import { renderFunction } from "./render/function";
import { renderProject } from "./render/project";

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
      documentation[`functions/${reflection.name.toLowerCase()}.md`] = compile(
        renderFunction(reflection as TypeDoc.DeclarationReflection)
      );
    }

    const classes = reflection.getReflectionsByKind(
      TypeDoc.ReflectionKind.Class
    );


    for (const reflection of classes) {
      documentation[`classes/${reflection.name.toLowerCase()}.md`] = compile(
        renderClass(reflection as TypeDoc.DeclarationReflection)
      );
    }
  }

  return documentation;
}
