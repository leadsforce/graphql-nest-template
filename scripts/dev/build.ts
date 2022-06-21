import { spawnSync } from "child_process";
import { dirIn, dirOut } from "./args";
import { cwd } from "process";

export function build() {
  spawnSync("./node_modules/.bin/swc", [dirIn, "-d", dirOut], {
    stdio: "inherit",
    cwd: cwd(),
  });
}

build();
