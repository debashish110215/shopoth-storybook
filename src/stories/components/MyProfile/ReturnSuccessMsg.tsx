import React,{useState} from 'react'
import { Overlay } from '../Overlay';
import {CartButton} from '../CartButton'
import {GrFormClose} from 'react-icons/gr'
import '../../styles/myProfile/returnSuccessMsg.scss';


interface ReturnTankYouProps{
    showMsgPopUp:boolean;
    setShowMsgPopUp:(value:boolean) => void 
}

const ReturnSuccessMsg:React.FC<ReturnTankYouProps> = ({showMsgPopUp, setShowMsgPopUp}) => {
    const onSuccess = () =>{
        
    }
    return (
        <Overlay show={showMsgPopUp} onClose={() =>setShowMsgPopUp(!showMsgPopUp)} children={

            <div className='msgPopupContainer'>
                <div className='successMsgWrapper' id='movePopup'>
                    <div className='closeBtn'>
                        <GrFormClose 
                            className='closeBtnIcon' 
                            onClick={()=>setShowMsgPopUp(!showMsgPopUp)}
                            size={24}
                        />
                    </div>
                    <div className="successMsgContent">
                        <h4>Thank You</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, adipisci error, quia ratione rerum sed nulla expedita labore laudantium maxime aspernatur doloribus temporibus sapiente at quo impedit nihil. Culpa, vel?</p>
                    </div>
                    <div className="okeyBtn">
                        <CartButton label='Okey' color='cart' onClick={onSuccess}/>
                    </div>
                </div>
            </div>
            
        }/>
    )
}

export default ReturnSuccessMsg