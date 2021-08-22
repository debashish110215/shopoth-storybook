import {FC} from 'react';

const gatewayList = [
    {id:1, gatewayIcon:'./icons/bikashicon.svg', title:'bkash'},
    {id:2, gatewayIcon:'./icons/nagad.svg', title:'nagad'},
    {id:3, gatewayIcon:'./icons/rocket.svg', title:'rocket'},
    {id:4, gatewayIcon:'./icons/visa.png', title:'visa'},
    {id:5, gatewayIcon:'./icons/master.svg', title:'master'},
]
interface PaymentGatewayProps{
    paymentOpt:string;
    paymentGateway:string;
    setPaymentGateway:(gateway:string) => void
}

const PaymentGateway:FC<PaymentGatewayProps> = ({ paymentOpt, paymentGateway, setPaymentGateway}) => {
    const showCheckbox = paymentOpt === 'online_payment'
    return (
        <div className='paymentGatewayWrapper'>
            <div className="paymentGatewayHeader">
                <h4>Choose payment gateway</h4>
            </div>
            <div className="gatewayList">
                {
                    gatewayList.map(item =>(
                        <div className={`gatewayItem ${paymentGateway === item.title && showCheckbox? 'selectedGateway':''}`} key={item.id} onClick={() => setPaymentGateway(item.title)}>
                            {
                                (showCheckbox && paymentGateway ===item.title) &&  (
                                    <input 
                                        type="checkbox" 
                                        className='gatewayCheckbox' 
                                        checked={item.title === paymentGateway}
                                    />
                                )
                            }
                           
                            <img className='gatewayImg' src={`${item.gatewayIcon}`} alt={`${item.title}`} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PaymentGateway
