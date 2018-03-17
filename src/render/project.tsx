/// <reference path="../types/jsx.d.ts"/>

import * as TypeDoc from "typedoc";
import { jsx } from "../jsx";

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
