import { type Component } from "solid-js";
import type { TechniqueFilters } from "$core/chooseTechniques";
import { t } from "@/i18n";
import { CheckButton } from "@/components/solid/CheckButton.tsx";

export interface ChooserControlFiltersProps {
  value: TechniqueFilters;
  onChange: (value: TechniqueFilters) => void;
}

export const ChooserControlFilters: Component<ChooserControlFiltersProps> = (props) => {
  return (
    <CheckButton
      text={t("examChooser.filters.kneeFriendly")}
      value={props.value.kneeFriendly ?? false}
      onChange={(value) => props.onChange({ kneeFriendly: value })}
    />
  );
};
