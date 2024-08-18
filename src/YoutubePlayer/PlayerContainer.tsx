import { type Component, createSignal } from "solid-js";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { render } from "solid-js/web";
import { t } from "@/i18n";
import { IconStop } from "@/icons";
import { cls } from "$core/utils/cls.ts";

export async function renderPlayerContainer() {
  const container = document.createElement("div");
  document.body.append(container);
  const playerContainerRef = Promise.withResolvers<PlayerContainerRef>();
  render(() => <PlayerContainer setPlayer={playerContainerRef.resolve} />, container);
  return await playerContainerRef.promise;
}

export class PlayerContainerRef extends EventTarget {
  constructor(
    public htmlElement: HTMLDivElement,
    public setVisible: (visible: boolean) => void,
  ) {
    super();
  }
}

const PlayerContainer: Component<{
  setPlayer: (container: PlayerContainerRef) => void;
}> = (props) => {
  let playerContainerRef: PlayerContainerRef | null = null;
  const [visible, setVisible] = createSignal(false);

  function onPlayerElement(el: HTMLDivElement) {
    playerContainerRef = new PlayerContainerRef(el, setVisible);
    props.setPlayer(playerContainerRef);
  }

  function stop() {
    playerContainerRef?.dispatchEvent(new Event("stop"));
  }

  return (
    <div class={cls("fixed inset-0 bg-primary-dark", visible() ? "visible" : "hidden")}>
      <SimpleButton
        class={"absolute top-1 right-1 z-10"}
        size={"small"}
        label={t("video.stop")}
        icon={IconStop}
        onClick={stop}
      />
      <div ref={onPlayerElement} class="absolute inset-0 z-0"></div>
    </div>
  );
};
