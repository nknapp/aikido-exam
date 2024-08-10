import { type Component } from "solid-js";
import { setYoutubeEnabled, youtubeEnabled } from "$core/store/youtube.ts";
import { CheckButton } from "@/components/solid/atoms/CheckButton.tsx";
import { t } from "@/i18n";
import { IconCheckBox, IconCheckBoxOutlineBlank } from "@/icons";
import { usePersistentStore } from "@/components/solid/hooks/usePersistentStore.ts";

export const YoutubeActivator: Component<{ class: string }> = (props) => {
  const isYoutubeEnabled = usePersistentStore(youtubeEnabled, false);
  return (
    <CheckButton
      class={props.class}
      icon={isYoutubeEnabled() ? IconCheckBox : IconCheckBoxOutlineBlank}
      value={isYoutubeEnabled()}
      onChange={setYoutubeEnabled}
      label={t("button.settings.youtube.label")}
    />
  );
};
