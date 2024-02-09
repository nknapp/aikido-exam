import tables from "src/exam-tables/aikido-dojo-darmstadt/lazyData";
import fs from "node:fs/promises"

const videos = JSON.parse(await fs.readFile("./aikido-kompendium-playlists.json", "utf-8"))

const result = {}
for (const exam of Object.values(tables.exams)) {
  for (const [technique, metadata] of iterateTable(exam.table.techniques)) {
    if (metadata.youtube == null) {
      metadata.youtube = findVideo(technique);
    }
  }
  result[exam.labelKey] = exam
}

console.log(JSON.stringify(result, 0, 2));

function* iterateTable(exam) {
  for (const [execution, attacks] of Object.entries(exam)) {
    for (const [attack, defences] of Object.entries(attacks)) {
      for (const [defence, directions] of Object.entries(defences)) {
        for (const [direction, metadata] of Object.entries(directions)) {
          yield [`${execution} ${attack} ${defence} ${direction}`, metadata];
        }
      }
    }
  }
}

function findVideo(technique) {
  const normalized = normalize(technique);
  for (const exam of Object.values(videos)) {
    for (const video of exam) {
      if (normalize(video.title) === normalized) {
        return video;
      }
    }
  }
  return {
    notfound: true,
  };
}

function normalize(technique) {
  return technique
    .replace(/gyuako hanmi ?/, "")
    .replace(/single-direction ?/, "")
    .replace(/kokyu nage/, "kokyonage")
    .trim();
}
