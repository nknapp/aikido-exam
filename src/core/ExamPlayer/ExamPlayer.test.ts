import { ExamPlayer } from "$core/ExamPlayer/ExamPlayer.ts";
import { createTechnique, techniqueAsString } from "$core/model/Technique.test-helper.ts";
import { onPlaySpeechFile } from "$core/playSpeechFile/playSpeechFile.test-helpers.ts";
import type { Technique } from "$core/model";

const defaultTechniques = [
  createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
  createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
  createTechnique("tachi waza", "ai hanmi katate dori", "ikkyo", "omote"),
];

describe("ExamPlayer", () => {
  it("plays a technique", async () => {
    const { events } = createPlayerWithEvents(defaultTechniques);
    const player = new ExamPlayer(defaultTechniques);
    await player.play();

    expect(events).toContainEqualInOrder([
      "play: suwari waza",
      "play: ai hanmi katate dori",
      "play: ikkyo",
      "play: omote",
    ]);
  });

  it("plays a techniques sequentially", async () => {
    const events: string[] = [];
    onPlaySpeechFile(events.push.bind(events));
    const player = new ExamPlayer(defaultTechniques);
    await player.play();
    await player.play();

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
    await player.play();

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
    const { events, player, controlPlayback } = createPlayerWithEvents(defaultTechniques);
    const done = player.playNext();
    await player.stop();
    controlPlayback().finish();
    await done;
    expect(events.filter((event) => event.match(/^(play|abort)/))).toEqual(["play: suwari waza", "abort: suwari waza"]);
  });

  it("skipnext goes to the next technique without playing", async () => {
    const { events, player, clearEvents } = createPlayerWithEvents();
    clearEvents();
    await player.skipNext();
    await player.play();

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
    await player.play();
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

  it("triggers autoplay state change based on 'setAutoPlay'", async () => {
    const { events, player, clearEvents } = createPlayerWithEvents();
    clearEvents();
    player.setAutoPlay(true);
    player.setAutoPlay(false);
    expect(events).toEqual(["autoPlay: true", "autoPlay: false"]);
  });

  it("plays files automatically with pauses", async () => {
    const { filteredEvents, player, clearEvents } = createPlayerWithEvents([
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
      createTechnique("suwari waza", "ai hanmi katate dori", "irimi nage", "single-direction"),
    ]);
    clearEvents();
    player.setAutoPlay(true);
    await player.play();
    expect(filteredEvents("play", "wait")).toEqual([
      "play: suwari waza",
      "play: ai hanmi katate dori",
      "play: ikkyo",
      "play: omote",
      "wait: 20",
      "play: ura",
      "wait: 20",
      "play: irimi nage",
    ]);
  });

  it("stops plays when autoPlay is disabled", async () => {
    const { filteredEvents, player, controlPlayback, clearEvents } = createPlayerWithEvents([
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "omote"),
      createTechnique("suwari waza", "ai hanmi katate dori", "ikkyo", "ura"),
      createTechnique("suwari waza", "ai hanmi katate dori", "irimi nage", "single-direction"),
    ]);
    const control = controlPlayback();
    clearEvents();
    player.setAutoPlay(true);
    const promise = player.play();
    control.finishNext("suwari waza");
    player.setAutoPlay(false);
    control.finish();
    await promise;
    expect(filteredEvents("play", "wait")).toEqual([
      "play: suwari waza",
      "play: ai hanmi katate dori",
      "play: ikkyo",
      "play: omote",
    ]);
  });
});

function createPlayerWithEvents(techniques: Technique[] = defaultTechniques) {
  const events: string[] = [];
  const { controlPlayback } = onPlaySpeechFile(events.push.bind(events));
  const player = new ExamPlayer(techniques, {
    onStart: () => events.push("start"),
    onStop: () => events.push("stop"),
    onAutoPlay: (enabled) => events.push(`autoPlay: ${enabled}`),
    onUpdateNextTechnique: (technique) => events.push("next: " + (technique && techniqueAsString(technique))),
    onUpdateLastTechnique: (technique) => events.push("last: " + (technique && techniqueAsString(technique))),
    waitSeconds: async (seconds: number) => {
      events.push(`wait: ${seconds}`);
    },
  });
  return {
    events,
    filteredEvents(...prefixes: string[]): string[] {
      return events.filter((event) => prefixes.some((prefix) => event.startsWith(prefix)));
    },
    controlPlayback,
    player,
    clearEvents() {
      events.splice(0, Infinity);
    },
  };
}
