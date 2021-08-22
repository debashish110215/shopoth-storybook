import {FC, useState} from 'react'
import PaymentGateway from './PaymentGateway';
import '../../styles/pickupPoints/paymentOption.scss';


interface PaymentOptionProps{
    paymentOpt:string;
    setPaymentOpt:(payment:string) => void
}
const PaymentOption:FC<PaymentOptionProps> = ({paymentOpt, setPaymentOpt}) => {
    const [paymentGateway, setPaymentGateway] = useState('bkash')
    return (
        <form action="">
            <div className='paymentOptionWrapper'>
                    <div className="deliveryAddressHeader">
                        <h2>Choose payment options</h2>
                    </div>
                    <div className="selectPaymentOption">
                        <div  className={`cashOnPayment ${paymentOpt=== 'cash_on_payment'?'selectedPayment':''}`}>
                            <input 
                                type="radio" 
                                className="formRadio" 
                                id='cashOnDelivery'
                                value='cash_on_payment'
                                checked={paymentOpt === 'cash_on_payment'}
                                onChange={(e)=> setPaymentOpt(e.target.value)}
                                />
                            <label htmlFor="cashOnDelivery" className="radioLabel">
                                Cash On Delivery
                            </label>
                        </div>

                        <div className="onlinePaymentOpt">
                            <div  className={`${paymentOpt=== 'online_payment'?'onlinePayment':''}`}>
                                <input 
                                    type="radio" 
                                    className="formRadio" 
                                    id='onlineDelivery' 
                                    value='online_payment'
                                    checked={paymentOpt === 'online_payment'}
                                    onChange={(e)=> setPaymentOpt(e.target.value)}
                                    />
                                <label htmlFor="onlineDelivery" className="radioLabel">
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
