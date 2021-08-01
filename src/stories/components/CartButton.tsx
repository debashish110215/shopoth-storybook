import React from 'react'
import '../styles/cartButton.scss'
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
    search_key?:string;
   
}

export const CartButton = ({
    color = 'secondary',
    outline = false,
    size = 'medium',
    backgroundColor,
    loaderColor='success',
    block ='block',
    label, 
    state = CartButtonState.NORMAL,
    search_key,
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
                    {isLoading? 
                        <ClipLoader 
                            color={loaderstyle} 
                            loading={isLoading}  
                            size={10}/> 
                            :`${label} ${search_key ? '"'+ search_key+'"':''}`
                    }
                </button>
            }
        </React.Fragment>
    )
}
