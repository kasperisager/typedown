import * as test from "tape";
import { jsx } from "../src/jsx";

test("Constructs a heading", t => {
  const heading = <heading depth={1}>Howdy!</heading>;
  t.end();
});
