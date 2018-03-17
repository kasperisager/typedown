import * as path from "path";
import * as fs from "fs";
import { Application, Reflection } from "typedoc";
import { find } from "tsconfig";
import * as TS from "typescript";

async function read(filename: string): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    fs.readFile(
      filename,
      "utf8",
      (err, data) => (err ? reject(err) : resolve(data))
    );
  });
}

export async function reflect(cwd: string): Promise<Reflection | null> {
  const configPath = await find(cwd);

  if (typeof configPath !== "string") {
    throw new Error(`${cwd} contains no TypeScript configuration`);
  }

  const { config } = TS.parseConfigFileTextToJson(
    configPath,
    await read(configPath)
  );

  const { fileNames } = TS.parseJsonConfigFileContent(
    config,
    TS.sys,
    path.dirname(configPath)
  );

  const errors: Array<Error> = [];

  const logger = (message: string, level: number) => {
    switch (level) {
      case 3:
        errors.push(new Error(message));
    }
  };

  const app = new Application({
    logger,
    module: config.module,
    target: config.target
  });

  const reflection = app.convert(fileNames);

  if (errors.length > 0) {
    throw errors[0];
  }

  return reflection;
}
