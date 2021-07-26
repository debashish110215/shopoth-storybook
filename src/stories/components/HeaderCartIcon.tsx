import {FC} from 'react'
import {ShoppingCartOne} from '@icon-park/react';
import '../styles/headerCartIcon.scss';

interface HeaderCartIconProps{
    onCartClick?:()=> void;
    cartItemCount?:number;
    ItemTotalAmount?:number;
}

export const HeaderCartIcon:FC<HeaderCartIconProps> = ({cartItemCount = 0, ItemTotalAmount , onCartClick}:HeaderCartIconProps) => {
    return (
        <div className='cartWrapper'>
            {
                cartItemCount > 0 && (
                    <div> 
                    <div className='cartCountCircle'>
                        <span className='cartCountText'>{cartItemCount}</span>
                    </div>
                </div>
                )
            }

            <div className='cartIcon'>
                <ShoppingCartOne  onClick={onCartClick} theme="outline" size="26" fill="#333"/>
            </div>
            {
                cartItemCount > 0 && (
                    <div className='takaIcon'>
                    <img className='takaIconImg' src="/icons/taka.svg" alt="taka icon"   />
                    <span className='amountText'>{ItemTotalAmount}</span>
                </div>
                )
            }
           
        </div>
    )
}


