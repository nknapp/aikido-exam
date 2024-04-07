import { type BaseTechnique, SINGLE_DIRECTION, techniqueProperties, type TechniqueProperty } from "$core/model";

const propsWithoutDirection: TechniqueProperty[] = ["execution", "attack", "defence"] as const;

export function relevantTechniqueProperties(
  technique: BaseTechnique,
  lastTechnique?: BaseTechnique,
): readonly TechniqueProperty[] {
  const properties = technique.direction === SINGLE_DIRECTION ? propsWithoutDirection : techniqueProperties;
  if (lastTechnique == null) return properties;
  if (technique.execution !== lastTechnique.execution) {
    return properties.slice(0);
  }
  if (technique.attack !== lastTechnique.attack) {
    return properties.slice(1);
  }
  if (technique.defence !== lastTechnique.defence) {
    return properties.slice(2);
  }
  if (technique.direction !== lastTechnique.direction) {
    return properties.slice(3);
  }
  return properties;
}
