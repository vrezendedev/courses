import Chalk from "chalk";
import fs from "fs";
import path from "path";
const { lstat } = fs.promises;

const targetDir = process.argv[2] || process.cwd;

fs.readdir(targetDir, async (e, fileNames) => {
  if (e) {
    console.log(e);
  }
  const statPromises = fileNames.map((fileName) => {
    return lstat(path.join(targetDir, fileName));
  });

  const allStats = await Promise.all(statPromises);

  for (let stat of allStats) {
    const index = allStats.indexOf(stat);

    if (stat.isFile()) {
      console.log(fileNames[index]);
    } else {
      console.log(Chalk.green(fileNames[index]));
    }
  }
});
