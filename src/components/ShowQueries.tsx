import { Announcement } from "../utils/resolve-exam-tables";
import { Table } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import React from "react";
import { PlayCircle } from "react-bootstrap-icons";

const DIFFERENT_VALUE_CLASS = "";
const SAME_VALUE_CLASS = "text-muted";

function cellClass(
  queries: Announcement[],
  rowIndex: number,
  colIndex: number
): string {
  if (rowIndex === 0) {
    return DIFFERENT_VALUE_CLASS;
  }
  if (queries[rowIndex][colIndex] === queries[rowIndex - 1][colIndex]) {
    return SAME_VALUE_CLASS;
  }
  return DIFFERENT_VALUE_CLASS;
}

export const ShowQueries: React.FC<{
  queries: Announcement[];
  currentQuery: number;
}> = ({ queries, currentQuery }) => {
  const { t } = useTranslation();
  return (
    <Table bordered={true}>
      <thead>
        <tr>
          <th className={"text-muted"}>
            <PlayCircle />
          </th>
          <th>{t("examTable.header.execution")}</th>
          <th>{t("examTable.header.attack")}</th>
          <th>{t("examTable.header.technique")}</th>
          <th>{t("examTable.header.direction")}</th>
        </tr>
      </thead>
      <tbody>
        {queries.map((query, index) => {
          return (
            <tr key={query.join(" - ")}>
              <td>{currentQuery === index && <PlayCircle />}</td>
              <td className={cellClass(queries, index, 0)}>{query[0]}</td>
              <td className={cellClass(queries, index, 1)}>{query[1]}</td>
              <td className={cellClass(queries, index, 2)}>{query[2]}</td>
              <td className={cellClass(queries, index, 3)}>{query[3]}</td>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
