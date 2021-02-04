import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import './Pad.css'

let interval;

function Pad(props) {
    const [play, { stop, isPlaying }] = useSound(props.loop, { loop: true });
    const [isPlay, setPlay] = useState(false)
    const isOn = props.isOn


    useEffect(() => {
        setPlay(false)
        stop()
        clearInterval(interval)
    }, [isOn])

    


    function toggle() {
        console.log(props.num)
        if (!isPlay && props.isOn) {
            setPlay(true)
           play()
            { props.on(1) }
        } else {
            setPlay(false)
            stop()
           
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
