import type { TechniqueTree } from "$core/model/TechniqueTree.ts";
import type { YoutubeLink } from "$core/model/TechniqueMetadata.ts";

export interface VideoPack {
  name: string;
  source: string;
  videos: TechniqueTree<YoutubeLink[]>;
}
