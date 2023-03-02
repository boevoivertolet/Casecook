import { UniversalButton } from '../../common/UniversalButton'
import s from './Login.module.css'
import logo from '../../assets/logo/logo.png'

export const Login = () => {
	return (
		<div className={s.login}>
			<header>
				<div className={s.logoBlock}>
					<div className={s.wellCome}>Wellcome to Casecook</div>
					<img className={s.logo} src={logo} alt='logo' />
				</div>
			</header>
			<h1>Login</h1>
			<form>
				<div>
					<input type='text' placeholder={'login'} />
				</div>
				<div>
					<input type='text' placeholder={'password'} />
				</div>
				<div>
					<input type='checkbox' /> remember me
				</div>
				<div>
					<UniversalButton
						title={'Login'}
						onClick={() => {
							alert()
						}}
					/>
				</div>
			</form>
		</div>
	)
}
