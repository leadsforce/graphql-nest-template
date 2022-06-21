import { spawn } from "child_process";
import { cwd } from "process";
import { execTarget } from "./args";
import { parseEnv } from "./env";

let runningProcess;
export function run() {
  if (runningProcess) {
    runningProcess.kill();
  }
  runningProcess = spawn("node", [execTarget()], {
    stdio: "inherit",
    cwd: cwd(),
    env: parseEnv(),
  });
  return runningProcess;
}
