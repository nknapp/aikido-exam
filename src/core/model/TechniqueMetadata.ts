export interface TechniqueMetadata {
  youtube?: YoutubeLink | YoutubeLink[];
}
export interface YoutubeLink {
  id?: string;
  videoId: string;
  startSeconds?: number;
  endSeconds?: number;
  durationSeconds: number;
  title: string;
}
