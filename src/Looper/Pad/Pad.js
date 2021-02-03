import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import './Pad.css'


function Pad(props) {
    const [play, { stop, isPlaying }] = useSound(props.loop, { loop: true });
    const [isPlay, setPlay] = useState(false)
    const isOn = props.inOn


    useEffect(() => {
        setPlay(false)
        stop()
    }, [isOn])

    function toggle() {
        if (!isPlay && props.inOn) {
            setPlay(true)
            play()
          {props.on(1)}
        } else {
            setPlay(false)
            stop()
            {props.on(-1)}
        }
    }
    return (
        <div className="Pad" onClick={toggle} style={{ "background": isPlay ? "lightgreen" : "red" }}>
            {isPlay && props.children}
        </div>
    )
}
export default Pad
