import {useState} from 'react';
import TabContainer from './TabContainer';
import OrderDetails from './OrderDetails';
import ReturnOrderStepOne from './ReturnOrderStepOne';
import ReturnOrderStepTwo from './ReturnOrderStepTwo';


const MyOrdersContainer= () => {
    const [selectedOrderId, setSelectedOrderId] = useState(0)
    const [orderKey, setOrderKey] = useState('')

    const myOrderComponent = (orderKey:string)=>{
        switch (orderKey) {
            case 'order_details':
                return <OrderDetails setSelectedOrderId ={setSelectedOrderId} setOrderKey={setOrderKey}/>
                break;
                case 'return_order_one':
                return <ReturnOrderStepOne setSelectedOrderId ={setSelectedOrderId} setOrderKey={setOrderKey}/>
                break;
                case 'return_order_two':
                return <ReturnOrderStepTwo setOrderKey={setOrderKey}/>
                break;
            default:
                break;
        }
    }
    return (
        <>
            { 
                selectedOrderId? myOrderComponent(orderKey):
                    <TabContainer 
                        setSelectedOrderId={setSelectedOrderId}
                        setOrderKey = {setOrderKey}
                    />
            }
        </>
    )
}

export default MyOrdersContainer
