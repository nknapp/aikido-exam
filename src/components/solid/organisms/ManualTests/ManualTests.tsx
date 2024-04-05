import type { Component } from "solid-js";
import { ForEntries } from "@/components/solid/organisms/TechniqueChooser/ForEntries.tsx";

const Tests = import.meta.glob("@/**/*.manual-test.tsx", { eager: true, import: "ManualTest" }) as Record<
  string,
  Component
>;

export const ManualTests: Component = () => {
  return (
    <div>
      <ForEntries object={Tests}>
        {(key, ManualTest) => {
          const id = key.replace(/\W/g, "_");
          return (
            <div>
              <a href={`#${id}`}>
                <h1 id={id}>{key}</h1>
              </a>
              <div>
                <ManualTest />
              </div>
            </div>
          );
        }}
      </ForEntries>
    </div>
  );
};
