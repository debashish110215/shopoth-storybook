import React from 'react'
import {FaSpinner} from 'react-icons/fa'
import './cartButton.scss'

interface ButtonProps{
    color?:'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'| 'cart';
    backgroundColor?:string;
    outline?:boolean;
    size?:'small' | 'medium' | 'large';
    block?:string;
    label:string;
    onClick?:() => void;
    spinnerOn?:boolean
   
}

export const CartButton = ({
    color = 'secondary',
    outline = false,
    size = 'medium',
    backgroundColor,
    block ,
    label, 
    spinnerOn = false,
    ...props
}:ButtonProps) => {
    const btnStyle = outline?`btn-outline-${color}`:`btn-${color}`
    return (
        <button
            type='button'
            className={['btn', `btn-${size}`, `${block?'btn-block':''}`, btnStyle].join(' ')}
            style={{backgroundColor}}
            {...props}
        >
         {label}  { spinnerOn && <FaSpinner/>} 
        </button>
    )
}
