declare module "*.scss" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.svg" {
  const url: string;
  export default url;
}
