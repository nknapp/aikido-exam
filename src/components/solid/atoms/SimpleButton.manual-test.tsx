import { type Component, createSignal, For } from "solid-js";
import {
  buttonColors,
  buttonSizes,
  SimpleButton,
  type SimpleButtonProps,
} from "@/components/solid/atoms/SimpleButton.tsx";
import { IconPrint } from "@/icons";
import { cls } from "$core/utils/cls.ts";

// {(color) => <ShowCase size={size} color={color} />}
export const ManualTest: Component = () => {
  return (
    <div class={"flex flex-col gap-4"}>
      <For each={buttonSizes}>
        {(size) => (
          <For each={buttonColors}>
            {(color) => (
              <>
                <ShowCase size={size} color={color} />
              </>
            )}
          </For>
        )}
      </For>
    </div>
  );
};

const ShowCase: Component<Omit<SimpleButtonProps, "children" | "icon">> = (props) => {
  const [clicked, setClicked] = createSignal(false);
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 100);
  };
  return (
    <div data-testid={"SimpleButton-ShowCase"} class={"flex items-center gap-4"}>
      <div class={cls("text-black text-xs p-1", clicked() ? "bg-primary" : "bg-black duration-1000 transition-colors")}>
        clicked
      </div>
      <SimpleButton {...props} label={"Print"} onClick={handleClick} />
      <SimpleButton {...props} label={"Print"} icon={IconPrint} onClick={handleClick} />
      <SimpleButton {...props} icon={IconPrint} onClick={handleClick} />
      <div>{JSON.stringify(props)}</div>
    </div>
  );
};
