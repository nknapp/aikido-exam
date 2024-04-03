import { type Component, type JSX } from "solid-js";

interface ChooserButtonGroupProp {
  headerLabel: string;
  children: JSX.Element;
}

export const ChooserControlContainer: Component<ChooserButtonGroupProp> = (props) => {
  return (
    <div>
      <header class="text-sm font-bold flex items-center pb-4 rounded gap-4">
        <div class="border-t border-secondary flex-1"></div>
        <div class="">{props.headerLabel}</div>
        <div class="border-t flex-1 border-secondary"></div>
      </header>

      <div class="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-4 gap-4 mb-4">{props.children}</div>
    </div>
  );
};
