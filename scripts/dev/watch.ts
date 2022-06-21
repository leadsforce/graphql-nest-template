import { watch } from "chokidar";
import { dirOut } from "./args";

export function createWatcher(build: () => any, run: () => any) {
  const watcher = watch(process.cwd(), {
    ignored: [dirOut, "scripts"],
    persistent: true,
  });
  watcher.on("change", () => {
    build();
    run();
  });
  return watcher;
}
