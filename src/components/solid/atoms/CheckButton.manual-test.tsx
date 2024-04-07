import { type Component, createSignal, For } from "solid-js";
import { buttonColors, buttonSizes } from "@/components/solid/atoms/SimpleButton.tsx";
import { CheckButton, type CheckButtonProps } from "@/components/solid/atoms/CheckButton.tsx";
import { IconPrint } from "@/icons";

// {(color) => <ShowCase size={size} color={color} />}
export const ManualTest: Component = () => {
  return (
    <div class={"flex flex-col gap-4"}>
      <For each={buttonSizes}>
        {(size) => (
          <For each={buttonColors}>
            {(color) => (
              <>
                <ShowCase size={size} color={color} value={false} />
                <ShowCase size={size} color={color} value={true} />
              </>
            )}
          </For>
        )}
      </For>
    </div>
  );
};

const ShowCase: Component<Omit<CheckButtonProps, "onChange" | "label" | "icon">> = (props) => {
  const [value, setValue] = createSignal(props.value);
  return (
    <div data-testid={"CheckButton-ShowCase"} class={"flex items-center gap-4"}>
      <CheckButton {...props} label={"5th Kyu"} onChange={setValue} value={value()} />
      <CheckButton {...props} icon={IconPrint} label={"5th Kyu"} onChange={setValue} value={value()} />
      <CheckButton {...props} icon={IconPrint} label={"5th Kyu"} hideLabel={true} onChange={setValue} value={value()} />
      <div>{JSON.stringify(props)}</div>
    </div>
  );
};
