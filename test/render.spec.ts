import { reflect } from "../src/reflect";
import { render } from "../src/render";
const { test } = require("tap");

const { keys } = Object;

function indent(string: string, count: number = 4): string {
	return string.replace(/^(?!\s*$)/mg, ' '.repeat(count));
}

test("Renders documentation", async (t: any) => {
  const reflection = await reflect(require.resolve("./fixtures/foo.ts"));

  if (reflection) {
    const documentation = render(reflection);

    for (const key of keys(documentation)) {
      const file = documentation[key];
      console.log(key + "\n\n" + indent(file, 4));
    }
  }
});
