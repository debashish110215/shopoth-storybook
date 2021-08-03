import {FC} from 'react'
import '../../styles/myProfile/orderDetails.scss';
import Dotdotdot from 'react-dotdotdot';
import {Address} from './PersonalInfoContainer';
import PaymentSummary from './PaymentSummary'
import ShippingDetails from './ShippingDetails'


export interface OrderedProduct{
    id:number;
    imgUrl:string;
    productTitle:string;
    quantury:number;
    amount:number;
    status:string;
    dateTime:string;
    currency?:string;
    deliveryId?:string;

}
export interface Payment{
    trxId:string;
    payment_key:string;
}

export interface Shipping{
    recipentName:string;
    phone:string;
    address:Address;

}

interface OrderDetailsProps{
    orderId:string;
    orderedProductList:Array<OrderedProduct>;
    paymentsummary:Payment;
    shippingDetails:Shipping;
}

const OrderDetails:FC<OrderDetailsProps> = ({
    orderId, 
    orderedProductList, 
    paymentsummary,
    shippingDetails
    }) => {
    return (
        <div className='orderDetailsWrapper'>
            <div className="orderDetailsHeader">
                <h4>Order Details</h4>
                <div className="orderNum">
                    Order Number #{orderId}
                </div>
            </div>
            {
                orderedProductList.length > 0 &&
                orderedProductList.map(item =>(
                    <div className="orderItem" key={item.id}>
                        <div className="orderItemImgWraper">
                            <img className='orderItemImg' src={`${item.imgUrl}`} alt={`${item.productTitle}`} />
                        </div>
                        <div className="OrderItemDes">
                            <Dotdotdot clamp={4}>
                                <h4>{item.productTitle}</h4>
                            </Dotdotdot>
                            <p>Quantity: {item.quantury}</p>
                            <p>{item.currency || 'Tk '}{item.amount}</p>
                            <p>Delivery ID : {item.deliveryId}</p>
                            <p>Status: {item.status === 'completed'? 'Completed':''}</p>
                        </div>
                    </div>
                ))
            }
            <div className="paymentDetails">
                <div className="paymentTitle">
                    <p>Sub Total</p>
                    <p>Delivery Charge</p>
                    <p>Vat</p>
                </div>
                <div className="paymentPay">
                    <p>Tk 8000</p>
                    <p>Tk 50</p>
                    <p>Tk 150</p>
                </div>
            </div>
            <div className="paymentTotal">
                    <h4>TOTAL</h4>
                    <h4>Tk 8200</h4>
                </div>
            <div className="orderPaymnet">
            <PaymentSummary paymentSummary={paymentsummary}/>
            </div>
            <div className="orderAddress">
            <ShippingDetails  shippingDetails={shippingDetails}/>
            </div>
            
        </div>
    )
}

export default OrderDetails
