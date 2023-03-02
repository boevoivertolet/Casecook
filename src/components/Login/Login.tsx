import s from './Login.module.css'
import logo from '../../assets/logo/logo.png'
import { LoginFormDataType, LoginReduxForm } from './LoginForm'
import { Navigate } from 'react-router-dom'

export const Login = (props: LoginPropsType) => {
	const onSubmit = (formData: LoginFormDataType) => {
		props.login(formData)
	}
	if (props.isAuth) return <Navigate to='/my-profile' />

	return (
		<div className={s.login}>
			<header>
				<div className={s.logoBlock}>
					<div className={s.wellCome}>Wellcome to Casecook</div>
					<img className={s.logo} src={logo} alt='logo' />
				</div>
			</header>
			<h1>Login</h1>
			<LoginReduxForm onSubmit={onSubmit} />
		</div>
	)
}
type LoginPropsType = {
	login: (formData: LoginFormDataType) => void
	isAuth: boolean
}
