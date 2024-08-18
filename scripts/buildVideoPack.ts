/**
 * Just a one time script to generate a video pack. This may be removed in the future.
 */

import darmstadt from "../src/data/dojos/aikido-dojo-darmstadt/details.ts";
import { resolveExamTables } from "$core/resolveExamTables";
import { buildTechniqueTree } from "$core/buildExamTable/buildExamTable.ts";
import type { VideoPack } from "$core/model/VideoPack.ts";
import { coerceToArray } from "$core/utils/coerceToArray.ts";

import prettier from "prettier";

const allTechniques = resolveExamTables(darmstadt.exams);

let counter = 0;
for (const technique of allTechniques) {
  for (const youtube of coerceToArray(technique.metadata.youtube)) {
    youtube.id = String(counter++);
  }
}

const pack: VideoPack = {
  name: "Aikido Kompendium",
  source: "https://www.aikido-kompendium.de",
  videos: buildTechniqueTree(allTechniques, (technique) => coerceToArray(technique.metadata.youtube)),
};

// eslint-disable-next-line no-console
console.log(
  await prettier.format(
    `import type {VideoPack} from "$core/model/VideoPack";

export default ${JSON.stringify(pack, null, 2)} satisfies VideoPack
`,
    { parser: "typescript" },
  ),
);
