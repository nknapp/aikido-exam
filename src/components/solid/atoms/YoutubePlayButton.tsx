import { type Component, Match, Switch } from "solid-js";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { IconVideoLibrary } from "@/icons";
import { t } from "@/i18n";
import { playVideo } from "@/YoutubePlayer";
import type { ResolvedYoutubeLink } from "@/utils/resolveYoutubeLinks.ts";

export interface YoutubePlayerProps {
  link: ResolvedYoutubeLink;
  type: "button" | "icon";
  class?: string;
}

export const YoutubePlayButton: Component<YoutubePlayerProps> = (props) => {
  async function play() {
    await playVideo(props.link);
  }

  return (
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
  );
};
