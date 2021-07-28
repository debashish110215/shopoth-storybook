import {FC} from 'react'
import {ShoppingCartOne} from '@icon-park/react';
import '../styles/headerCartIcon.scss';

interface HeaderCartIconProps{
    onCartClick?:()=> void;
    selectTotalItems?:number;
    totalAmount:number;
}

export const HeaderCartIcon:FC<HeaderCartIconProps> = ({selectTotalItems = 0, totalAmount , onCartClick}:HeaderCartIconProps) => {
    
    const currencyFormatter = (value:number) =>(
        new Intl.NumberFormat('en-IN').format(value)
    )
    return (
        <div className='cartWrapper'>
            {
                selectTotalItems > 0 && (
                    <> 
                        <div className='cartCountCircle' onClick={onCartClick}>
                            <span className='cartCountText'>{selectTotalItems}</span>
                        </div>
                    </>
                )
            }

            <div className='cartIcon'>
                <ShoppingCartOne   theme="outline" size="26" fill="#333"/>
            </div>
            {
                selectTotalItems > 0 && (
                    <div className='takaIcon'>
                    <img className='takaIconImg' src="/icons/taka2.svg" alt="taka icon"   />
                    <span className='amountText'>{currencyFormatter(totalAmount)}</span>
                </div>
                )
            }
        </div>
    )
}


