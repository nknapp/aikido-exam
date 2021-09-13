// noinspection RedundantIfStatementJS

import { Announcement } from "./resolve-exam-tables";

export interface QueryFilters {
  badKnees: boolean;
}

export function filterQueries(
  queries: Announcement[],
  filters: QueryFilters
): Announcement[] {
  return queries.filter((query) => queryMatchesFilter(query, filters));
}

function queryMatchesFilter(
  query: Announcement,
  filters: QueryFilters
): boolean {
  if (filters.badKnees && !kneeFriendly(query)) {
    return false;
  }
  return true;
}

function kneeFriendly(query: Announcement): boolean {
  return query[0] !== "suwari waza" && query[0] !== "hanmi handachi waza";
}
