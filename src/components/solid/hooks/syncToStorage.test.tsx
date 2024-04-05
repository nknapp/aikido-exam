import { type Component, createSignal, type Signal } from "solid-js";
import { syncToStorage, type SyncToStorageOptions } from "./syncToStorage.ts";
import { waitFor } from "@testing-library/react";
import { render, renderHook, screen } from "solid-testing-library";

function renderSyncedTestSignal<T>(initialValue: T, options: SyncToStorageOptions<T> = { name: "test" }) {
  return renderHook(() => {
    return syncToStorage(createSignal(initialValue), options);
  }).result;
}

describe("syncToStorage", () => {
  it("behaves like signal", () => {
    const [signal, setSignal] = renderSyncedTestSignal(0);
    setSignal(1);
    expect(signal()).toEqual(1);
  });

  it("persists values and reloads value", async () => {
    const [signal, setSignal] = renderSyncedTestSignal(0);
    setSignal(1);
    expect(signal()).toEqual(1);

    const [signalAfterReload] = renderSyncedTestSignal(0);
    await waitFor(() => {
      expect(signalAfterReload()).toBe(1);
    });
  });

  it("allows custom serialization", async () => {
    function render(): Signal<Set<number>> {
      const result = renderHook(() => {
        return syncToStorage(createSignal(new Set<number>()), {
          name: "test",
          serialize: (value) => JSON.stringify(Array.from(value)),
          deserialize: (string) => {
            return new Set(JSON.parse(string));
          },
        });
      });
      return result.result;
    }

    const [, setSignal] = render();
    setSignal(new Set([1, 2, 3]));

    const [signalAfterReload] = render();
    await waitFor(() => {
      expect(signalAfterReload()).toEqual(new Set([1, 2, 3]));
    });
  });
  it("loads value from localStorage", async () => {
    localStorage.setItem("test", "true");
    const [signal] = renderSyncedTestSignal(false, { name: "test" });

    await waitFor(() => {
      expect(signal()).toBe(true);
    });
  });

  it("saves to localStorage", async () => {
    const [, setSignal] = renderSyncedTestSignal(false, { name: "test", storage: localStorage });
    setSignal(true);
    expect(localStorage.getItem("test")).toBe("true");
  });

  describe("storage = sessionStorage", () => {
    it("loads from sessionStorage", async () => {
      sessionStorage.setItem("test", "true");
      const [signal] = renderSyncedTestSignal(false, { name: "test", storage: sessionStorage });
      await waitFor(() => {
        expect(signal()).toBe(true);
      });
    });

    it("saves to  sessionStorage", async () => {
      const [, setSignal] = renderSyncedTestSignal(false, { name: "test", storage: sessionStorage });
      setSignal(true);
      expect(sessionStorage.getItem("test")).toBe("true");
    });
  });

  it("allows hydration", async () => {
    const TestComponent: Component = () => {
      const [showTitle] = syncToStorage(createSignal(false), { name: "test" });
      return <div>{showTitle() && <h1>title</h1>}</div>;
    };

    render(() => <TestComponent />);

    localStorage.setItem("test", "true");

    // The following line is necessary to enable hydration.
    // see https://github.com/ryansolid/dom-expressions/blob/ae71a417aa13b33517082628aff09513629df8b2/packages/dom-expressions/test/ssr/hydrate.spec.js#L7
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    globalThis._$HY = { events: [], completed: new WeakSet() };
    expect(() => render(() => <TestComponent />, { hydrate: true })).not.toThrow();
    await screen.findByText("title");
  });
});
