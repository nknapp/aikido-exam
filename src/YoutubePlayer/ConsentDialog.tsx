import { type Component, onCleanup, onMount } from "solid-js";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { t } from "@/i18n";
import { IconYoutubeWhite } from "@/icons";

export const ConsentDialog: Component<{ setResult: (value: boolean) => void }> = (props) => {
  let animation: Animation;

  function setElement(element: HTMLDivElement | null) {
    animation = new Animation(
      new KeyframeEffect(element, [{ opacity: 0 }, { opacity: 1 }], { duration: 200, fill: "forwards" }),
      document.timeline,
    );
  }

  onMount(() => {
    animation?.play();
    document.body.style.width = "100vw";
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  });

  onCleanup(() => {
    document.body.style.width = "";
    document.body.style.height = "";
    document.body.style.overflow = "";
  });

  async function onResult(value: boolean) {
    animation?.reverse();
    await animation.finished;
    props.setResult(value);
  }

  return (
    <div ref={setElement} class={"fixed inset-0 bg-black/25 z-50 opacity-0"}>
      <div
        class={
          "absolute bg-white p-8 rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 max-h-full sm:max-h-[75vh] max-w-2xl h-full sm:h-auto h-full w-full sm:w-3/4 shadow-xl flex flex-col"
        }
      >
        <h1 class={"text-secondary-dark flex flex-wrap mt-0"}>
          <IconYoutubeWhite class={"h-8 pe-2"} />
          {t("video.consent.title")}
        </h1>
        <div class={"overflow-y-auto flex-1"}>
          <p class={"text-secondary-dark "}>{t("video.consent.text")}</p>
          <p class="mb-8">
            <a
              target="_blank"
              href="https://www.youtube.com/howyoutubeworks/our-commitments/protecting-user-data/#privacy-guidelines"
            >
              {t("video.consent.link-text")}
            </a>
          </p>

          <div class={"grid grid-cols-1 xl:grid-cols-2 gap-4"}>
            <SimpleButton label={t("video.consent.yes")} onClick={() => onResult(true)} />
            <SimpleButton label={t("video.consent.no")} onClick={() => onResult(false)} />
          </div>
          <div class={"mt-4 text-secondary"}>{t("video.consent.suffix")}</div>
        </div>
      </div>
    </div>
  );
};
