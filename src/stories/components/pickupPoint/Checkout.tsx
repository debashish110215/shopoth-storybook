import React,{FC} from 'react';
import '../../styles/pickupPoints/checkout.scss';

interface  CheckoutProps{
    setCheckout:(check_key:string)=> void;
    checkout: string;
}
const Checkout:FC<CheckoutProps> = ({setCheckout, checkout}) => {
    return (
        <div className='checkoutWrapper'>
            <div className="checkoutHeader">
                <h2>Checkout</h2>
            </div>
            <div className="checkoutOption">
                <div 
                    className={`pickAndPlay ${checkout === 'pick_and_pay'? 'selectedDelivery':''}`}
                    onClick={() => setCheckout('pick_and_pay')} 
                >
                      <label className="radioContainer " htmlFor="pick_and_pay">
                                <input type="radio" className="formControl" 
                                   id='pick_and_pay'
                                   name='checkoutOption'
                                   checked={checkout === 'pick_and_pay'}
                                    />
                                <span className="checkmark"></span>
                                Pick & Pay
                             </label>
                    <span className='deliveryCharge'>No Charge</span>
                </div>
                <div 
                    className={`expressDelivery ${checkout === 'express_delivery'? 'selectedDelivery':''}`}
                    onClick={() => setCheckout('express_delivery')}

                >
                      <label className="radioContainer "  htmlFor="express_delivery">
                                <input type="radio" className="formControl" 
                                     id='express_delivery'
                                     name='checkoutOption'  
                                     checked={checkout === 'express_delivery'}
                                    />
                                <span className="checkmark"></span>
                                Express Delivery
                             </label>
                    <span className='deliveryCharge'>Charge: Tk 70</span>
                </div>
                <div 
                    className={`homeDelivery ${checkout === 'home_delivery'? 'selectedDelivery':''}`}
                    onClick={() => setCheckout('home_delivery')}
                >
                      <label className="radioContainer " htmlFor="home_delivery">
                                <input type="radio" className="formControl" 
                                    id='home_delivery'
                                    name='checkoutOption'
                                    checked={checkout === 'home_delivery'}
                                    />
                                <span className="checkmark"></span>
                                Home Delivery
                             </label>
                    <span className='deliveryCharge'>Charge: Tk 70</span>
                </div>
            </div>
        </div>
    )
}

export default Checkout
