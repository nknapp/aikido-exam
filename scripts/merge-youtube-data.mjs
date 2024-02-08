import tables from "src/exam-tables/aikido-dojo-darmstadt/lazyData";
import videos from "../aikidot-kompendium-youtube-playlists.json";

for (const exam of Object.values(tables.exams)) {
  console.log(exam.labelKey);
  for (const [technique, metadata] of iterateTable(exam.table.techniques)) {
    if (metadata.youtube == null) {
      metadata.youtube = findVideo(technique);
    }
  }
  console.log(JSON.stringify(exam,0,2));
}

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
  const normalized = normalize(technique)
  for (const exam of Object.values(videos)) {
    for (const video of exam) {
      if (normalize(video.title) === normalized) {
        return video
      }
    }
  }
  return {
    "notfound": true
  }
}

function normalize(technique) {
  return technique.replace(/gyuako hanmi ?/,"").replace(/single-direction ?/,"").
  replace(/kokyu nage/,"kokyonage").trim()
}