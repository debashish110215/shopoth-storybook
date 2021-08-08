import {FC} from 'react';
import '../../styles/myProfile/myOrderContainer.scss';
import Tabs,{Tab} from "./MyOrderTabs";
import {MyOrders} from './MyOrders'
import {Order} from './MyProfilePage'


interface MyOrdersContainerProps{
    orderList:Array<Order>
}

const MyOrdersContainer:FC<MyOrdersContainerProps> = ({
        orderList
    }) => {
    return (
        <div className='myOrderContWrapper'>
        <div className="myOrderContHeader">
            <h4>My Orders</h4>
        </div>
            <Tabs>
                <Tab title="All">
                    <MyOrders orderList={orderList} oreder_key=''/>
                </Tab>
                <Tab title="Past Purchase">
                    <MyOrders orderList={orderList} oreder_key='past_purchase'/>
                </Tab>
                <Tab title="In Progress">
                    <MyOrders orderList={orderList} oreder_key='in_progress'/>
                </Tab>
                <Tab title="Completed">
                    <MyOrders orderList={orderList} oreder_key='completed'/>
                </Tab>
                <Tab title="Cancelled">
                    <MyOrders orderList={orderList} oreder_key='cancelled'/>
                </Tab>
                <Tab title="Return">
                    <MyOrders orderList={orderList} oreder_key='return'/>
                </Tab>
            </Tabs>
        </div>
    )
}

export default MyOrdersContainer
