import { type Component, createSignal } from "solid-js";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { render } from "solid-js/web";
import { t } from "@/i18n";
import { IconStop } from "@/icons";
import { cls } from "$core/utils/cls.ts";
import type { ResolvedYoutubeLink } from "@/utils/resolveYoutubeLinks.ts";

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
    public setVideo: (metadata: ResolvedYoutubeLink) => void,
  ) {
    super();
  }
}

const PlayerContainer: Component<{
  setPlayer: (container: PlayerContainerRef) => void;
}> = (props) => {
  let playerContainerRef: PlayerContainerRef | null = null;
  const [visible, setVisible] = createSignal(false);
  const [youtubeLink, setYoutubeLink] = createSignal<ResolvedYoutubeLink | null>(null);

  function onPlayerElement(el: HTMLDivElement) {
    playerContainerRef = new PlayerContainerRef(el, setVisible, setYoutubeLink);
    props.setPlayer(playerContainerRef);
  }

  function stop() {
    playerContainerRef?.dispatchEvent(new Event("stop"));
  }

  return (
    <div class={cls("fixed inset-0 bg-primary-dark flex flex-col", visible() ? "visible" : "hidden")}>
      <div ref={onPlayerElement} class="flex-1"></div>

      {youtubeLink() != null && (
        <div class={"bg-secondary-darkest border-t-4 border-secondary-light text-secondary-light p-4 relative"}>
          <SimpleButton
            class={"absolute top-1 right-1 z-10"}
            size={"small"}
            label={t("video.stop")}
            icon={IconStop}
            onClick={stop}
          />
          <div class={"h-8 p-1 truncate"}>
            {t("video.source")}{" "}
            <a href={youtubeLink()?.videoPackMetadata.source}>{youtubeLink()?.videoPackMetadata.name}</a>
          </div>
          <div class={"h-8 p-1 truncate"} title={youtubeLink()?.title}>
            Video: <a href={"https://youtu.be/" + youtubeLink()?.videoId}>{youtubeLink()?.title}</a>
          </div>
          <div class={"h-8 p-1"}>© {youtubeLink()?.videoPackMetadata.copyright}</div>
        </div>
      )}
    </div>
  );
};
