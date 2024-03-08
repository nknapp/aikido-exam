import { loadPlayer } from "@/core";
import React, { ReactNode, useCallback, useEffect, useState } from "react";

import speechPack from "@/adapter/speechpacks/default";

import { SpeechFile } from "$core/model/SpeechPack";
import { attacks, defences, directions, executions, SINGLE_DIRECTION } from "$core/model";
import { Button, Spinner, ToggleButton } from "react-bootstrap";
interface ShowAsyncProps<T> {
  fallback: ReactNode;
  loader: () => Promise<T>;
  children: (value: T) => ReactNode;
}

function ShowAsync<T>({ fallback, loader, children }: ShowAsyncProps<T>): ReactNode {
  const [value, setValue] = useState<T | null>(null);
  useEffect(() => {
    loader().then((resolvedValue) => {
      setValue(resolvedValue);
    });
  }, [loader]);
  if (value == null) {
    return fallback;
  }
  return children(value);
}

export const Component: React.FC = () => {
  const loader = useCallback(() => loadPlayer(speechPack), []);

  const [execution, setExecution] = useState<SpeechFileOrSingleDirection>("suwari waza");
  const [attack, setAttack] = useState<SpeechFileOrSingleDirection>("ai hanmi katate dori");
  const [defence, setDefence] = useState<SpeechFileOrSingleDirection>("ikkyo");
  const [direction, setDirection] = useState<SpeechFile | typeof SINGLE_DIRECTION>("omote");

  const technique = [execution, attack, defence, direction].filter((x): x is SpeechFile => x !== SINGLE_DIRECTION);

  return (
    <div>
      <div>
        <SingleChoice label={"execution"} values={executions} selected={execution} onSelect={setExecution} />
        <SingleChoice label={"attack"} values={attacks} selected={attack} onSelect={setAttack} />
        <SingleChoice label={"defence"} values={defences} selected={defence} onSelect={setDefence} />
        <SingleChoice
          label={"direction"}
          values={[...directions, SINGLE_DIRECTION]}
          selected={direction}
          onSelect={setDirection}
        />
      </div>
      <div className={"m-1"}>
        <ShowAsync
          fallback={
            <Button size={"lg"} disabled>
              <Spinner />
            </Button>
          }
          loader={loader}
        >
          {(player) => {
            return (
              <Button size={"lg"} onClick={() => player.play(technique)}>
                Play
              </Button>
            );
          }}
        </ShowAsync>
      </div>
    </div>
  );
};

type SpeechFileOrSingleDirection = SpeechFile | typeof SINGLE_DIRECTION;
export const SingleChoice: React.FC<{
  className?: string;
  label: string;
  values: readonly SpeechFileOrSingleDirection[];
  selected: SpeechFileOrSingleDirection;
  onSelect: (value: SpeechFileOrSingleDirection) => void;
}> = ({ label, values, className, selected, onSelect }) => {
  return (
    <div>
      <label className={"ms-1"}>{label}</label>
      <div className={className + " d-flex flex-wrap mb-2"}>
        {values.map((name) => (
          <div key={name} className={"m-1"}>
            <ToggleButton
              id={name}
              size={"sm"}
              type={"radio"}
              variant={"outline-primary"}
              value={name}
              checked={selected === name}
              onChange={() => onSelect(name)}
            >
              {name}
            </ToggleButton>
          </div>
        ))}
      </div>
    </div>
  );
};
