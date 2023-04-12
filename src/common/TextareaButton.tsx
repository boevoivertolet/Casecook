import s from '../components/Content/Content.module.css'
import {AddPostFormDataType, AddPostFormRedux} from './AddPostForm'
import {useState} from "react";

export const TextareaButton = (props: TextareaButtonPropsType) => {
    const addPost = (mess: AddPostFormDataType) => {
        props.addPost(mess.newPostBody)
    }
    const [editMode, setEditMode] = useState<boolean>(false)


    const editModeOn = () => {
        setEditMode(true)

    }
    const editModeOff = () => {
            setEditMode(false)
    }

    return (
        <div onClick={editModeOn} onBlur={editModeOff}>{
            !editMode
                ? <div className={s.editDiv}>Privet</div>
                : <AddPostFormRedux onSubmit = {addPost} />
        }
        </div>

    )
}

type TextareaButtonPropsType = {
    addPost: (message: string) => void
}
