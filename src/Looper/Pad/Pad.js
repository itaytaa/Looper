import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import './Pad.css'
const num = require('../Looper')
// console.log()
let interval;

function Pad(props) {
    const [play, { stop, isPlaying }] = useSound(props.loop, { loop: true},{ seek: num.num  });
    const [isPlay, setPlay] = useState(false)
    const isOn = props.isOn


    useEffect(() => {
        setPlay(false)
        stop()
    }, [isOn])

    function playTime() {
        if (num.num === 8000) {
            play()
        } else {
           
            interval = setTimeout(() => {
                play()
                // console.log('started')
            }, num.num-200);

        }
    }
    

    function toggle() {
        if (!isPlay && props.isOn) {
            setPlay(true)
            playTime()
            { props.on(1) }
        } else {
            setPlay(false)
            stop()
            clearInterval(interval)
            { props.on(-1) }
        }
    }
    return (
        <div className="Pad" onClick={toggle} style={{ "background": isPlay ? "lightgreen" : "red" }}>
            {isPlay && props.children}
        </div>
    )
}
export default Pad
