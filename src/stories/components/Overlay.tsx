import React, { useRef, useEffect, useState } from "react";
import { ReactNode } from "react";
import '../styles/overlay.scss'

interface OverLayProps {
    onClose: () => void;
    children: ReactNode;
    show: boolean;
    allowScroll? : boolean;
}

export const Overlay = ({show = true, children, onClose, allowScroll = false}:OverLayProps) => { 
    useEffect(()=> {
        if (!allowScroll) {
            let classes = document.querySelector("body").classList
            classes.add("no-scroll")
        }
        return () => {
            let classes = document.querySelector("body").classList
            classes.remove("no-scroll")
        };
    })
    return (
        <React.Fragment >
            {
                show &&
                <div 
                    className="overlay" 
                    onClick={ (e) => { if (e.target === e.currentTarget) onClose() } }
                    >
                    {children}
                </div>
            }
        </React.Fragment>
        
    )
}