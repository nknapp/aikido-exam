import React, { ReactNode } from "react";

export function registerErrorHandler() {
  const errors: Error[] = [];
  const errorView = document.createElement("div");
  errorView.style.display = "none";
  errorView.innerHTML = `
    <h2>Ein Fehler ist aufgetreten</h2>
    <div class="flex">
        ${"canShare" in navigator ? `<button id="errorHandler__share">Teilen</button>` : ""}
        ${"clipboard" in navigator ? `<button id="errorHandler__copyToClipboard">Kopieren</button>` : ""}
    </div>
    <textarea id="errorHandler__list" style="width: 100%;height: 20rem;white-space: pre"/>
  `;
  document.body.prepend(errorView);

  document.getElementById("errorHandler__share")?.addEventListener("click", async () => {
    await navigator.share({ title: "Fehler auf aikido-exam.knappi.org", text: createErrorMessage(errors) });
  });

  document.getElementById("errorHandler__copyToClipboard")?.addEventListener("click", async () => {
    await navigator.clipboard.writeText(createErrorMessage(errors));
  });

  function handleError(error: Error) {
    errors.push(error);
    errorView.style.display = "";
    const listView = document.getElementById("errorHandler__list") as HTMLTextAreaElement;
    if (listView) {
      listView.value = createErrorMessage(errors);
    }
  }

  window.addEventListener("unhandledrejection", (event) => {
    handleError(event.reason);
    event.preventDefault();
  });

  window.addEventListener("error", (event) => {
    handleError(event.error);
    event.preventDefault();
  });

  return {
    ErrorBoundary: class ErrorBoundary extends React.Component<{ children: ReactNode }, { hasError: boolean }> {
      constructor(props: { children: ReactNode }) {
        super(props);
        this.state = { hasError: false };
      }

      static getDerivedStateFromError() {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
      }

      componentDidCatch(error: Error) {
        handleError(error);
      }

      render() {
        if (this.state.hasError) {
          // You can render any custom fallback UI
          return "";
        }

        return this.props.children;
      }
    },
  };
}

function createErrorMessage(errors: Error[]) {
  const errorStrings = errors.map((error) => error.message + "\n" + error.stack + "\n").join("\n");
  return `Hallo Nils, ich habe auf aikido-exam.knappi.org einen Fehler bekommen:\n\nMein Browser: ${navigator.userAgent}${errorStrings}`;
}
