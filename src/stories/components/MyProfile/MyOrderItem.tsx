import React from 'react'
import {CartButton} from '../CartButton';
import {Order} from './types'
import {Link, BrowserRouter as Router}  from 'react-router-dom';

interface MyOrderItemProps{
    order:Order;
    setSelectedOrderId:( id:number)=> void;
    setOrderKey:(order_key:string) => void
}

const MyOrderItem:React.FC<MyOrderItemProps> = ({order, setSelectedOrderId, setOrderKey}) => {

    const handleOrderDetails = () =>{
        setSelectedOrderId(order.id)
        setOrderKey('order_details')
    }
    const handleReturnOrders = () =>{
        setSelectedOrderId(order.id)
        setOrderKey('return_order_one') 
    }
    return (
        <Router>
        <div>
            <div className="orderItem">
                            <div className="orderInfo">
                                <div className="orderDes">
                                    <p className='orderId'>Order ID #{order.orderId}</p>
                                    <p>Amount : {order.amount}</p>
                                    <p>Status : {order.status ==='in_progress'?'In Progress'    
                                                :order.status === 'completed'? 'Completed'
                                                :order.status === 'cancelled'? 'Cancelled'
                                                :order.status === 'past_purchase'? 'Past Purchase'
                                                :order.status === 'return'? 'Return':''}</p>
                                    <p>Date & Time : {order.dateTime}</p>
                                </div>
                                <div className="orderAction">
                                    <Link to='/' className="orderDetails">
                                        <CartButton 
                                            label='Order Details' 
                                            color='cart' 
                                            onClick={handleOrderDetails} 
                                        />
                                    </Link>
                                    <Link to='/' className="cancelOrder">
                                        <CartButton 
                                            label='Cancel Order' 
                                            outline={true} 
                                            color='cart'
                                            onClick={handleOrderDetails} 
                                        />
                                    </Link>
                                </div>
                            </div>
                            {
                                order.status === 'completed' &&
                                    (
                                        <div className="returnAction">
                                            <CartButton 
                                                label='Return' 
                                                outline={true} 
                                                color='cart' 
                                                onClick={handleReturnOrders} 
                                            />
                                        </div>
                                    )
                            }
                        </div>
        </div>
        </Router>
    )
}

export default MyOrderItem
