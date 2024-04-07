import { type Component, createEffect, createSignal, onMount } from "solid-js";
import { t } from "@/i18n";
import { CheckButton } from "@/components/solid/atoms/CheckButton.tsx";
import { nanoid } from "nanoid";
import { IconRefresh } from "@/icons";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";

export interface ChoosableOrderOptions {
  randomize: boolean;
  includePercent: number;
}

export interface ChooserControlOrderProps {
  value: ChoosableOrderOptions;
  onChange: (value: ChoosableOrderOptions) => void;
  onForceRefresh: () => void;
}

export const ChooserControlOrder: Component<ChooserControlOrderProps> = (props) => {
  function update<T extends keyof ChoosableOrderOptions>(prop: T, value: ChoosableOrderOptions[T]): void {
    props.onChange({
      ...props.value,
      [prop]: value,
    });
  }

  const rangeSelectId = nanoid();

  const [ready, setReady] = createSignal(false);
  const [internalPercent, setInternalPercent] = createSignal(props.value.includePercent);

  createEffect(() => setInternalPercent(props.value.includePercent));

  onMount(() => {
    setReady(true);
  });

  return (
    <>
      <CheckButton
        label={t("examChooser.order.randomize")}
        value={props.value.randomize}
        onChange={(value) => update("randomize", value)}
      />
      <SimpleButton
        color={"secondary"}
        icon={IconRefresh}
        label={t("examChooser.order.shuffle")}
        disabled={!props.value.randomize}
        onClick={props.onForceRefresh}
      />
      <div
        classList={{
          "flex flex-col justify-center col-span-2 items-center transition-opacity duration-200": true,
          "text-secondary-light": !props.value.randomize,
          "opacity-0": !ready(),
          "opacity-100": ready(),
        }}
      >
        <input
          id={rangeSelectId}
          type="range"
          min="1"
          max="100"
          class={`w-2/3 ${ready() ? "opacity-100" : "opacity-0"} accent-primary`}
          disabled={!ready || !props.value.randomize}
          value={internalPercent()}
          onInput={(event) => setInternalPercent(Number(event.target.value))}
          onChange={(event) => update("includePercent", Number(event.target.value))}
        />
        <label for={rangeSelectId}>{t("examChooser.order.includePercent", { percent: internalPercent() })}</label>
      </div>
    </>
  );
};
