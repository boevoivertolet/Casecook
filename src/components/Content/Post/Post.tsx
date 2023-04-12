import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import {PostDataType} from '../../../reducers/postReducer'
import {UserProfileType} from '../../../reducers/profileReducer'
import s from '../Content.module.css'
import userPhoto from '../../../assets/userphoto/user.jpeg'
import {DateTime} from './DateTime'

export const Post: React.FC<PostType> = (props) => {
    const {
        postData,
        userProfile,
        ...restProps
    } = props
    console.log('POST RENDER')
    const deletePost = () => {
        restProps.deletePost(postData.postId)
    }
    return (
        <div className = {s.posts}>
            <div className = {s.postUserBlock}>
                <div className = {s.postUser}>
                    <img
                        className = {s.userAva}
                        src = {
                            props.userProfile?.photos.small
                                ? userProfile?.photos.small
                                : userPhoto
                        }
                        alt = '#'
                    />
                </div>
                <div className = {s.postUserName}>
                    {userProfile?.fullName}
                    <DateTime />
                </div>
            </div>
            <div className = {s.postBody}>{postData.message}</div>
            <DeleteOutlinedIcon
                onClick = {deletePost}
                className = {s.DeleteOutlinedIcon}></DeleteOutlinedIcon>
        </div>
    )
}

type PostType = {
    postData: PostDataType
    userProfile: UserProfileType | null
    deletePost: (postId: number) => void
}
