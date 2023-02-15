import React, {useState} from 'react';

import {Clock} from './Clock';


export default {
    title: 'Clock',
    component: Clock,
}

export const BaseDigitalExample = () => {
    return <Clock mod={"digital"}/>
}
export const BaseAnalogExample = () => {
    return <Clock mod={"analog"}/>
}


