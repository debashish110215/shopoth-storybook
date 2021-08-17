import {FC} from 'react'

interface GatewayInfo{
    id:number;
    gatewayIcon:string;
    title:string;
}

interface PaymentGatewayProps{
    gatewayList:GatewayInfo[]
}

const PaymentGateway:FC<PaymentGatewayProps> = ({gatewayList}) => {
    return (
        <div className='paymentGatewayWrapper'>
            <div className="paymentGatewayHeader">
                <h4>Choose payment gateway</h4>
            </div>
            <div className="gatewayList">
                {
                    gatewayList.map(item =>(
                        <div className="gatewayItem" key={item.id}>
                            <input type="checkbox"  className='gatewayCheckbox'/>
                            <img className='gatewayImg' src={`${item.gatewayIcon}`} alt={`${item.title}`} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default PaymentGateway
