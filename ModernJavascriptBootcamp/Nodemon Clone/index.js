#!/usr/bin/env node
import chokidar from "chokidar";
import debounce from "lodash.debounce";
import program from "caporal";
import fs from "fs";
import { spawn } from "child_process";

program
  .version("0.0.1")
  .argument("[filename]", "Name of a file to execute.")
  .action(async ({ filename }) => {
    const name = filename || "index.js";

    try {
      await fs.promises.access(name);
    } catch (e) {
      throw new Error(`Could not find the file: ${name}`);
    }

    let proc;
    const start = debounce(() => {
      if (proc) {
        proc.kill();
      }
      proc = spawn("node", [name], { stdio: "inherit" });
    }, 150);

    chokidar
      .watch(".")
      .on("add", start)
      .on("change", start)
      .on("unlink", start);
  });

program.parse(process.argv);
