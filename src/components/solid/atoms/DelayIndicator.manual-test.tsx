import { type Component, createSignal } from "solid-js";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { type DelayControl, DelayIndicator } from "@/components/solid/atoms/DelayIndicator.tsx";
import { CheckButton } from "@/components/solid/atoms/CheckButton.tsx";

export const ManualTest: Component = () => {
  const [delayControl, setDelayControl] = createSignal<DelayControl>({
    animateDelay: async () => {},
  });
  const [running, setRunning] = createSignal(false);
  const [disabled, setDisabled] = createSignal(false);
  async function animate() {
    setRunning(true);
    await delayControl().animateDelay(1);
    setRunning(false);
  }
  return (
    <div>
      <Description />
      <DelayIndicator setDelayControl={setDelayControl} disabled={disabled()} />
      <div class={"flex items-center gap-4 mt-4"}>
        <SimpleButton label={"Start animation"} onClick={() => animate()} disabled={running()} />
        {running() ? "Running" : "Stopped"}
        <CheckButton value={disabled()} onChange={setDisabled} label={"Disabled"} />
      </div>
    </div>
  );
};

const Description: Component = () => {
  return (
    <div>
      <ul>
        <li>Click the button</li>
        <li>The bar above the button should animate from empty to filled</li>
        <li>While the animation is in progress, the button should be disabled</li>
        <li>While the animation is in progress, the label should change from "Stopped" to "Running"</li>
        <li>Clicking the disabled button should change display to gray</li>
      </ul>
    </div>
  );
};
