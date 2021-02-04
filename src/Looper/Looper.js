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
let num;



function Looper() {
    const [power, setPower] = useState(false)
    const [arePlaying, setArePlaying] = useState(0)
    const [qeue, setQeue] = useState([])


    function addToQeue(sound) {
        // add to array to queue [...qeue]



    }

    console.log(arePlaying)

    useEffect(() => {
        setArePlaying(0)
        // clearInterval(interval)
    }, [power])

    function startInterval() {
       interval = setInterval(() => {
           console.log('And')
       }, 8000);


    }

    function countPlaying(x) {
        if (arePlaying === 0 && x === 1) {
            startInterval()
        }
        if (arePlaying === 0 && !power ){
            clearInterval(interval)
        }


        if (power) {
            setArePlaying(arePlaying + x)
        }

    }

    ////kעשות מערך של אובייקטים שמכיל כל קובץ.  וכל פד קורא לפונקיית להרוספה לתור 

    return (
        <div className="Looper">
            <button onClick={() => { setPower(true) }} style={{ "background": power ? "lightgreen" : "lightgray" }}>ON</button>
            <button onClick={() => { setPower(false) }} style={{ "background": power ? "lightgray" : "lightblue" }}>OFF</button>
            <div className="Looper-body">
                <Pad loop={future_funk} isOn={power} on={countPlaying} num={num}>future funk</Pad>
                <Pad loop={stutter_breakbeats} isOn={power} on={countPlaying} num={num}>stutter breakbeats</Pad>
                <Pad loop={Bass_Warwick_heavy_funk_groove} isOn={power} on={countPlaying} num={num} >Bass Warwick heavy funk groove</Pad>
                <Pad loop={electric_guitar_coutry_slide} isOn={power} on={countPlaying} num={num}>Electric guitar coutry slide</Pad>
                <Pad loop={FUD_120_StompySlosh} isOn={power} on={countPlaying} num={num}>FUD 120 StompySlosh</Pad>
                <Pad loop={GrooveB_120bpm_Tanggu} isOn={power} on={countPlaying} num={num}>GrooveB 120bpm Tanggu</Pad>
                <Pad loop={MazePolitics_120_Perc} isOn={power} on={countPlaying} num={num}>MazePolitics 120 Perc</Pad>
                <Pad loop={PAS3GROOVE1_03B} isOn={power} on={countPlaying} num={num}>PAS3GROOVE1 03B</Pad>
                <Pad loop={SilentStar_120_Em_OrganSynth} isOn={power} on={countPlaying} num={num}>SilentStar 120 Em OrganSynth</Pad>

            </div>


        </div>
    )
}

export default Looper
