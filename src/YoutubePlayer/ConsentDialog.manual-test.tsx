import { ConsentDialog } from "@/YoutubePlayer/ConsentDialog.tsx";
import { createEffect, createSignal, Show } from "solid-js";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { Portal } from "solid-js/web";

const LOCAL_STORAGE_KEY = "manual-test-consent-show-dialog";
export const ManualTest = () => {
  const [consent, setConsent] = createSignal(false);
  const [showDialog, setShowDialog] = createSignal(JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "false"));

  createEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(showDialog()));
  });

  function onConsentChange(value: boolean) {
    setShowDialog(false);
    setConsent(value);
  }
  return (
    <div>
      <div>Consent: {consent() ? "Yes" : "No"}</div>
      <SimpleButton label={"Show consent dialog"} onClick={() => setShowDialog(true)} />
      <Portal>
        <Show when={showDialog()}>
          <ConsentDialog setResult={onConsentChange} />
        </Show>
      </Portal>
    </div>
  );
};
