import React, { useRef, useEffect, useState } from "react";
import '../styles/overlay.scss'

interface OverLayProps {
    onClose: () => void;
    children: React.ReactNode;
    show: boolean;
}

export const OverLay = ({show = true, children, onClose}:OverLayProps) => { 
    return (
        <React.Fragment >
            {
                show &&
                <div className="overlay" >
                    {children}
                </div>
            }
        </React.Fragment>
        
    )
}