import React,{useState, useEffect} from 'react'
import './cartButton.scss'
import ClipLoader from "react-spinners/ClipLoader";

interface ButtonProps{
    color?:'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'| 'cart';
    backgroundColor?:string;
    outline?:boolean;
    size?:'small' | 'medium' | 'large';
    block?:string;
    label:string;
    onClick?:() => void;
    loading?:boolean;
    loaderColor?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger'| 'cart'|'light'|'dark';
   
}

export const CartButton = ({
    color = 'secondary',
    outline = false,
    size = 'medium',
    backgroundColor,
    loaderColor='success',
    block ='block',
    label, 
    loading = false,
    ...props
}:ButtonProps) => {
    const btnStyle = outline?`btn-outline-${color}`:`btn-${color}`
    const loaderstyle = `text-${loaderColor}`
    return (
        <button
            type='button'
            className={['btn', `btn-${size}`, `${block?'btn-block':''}`, btnStyle].join(' ')}
            style={{backgroundColor}}
            disabled={loading}
            {...props}
        >

          {loading?  <ClipLoader color={loaderstyle} loading={loading}  size={10}/> : `${label}`}
        </button>
    )
}
