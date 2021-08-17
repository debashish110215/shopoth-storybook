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
                <div className={`pickAndPlay ${checkout === 'pick_and_pay'? 'selectedDelivery':''}`}>
                    <input 
                        className='formControl' 
                        type="radio" 
                        value='pick_and_pay' 
                        id='pick_and_pay'
                        name='checkoutOption'
                        checked={checkout === 'pick_and_pay'}
                        onChange={(e) => setCheckout(e.target.value)} 
                    />
                    <label className='formLabel' htmlFor="pick_and_pay">Pick & Pay</label>
                    <span className='deliveryCharge'>No Charge</span>
                </div>
                <div className={`expressDelivery ${checkout === 'express_delivery'? 'selectedDelivery':''}`}>
                    <input 
                        className='formControl' 
                        type="radio" 
                        value='express_delivery' 
                        id='express_delivery'
                        name='checkoutOption'  
                        checked={checkout === 'express_delivery'}
                        onChange={(e) => setCheckout(e.target.value)}
                        />
                    <label  className='formLabel' htmlFor="express_delivery">Express Delivery</label>
                    <span className='deliveryCharge'>Charge: Tk 70</span>
                </div>
                <div className={`homeDelivery ${checkout === 'home_delivery'? 'selectedDelivery':''}`}>
                    <input 
                        className='formControl' 
                        type="radio" 
                        value='home_delivery' 
                        id='home_delivery'
                        name='checkoutOption'
                        checked={checkout === 'home_delivery'}
                        onChange={(e) => setCheckout(e.target.value)}
                        />
                    <label  className='formLabel' htmlFor="home_delivery">Home Delivery</label>
                    <span className='deliveryCharge'>Charge: Tk 70</span>
                </div>
            </div>
        </div>
    )
}

export default Checkout
