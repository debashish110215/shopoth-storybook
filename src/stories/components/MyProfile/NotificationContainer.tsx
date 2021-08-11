import {useState} from 'react'
import NotificationMsg from './NotificationMsg';
import OrderDetails from './OrderDetails';

const NotificationContainer = () => {
    const [selectedOrderId, setSelectedOrderId] = useState(0)
    const [orderKey, setOrderKey] = useState('')

    return (
        <div>
            {
                selectedOrderId? 
                <OrderDetails 
                    setSelectedOrderId={setSelectedOrderId} 
                    setOrderKey={setOrderKey}
                    />
                :<NotificationMsg  setSelectedOrderId={setSelectedOrderId} 
                />
            }
        </div>
    )
}

export default NotificationContainer
