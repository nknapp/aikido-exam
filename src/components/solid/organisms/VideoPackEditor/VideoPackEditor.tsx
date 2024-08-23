import { type Component, createEffect, createSignal, onCleanup } from "solid-js";
import type { VideoPack } from "$core/model/VideoPack.ts";
import type { BaseTechnique, TechniqueTree, YoutubeLink } from "$core/model";
import { resolveTechniqueTrees } from "$core/resolveExamTables/resolveExamTables.ts";
import { loadYoutubeAdapter, type YoutubeAdapter } from "@/YoutubePlayer/adapter.ts";
import { cls } from "$core/utils/cls.ts";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { buildTechniqueTree } from "$core/buildExamTable/buildExamTable.ts";

interface TechniqueVideo extends BaseTechnique {
  video: YoutubeLink;
}

export const VideoPackEditor: Component<{
  videoPack: VideoPack;
}> = (props) => {
  const [selectedVideo, setSelectedVideo] = createSignal<TechniqueVideo | null>(null);
  const [updatedVideos, setUpdatedVideos] = createSignal<Record<string, TechniqueVideo>>(
    JSON.parse(localStorage.getItem(`videoPack-${props.videoPack.metadata.name}`) ?? "{}"),
  );

  createEffect(() => {
    localStorage.setItem(`videoPack-${props.videoPack.metadata.name}`, JSON.stringify(updatedVideos()));
  });

  const resolvedVideos: TechniqueVideo[] = resolveTechniqueTrees([props.videoPack.videos], (technique, videos) => ({
    ...technique,
    videos,
  })).flatMap(({ videos, ...baseTechnique }) => videos.map((video) => ({ ...baseTechnique, video })));

  function updateVideo(video: TechniqueVideo) {
    setUpdatedVideos((prev) => ({ ...prev, [video.video.id!]: video }));
  }

  function selectVideo(video: TechniqueVideo) {
    setSelectedVideo(updatedVideos()[video.video.id!] ?? video);
  }

  async function copyToClipboard() {
    const withUpdatedTechniques = resolvedVideos.map(
      (techniqueVideo) => updatedVideos()[techniqueVideo.video.id!] ?? techniqueVideo,
    );

    const tree: TechniqueTree<YoutubeLink[]> = buildTechniqueTree<TechniqueVideo, YoutubeLink[]>(
      withUpdatedTechniques,
      (technique, existingVideos) => (existingVideos ? [...existingVideos, technique.video] : [technique.video]),
    );

    const videoPack: VideoPack = {
      ...props.videoPack,
      videos: tree,
    };

    await navigator.clipboard.writeText(JSON.stringify(videoPack, null, 2));
    alert("Copied to clipboard");
  }

  return (
    <div>
      <h2>{props.videoPack.metadata.name}</h2>
      <p>
        <a target="_blank" href={props.videoPack.metadata.source}>
          {props.videoPack.metadata.source}
        </a>
      </p>
      <div class={"relative flex flex-col gap-2"}>
        <div class={"overflow-y-scroll h-96"}>
          <SimpleButton label={"Clear all"} onClick={() => setUpdatedVideos({})} />
          <SimpleButton label={"Export"} onClick={copyToClipboard} />
          <table>
            <thead>
              <tr>
                <th>Execution</th>
                <th>Attack</th>
                <th>Defence</th>
                <th>Direction</th>
                <th>Video</th>
                <th>dirty</th>
              </tr>
            </thead>
            <tbody>
              {resolvedVideos.map((techniqueVideo, index) => (
                <tr
                  class={cls(
                    selectedVideo()?.video.id === techniqueVideo.video.id
                      ? "bg-primary-light"
                      : index % 2 === 0 && "bg-secondary-lightest",
                    "cursor-pointer",
                  )}
                  onClick={() => selectVideo(updatedVideos()[techniqueVideo.video.id!] ?? techniqueVideo)}
                >
                  <td class={"p-2"}>{techniqueVideo.execution}</td>
                  <td class={"p-2"}>{techniqueVideo.attack}</td>
                  <td class={"p-2"}>{techniqueVideo.defence}</td>
                  <td class={"p-2"}>{techniqueVideo.direction}</td>
                  <td class={"p-2"}>{techniqueVideo.video.title}</td>
                  <td class={"p-2"}>{updatedVideos()[techniqueVideo.video.id!] != null ? "x" : ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>{selectedVideo() && <VideoEditor video={selectedVideo()!} onChange={updateVideo} />}</div>
      </div>
    </div>
  );
};

const VideoEditor: Component<{ video: TechniqueVideo; onChange: (video: TechniqueVideo) => void }> = (props) => {
  const [start, setStart] = createSignal(0);
  const [end, setEnd] = createSignal(props.video.video.durationSeconds);

  let player: YoutubeAdapter | null = null;
  let resizeObserver: ResizeObserver | null = null;

  async function setPlayerElement(element: HTMLDivElement) {
    const playerElement = document.createElement("div");
    element.append(playerElement);
    player = await loadYoutubeAdapter(playerElement);
    resizeObserver = new ResizeObserver(() => {
      player?.setSize(element.clientWidth, element.clientHeight);
    });
    resizeObserver.observe(element);
    await player?.loadVideoById(props.video.video.videoId, start(), end());
    await player?.playVideo();
  }

  createEffect(() => {
    setStart(props.video.video.startSeconds ?? 0);
    setEnd(props.video.video.endSeconds ?? props.video.video.durationSeconds);
  });

  async function updateVideo() {
    await player?.loadVideoById(props.video.video.videoId, start(), end());
    await player?.playVideo();

    props.onChange({
      ...props.video,
      video: {
        ...props.video.video,
        startSeconds: start(),
        endSeconds: end(),
      },
    });
  }

  onCleanup(() => {
    player?.destroy();
    resizeObserver?.disconnect();
  });

  useKeyboard("KeyS", async () => {
    if (player) {
      setStart(await player.getCurrentTime());
      updateVideo();
    }
  });
  useKeyboard("KeyE", async () => {
    if (player) {
      setEnd(await player.getCurrentTime());
      updateVideo();
    }
  });

  createEffect(() => {
    triggerChangeFor(props.video.video);
    const video = props.video.video;
    player?.loadVideoById(video.videoId, video.startSeconds, video.endSeconds);
  });

  function updateStart(event: Event) {
    setStart(Number((event.target as HTMLInputElement).value));
    updateVideo();
  }
  function updateEnd(event: Event) {
    setEnd(Number((event.target as HTMLInputElement).value));
    updateVideo();
  }

  return (
    <div class={"border p-2 gap-2 flex flex-col"}>
      <div class={"grid gap-2 grid-cols-3 items-center"}>
        <label>ID:</label>
        <div class={"col-span-2"}>{props.video.video.videoId}</div>
        <label>Name:</label>
        <div class={"col-span-2"}>{props.video.video.title}</div>

        <label>Start (Press "S" to use current time):</label>
        <input
          class={"w-16 border p-2"}
          type="text"
          min="0"
          max={props.video.video.durationSeconds}
          value={start()}
          onInput={updateStart}
        />
        <input type="range" min="0" max={props.video.video.durationSeconds} value={start()} onInput={updateStart} />

        <label>End (Press "E" to use current time):</label>
        <input
          class={"w-16 border p-2"}
          type="text"
          min="0"
          max={props.video.video.durationSeconds}
          value={end()}
          onInput={updateEnd}
        />
        <input type="range" min="0" max={props.video?.video.durationSeconds} value={end()} onInput={updateEnd} />
      </div>
      <div class="flex-1" ref={setPlayerElement}></div>
    </div>
  );
};

function useKeyboard(code: string, callback: () => void) {
  const listener = (event: KeyboardEvent) => {
    if (event.code === code) {
      callback();
    }
  };
  window.addEventListener("keydown", listener);
  onCleanup(() => window.removeEventListener("keydown", listener));
}

/**
 * Do nothing. This function is just called to make use of a value so that solid-js reactivity is triggered
 * @param ignoredValue
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function triggerChangeFor(value: unknown) {}
