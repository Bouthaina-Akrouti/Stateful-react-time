import React from 'react'



const TimeFormat = (props) => {
    return(
        <div>
        <h1>{props.hours<10 ? '0'+props.hours: props.hours} : {props.minutes<10 ? '0'+props.minutes: props.minutes} : {props.seconds<10 ? '0'+props.seconds: props.seconds} </h1>
        
        </div>
    )
}

export default TimeFormat