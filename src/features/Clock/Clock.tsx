import React, { useEffect, useState } from 'react'
import { DigitalClockView } from './DigitalClockView'
import { AnalogClockView } from './AnalogClockView'
import s from './Clock.module.css'

export const getString = (number: number) =>
	number < 10 ? '0' + number : number

export const Clock: React.FC<PropsType> = (props) => {
	const [date, setDate] = useState(new Date())

	useEffect(() => {
		const intervalId = setInterval(() => {
			setDate(new Date())
		}, 1000)
		return () => {
			clearInterval(intervalId)
		}
	}, [])

	let view

	switch (props.mod) {
		case 'analog':
			view = <AnalogClockView date={date} />
			break
		case 'digital':
		default:
			view = <DigitalClockView date={date} />
	}

	return <div className={s.time}>{view}</div>
}

type PropsType = {
	mod?: 'digital' | 'analog'
}
export type ClockViewPropsType = {
	date: Date
}
