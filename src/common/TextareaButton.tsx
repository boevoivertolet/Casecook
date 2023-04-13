import {AddPostFormDataType} from './AddPostForm'
import {AddPostFormReduxNew} from "./AddPostFormNew";

export const TextareaButton = (props: TextareaButtonPropsType) => {
    const addPost = (mess: AddPostFormDataType) => {
        props.addPost(mess.newPostBody)
    }

    return (

        <AddPostFormReduxNew onSubmit = {addPost} />

    )
}

type TextareaButtonPropsType = {
    addPost: (message: string) => void
}
