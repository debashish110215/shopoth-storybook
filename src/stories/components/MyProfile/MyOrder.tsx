import {FC, useState, useEffect} from 'react';
import {CartButton} from '../CartButton';
import {Link, BrowserRouter as Router}  from 'react-router-dom';
import '../../styles/myProfile/myOrder.scss';
import {Order} from './MyOrderContainer'


interface MyOrderProps{
    orderList:Array<Order>;
    oreder_key:string;
}


export const MyOrder:FC<MyOrderProps> = ({orderList, oreder_key}) => {
    const [orderItemList, setOrderItemList] = useState<Order[]>([])

    useEffect(()=>{
        const orders = [...orderList]
        const items = orders.filter(item =>(
            item.status.includes(oreder_key)
        )) 
        setOrderItemList(items)
    },[oreder_key])
    return (
        <Router>
            <div className='myOrderWrapper'>
                {
                    orderItemList.length > 0 && 
                    orderItemList.map(order =>(
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
                                        <CartButton label='Order Details' color='cart' />
                                    </Link>
                                    <Link to='/' className="cancelOrder">
                                        <CartButton label='Cancel Order' outline={true} color='cart'/>
                                    </Link>
                                </div>
                            </div>
                            {
                                order.status === 'completed' &&
                                    (
                                        <div className="returnAction">
                                            <CartButton label='Return' outline={true} color='cart'/>
                                        </div>
                                    )
                            }
                        </div>
                    ))
                }
            </div>
        </Router>

    )
}


