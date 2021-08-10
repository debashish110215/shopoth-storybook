import {FC, useState, useEffect} from 'react';
import {CartButton} from '../CartButton';
import '../../styles/myProfile/myOrder.scss';
import {Order} from './types'
import MyOrderItem from './MyOrderItem'


const orderList = [
    { 
        id:1,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:125874,
        amount:3500,
        status:'in_progress',
        dateTime:'12-06-21, 10.21'
    },
    { 
        id:2,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:125874,
        amount:3500,
        status:'completed',
        dateTime:'12-06-21, 10.21',
        returnDate:'30-07-21'
    },
    { 
        id:3,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:125874,
        amount:3500,
        status:'in_progress',
        dateTime:'12-06-21, 10.21'
    },
    { 
        id:4,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:125874,
        amount:3500,
        status:'in_progress',
        dateTime:'12-06-21, 10.21'
    },
    { 
        id:5,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:125874,
        amount:3500,
        status:'cancelled',
        dateTime:'12-06-21, 10.21'
    },
    { 
        id:6,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:125874,
        amount:3500,
        status:'cancelled',
        dateTime:'12-06-21, 10.21',
        returnDate:'30-07-21'
    },
    { 
        id:7,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:125874,
        amount:3500,
        status:'return',
        dateTime:'12-06-21, 10.21'
    },
    { 
        id:8,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:125874,
        amount:3500,
        status:'past_purchase',
        dateTime:'12-06-21, 10.21'
    },
    { 
        id:9,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:125874,
        amount:3500,
        status:'return',
        dateTime:'12-06-21, 10.21'
    },
    { 
        id:10,
        imgUrl:'./shopoth/images/png/p3.png', 
        productTitle:'Havit HV-139D 3.5mm Stereo Headphone Black (Double Port /Single Port)', 
        orderId:125874,
        amount:3500,
        status:'past_purchase',
        dateTime:'12-06-21, 10.21'
    },
]
interface MyOrdersProps{
    oreder_key:string;
    setSelectedOrderId:( id:number)=> void;
    setOrderKey:(order_key:string) => void

}


export const MyOrders:FC<MyOrdersProps> = ({ 
        oreder_key, 
        setSelectedOrderId, 
        setOrderKey
    }) => {
    const [orderItemList, setOrderItemList] = useState<Order[]>([])

    useEffect(()=>{
        const orders = [...orderList]
        const items = orders.filter(item =>(
            item.status.includes(oreder_key)
        )) 
        setOrderItemList(items)
    },[oreder_key])
    return (
            <div className='myOrderWrapper'>
                {
                    orderItemList.length > 0 && 
                    orderItemList.map((order, index )=>(
                        <MyOrderItem 
                            order={order}   
                            key={index} 
                            setSelectedOrderId={setSelectedOrderId}
                            setOrderKey = {setOrderKey}
                        />
                    ))
                }
            </div>
    )
}


