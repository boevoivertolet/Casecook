import React, {useState} from 'react';
import './modal.css'

const Modal = () => {
    const [active, setActive] = useState<boolean>(false)
    return (
        <>
            {!active && <button onClick = {() => {
                setActive(true)
            }}> modal
            </button>
            }
            {active &&
                <div className = {active ? 'modal active' : 'modal'} onClick = {() => {
                    setActive(false)
                }}>
                    <div onClick = {(e) => {
                        e.stopPropagation()
                    }} className = {active ? 'modal__content active' : 'modal_content'}></div>
                </div>
            }
        </>

    );
};

export default Modal;
