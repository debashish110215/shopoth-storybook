import React from 'react'
import './cartButton.scss'
import ClipLoader from "react-spinners/ClipLoader";

export enum CartButtonState {
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
    state?:CartButtonState;
    loaderColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'| 'cart'|'light'|'dark';
   
}

export const CartButton = ({
    color = 'secondary',
    outline = false,
    size = 'medium',
    backgroundColor,
    loaderColor='success',
    block ,
    label, 
    state = CartButtonState.NORMAL,
    ...props
}:ButtonProps) => {
    const btnStyle = outline?`btn-outline-${color}`:`btn-${color}`
    const loaderstyle = `text-${loaderColor}`
    const isLoading = state === CartButtonState.LOADING
    return (
        <React.Fragment> 
            {
                state !== CartButtonState.HIDDEN &&
                <button
                    type='button'
                    className={['btn', `btn-${size}`, `${block?'btn-block':''}`, btnStyle].join(' ')}
                    style={{backgroundColor}}
                    disabled={isLoading}
                    {...props} > 
                    {isLoading?  <ClipLoader color={loaderstyle} loading={isLoading}  size={10}/> : `${label}`}
                </button>
            }
        </React.Fragment>
    )
}
