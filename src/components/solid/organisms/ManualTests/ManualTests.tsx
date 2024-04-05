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
          return (
            <div>
              <h1>{key}</h1>
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
