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
                <ShowCase buttonProps={{ size, color }} grid={false} />
              </>
            )}
          </For>
        )}
      </For>
    </div>
  );
};

interface ShowCaseProps {
  buttonProps: Omit<SimpleButtonProps, "icon" | "label">;
  grid: boolean;
}

const ShowCase: Component<ShowCaseProps> = (props) => {
  const [clicked, setClicked] = createSignal(false);
  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 100);
  };
  return (
    <div data-testid={"SimpleButton-ShowCase"} class={"flex items-center gap-4 border-b pb-4"}>
      <div class={"w-full"}>
        <div class="flex gap-4 pb-4">
          <div>{JSON.stringify(props.buttonProps)}</div>
          <div
            class={cls(
              "text-black text-xs p-1 w-20 mb-4",
              clicked() ? "bg-primary" : "bg-black duration-1000 transition-colors",
            )}
          >
            clicked
          </div>
        </div>

        <div class={"flex gap-4 items-center mb-4"}>
          <SimpleButton {...props.buttonProps} label={"Print"} onClick={handleClick} />
          <SimpleButton {...props.buttonProps} label={"Print"} icon={IconPrint} onClick={handleClick} />
          <SimpleButton
            {...props.buttonProps}
            label={"Print"}
            hideLabel={true}
            icon={IconPrint}
            onClick={handleClick}
          />
        </div>
        <div class={"grid grid-cols-3 gap-4"}>
          <SimpleButton {...props.buttonProps} label={"Print"} onClick={handleClick} />
          <SimpleButton {...props.buttonProps} label={"Print"} icon={IconPrint} onClick={handleClick} />
          <SimpleButton
            {...props.buttonProps}
            label={"Print"}
            hideLabel={true}
            icon={IconPrint}
            onClick={handleClick}
          />
        </div>
      </div>
    </div>
  );
};
