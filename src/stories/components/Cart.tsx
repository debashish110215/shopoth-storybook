import {FC} from 'react';
import {Link, BrowserRouter as Router} from 'react-router-dom';
import {CartButton} from './CartButton';
import {CartIncrementDecrement} from './CartIncrementDecrement'
import '../styles/cart.scss';

interface CartProps{
    productList:any[];
    currency?:string;
    category_title?:string;
    search_key?:string;
    onSelectProduct:(id:number)=> void
}
export const Cart:FC<CartProps> = ({productList, category_title, currency='Tk', search_key, onSelectProduct}:CartProps) => {
    
    const onCartProductDelete= (id:number) =>{
        console.log(id)
    }
    return (
        <Router>
            <div className='search-product-list-wrapper'>
                <div className='cartHeader'>
                    <h4>Your Cart</h4>
                    <div>
                        <button className='btnClearAll'>Clear all</button>
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
                                        <h4>{product.title}</h4>
                                        <div className="cartAction">
                                            <CartIncrementDecrement 
                                                productCount={85} 
                                                productPrice={3600}
                                                countTotalPrice={70000}
                                                onCartProductDelete={onCartProductDelete}
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
                    <div className="discount">
                        <h4>Discount</h4>
                        <h4> {currency} 1000</h4>
                    </div>
                    <div className="grandTotal">
                        <h4>Total</h4>
                        <h4>{currency} 72002</h4>
                    </div>
                </div>
                <div className='cartOfferInfo'>
                    <ul>
                        <li><a href="#">10% Discount on Total Price</a></li>
                        <li><a href="#">FREE Shipping Vouchar</a></li>
                    </ul>
                </div>
                <div className='search-bottom-btn'>
                    <CartButton label='Procced to checkout'  color='cart'/>
                </div>
            </div>
        </Router>
        
    )
}

