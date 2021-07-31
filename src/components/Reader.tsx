import React, { useCallback, useState } from "react";
import { Announcement } from "../utils/resolve-exam-tables";
import { Button, Col, Row } from "react-bootstrap";
import { Play, Stop } from "react-bootstrap-icons";
import { useAudioPlayer } from "../utils/hooks/useAudioPlayer";

export const Reader: React.FC<{
  queries: Announcement[];
  onStartPlaying: (index: number) => void;
}> = ({ queries, onStartPlaying }) => {
  const [lastQuery, setLastQuery] = useState<Announcement>();
  const [currentQueryIndex, setCurrentQueryIndex] = useState<number>(0);
  const currentQuery = queries[currentQueryIndex];

  const { playing, play, audioRef, stop } = useAudioPlayer();

  const playCurrentQuery = useCallback(async () => {
    await play(currentQuery, lastQuery);
    setCurrentQueryIndex((currentQueryIndex) => currentQueryIndex + 1);
    setLastQuery(currentQuery);
  }, [currentQuery, lastQuery, play]);

  return (
    <Row className={"border"}>
      <audio ref={audioRef} />
      <Col>
        <Button onClick={playCurrentQuery} disabled={playing}>
          <Play /> Play
        </Button>
        <Button onClick={stop} disabled={!playing}>
          <Stop /> Stop
        </Button>
      </Col>
      <Col>{currentQuery != null && currentQuery.join(" ")}</Col>
    </Row>
  );
};
