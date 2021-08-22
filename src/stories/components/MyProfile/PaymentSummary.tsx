import {FC, useState} from 'react'
import '../../styles/myProfile/paymentSummary.scss';
import {Payment} from './types';
import {BsPlus} from 'react-icons/bs'
import {HiOutlineMinusSm} from 'react-icons/hi'

interface PaymentSummaryProps{
    paymentSummary:Payment
}
const PaymentSummary:FC<PaymentSummaryProps> = ({paymentSummary}) => {
    const [showPaymentInfo, setShowPaymentInfo] = useState(false)

    const handleShowPaymentInfo = () =>{
        setShowPaymentInfo(!showPaymentInfo)
    }
    return (
        <div className='paymentSummaryWrapper'>
            <div className='paymentSummaryBtn' onClick={handleShowPaymentInfo}>
                <h4>Payment Summary</h4>
                <p>{showPaymentInfo? <HiOutlineMinusSm size={20}/>:<BsPlus size={20}/>}</p>
            </div>
            {
                showPaymentInfo && (
                    <div className='paymentSummary'>
                        <div className="pymentOperatorIconWrapper">
                            <img className='pymentOperatorIcon'  
                                src="./icons/bikashicon.svg" 
                                alt={`${paymentSummary.payment_key}`} 
                            />
                        </div>
                        <div className="paymentInfo">
                            TrxId: {paymentSummary.trxId}
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default PaymentSummary
