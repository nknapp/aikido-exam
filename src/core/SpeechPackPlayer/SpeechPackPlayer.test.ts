import { SpeechPackPlayer } from "./SpeechPackPlayer";
import { createTechnique } from "$core/model/Technique.test-helper.ts";
import { watchPlaySpeechFile } from "$core/playSpeechFile/playSpeechFile.test-helpers.ts";

const { playSpeechFileEvents } = watchPlaySpeechFile();

describe("Player", () => {
  it("plays a technique", async () => {
    const player = new SpeechPackPlayer();
    await player.playTechnique(createTechnique("tachi waza", "chudan tsuki", "ikkyo", "omote"));
    expect(playSpeechFileEvents).toEqual(["play: tachi waza", "play: chudan tsuki", "play: ikkyo", "play: omote"]);
  });

  it("does not play 'single direction'", async () => {
    const player = new SpeechPackPlayer();
    await player.playTechnique(createTechnique("tachi waza", "chudan tsuki", "irimi nage", "single-direction"));
    expect(playSpeechFileEvents).toEqual(["play: tachi waza", "play: chudan tsuki", "play: irimi nage"]);
  });

  it("aborts playing when new file is played ", async () => {
    const player = new SpeechPackPlayer();
    const promise = player.playTechnique(createTechnique("tachi waza", "chudan tsuki", "ikkyo", "omote"));
    await player.playTechnique(createTechnique("suwari waza", "kata dori", "ikkyo", "omote"));
    await promise;
    expect(playSpeechFileEvents).toEqual([
      "play: tachi waza",
      "abort: tachi waza",
      "play: suwari waza",
      "play: kata dori",
      "play: ikkyo",
      "play: omote",
    ]);
  });

  it("aborts playing when stop is called ", async () => {
    const player = new SpeechPackPlayer();
    const promise = player.playTechnique(createTechnique("tachi waza", "chudan tsuki", "ikkyo", "omote"));
    await player.stop();
    await promise;
    expect(playSpeechFileEvents).toEqual(["play: tachi waza", "abort: tachi waza"]);
  });

  it("only plays relevant parts of techniques", async () => {
    const player = new SpeechPackPlayer();
    await player.playTechnique(createTechnique("tachi waza", "chudan tsuki", "ikkyo", "omote"));
    await player.playTechnique(createTechnique("tachi waza", "chudan tsuki", "ikkyo", "ura"));
    expect(playSpeechFileEvents).toEqual([
      "play: tachi waza",
      "play: chudan tsuki",
      "play: ikkyo",
      "play: omote",
      "play: ura",
    ]);
  });

  it("only plays relevant parts of techniques after the last technique has been played completely", async () => {
    const player = new SpeechPackPlayer();
    const promise = player.playTechnique(createTechnique("tachi waza", "chudan tsuki", "ikkyo", "omote"));
    await player.stop();
    await promise;
    await player.playTechnique(createTechnique("tachi waza", "chudan tsuki", "ikkyo", "ura"));
    expect(playSpeechFileEvents).toEqual([
      "play: tachi waza",
      "abort: tachi waza",
      "play: tachi waza",
      "play: chudan tsuki",
      "play: ikkyo",
      "play: ura",
    ]);
  });
});
