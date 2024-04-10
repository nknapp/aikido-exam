import { ExamPlayer } from "$core/ExamPlayer/ExamPlayer.ts";
import { createTechnique, techniqueAsString } from "$core/model/Technique.test-helper.ts";
import { onPlaySpeechFile } from "$core/playSpeechFile/playSpeechFile.test-helpers.ts";

const techniques = [
  createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
  createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
  createTechnique("tachi waza", "ai hanmi katate dori", "ikkyo", "omote"),
];

describe("ExamPlayer", () => {
  it("plays a technique", async () => {
    const events: string[] = [];
    onPlaySpeechFile(events.push.bind(events));
    const player = new ExamPlayer(techniques);
    await player.playNext();

    expect(events).toEqual(["play: suwari waza", "play: ai hanmi katate dori", "play: ikkyo", "play: omote"]);
  });

  it("plays a techniques sequentially", async () => {
    const events: string[] = [];
    onPlaySpeechFile(events.push.bind(events));
    const player = new ExamPlayer(techniques);
    await player.playNext();
    await player.playNext();

    expect(events).toEqual([
      "play: suwari waza",
      "play: ai hanmi katate dori",
      "play: ikkyo",
      "play: omote",
      "play: ura",
    ]);
  });

  it("calls start and stop and update callback", async () => {
    const { events, player } = createPlayerWithEvents();
    await player.playNext();

    expect(events).toEqual([
      "next: suwari waza ai hanmi katate dori ikkyo omote",
      "start",
      "last: suwari waza ai hanmi katate dori ikkyo omote",
      "play: suwari waza",
      "play: ai hanmi katate dori",
      "play: ikkyo",
      "play: omote",
      "stop",
      "next: suwari waza ai hanmi katate dori ikkyo ura",
    ]);
  });

  it("stops playback when stop is called", async () => {
    const events: string[] = [];
    const { controlPlayback } = onPlaySpeechFile(events.push.bind(events));
    const player = new ExamPlayer(techniques);
    const done = player.playNext();
    await player.stop();
    controlPlayback().finish();
    await done;
    expect(events).toEqual(["play: suwari waza", "abort: suwari waza"]);
  });

  it("skipnext goes to the next technique without playing", async () => {
    const { events, player, clearEvents } = createPlayerWithEvents();
    clearEvents();
    await player.skipNext();
    await player.playNext();

    expect(events).toEqual([
      "next: suwari waza ai hanmi katate dori ikkyo ura",
      "start",
      "last: suwari waza ai hanmi katate dori ikkyo ura",
      "play: suwari waza",
      "play: ai hanmi katate dori",
      "play: ikkyo",
      "play: ura",
      "stop",
      "next: tachi waza ai hanmi katate dori ikkyo omote",
    ]);
  });

  it("skipPrevious goes to the previous technique", async () => {
    const { events, player, clearEvents } = createPlayerWithEvents();
    clearEvents();
    await player.playNext();
    await player.skipPrevious();

    expect(events).toEqual([
      "start",
      "last: suwari waza ai hanmi katate dori ikkyo omote",
      "play: suwari waza",
      "play: ai hanmi katate dori",
      "play: ikkyo",
      "play: omote",
      "stop",
      "next: suwari waza ai hanmi katate dori ikkyo ura",
      "next: suwari waza ai hanmi katate dori ikkyo omote",
    ]);
  });
});

function createPlayerWithEvents() {
  const events: string[] = [];
  onPlaySpeechFile(events.push.bind(events));
  const player = new ExamPlayer(techniques, {
    onStart: () => events.push("start"),
    onStop: () => events.push("stop"),
    onUpdateNextTechnique: (technique) => events.push("next: " + (technique && techniqueAsString(technique))),
    onUpdateLastTechnique: (technique) => events.push("last: " + (technique && techniqueAsString(technique))),
  });
  return {
    events,
    player,
    clearEvents() {
      events.splice(0, Infinity);
    },
  };
}
