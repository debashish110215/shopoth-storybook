import {FC} from 'react'
import '../../styles/myProfile/orderDetails.scss';
import Dotdotdot from 'react-dotdotdot';
import PaymentSummary from './PaymentSummary'
import ShippingDetails from './ShippingDetails';
import {SubmitButton} from '../SubmitButton';
import {CartButton} from '../CartButton'

const orderDetailsData = {
    orderId:'125874',
    orderedProductList:[
        { 
            id:1,
            imgUrl:'./shopoth/images/png/p3.png', 
            productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
            quantury:2,
            amount:3500,
            currency:'Tk',
            status:'completed',
            dateTime:'12-06-21, 10.21',
            deliveryId:'1256487',
        },
        { 
            id:2,
            imgUrl:'./shopoth/images/png/download.png', 
            productTitle:'Asus RT-AC1200 V2 Dual-Band Wifi Wireless Router', 
            quantury:1,
            amount:3500,
            currency:'Tk',
            status:'completed',
            dateTime:'12-06-21, 10.21',
            deliveryId:'1256487',
        },
        { 
            id:3,
            imgUrl:'./shopoth/images/png/G03.jpg', 
            productTitle:'Body Lotion for Dry Skin', 
            quantury:5,
            amount:3500,
            currency:'Tk',
            status:'completed',
            dateTime:'12-06-21, 10.21',
            deliveryId:'1256487',
        },
        
    ],
    paymentsummary:{
        trxId : '8F35WI0Y51',
        payment_key:'bikash'
    },
    shippingDetails:{
        recipentName:'Md.Mizanur Rahman',
        phone:'01521120115',
        address:
            {
                addressName:'Home Address', 
                addressLine:'23/2, Shah Paran', 
                thana:'Kahalu', 
                district:'Bogura'
            },
        
    }

};

const OrderDetails:FC = () => {
    return (
        <div className='orderDetailsWrapper'>
            <div className="backMyOrders">
                <button>Back</button>
            </div>
            <div className="orderDetailsHeader">
                <h4>Order Details</h4>
                <div className='flexGrow'></div>
                <div className="ordeReturn">
                    <SubmitButton label='Return' color='cart' outline={true}/>
                    <span className='orderReturnUntil'>Until 30/07/21</span>
                </div>
            </div>
            <div className="orderNum">
                    Order Number #{orderDetailsData.orderId}
                </div>
            {
                orderDetailsData.orderedProductList.length > 0 &&
                orderDetailsData.orderedProductList.map(item =>(
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
            <PaymentSummary paymentSummary={orderDetailsData.paymentsummary}/>
            </div>
            <div className="orderAddress">
            <ShippingDetails  shippingDetails={orderDetailsData.shippingDetails}/>
            </div>
            
        </div>
    )
}

export default OrderDetails
