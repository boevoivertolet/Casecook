import React from 'react'
import {connect} from 'react-redux'
import {
    follow,
    InitialUsersStateType,
    requestUsers,
    setCurrentPage,
    setIsFollowingProgress,
    unFollow
} from '../../reducers/usersReducer'
import {ReduxRootStateType} from '../../store'
import {Friends} from './Friends'
import {setIsFetchingAC} from '../../reducers/appReducer'
import {Preloader} from '../../common/Preloader'
import {getCurrentPage, getIsFetching, getPageSize, getTotalCount, getUsers} from '../../reducers/usersSelectors'
import {Navigate} from 'react-router-dom'
import {AuthUserType} from '../../reducers/authReducer'

class FriendsContainer extends React.Component<FriendsContainerType> {
    componentDidMount() {
        this.props.requestUsers(
            this.props.users.currentPage,
            this.props.users.pageSize
        )
    }

    render() {
        if (!this.props.authUser.isAuth) return <Navigate to={'/login'}/>
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Friends {...this.props} />
            </>
        )
    }
}

const mapStateToProps = (
    state: ReduxRootStateType
): FriendsMapStateToPropsType => {
    return {
        // users: getUsers(state),
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalCount: getTotalCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        authUser: state.auth.data
    }
}

type FriendsMapStateToPropsType = {
    users: InitialUsersStateType
    pageSize: number
    totalCount: number
    currentPage: number
    isFetching: boolean
    authUser: AuthUserType
}
type FriendsMapDispatchToPropsType = {
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setCurrentPage: (currentPage: number) => void
    setIsFollowingProgress: (isFetching: boolean, userId: string) => void
    requestUsers: (currentPage: number, pageSize: number) => void
}
type FriendsContainerType = FriendsMapDispatchToPropsType &
    FriendsMapStateToPropsType
export default connect(mapStateToProps, {
    follow,
    unFollow,
    setCurrentPage,
    setIsFollowingProgress,
    requestUsers,
    setIsFetchingAC
})(FriendsContainer)
