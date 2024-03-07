import {Player} from "$core/player/Player";
import React, {useEffect, useRef} from "react";

import {defaultSpeechPack} from "$core/speechpacks";

import {SpeechFile, } from "$core/model/SpeechPack";

export const Component: React.FC = () => {
    const player = useRef<Player | null>()

    useEffect(() => {
        player.current = new Player(defaultSpeechPack)
        return () => {
            player.current?.close()
            player.current = null
        }
    }, []);

    const technique: SpeechFile[] = [ "hanmi handachi waza", "chudan tsuki", "aiki otoshi", "omote" ]

    return <div>
        <button onClick={() => player.current?.play(technique)}>Play</button>
    </div>
}
