import {FC} from 'react'
import {DeleteOne} from '@icon-park/react'
import '../styles/cartIncrementDecrement.scss';

interface CartIncrementDecrementProps{
    productId:number;
    productPrice:number;
    currency?:string;
    productCount:number;
    countTotalPrice:number
    onProductIncrement:(id:number)=>void;
    onProductDecrement:(id:number)=>void;
    onCartProductDelete:(id:number)=>void
}

export const CartIncrementDecrement:FC<CartIncrementDecrementProps> = ({
    productId,
    productPrice,
    currency = 'Tk ',
    productCount = 0,
    countTotalPrice,
    onProductDecrement,
    onProductIncrement,
    onCartProductDelete
}) => {

    const currencyFormatter = (value:number) =>(
        new Intl.NumberFormat('en-IN').format(value)
    )
    return (
        <div className='CartIncrementDecrementWrapper'>
            <div className="productPrice">
                {currency} {currencyFormatter(productPrice)}
            </div>
            <div className="cartIncDec">
            <button className='actionBtn' onClick={()=>onProductDecrement(productId)}> - </button>
            <span className='countTxt'>{productCount}</span>
            <button className='actionBtn' onClick={()=>onProductIncrement(productId)}> + </button>
            </div>
            <div className='deleteProduct'>
                <DeleteOne  theme="outline" size="20" fill="#9E9E9E" onClick={()=>onCartProductDelete(productId)}/>
            </div>
            <div className="totalPrice">
            {currency} {currencyFormatter(countTotalPrice)}
            </div>  
        </div>
    )
}

