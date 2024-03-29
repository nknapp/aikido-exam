import { executions, type Table } from "$core/model";

export interface NormalizeExamTableOptions {
  /**
   * Order executions by "suwari-waza, hanmi handachi waza etc"
   */
  orderExecutions?: boolean;
}

export function normalizeExamTable(
  examTable: Table,
  { orderExecutions = false }: NormalizeExamTableOptions = {},
): Table {
  let result = examTable;
  if (orderExecutions) {
    result = Object.fromEntries(
      executions
        .filter((execution) => examTable[execution] != null)
        .map((execution) => {
          return [execution, examTable[execution]];
        }),
    );
  }
  return result;
}
