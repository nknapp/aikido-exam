import { executions, type Technique } from "$core/model";
import _groupBy from "lodash/groupBy";

export interface GroupTechniquesOptions {
  orderExecutions?: boolean;
}

export function groupTechniques(list: Technique[], { orderExecutions = false }: GroupTechniquesOptions = {}) {
  const executionOrder = orderExecutions ? executions : null;
  return regroup(list, "execution", executionOrder, (group) => {
    return regroup(group, "attack", null, (group) => {
      return regroup(group, "defence", null, (group) => {
        return regroup(group, "direction", null, (group) => group);
      });
    });
  });
}

type GroupableProp = "execution" | "attack" | "defence" | "direction";

function regroup<T extends GroupableProp>(
  list: Technique[],
  by: T,
  order: readonly Technique[T][] | null,
  mapGroup: (techniques: Technique[]) => Technique[],
) {
  const groups: Partial<Record<Technique[T], Technique[]>> = groupBy(list, by);
  if (order != null) {
    return order.flatMap((orderItem) => mapGroup(groups[orderItem] ?? []));
  }
  return Object.values<Technique[]>(groups as Record<string, Technique[]>).flatMap(mapGroup);
}

function groupBy<T extends GroupableProp>(items: Technique[], prop: T): Partial<Record<Technique[T], Technique[]>> {
  return _groupBy(items, prop) as Partial<Record<Technique[T], Technique[]>>;
}
