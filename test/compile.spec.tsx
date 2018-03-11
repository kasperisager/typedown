import * as test from "tape";
import { jsx } from "../src/jsx";
import { compile } from "../src/compile";

test("Compiles a heading", t => {
  const heading = <heading depth={1}>Howdy!</heading>;
  t.end();
});
