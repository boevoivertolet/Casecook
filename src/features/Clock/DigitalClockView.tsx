import React from 'react'
import { ClockViewPropsType, getString } from './Clock'
import s from './Clock.module.css'

export const DigitalClockView: React.FC<ClockViewPropsType> = ({ date }) => {
	const secondsString = getString(date.getSeconds())
	const minString = getString(date.getMinutes())
	const hoursString = getString(date.getHours())

	return (
		<div className={s.time}>
			<span className={s.date}>{Date().slice(0, 10)}</span>
			<span className={s.time}>{hoursString}</span>:
			<span className={s.time}>{minString}</span>:
			<span className={s.time}>{secondsString}</span>
		</div>
	)
}
