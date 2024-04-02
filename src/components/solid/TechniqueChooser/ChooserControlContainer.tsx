import { type Component, type JSX } from "solid-js";

interface ChooserButtonGroupProp {
  headerLabel: string;
  children: JSX.Element;
}

export const ChooserControlContainer: Component<ChooserButtonGroupProp> = (props) => {
  return (
    <div>
      <header class="text-lg">{props.headerLabel}</header>
      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 mb-4 ">{props.children}</div>
    </div>
  );
};
