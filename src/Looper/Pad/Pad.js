import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import './Pad.css'
const num = require('../Looper')
let interval;

function Pad(props) {
    const [play, { stop }] = useSound(props.loop, { loop: true });

    const [isPlay, setPlay] = useState(false)
    const isOn = props.isOn


    useEffect(() => {
        setPlay(false)
        stop()
    }, [isOn])

    function playTime() {
        if (num.num !== 8000) {
            interval = setTimeout(() => {
                play()
                // console.log('started')
            }, num.num);
        } else {
            play()

        }
    }


    function toggle() {
        if (!isPlay && props.isOn) {
            { props.on(1) }
            setPlay(true)
            playTime()
           
        } else if (isPlay && props.isOn) {
            { props.on(-1) }
            setPlay(false)
            stop()
            clearInterval(interval)
            
        }
    }
    return (
        <div className="Pad" onClick={toggle} style={{ "background": isPlay ? "lightgreen" : "red" }}>
            {isPlay && props.children}
        </div>
    )
}
export default Pad
