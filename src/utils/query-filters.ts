// noinspection RedundantIfStatementJS

import { Technique } from "../model/Technique";

export interface QueryFilters {
  badKnees: boolean;
}

export function filterQueries(
  queries: Technique[],
  filters: QueryFilters
): Technique[] {
  return queries.filter((query) => queryMatchesFilter(query, filters));
}

function queryMatchesFilter(query: Technique, filters: QueryFilters): boolean {
  if (filters.badKnees && !kneeFriendly(query)) {
    return false;
  }
  return true;
}

function kneeFriendly(query: Technique): boolean {
  return (
    query.definition[0] !== "suwari waza" &&
    query.definition[0] !== "hanmi handachi waza"
  );
}
