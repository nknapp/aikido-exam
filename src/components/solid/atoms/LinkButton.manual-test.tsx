import { type Component, For } from "solid-js";
import { buttonColors, buttonSizes, type SimpleButtonProps } from "@/components/solid/atoms/SimpleButton.tsx";
import { IconPrint } from "@/icons";
import { LinkButton } from "@/components/solid/atoms/LinkButton.tsx";
import logo from "@/assets/logo.svg?url";

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
  return (
    <div data-testid={"SimpleButton-ShowCase"} class={"flex items-center gap-4"}>
      <LinkButton {...props} label={"Print"} href={"#"} />
      <LinkButton {...props} label={"Print"} icon={IconPrint} href={"#"} />
      <LinkButton {...props} label={"Print"} hideLabel={true} icon={IconPrint} href={"#"} />
      <LinkButton {...props} label="Aikido" hideLabel={true} icon={logo} href={"#"} />
      <LinkButton {...props} icon={logo} label="Aikido" href={"#"} />
      <div>{JSON.stringify(props)}</div>
    </div>
  );
};
