import { type Component, Suspense } from "solid-js";
import type { DojoInfo } from "$core/model/Dojo.ts";
import { createResource } from "solid-js";
import { createTechniqueStore } from "$core/store";
import { ExamSheet } from "@/components/solid/organisms/TechniqueChooser/ExamSheet.tsx";
import { loadSpeechPackPlayer } from "@/core";
import { playArrayBuffer } from "@/adapters/playArrayBuffer";
import speechPack from "@/data/speechpacks/default";
import { SINGLE_DIRECTION, type Technique } from "$core/model";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";

export const Reader: Component<{ dojoInfo: DojoInfo }> = (props) => {
  const techniqueStore = createTechniqueStore(props.dojoInfo.id);
  const [techniques] = createResource(techniqueStore.load, { initialValue: [] });
  const [player] = createResource(
    async () => {
      const speechPackPlayer = await loadSpeechPackPlayer(speechPack, playArrayBuffer);
      return (technique: Technique) => {
        if (technique.direction === SINGLE_DIRECTION) {
          return speechPackPlayer.play([technique.execution, technique.attack, technique.defence]);
        } else {
          return speechPackPlayer.play([technique.execution, technique.attack, technique.defence, technique.direction]);
        }
      };
    },
    {
      initialValue: async () => {},
    },
  );

  return (
    <div>
      <div class="flex items-center gap-2">
        <img class={"h-8"} src={props.dojoInfo.logo.toString()} alt="" /> {props.dojoInfo.name}
      </div>
      <Suspense fallback={"Loading"}>
        <h1>This feature is not finished yet. This is just a small POC</h1>
        <div class="grid">
          <Player player={player()} techniques={techniques()} />
          <ExamSheet techniques={techniques()} />
        </div>
      </Suspense>
    </div>
  );
};

const Player: Component<{ player: (technique: Technique) => Promise<void>; techniques: Technique[] }> = (props) => {
  return <SimpleButton onClick={() => props.player(props.techniques[0])} label={"Play"} />;
};
