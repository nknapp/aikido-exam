import { DefaultLayout } from "@/layout/DefaultLayout";
import React from "react";

const manualTests = fixPaths(
  import.meta.glob<React.FC>("../../../**/*.manual-test.tsx", {
    eager: true,
    import: "ManualTest",
  }),
);

function fixPaths(modules: Record<string, React.FC>): Record<string, React.FC> {
  const entries = Object.entries(modules) as [string, React.FC][];
  const fixedEntries = entries.map(([key, value]) => [key.replace(/^[./]+/, ""), value]);
  return Object.fromEntries(fixedEntries);
}

export const Component: React.FC = () => {
  return (
    <DefaultLayout>
      <h1>Manual tests</h1>
      {Object.entries(manualTests).map(([key, ManualTest]) => {
        return (
          <div key={key}>
            <h2>{key}</h2>
            <div>
              <ManualTest />
            </div>
            <hr />
          </div>
        );
      })}
    </DefaultLayout>
  );
};
