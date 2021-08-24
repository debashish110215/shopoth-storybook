import React,{useState} from 'react';
import '../../styles/pickupPoints/pickup.scss';
import {SubmitButton, SubmitButtonState} from '../../components/SubmitButton';
import {CartButton} from '../../components/CartButton';
import Checkout from './Checkout';
import DeliveryAddress from './DeliveryAddress';
import PaymentOption from './PaymentOption';
import PickAndPay from './PickAndPay';

const Pickup = () => {

    const [checkout, setCheckout] = useState('home_delivery')
    const [deliveryAddress, setDeliveryAddress] = useState('home_address')
    const [paymentOpt, setPaymentOpt] = useState('online_payment')
    const [paymentGateway, setPaymentGateway] = useState('bkash')
    const [agreement, setAgreement] = useState(false)
    const [storeId, setStoreId] = useState('')

    console.log('agreement', agreement)

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
                        <PickAndPay storeId={storeId} setStoreId={setStoreId} />
                    </div>
                ):
                (
                    <>
                        <div className="deliveryAddress">
                            <DeliveryAddress deliveryAddress={deliveryAddress} setDeliveryAddress={setDeliveryAddress} />
                        </div>
                        <div className="paymentOption">
                            <PaymentOption 
                                paymentOpt = {paymentOpt} 
                                setPaymentOpt={setPaymentOpt}   
                                paymentGateway = {paymentGateway}
                                setPaymentGateway={setPaymentGateway}
                            />
                        </div>
                    </>
                )
            }
            <div className="agreement">
                <label className="checkContainer">
                    <input type="checkbox" id='agreement' onChange={() => setAgreement(!agreement)} />
                    <span className="checkmark"></span>
                    <span className="checkboxLabel">Agree with Terms & Conditions</span>
                </label>
           
            </div>
            <div className="paymentAction">
                <div className="placeOrder">
                    <SubmitButton label='Place Order' color='cart' state={ !agreement? SubmitButtonState.DISABLED:SubmitButtonState.NORMAL}/>
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
