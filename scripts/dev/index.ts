import { createWatcher } from "./watch";
import { build } from "./build";
import { run } from "./run";

createWatcher(build, run);

run();
