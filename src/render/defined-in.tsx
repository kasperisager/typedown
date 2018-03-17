/// <reference path="../types/jsx.d.ts"/>

import * as TypeDoc from "typedoc";
import { jsx } from "../jsx";

export function renderDefinedIn(source: TypeDoc.SourceReference) {
  return (
    <blockquote>
      <paragraph>
        {"Defined in "}
        <link url={`${source.fileName}:L${source.line}`}>
          {source.fileName}:{source.line}
        </link>
      </paragraph>
    </blockquote>
  );
}
