import React, {useState} from 'react';
import './modal.css'

const Modal: React.FC<ModalProps> = ({active, setActive, children}) => {

    return (
        <>
            {!active && <div onClick = {() => {
                setActive(true)
            }}> modal
            </div>
            }
            {active &&
                <div className = {active ? 'modal active' : 'modal'} onClick = {() => {
                    setActive(false)
                }}>
                    <div onClick = {(e) => {
                        e.stopPropagation()
                    }} className = {active ? 'modal__content active' : 'modal_content'}>
                        {children}
                    </div>
                </div>
            }
        </>

    );
};

type ModalProps = {
    children?: React.ReactNode
    active: boolean
    setActive: (active: boolean) => void
}

export default Modal;
