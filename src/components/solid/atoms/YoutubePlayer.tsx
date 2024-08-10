import { type Component, createSignal, Match, onCleanup, Switch } from "solid-js";
import type { YoutubeLink } from "$core/model";
import { Portal } from "solid-js/web";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { IconStop, IconVideoLibrary } from "@/icons";
import { nanoid } from "nanoid";
import { delay } from "@/utils/delay.ts";
import Player from "youtube-player";
import { cls } from "$core/utils/cls.ts";
import { t } from "@/i18n";

export interface YoutubePlayerProps {
  link: YoutubeLink;
  type: "button" | "icon";
  class?: string;
}

export const YoutubePlayer: Component<YoutubePlayerProps> = (props) => {
  const id = nanoid();
  const [playerElement, setPlayerElement] = createSignal<HTMLDivElement>();

  const [showPlayer, setShowPlayer] = createSignal(false);
  let player: ReturnType<typeof Player> | null = null;

  function updatePlayerSize() {
    player?.setSize(window.innerWidth, window.innerHeight);
  }
  onCleanup(() => {
    player?.destroy();
    window.removeEventListener("resize", updatePlayerSize);
  });

  function notNull<T>(el: T | undefined | null): T {
    if (el == null) throw new Error("Could not find element for video player");
    return el;
  }

  async function play() {
    if (player == null) {
      player = Player(notNull(playerElement()), {
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          rel: 0,
          autoplay: 0,
          modestbranding: 1,
        },
      });
      window.addEventListener("resize", updatePlayerSize);
      updatePlayerSize();
    }
    setShowPlayer(true);
    await delay(0);
    const requiredPlayer = notNull(player);
    await requiredPlayer.loadVideoById({ videoId: props.link.videoId });
    await requiredPlayer.playVideo();
    await new Promise<void>((resolve) => {
      requiredPlayer.on("stateChange", (event) => {
        if (event.data === 0) {
          // Video has ended
          resolve();
        }
      });
    });
    setShowPlayer(false);
  }

  async function stopAndHide(event: MouseEvent) {
    event.preventDefault();
    event.stopPropagation();
    event.stopImmediatePropagation();
    player?.stopVideo();
    setShowPlayer(false);
  }

  return (
    <>
      <Portal>
        <div class={cls("fixed inset-0", showPlayer() || "hidden")}>
          <SimpleButton
            class={"absolute top-1 right-1 z-10"}
            size={"small"}
            label={t("video.stop")}
            icon={IconStop}
            onClick={stopAndHide}
          />
          <div id={id} class="absolute inset-0 z-0" ref={setPlayerElement}></div>
        </div>
      </Portal>
      <Switch>
        <Match when={props.type === "icon"}>
          <button onClick={play}>
            <IconVideoLibrary class={props.class} />
          </button>
        </Match>
        <Match when={props.type === "button"}>
          <SimpleButton
            class={props.class}
            size={"small"}
            icon={IconVideoLibrary}
            label={t("button.play-video.label")}
            onClick={play}
          ></SimpleButton>
        </Match>
      </Switch>
    </>
  );
};
