import { For } from "solid-js";
import { cls } from "$core/utils/cls.ts";
import { ForEntries } from "@/components/solid/organisms/TechniqueChooser/ForEntries.tsx";

const colors = {
  primary: ["bg-primary-darkest", "bg-primary-dark", "bg-primary", "bg-primary-light", "bg-primary-lightest"],
  secondary: [
    "bg-secondary-darkest",
    "bg-secondary-dark",
    "bg-secondary",
    "bg-secondary-light",
    "bg-secondary-lightest",
  ],
  info: ["bg-info-darkest", "bg-info-dark", "bg-info", "bg-info-light", "bg-info-lightest"],
};

export const ManualTest = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Color</th>
          <th>-darkest</th>
          <th>-dark</th>
          <th></th>
          <th>-light</th>
          <th>-lightest</th>
        </tr>
        <ForEntries object={colors}>
          {(name, shades) => {
            return (
              <tr>
                <td>{name}</td>
                <For each={shades}>
                  {(shade) => {
                    return (
                      <td class="relative">
                        <div class={cls(shade, "w-32 h-8 inset-4")}></div>
                      </td>
                    );
                  }}
                </For>
              </tr>
            );
          }}
        </ForEntries>
      </thead>
      <tbody></tbody>
    </table>
  );
};
