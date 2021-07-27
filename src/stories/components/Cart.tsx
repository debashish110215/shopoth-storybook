import {FC} from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Dotdotdot from 'react-dotdotdot'
import {CartButton} from './CartButton';
import {CartIncrementDecrement} from './CartIncrementDecrement'
import '../styles/cart.scss';

interface CartProps{
    productList:any[];
    currency?:string;
    onProductIncrement:(id:number)=>void;
    onProductDecrement:(id:number)=>void;
    onCartProductDelete:(id:number)=>void;
    clearAllProducts:()=>void;
    discount?:number;
    grandTotal:number
}
export const Cart:FC<CartProps> = ({
    productList, 
    currency='Tk', 
    discount = 0,
    grandTotal, 
    onProductIncrement, 
    onProductDecrement, 
    onCartProductDelete, 
    clearAllProducts
    }:CartProps) => {
    
    const currencyFormatter = (value:number) =>(
        new Intl.NumberFormat('en-IN').format(value)
    )
    return (
        <Router>
            <div className='search-product-list-wrapper'>
                <div className='cartHeader'>
                    <h4>Your Cart</h4>
                    <div>
                        <button className='btnClearAll' onClick={clearAllProducts}>Clear all</button>
                    </div>
                </div>
                {
                    productList.length > 0?(
                        <div className='showCartProducts'>
                        {
                            productList.map(product =>(
                                <div  className='search-product'  key={product.id}>
                                    <div className='product-img'>
                                        <img src={`${product.imgUrl}`} alt="product image" />
                                    </div>
                                    <div className='cart-product-title'>
                                        <Dotdotdot clamp={2}>
                                            <h4>{product.title}</h4>
                                        </Dotdotdot>
                                        <div className="cartAction">
                                            <CartIncrementDecrement 
                                                productId = {product.id}
                                                productCount={product.selectNoOfItems} 
                                                productPrice={product.price}
                                                countTotalPrice={product.totalPrice}
                                                onCartProductDelete={onCartProductDelete}
                                                onProductIncrement = {onProductIncrement}
                                                onProductDecrement = {onProductDecrement}
                                                />
                                        </div>
                                    </div>
                                </div>
                            
                            ))
                        }
                        </div>
                    ):(
                        <div className='filter-no-product-found'>
                            <p>"No Product Found"</p>
                        </div>
                    )
                }
                <div className='totalCalc'>
                    {
                        discount > 0 && (
                            <div className="discount">
                                <h4>Discount</h4>
                                <h4> {currency} {currencyFormatter(discount)}</h4>
                            </div>
                        )
                    }
                    <div className="grandTotal">
                        <h4>Total</h4>
                        <h4>{currency} {currencyFormatter(grandTotal)}</h4>
                    </div>
                </div>
                <div className='search-bottom-btn'>
                    <CartButton label='Procced to checkout'  color='cart'/>
                </div>
            </div>
        </Router>
        
    )
}

