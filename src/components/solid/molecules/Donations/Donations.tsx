import type { Component } from "solid-js";
import { LinkButton } from "@/components/solid/atoms/LinkButton.tsx";
import coffee from "./coffee.svg?url";
import liberapay from "./liberapay_logo_black.svg?url";

import { t } from "@/i18n";

export const Donations: Component = () => {
  return (
    <div class={"flex gap-4"}>
      <LinkButton
        size={"small"}
        color={"primary"}
        icon={coffee}
        label={t("donations.paypal.label")}
        href={"https://www.paypal.com/donate/?hosted_button_id=QQCVDKJ2TZLMN"}
      />
      <LinkButton
        size={"small"}
        icon={liberapay}
        label={t("donations.liberapay.label")}
        href={"https://de.liberapay.com/nils.knappmeier/"}
      />
    </div>
  );
};
