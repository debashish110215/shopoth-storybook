import {FC, useState} from 'react'
import PaymentGateway from './PaymentGateway';
import '../../styles/pickupPoints/paymentOption.scss';


interface PaymentOptionProps{
    paymentOpt:string;
    paymentGateway:string;
    setPaymentOpt:(payment:string) => void
    setPaymentGateway:(gateway:string) => void
}
const PaymentOption:FC<PaymentOptionProps> = ({paymentOpt, setPaymentOpt, paymentGateway, setPaymentGateway}) => {
    
    const handleChange = () =>{

    }
    return (
        <form action="">
            <div className='paymentOptionWrapper'>
                    <div className="deliveryAddressHeader">
                        <h2>Choose payment options</h2>
                    </div>
                    <div className="selectPaymentOption">
                        <div  
                            className={`cashOnPayment ${paymentOpt=== 'cash_on_payment'?'selectedPayment':''}`}
                            onClick={()=> setPaymentOpt('cash_on_payment')}
                        >
                            <label className="radioContainer ">
                                <input type="radio" className="formRadio" 
                                    id='cashOnDelivery'
                                    checked={paymentOpt === 'cash_on_payment'}
                                    onChange = {handleChange}
                                    />
                                <span className="checkmark"></span>
                                Cash On Delivery
                             </label>
                        </div>

                        <div className="onlinePaymentOpt" onClick={()=> setPaymentOpt('online_payment')}>
                            <div  
                                className={`${paymentOpt=== 'online_payment'?'onlinePayment':''}`}
                                
                            >
                                <label className="radioContainer ">
                                <input type="radio" className="formRadio" 
                                    id='onlineDelivery'
                                    checked={paymentOpt === 'online_payment'}
                                    onChange = {handleChange}
                                    />
                                <span className="checkmark"></span>
                                Online Delivery
                             </label>
                            </div>
                            <div className="selectPaymentGateway">
                                <PaymentGateway 
                                    paymentOpt = {paymentOpt}
                                    paymentGateway = {paymentGateway}
                                    setPaymentGateway={setPaymentGateway}
                                   />
                            </div>
                        </div>
                    </div>

                 
            </div>
        </form>
    )
}

export default PaymentOption
