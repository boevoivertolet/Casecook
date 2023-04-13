import React from 'react'
import styles from './FormsControls.module.css'
import {TextareaAutosize} from "@mui/material";


export const Textarea: React.FC<any> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className = {styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <TextareaAutosize {...input} {...props}></TextareaAutosize>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Input: React.FC<any> = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className = {styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <input {...input} {...props} />
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}
