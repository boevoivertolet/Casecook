import s from './Music.module.css'
export const Music = () => {
	return (
		<div className={s.music}>
			<div>
				Music
				<div>
					<a
						target={'_blank'}
						href='https://www.youtube.com/watch?v=PldEF6YGH-M&t=463s&ab_channel=NOSTALGIE'>
						Кино микс
					</a>
				</div>
				<div>
					<a
						target={'_blank'}
						href='https://music.yandex.ru/users/bjha78rus/playlists/3'>
						Яндекс музыка
					</a>
				</div>
			</div>
		</div>
	)
}
