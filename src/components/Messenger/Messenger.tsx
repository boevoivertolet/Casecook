import s from './Messenger.module.css'
import {User} from "../User/User";
import {AddMessageFormRedux} from "../../common/AddMessageForm";

export const Messenger = () => {
    return <div className = {s.messengerBlock}>
        <div className = {s.messengerNames}></div>
        <div className={s.dialogs}>
            <div className = {s.messengerDialogs}></div>
            <div className={s.addMessageBlock}>
                <AddMessageFormRedux />
            </div>
        </div>

    </div>
}
