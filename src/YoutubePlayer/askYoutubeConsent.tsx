import { render } from "solid-js/web";
import { ConsentDialog } from "@/YoutubePlayer/ConsentDialog.tsx";

export async function askYoutubeConsent(): Promise<boolean> {
  const { promise, resolve } = Promise.withResolvers<boolean>();
  const container = document.createElement("div");
  document.body.append(container);

  const cleanup = render(() => <ConsentDialog setResult={resolve} />, container);
  const value = await promise;
  cleanup();
  container.remove();
  return value;
}
