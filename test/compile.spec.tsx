import { jsx } from "../src/jsx";
import { compile } from "../src/compile";
const { test } = require("tap");

test("Compiles a heading", async (t: any) => {
  const heading = <heading depth={1}>Howdy!</heading>;
});
