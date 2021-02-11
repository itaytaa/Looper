import React, { useState, useEffect } from 'react'
// import useSound from 'use-sound'
import './Looper.css'
import Pad from './Pad/Pad'

import future_funk from './loop_samples/120_future_funk_beats_25.mp3'
import stutter_breakbeats from './loop_samples/120_stutter_breakbeats_16.mp3'
import Bass_Warwick_heavy_funk_groove from './loop_samples/Bass Warwick heavy funk groove on E 120 BPM.mp3'
import electric_guitar_coutry_slide from './loop_samples/electric guitar coutry slide 120bpm - B.mp3'
import FUD_120_StompySlosh from './loop_samples/FUD_120_StompySlosh.mp3'
import GrooveB_120bpm_Tanggu from './loop_samples/GrooveB_120bpm_Tanggu.mp3'
import MazePolitics_120_Perc from './loop_samples/MazePolitics_120_Perc.mp3'
import PAS3GROOVE1_03B from './loop_samples/PAS3GROOVE1.03B.mp3'
import SilentStar_120_Em_OrganSynth from './loop_samples/SilentStar_120_Em_OrganSynth.mp3'
const FilesArray = [{ audio: future_funk, name: "Future Funk", },
{ audio: stutter_breakbeats, name: "stutter breakbeats" },
{ audio: Bass_Warwick_heavy_funk_groove, name: "Bass Warwick heavy funk groove" },
{ audio: electric_guitar_coutry_slide, name: "electric guitar coutry slide" },
{ audio: FUD_120_StompySlosh, name: "FUD 120 StompySlosh" },
{ audio: GrooveB_120bpm_Tanggu, name: "GrooveB 120bpm Tanggu" },
{ audio: MazePolitics_120_Perc, name: "MazePolitics 120 Perc" },
{ audio: PAS3GROOVE1_03B, name: "PAS3GROOVE1 03B" },
{ audio: SilentStar_120_Em_OrganSynth, name: "SilentStar 120 Em OrganSynth" }]

let interval;
let num = 8000;



function Looper() {
    const [power, setPower] = useState(false)
    const [arePlaying, setArePlaying] = useState(0)

    // console.log(arePlaying)

    useEffect(() => {
        setArePlaying(0)
        reset()
    }, [power])

    function startInterval() {
        interval = setInterval(() => {
            console.log(num)
            num -= 1000
            // console.log(num)
            if (num === 0) num = 8000
        }, 1000)
    }

    function countPlaying(x) {
        if (arePlaying === 1 && x === -1) {
           reset()
        }
        if (arePlaying === 0 && x === 1) {
            startInterval()
        }
        if (power) {
            setArePlaying(arePlaying + x)
        }

    }

    function reset() {
        clearInterval(interval)
        num = 8000
    }

    return (
        <div className="Looper">
            <button onClick={() => { setPower(true) }} style={{ "background": power ? "lightgreen" : "lightgray" }}>ON</button>
            <button onClick={() => { setPower(false) }} style={{ "background": power ? "lightgray" : "lightblue" }}>OFF</button>
            <div className="Looper-body">
                {FilesArray.map((file, idx) => {
                    return (
                        <Pad loop={file.audio} isOn={power}
                            on={countPlaying} key={idx}  >{file.name}</Pad>
                    )
                })}



            </div>


        </div>
    )
}

export default Looper
export { num } 
