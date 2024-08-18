import type { VideoPack } from "$core/model/VideoPack.ts";

export interface VideoPackInfo {
  id: string;
  name: string;
  source: string;
}

export async function listVideoPacks(): Promise<VideoPackInfo[]> {
  const videoPacks = import.meta.glob<VideoPack>("./*/index.ts", { import: "default" });
  return Promise.all(
    Object.entries(videoPacks).map(async ([url, videoPack]) => {
      const id = url.replace(/\.\/(.*)\/index\.ts/, "$1");
      const pack = await videoPack();
      return {
        id,
        name: pack.name,
        source: pack.source,
      };
    }),
  );
}

export async function loadVideoPack(id: string): Promise<VideoPack> {
  return (await import(`./${id}/index.ts`)).default;
}
