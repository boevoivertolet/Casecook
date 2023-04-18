import React from 'react';
import s from './Modal.module.css'


const Modal: React.FC<ModalProps> = ({active, setActive, children, ...restProps}) => {

    return (
        <>
            {!active && <div className={restProps.className}  onClick = {() => {
                setActive(true)
            }}>{restProps.title}
            </div>
            }
            {active &&
                <div className = {active ? `${s.modal + ' ' + s.active}` : `${s.modal}`} onClick = {() => {
                    setActive(false)
                }}>
                    <div onClick = {(e) => {
                        e.stopPropagation()
                    }} className = {active ? `${s.modal__content + ' ' + s.active}` : `${s.modal__content}`}>
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
    title: string
    className: string

}

export default Modal;
