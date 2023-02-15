import React from 'react';
import {ClockViewPropsType} from './Clock';
import './AnalogClockView.css'

export const AnalogClockView: React.FC<ClockViewPropsType> = ({date}) => {

    /* const hoursArrow = document.querySelector('hours')
     const minutesArrow = document.querySelector('minutes')
     const secondsArrow = document.querySelector('seconds')
     const deg = 6

     setInterval(() => {
         const hours = date.getHours() * 30
         const minutes = date.getMinutes() * deg
         const seconds = date.getSeconds() * deg

         if (hoursArrow) {
             hoursArrow.style.transform = `rotateZ(${hours + (minutes / 12)}deg)`
         }


         minutesArrow.style.transform = `rotateZ(${(minutes)}deg)`

         secondsArrow.style.transform = `rotateZ(${(seconds)}deg)`

     }, 0)*/
    const secondsStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    }
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    }
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 6}deg)`
    }


    /*    return <div className="clock">
            <div className="hour">
                <div className="hours" style={hoursStyle}></div>
            </div>
            <div className="minute">
                <div className="minutes" style={minutesStyle}></div>
            </div>
            <div className="second">
                <div className="seconds" style={secondStyle}></div>
            </div>
        </div>*/


    return <div className={'clock1'}>
        <div className={'analog-clock1'}>
            <div className={'dial1 seconds1'} style={secondsStyle}/>
            <div className={'dial1 minutes1'} style={minutesStyle}/>
            <div className={'dial1 hours1'} style={hoursStyle}/>
        </div>
    </div>

}