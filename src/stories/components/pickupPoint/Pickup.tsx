import React,{useState} from 'react';
import '../../styles/pickupPoints/pickup.scss';
import {SubmitButton} from '../../components/SubmitButton';
import {CartButton} from '../../components/CartButton';
import Checkout from './Checkout';
import DeliveryAddress from './DeliveryAddress';
import PaymentOption from './PaymentOption';
import PickAndPay from './PickAndPay';

const Pickup = () => {
    const [checkout, setCheckout] = useState('home_delivery')
    const [deliveryAddress, setDeliveryAddress] = useState('home_address')
    console.log('checkout', checkout)
    const handleClick = () =>{
    }
    return (
        <div className='pickupWrapper'>
            <div className="checkout">
                <Checkout  setCheckout={setCheckout} checkout = {checkout}/>
            </div>
            {
                checkout === 'pick_and_pay'?
                (
                    <div className="pickAndPaly">
                        <PickAndPay/>
                    </div>
                ):
                (
                    <>
                        <div className="deliveryAddress">
                            <DeliveryAddress deliveryAddress={deliveryAddress} setDeliveryAddress={setDeliveryAddress} />
                        </div>
                        <div className="paymentOption">
                            <PaymentOption/>
                        </div>
                    </>
                )
            }
            <div className="agreement">
                <input className='formCheckbox' type="checkbox" id='agreement' />
                <label htmlFor="agreement" className="checkboxLabel">Agree with Terms & Conditions</label>
            </div>
            <div className="paymentAction">
                <div className="placeOrder">
                    <SubmitButton label='Place Order' color='cart'/>
                </div>
                <div className="cartBtn">
                    <CartButton 
                        label='Continue shopping' 
                        outline={true} 
                        onClick={handleClick}
                        color='cart'
                    />
                </div>

            </div>
        </div>
    )
}

export default Pickup
