import React from 'react'
import '../styles/submitButton.scss'
import ClipLoader from "react-spinners/ClipLoader";

export enum SubmitButtonState {
        NORMAL,
        LOADING,
        DISABLED,
        HIDDEN
    }

    interface ButtonProps{
        color?:'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'| 'cart';
        backgroundColor?:string;
        outline?:boolean;
        size?:'small' | 'medium' | 'large';
        block?:string;
        label:string;
        onClick?:() => void;
        state?:SubmitButtonState;
        loaderColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'| 'cart'|'light'|'dark';
        search_key?:string;
    
    }

export const SubmitButton = ({
    color = 'secondary',
    outline = false,
    size = 'medium',
    backgroundColor,
    loaderColor='success',
    block ='block',
    label, 
    state = SubmitButtonState.NORMAL,
    search_key,
    ...props
}:ButtonProps) => {
    const btnStyle = outline?`btn-outline-${color}`:`btn-${color}`
    const loaderstyle = `text-${loaderColor}`
    const isLoading = state === SubmitButtonState.LOADING
    return (
        <React.Fragment> 
            {
                state !== SubmitButtonState.HIDDEN &&
                <button
                    type='submit'
                    className={['btn', `btn-${size}`, `${block?'btn-block':''}`, btnStyle].join(' ')}
                    style={{backgroundColor}}
                    disabled={isLoading}
                    {...props} > 
                    {isLoading? 
                        <ClipLoader 
                            color={loaderstyle} 
                            loading={isLoading}  
                            size={10}/> 
                            :`${label}`
                    }
                </button>
            }
        </React.Fragment>
    )
}
