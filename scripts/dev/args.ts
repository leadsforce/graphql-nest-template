import { join } from "path";
import { argv, cwd } from "process";

if (!argv[2] || !argv[3]) {
  console.error(`Please provide source and destination paths as arguments`);
  process.exit(1);
}

export const dirIn = join(cwd(), process.argv[2]);
export const dirOut = join(cwd(), process.argv[3]);
export const execTarget = () => {
  if (!argv[4]) {
    console.error(`Please proivide target executable`);
    process.exit(1);
  }
  return argv[4];
};
