import * as path from "path";
import * as fs from "fs";
import * as test from "tape";
import * as makeDir from "make-dir";
import * as del from "del";
import { reflect } from "../src/reflect";
import { render } from "../src/render";

const { keys } = Object;

function indent(string: string, count: number = 4): string {
  return string.replace(/^(?!\s*$)/gm, " ".repeat(count));
}

async function write(filename: string, data: string): Promise<void> {
  await makeDir(path.dirname(filename));

  return new Promise<void>((resolve, reject) => {
    fs.writeFile(
      filename,
      data,
      "utf8",
      err => (err ? reject(err) : resolve())
    );
  });
}

test("Renders documentation", async t => {
  await del('test/snapshots');

  const reflection = await reflect(path.join(__dirname, "fixtures"));

  if (reflection) {
    const documentation = render(reflection);

    for (const path of keys(documentation)) {
      const data = documentation[path];
      await write(`test/snapshots/${path}`, data);
    }
  }

  t.end();
});
