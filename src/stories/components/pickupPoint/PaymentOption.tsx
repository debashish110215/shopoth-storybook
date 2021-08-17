import PaymentGateway from './PaymentGateway';
import '../../styles/pickupPoints/paymentOption.scss';

const gatewayList = [
    {id:1, gatewayIcon:'./icons/bikashicon.svg', title:'Bikash'},
    {id:2, gatewayIcon:'./icons/nagad.svg', title:'nagad'},
    {id:3, gatewayIcon:'./icons/rocket.svg', title:'rocket'},
    {id:4, gatewayIcon:'./icons/visa.png', title:'visa'},
    {id:5, gatewayIcon:'./icons/master.svg', title:'master'},
]
const PaymentOption = () => {

 
    return (
        <form action="">
            <div className='paymentOptionWrapper'>
                    <div className="deliveryAddressHeader">
                        <h2>Choose payment options</h2>
                    </div>
                    <div className="selectPaymentOption">
                        <div className="cashOnDelivery">
                            <input type="radio" className="formRadio" id='cashOnDelivery' />
                            <label htmlFor="cashOnDelivery" className="radioLabel">
                                Cash On Delivery
                            </label>
                        </div>

                        <div className="onlinePayment">
                            <div className="onlineDelivery">
                                <input type="radio" className="formRadio" id='onlineDelivery' />
                                <label htmlFor="onlineDelivery" className="radioLabel">
                                    Online Delivery
                                </label>
                            </div>
                            <div className="selectPaymentGateway">
                                <PaymentGateway gatewayList={gatewayList}/>
                            </div>
                        </div>
                    </div>

                 
            </div>
        </form>
    )
}

export default PaymentOption
