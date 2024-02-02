export function parseDotEnv(contents: string): Record<string, string> {
  const keyValues: [string, string][] = [];
  for (const { nr, line } of iterateTrimmedLines(contents)) {
    if (line === "") continue;
    if (!line.includes("=")) {
      throw new Error("Syntax error in line " + nr);
    }
    const [key, value] = line.split("=");
    keyValues.push([key, value]);
  }
  return Object.fromEntries(keyValues);
}

function* iterateTrimmedLines(string: string): Generator<{ nr: number; line: string }> {
  const lines = string.split("\n");
  for (let i = 0; i < lines.length; i++) {
    yield {
      nr: i,
      line: lines[i].replace(/#.*$/, "").trim(),
    };
  }
}
