import { useState } from 'react'
import s from '../Content.module.css'
export const DateTime = () => {
	const [dateTime, setDateTime] = useState(Date().slice(0, 25))
	return <div className={s.dateTime}>{dateTime}</div>
}
