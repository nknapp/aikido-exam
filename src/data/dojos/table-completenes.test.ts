import { resolveExamTables } from "$core/resolveExamTables";
import { listDojos, loadDojo } from "./index";
import { type Execution, SINGLE_DIRECTION, type Technique } from "$core/model";
import { buildExamTable } from "$core/buildExamTable";
import type { DojoDetails } from "$core/model/Dojo";
import { techniqueAsString } from "$core/model/Technique.test-helper";

const dojos = (await listDojos()).filter((dojo) => dojo.id !== "aifd");

test.each(dojos)("no AiFD techniques are missing in $name", async ({ id }) => {
  const dojo = await loadDojo(id);
  const dojoTechniques = await allTechniques(dojo.details);
  const dojoDetails = await loadDojo("aikido-foederation");
  const aifdTechniques = await allTechniques(dojoDetails.details, { omitWeapons: true });
  const missingInDojo = difference(aifdTechniques, dojoTechniques);
  const missingTable = buildExamTable(missingInDojo);
  expect(missingTable).toEqual({});
});

const weapons = new Set<Execution>(["tanto dori", "jo dori", "jo nage", "tachi dori"]);

async function allTechniques(dojoDetails: DojoDetails, { omitWeapons = false } = {}): Promise<Set<Technique>> {
  const tables = Object.values(dojoDetails.exams);
  let techniqueList = resolveExamTables(tables);
  if (omitWeapons) {
    techniqueList = techniqueList.filter((technique) => !weapons.has(technique.execution));
  }
  return new Set(techniqueList.map(getUniqueTechnique));
}

function* difference(minuend: Set<Technique>, subtrahend: Set<Technique>): Iterable<Technique> {
  for (const item of minuend) {
    if (subtrahend.has(item)) continue;
    // Fallback in case not the exact direction is specified
    if (item.direction === SINGLE_DIRECTION && subtrahend.has(getUniqueTechnique({ ...item, direction: "omote" })))
      continue;
    yield item;
  }
}

function makeUnique<T>(uniqueKeyFn: (item: T) => string) {
  const canonicalItems = new Map<string, T>();
  return (item: T): T => {
    const key = uniqueKeyFn(item);
    const canonicalItem = canonicalItems.get(key);
    if (canonicalItem != null) {
      return canonicalItem;
    }
    canonicalItems.set(key, item);
    return item;
  };
}
const getUniqueTechnique = makeUnique<Technique>(techniqueAsString);
