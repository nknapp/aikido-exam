export interface TechniqueMetadata {
  youtube?: YoutubeLink | YoutubeLink[];
}
export interface YoutubeLink {
  videoId: string;
  durationSeconds: number;
  title: string;
}
