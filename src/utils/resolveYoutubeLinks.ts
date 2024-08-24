import type { BaseTechnique, YoutubeLink, VideoPack, VideoPackMetadata } from "$core/model";

import aikidoKompendium from "@/data/videopacks/aikido-kompendium";
import aikidoSchuleKoeln from "src/data/videopacks/aikido-schule-koeln";

export interface ResolvedYoutubeLink extends YoutubeLink {
  videoPackMetadata: VideoPackMetadata;
}

export function resolveYoutubeLinks(technique: BaseTechnique | null): ResolvedYoutubeLink[] {
  if (technique == null) return [];
  return (
    resolveYoutubeLinksFromPack(aikidoKompendium, technique) ??
    resolveYoutubeLinksFromPack(aikidoSchuleKoeln, technique) ??
    []
  );
}

function resolveYoutubeLinksFromPack(pack: VideoPack, technique: BaseTechnique): ResolvedYoutubeLink[] | null {
  const youtubeLinks = pack.videos[technique.execution]?.[technique.attack]?.[technique.defence]?.[technique.direction];
  if (youtubeLinks == null) {
    return null;
  }
  return youtubeLinks.map((link) => {
    return {
      videoPackMetadata: pack.metadata,
      ...link,
    };
  });
}
