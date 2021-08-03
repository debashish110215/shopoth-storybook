import {FC} from 'react';
import '../../styles/myProfile/myOrderContainer.scss';
import Tabs,{Tab} from "./MyOrderTabs";
import {MyOrder} from './MyOrder'

export interface Order{
    id:number;
    imgUrl:string;
    productTitle:string;
    orderId:string;
    amount:number;
    status:string;
    dateTime:string;
    returnDate?:string;
    currency?:string;
    deliveryID?:string;

}

interface MyOrderContainerProps{
    orderList:Array<Order>
}

const MyOrderContainer:FC<MyOrderContainerProps> = ({orderList}:MyOrderContainerProps) => {
    return (
        <div className='myOrderContWrapper'>
        <div className="myOrderContHeader">
            <h4>My Order</h4>
        </div>
            <Tabs>
                <Tab title="All">
                    <MyOrder orderList={orderList} oreder_key=''/>
                </Tab>
                <Tab title="Past Purchase">
                    <MyOrder orderList={orderList} oreder_key='past_purchase'/>
                </Tab>
                <Tab title="In Progress">
                    <MyOrder orderList={orderList} oreder_key='in_progress'/>
                </Tab>
                <Tab title="Completed">
                    <MyOrder orderList={orderList} oreder_key='completed'/>
                </Tab>
                <Tab title="Cancelled">
                    <MyOrder orderList={orderList} oreder_key='cancelled'/>
                </Tab>
                <Tab title="Return">
                    <MyOrder orderList={orderList} oreder_key='return'/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default MyOrderContainer
