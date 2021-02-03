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


let interval;
let num = 8000



function Looper() {
    const [power, setPower] = useState(false)
    const [arePlaying, setArePlaying] = useState(0)

console.log(arePlaying)

    useEffect(() => {
        setArePlaying(0)
    }, [power])

  function  countPlaying(x) {
        if (power) {
            setArePlaying(arePlaying + x)
        }
        
    }
    return (
        <div className="Looper">
            <button onClick={() => { setPower(true) }} style={{ "background": power ? "lightgreen" : "lightgray" }}>ON</button>
            <button onClick={() => { setPower(false) }} style={{ "background": power ? "lightgray" : "lightblue" }}>OFF</button>
            <div className="Looper-body">
                <Pad loop={future_funk} inOn={power} on={countPlaying} >future funk</Pad>
                <Pad loop={stutter_breakbeats} inOn={power} on={countPlaying}>stutter breakbeats</Pad>
                <Pad loop={Bass_Warwick_heavy_funk_groove} inOn={power} on={countPlaying} >Bass Warwick heavy funk groove</Pad>
                <Pad loop={electric_guitar_coutry_slide} inOn={power} on={countPlaying}>Electric guitar coutry slide</Pad>
                <Pad loop={FUD_120_StompySlosh} inOn={power} on={countPlaying} >FUD 120 StompySlosh</Pad>
                <Pad loop={GrooveB_120bpm_Tanggu} inOn={power} on={countPlaying} >GrooveB 120bpm Tanggu</Pad>
                <Pad loop={MazePolitics_120_Perc} inOn={power} on={countPlaying} >MazePolitics 120 Perc</Pad>
                <Pad loop={PAS3GROOVE1_03B} inOn={power} on={countPlaying} >PAS3GROOVE1 03B</Pad>
                <Pad loop={SilentStar_120_Em_OrganSynth} inOn={power} on={countPlaying} >SilentStar 120 Em OrganSynth</Pad>
                
            </div>


        </div>
    )
}

export default Looper
