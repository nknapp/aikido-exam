// Workaround for https://github.com/mswjs/msw/issues/2092
// Install 'browser' versions for msw and @mswjs/interceptors

import fs from "fs/promises";
import { existsSync } from "fs";
import cp from "child_process"
import {execFileSync, execSync} from "node:child_process";

async function patchPackageJson(filepath, mutator) {
  const original = filepath + ".original";
  if (existsSync(original)) {
    await fs.copyFile(original, filepath);
  } else {
    await fs.copyFile(filepath, original);
  }
  const contents = await fs.readFile(filepath, "utf-8");
  const parsedContents = JSON.parse(contents);
  await mutator(parsedContents);
  await fs.writeFile(filepath, JSON.stringify(parsedContents, null, 2));
  try {
    execFileSync("diff", ["-u", original, filepath], {stdio: "inherit"})
  } catch (ignored) {

  }
}

await patchPackageJson("node_modules/msw/package.json", (packageJson) => {
  packageJson.exports["./node"].browser = packageJson.exports["./node"].default;
});

await patchPackageJson("node_modules/@mswjs/interceptors/package.json", (packageJson) => {
  packageJson.exports["./ClientRequest"].browser = packageJson.exports["./ClientRequest"].default;
});
