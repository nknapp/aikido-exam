import type { TechniqueTree } from "$core/model/TechniqueTree.ts";
import type { YoutubeLink } from "$core/model/TechniqueMetadata.ts";

export interface VideoPack {
  metadata: VideoPackMetadata;
  videos: TechniqueTree<YoutubeLink[]>;
}

export interface VideoPackMetadata {
  name: string;
  copyright: string;
  source: string;
}
