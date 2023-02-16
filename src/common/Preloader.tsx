import preloader from '../assets/preloader/preloader.gif'
import s from '../App.module.css'
export const Preloader = () => {
	return (
		<div className={s.preloader}>
			<img src={preloader} alt='#' />
		</div>
	)
}
