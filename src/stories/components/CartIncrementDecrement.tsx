import {FC} from 'react'
import {DeleteOne} from '@icon-park/react'
import '../styles/cartIncrementDecrement.scss'
interface CartIncrementDecrementProps{
    productPrice:number;
    currency?:string;
    productCount:number;
    countTotalPrice:number
    onProductIncrement?:()=>void;
    onProductDecrement?:()=>void;
    onCartProductDelete:(id:number)=>void
}

export const CartIncrementDecrement:FC<CartIncrementDecrementProps> = ({
    productPrice,
    currency = 'Tk ',
    productCount = 0,
    countTotalPrice,
    onProductDecrement,
    onProductIncrement,
    onCartProductDelete
}) => {
    return (
        <div className='CartIncrementDecrementWrapper'>
            <div className="productPrice">
                {currency} {productPrice}
            </div>
            <div className="cartIncDec">
            <button className='actionBtn' onClick={onProductIncrement}> - </button>
            <span className='countTxt'>{productCount}</span>
            <button className='actionBtn' onClick={onProductDecrement}> + </button>
            </div>
            <div className='deleteProduct'>
                <DeleteOne  theme="outline" size="20" fill="#9E9E9E" onClick={()=>onCartProductDelete(1)}/>
            </div>
            <div className="totalPrice">
            {currency} {countTotalPrice}
            </div>
        </div>
    )
}

