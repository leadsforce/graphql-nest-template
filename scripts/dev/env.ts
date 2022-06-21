import { readFileSync } from "fs";
import { join } from "path";
import { cwd } from "process";

export function parseEnv() {
  const envFile = readFileSync(join(cwd(), ".env"), "utf8");
  const vars = envFile.split("\n").reduce((acc, line) => {
    const [key, val] = line.split("=");
    return Object.assign(acc, {
      [key]: val.startsWith('"') ? val.slice(1, -1) : val,
    });
  }, {});
  return Object.assign(process.env, vars);
}
