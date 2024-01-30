import { resolveExamTables } from "../utils/resolve-exam-tables";
import darmstadt from "./aikido-dojo-darmstadt";
import { Dojo } from "./baseTypes";
import aikidoFoederation from "./aikido-foederation";
import { Execution } from "./audio-files";
import { Technique } from "../model/Technique";
import { buildExamTable } from "../utils/build-exam-table";

test("no techniques are missing in Darmstadt", async () => {
  const darmstadtExams = await resolveDojo(darmstadt);
  const foederationExams = await resolveDojo(aikidoFoederation, { omitWeapons: true });
  const missingInDarmstadt = difference(foederationExams, darmstadtExams);
  const missingTable = buildExamTable(missingInDarmstadt);
  expect(missingTable).toEqual({ techniques: {} });
});

const weapons = new Set<Execution>(["tanto dori", "jo dori", "jo nage", "tachi dori"]);

async function resolveDojo(dojo: Dojo, { omitWeapons = false } = {}): Promise<Set<Technique>> {
  const lazyData = await dojo.lazyData();
  const tables = Object.values(lazyData.default.exams).map((value) => value.table);
  let techniqueList = resolveExamTables(tables);
  if (omitWeapons) {
    techniqueList = techniqueList.filter((technique) => !weapons.has(technique.execution));
  }
  return new Set(techniqueList.techniques.map(getUniqueTechnique));
}

function* difference(minuend: Set<Technique>, subtrahend: Set<Technique>): Iterable<Technique> {
  for (const item of minuend) {
    if (subtrahend.has(item)) continue;
    // Fallback in case not the exact direction is specified
    if (item.direction === "single-direction" && subtrahend.has(getUniqueTechnique(item.withDirection("omote"))))
      continue;
    yield item;
  }
}

const uniqueTechniques = new Map<string, Technique>();

function getUniqueTechnique(technique: Technique) {
  const key = technique.definition.join(" - ");
  const uniqueTechnique = uniqueTechniques.get(key);
  if (uniqueTechnique != null) return uniqueTechnique;

  uniqueTechniques.set(key, technique);
  return technique;
}
