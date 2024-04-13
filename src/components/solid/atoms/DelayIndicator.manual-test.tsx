import { type Component, createSignal } from "solid-js";
import { SimpleButton } from "@/components/solid/atoms/SimpleButton.tsx";
import { type DelayControl, DelayIndicator } from "@/components/solid/atoms/DelayIndicator.tsx";

export const ManualTest: Component = () => {
  const [delayControl, setDelayControl] = createSignal<DelayControl>({
    animateDelay: async () => {},
  });
  const [running, setRunning] = createSignal(false);
  async function animate() {
    setRunning(true);
    await delayControl().animateDelay(5);
    setRunning(false);
  }
  return (
    <div>
      <Description />
      <DelayIndicator setDelayControl={setDelayControl} />
      <div class={"flex items-center gap-4 mt-4"}>
        <SimpleButton label={"Start animation"} onClick={() => animate()} disabled={running()} />
        {running() ? "Running" : "Stopped"}
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
      </ul>
    </div>
  );
};
