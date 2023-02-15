import React, { ComponentType } from 'react'
import { Navigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReduxRootStateType } from '../store'

let mapStateToPropsForRedirect = (
	state: ReduxRootStateType
): MapStateToPropsForRedirectType => {
	return {
		isAuth: state.auth.isAuth
	}
}

export function withAuthRedirect<T>(Component: ComponentType<T>) {
	const RedirectComponent = (props: MapStateToPropsForRedirectType) => {
		let { isAuth, ...restProps } = props

		if (!props.isAuth) return <Navigate to={'/login'} />

		return <Component {...(restProps as any)} />
	}

	let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(
		RedirectComponent
	)

	return ConnectedAuthRedirectComponent
}

type MapStateToPropsForRedirectType = {
	isAuth: boolean
}
