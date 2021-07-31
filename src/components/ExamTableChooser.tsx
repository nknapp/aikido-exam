import { Announcement, resolveExamTables } from "../utils/resolve-exam-tables";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Col, Row, ToggleButton } from "react-bootstrap";
import { TranslationSchema } from "../i18n/translations/schema";
import { ExamTable } from "../exam-tables/baseTypes";
import { kyu5 } from "../exam-tables/kyu5";
import { kyu1 } from "../exam-tables/kyu1";
import { dan3 } from "../exam-tables/dan3";
import { dan1 } from "../exam-tables/dan1";
import { kyu4 } from "../exam-tables/kyu4";
import { dan2 } from "../exam-tables/dan2";
import { kyu2 } from "../exam-tables/kyu2";
import { kyu3 } from "../exam-tables/kyu3";
import { CheckSquare, Square } from "react-bootstrap-icons";

export interface ExamTableChooserProps {
  onChoice(queries: Announcement[]): void;
}

const buttons = [
  "kyu5",
  "kyu4",
  "kyu3",
  "kyu2",
  "kyu1",
  "dan1",
  "dan2",
  "dan3",
] as const;

type ButtonName = typeof buttons[number];

type ButtonState = {
  [K in ButtonName]?: boolean;
};

type ButtonSpec = {
  labelKey: keyof TranslationSchema;
  table: ExamTable;
};

const ButtonDetails: Record<ButtonName, ButtonSpec> = {
  kyu5: {
    labelKey: "chooser.button.kyu5",
    table: kyu5,
  },
  kyu4: {
    labelKey: "chooser.button.kyu4",
    table: kyu4,
  },
  kyu3: {
    labelKey: "chooser.button.kyu3",
    table: kyu3,
  },
  kyu2: {
    labelKey: "chooser.button.kyu2",
    table: kyu2,
  },
  kyu1: {
    labelKey: "chooser.button.kyu1",
    table: kyu1,
  },
  dan1: {
    labelKey: "chooser.button.dan1",
    table: dan1,
  },
  dan2: {
    labelKey: "chooser.button.dan2",
    table: dan2,
  },
  dan3: {
    labelKey: "chooser.button.dan3",
    table: dan3,
  },
};

export const ExamTableChooser: React.FC<ExamTableChooserProps> = ({
  onChoice,
}) => {
  const [buttonState, setButtonState] = useState<ButtonState>({});

  useEffect(() => {
    const selectedButtons = buttons.filter(
      (buttonName) => buttonState[buttonName] === true
    );
    const tables: ExamTable[] = selectedButtons.map(
      (buttonName) => ButtonDetails[buttonName].table
    );
    onChoice(resolveExamTables(tables));
  }, [buttonState, onChoice]);

  function updateState(key: ButtonName, checked: boolean): void {
    setButtonState((buttonState) => ({
      ...buttonState,
      [key]: checked,
    }));
  }

  const { t } = useTranslation();
  return (
    <Row>
      {buttons.map((buttonName) => {
        return (
          <Col key={buttonName} className={"mb-1"}>
            <ToggleButton
              id={"toggle-" + buttonName}
              onChange={(event) => {
                console.log("change", event);
                updateState(buttonName, event.currentTarget.checked);
              }}
              type="checkbox"
              value={buttonName}
              checked={buttonState[buttonName] || false}
            >
              {buttonState[buttonName] ? <CheckSquare /> : <Square />}{" "}
              {t(ButtonDetails[buttonName].labelKey)}
            </ToggleButton>
          </Col>
        );
      })}
    </Row>
  );
};
