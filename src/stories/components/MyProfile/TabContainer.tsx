import {FC} from 'react'
import Tabs,{Tab} from "./MyOrderTabs";
import {MyOrders} from './MyOrders';
import '../../styles/myProfile/tabContainer.scss';


interface  TabContainerProps{
    setSelectedOrderId:(id:number) => void;
    setOrderKey:(order_key:string) => void
}
const TabContainer:FC<TabContainerProps> = ({setSelectedOrderId, setOrderKey }) => {
    return (
        <div className='tabContainerWrapper'>
        <div className="tabContainerHeader">
            <h4>My Orders</h4>
        </div>
            <Tabs>
                <Tab title="All">
                    <MyOrders 
                        oreder_key='' 
                        setSelectedOrderId = {setSelectedOrderId} 
                        setOrderKey = {setOrderKey}
                    />
                </Tab>
                <Tab title="Past Purchase">
                    <MyOrders 
                        oreder_key='past_purchase' 
                        setSelectedOrderId = {setSelectedOrderId}
                        setOrderKey = {setOrderKey}
                    />
                </Tab>
                <Tab title="In Progress">
                    <MyOrders 
                        oreder_key='in_progress'
                        setSelectedOrderId = {setSelectedOrderId}
                        setOrderKey = {setOrderKey}
                    />
                </Tab>
                <Tab title="Completed">
                    <MyOrders 
                        oreder_key='completed'
                        setSelectedOrderId = {setSelectedOrderId}
                        setOrderKey = {setOrderKey}
                    />
                </Tab>
                <Tab title="Cancelled">
                    <MyOrders 
                        oreder_key='cancelled'
                        setSelectedOrderId = {setSelectedOrderId}
                        setOrderKey = {setOrderKey}
                    />
                </Tab>
                <Tab title="Return">
                    <MyOrders 
                        oreder_key='return'
                        setSelectedOrderId = {setSelectedOrderId}
                        setOrderKey = {setOrderKey}
                    />
                </Tab>
            </Tabs>
        </div>
    )
}

export default TabContainer
